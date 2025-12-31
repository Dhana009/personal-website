# 05 - Implementation Plan

**Document Purpose:** Step-by-step build plan with time estimates

---

## Time Estimate: 58-76 Focused Hours

**Breakdown by Phase:**

| Phase | Focus | Hours |
|-------|-------|-------|
| Phase 1 | Foundation (Auth + API + Data) | 16-20 |
| Phase 2 | UI Layer (Playwright + Components) | 18-24 |
| Phase 3 | Integration (Hybrid Tests) | 14-18 |
| Phase 4 | Production (CI/CD + Docs) | 10-14 |
| **Total** | | **58-76** |

---

## Phase 1: Foundation (16-20 hours)

**Goal:** Build core layers that everything else depends on

### Step 1.1: Project Setup (2 hours)
- Create folder structure
- Setup virtual environment
- Install dependencies (playwright, requests, pytest)
- Create `pytest.ini` configuration
- Initialize Git repo

### Step 1.2: Authentication Manager (4-5 hours)
- Implement Singleton pattern
- Add login API integration
- Token caching for all 3 roles
- Token refresh logic
- Unit tests for Auth Manager

### Step 1.3: API Client (6-8 hours)
- Base APIClient class
- CRUD operations (Create, Read, Update, Delete)
- Search functionality
- Error handling
- Integration with Auth Manager
- API tests for all endpoints

### Step 1.4: Data Factory + Cleanup (4-5 hours)
- Unique ID generation
- CleanupManager class
- Pytest fixtures for data lifecycle
- Test data factory functions
- Verify parallel safety

**Deliverable:** Working API layer with auth and cleanup

---

## Phase 2: UI Layer (18-24 hours)

**Goal:** Component-based Playwright automation

### Step 2.1: Playwright Setup (4-6 hours)
- Install Playwright browsers
- Create base Page class
- Browser fixture configuration
- Screenshot/video on failure
- First simple page object (LoginPage)

### Step 2.2: Component Architecture (8-10 hours)
- LoginForm component
- ItemList component
- CreateItem form component
- DeleteConfirmation component
- SearchBar component
- Reusable assertion helpers

### Step 2.3: Role-Aware Pages (6-8 hours)
- ItemsPage with role context
- Permission-based element visibility
- Role integration with Auth Manager
- Cookie/token injection for authenticated sessions
- UI tests for happy paths

**Deliverable:** Component-based UI automation working

---

## Phase 3: Integration (14-18 hours)

**Goal:** Hybrid tests demonstrating cross-layer coordination

### Step 3.1: Hybrid Test Scenarios (8-10 hours)
- API setup + UI validation pattern
- Permission tests (Admin/Editor/Viewer)
- CRUD workflow tests
- Activity log verification
- Search + filter tests

### Step 3.2: Cross-Layer Validation (6-8 hours)
- API creates → UI verifies
- UI action → API validates
- Role permission matrix tests
- Edge case coverage
- Error scenario handling

**Deliverable:** Full test suite demonstrating all 5 solutions

---

## Phase 4: Production Ready (10-14 hours)

**Goal:** Polish for interviews and production use

### Step 4.1: Parallel Execution (3-4 hours)
- Configure pytest-xdist
- Verify test isolation
- Fix any parallel conflicts
- Performance benchmarking

### Step 4.2: CI/CD Setup (3-4 hours)
- GitHub Actions workflow
- Run tests on push
- Generate test reports
- Badge for README

### Step 4.3: Documentation (4-6 hours)
- Comprehensive README
- Architecture diagrams
- Setup instructions
- Code comments
- Demo video recording

**Deliverable:** Production-ready framework

---

## Daily Schedule Options

### Option A: 5-Day Sprint (12-15 hrs/day)
- Day 1: Phase 1 complete
- Day 2: Phase 2 Steps 2.1-2.2
- Day 3: Phase 2 Step 2.3 + Phase 3 Start
- Day 4: Phase 3 complete
- Day 5: Phase 4 complete

### Option B: 7-Day Sustainable (10-12 hrs/day)
- Days 1-2: Phase 1
- Days 3-4: Phase 2
- Days 5-6: Phase 3
- Day 7: Phase 4

### Option C: 10-Day Balanced (6-8 hrs/day)
- Days 1-3: Phase 1
- Days 4-6: Phase 2
- Days 7-8: Phase 3
- Days 9-10: Phase 4

---

## Implementation Order (Critical Path)

**Must do in this order:**

1. Auth Manager FIRST (everything depends on it)
2. API Client (needed for data setup)
3. Data Factory (needed for test isolation)
4. Basic Playwright setup
5. Components (building blocks)
6. Pages (use components)
7. Hybrid tests (use everything)
8. CI/CD (needs working tests)

**Cannot skip or reorder**

---

## Checkpoints

**After Phase 1:**
- ✅ Can authenticate as any role
- ✅ Can create/delete items via API
- ✅ Tests cleanup automatically

**After Phase 2:**
- ✅ Can navigate UI as any role
- ✅ Components are reusable
- ✅ UI tests pass reliably

**After Phase 3:**
- ✅ Hybrid tests demonstrate all 5 solutions
- ✅ Permission testing works
- ✅ Activity log validation works

**After Phase 4:**
- ✅ Tests run in CI/CD
- ✅ Documentation complete
- ✅ Ready to present in interviews

---

**Next Document:** [06_interview_strategy.md](06_interview_strategy.md) - How to present this
