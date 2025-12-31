# 03 - Architecture Design

**Document Purpose:** Complete technical architecture showing how the solution works

---

## High-Level Architecture Diagram

```
┌──────────────────────────────────────────────┐
│     Production-Grade Test Framework          │
└──────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  Layer 1: Authentication Manager (Singleton)    │
│  ┌─────────┐ ┌──────────┐ ┌─────────┐         │
│  │ Admin   │ │ Editor   │ │ Viewer  │         │
│  │ Token   │ │ Token    │ │ Token   │         │
│  └─────────┘ └──────────┘ └─────────┘         │
└───────────────────┬─────────────────────────────┘
                    │
      ┌─────────────┼─────────────┐
      │             │             │
┌─────▼──────┐ ┌────▼─────┐ ┌────▼─────────┐
│ Layer 2A:  │ │ Layer 2B:│ │ Layer 2C:    │
│ API Client │ │ UI Pages │ │ Hybrid Tests │
│ (Requests) │ │(Playwrt) │ │(API+UI)      │
│            │ │          │ │              │
│• Auth API  │ │• Login   │ │• API Setup   │
│• CRUD API  │ │• Items   │ │• UI Validate │
│• Search    │ │ List     │ │• Permission  │
│            │ │• Create  │ │  Check       │
└─────┬──────┘ └────┬─────┘ └────┬─────────┘
      │             │             │
      └─────────────┼─────────────┘
                    │
         ┌──────────▼──────────┐
         │ Layer 3: Data       │
         │ Factory + Cleanup   │
         │ (Pytest Fixtures)   │
         │                     │
         │• Unique data/test   │
         │• Auto-cleanup       │
         │• Parallel-safe      │
         └─────────────────────┘
```

---

## Layer 1: Authentication Manager

### Purpose
Efficient token management across all user roles to prevent authentication bottlenecks

### Design Pattern
**Singleton Pattern** - Single instance manages all authentication tokens

### Implementation Concept
```python
class AuthManager:
    _instance = None
    _tokens = {}  # {role: token}
    
    @classmethod
    def get_instance(cls):
        if not cls._instance:
            cls._instance = cls()
        return cls._instance
    
    def get_token(self, role: str) -> str:
        """Get cached token or authenticate"""
        if role not in self._tokens:
            self._tokens[role] = self._authenticate(role)
        return self._tokens[role]
    
    def _authenticate(self, role: str) -> str:
        """Call login API, return token"""
        # Implementation details
```

### Why This Solves Problem 4 (Token Management)
- ✅ Tokens reused across tests (no re-authentication overhead)
- ✅ Thread-safe for parallel execution
- ✅ Single source of truth for credentials
- ✅ Easy to refresh expired tokens

---

## Layer 2A: API Client

### Purpose
Fast, reliable API operations for test data setup and validation

### Technology
Python + Requests library

### Implementation Concept
```python
class APIClient:
    def __init__(self, base_url, auth_manager):
        self.base_url = base_url
        self.auth_manager = auth_manager
    
    def create_item(self, role, item_data):
        token = self.auth_manager.get_token(role)
        response = requests.post(
            f"{self.base_url}/items",
            json=item_data,
            headers={"Authorization": f"Bearer {token}"}
        )
        return response.json()
    
    def delete_item(self, role, item_id):
        token = self.auth_manager.get_token(role)
        response = requests.delete(
            f"{self.base_url}/items/{item_id}",
            headers={"Authorization": f"Bearer {token}"}
        )
        return response.status_code == 200
```

### Why This Solves Problem 3 (API/UI Duplication)
- ✅ Use API for fast setup instead of UI clicks
- ✅ Use API for cleanup (faster than UI)
- ✅ API assertions for backend logic, UI for user experience

---

## Layer 2B: UI Pages (Playwright)

### Purpose
User journey validation and visual verification

### Design Pattern
**Component-Based Page Object Model**

Components are reusable (LoginForm, ItemList)
Pages compose components

### Implementation Concept
```python
# Component (reusable)
class LoginForm:
    def __init__(self, page):
        self.page = page
        self.email_input = page.locator("#email")
        self.password_input = page.locator("#password")
        self.submit_btn = page.locator("button[type='submit']")
    
    def login(self, email, password):
        self.email_input.fill(email)
        self.password_input.fill(password)
        self.submit_btn.click()

# Page (uses components)
class ItemsPage:
    def __init__(self, page, auth_manager):
        self.page = page
        self.login_form = LoginForm(page)
        self.auth_manager = auth_manager
    
    def navigate_as_role(self, role):
        token = self.auth_manager.get_token(role)
        # Set token in browser storage or use cookie
        self.page.goto("/items")
```

### Why This Solves Problem 5 (Maintainability)
- ✅ Components prevent "giant page class"
- ✅ One change updates everywhere component is used
- ✅ No code duplication across pages

### Why This Solves Problem 2 (Flaky Tests)
- ✅ Playwright auto-waits for elements
- ✅ Built-in retry mechanisms
- ✅ No manual `time.sleep()` needed

---

## Layer 2C: Hybrid Tests

### Purpose
Combine speed of API with validation of UI

### Pattern
**API for Setup → UI for Validation → API for Cleanup**

### Example Flow
```python
@pytest.fixture
def test_item(api_client, cleanup_manager):
    # FAST: Create via API
    item = api_client.create_item(
        role="admin",
        item_data={"name": f"test-{unique_id()}"}
    )
    
    # Register for cleanup
    cleanup_manager.register_item(item['id'])
    
    return item

def test_item_visible_to_viewer(test_item, items_page):
    # NECESSARY: Validate UI shows it
    items_page.navigate_as_role("viewer")
    assert items_page.is_item_visible(test_item['name'])
    
    # FAST: Cleanup happens via API fixture
```

---

## Layer 3: Data Factory + Cleanup

### Purpose
Ensure test isolation through unique data and automatic cleanup

### Design Pattern
**Factory Pattern + Pytest Fixtures**

### Implementation Concept
```python
import uuid
from datetime import datetime

def unique_id():
    """Generate unique identifier"""
    return f"{datetime.now().strftime('%Y%m%d%H%M%S')}_{uuid.uuid4().hex[:8]}"

class CleanupManager:
    def __init__(self, api_client):
        self.api_client = api_client
        self.items_to_delete = []
    
    def register_item(self, item_id):
        self.items_to_delete.append(item_id)
    
    def cleanup(self):
        for item_id in self.items_to_delete:
            try:
                self.api_client.delete_item("admin", item_id)
            except:
                pass  # Best effort cleanup

@pytest.fixture
def cleanup_manager(api_client):
    manager = CleanupManager(api_client)
    yield manager
    manager.cleanup()  # Runs after test
```

### Why This Solves Problem 1 (Test Data Chaos)
- ✅ Every test gets unique data (no name conflicts)
- ✅ Automatic cleanup (no manual intervention)
- ✅ Safe parallel execution (no shared data)

---

## How Layers Work Together

### Example: Testing "Delete Permission"

**Test Goal:** Verify Admin can delete, Viewer cannot

**Flow:**
```
1. Auth Manager provides Admin token
2. API Client creates test item (fast)
3. Cleanup Manager registers item for deletion
4. UI navigates as Admin role (using token from Auth Manager)
5. UI verifies delete button visible
6. UI clicks delete
7. API verifies item deleted (fast check)
8. Test repeats for Viewer role (button should NOT be visible)
9. Cleanup Manager deletes any remaining data
```

**Benefits:**
- Fast (API for setup/cleanup)
- Reliable (Playwright waits, isolated data)
- Maintainable (reusable components)
- No token bottleneck (Auth Manager)
- Safe parallel (unique data)

---

## Folder Structure

```
framework/
├── config/
│   └── settings.py          # Base URLs, credentials
├── core/
│   ├── auth_manager.py      # Layer 1
│   ├── api_client.py        # Layer 2A
│   └── data_factory.py      # Layer 3
├── pages/
│   ├── components/
│   │   ├── login_form.py
│   │   └── item_list.py
│   └── items_page.py        # Layer 2B
├── tests/
│   ├── api/
│   │   └── test_items_api.py
│   ├── ui/
│   │   └── test_items_ui.py
│   └── hybrid/
│       └── test_permissions.py  # Layer 2C
└── pytest.ini               # Pytest configuration
```

---

## Technical Stack Implementation

- **Python 3.10+**
- **Playwright** for UI automation
- **Requests** for API calls
- **Pytest** for test framework
- **GitHub Actions** for CI/CD

---

**Next Document:** [04_tech_stack_decisions.md](04_tech_stack_decisions.md) - Why each tool was chosen
