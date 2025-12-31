# 04 - Tech Stack Decisions

**Document Purpose:** Explains tool choices and trade-offs

---

## Final Stack

- **Language:** Python 3.10+
- **UI Automation:** Playwright
- **API Testing:** Requests
- **Test Framework:** Pytest
- **CI/CD:** GitHub Actions
- **Reporting:** Built-in (Allure optional)

---

## Decision Matrix

| Tool | Alternatives Considered | Why Chosen |
|------|------------------------|------------|
| **Python** | Java, JavaScript | Single language for API & UI, easy to learn, SDET standard |
| **Playwright** | Selenium, Cypress | Auto-wait (less flaky), modern, cross-browser |
| **Requests** | REST Assured, httpx | Simple, powerful, industry standard |
| **Pytest** | unittest, TestNG | Fixtures (cleanup), parallel exec, clean syntax |
| **GitHub Actions** | Jenkins, Circle CI | Free, easy setup, Git-integrated |

---

## Why Python 3.10+

**Advantages:**
- ✅ Same language for both API and UI testing
- ✅ Rich ecosystem (Playwright, Requests, Pytest all have Python support)
- ✅ Easy to read and maintain
- ✅ Industry standard for SDET roles
- ✅ Strong typing support (type hints)

**Rejected Alternatives:**
- Java: More verbose, two languages if using JavaScript for UI
- JavaScript: Good for UI, awkward for API testing at scale

---

## Why Playwright (UI)

**Advantages:**
- ✅ **Auto-wait:** Automatically waits for elements (solves flakiness)
- ✅ **Modern:** Built for modern web apps
- ✅ **Fast:** Faster than Selenium
- ✅ **Cross-browser:** Chromium, Firefox, WebKit
- ✅ **Better debugging:** Screenshots, videos, trace viewer

**Rejected Alternatives:**
- Selenium: Requires manual waits (causes flaky tests)
- Cypress: JavaScript only, not ideal for API testing

---

## Why Requests (API)

**Advantages:**
- ✅ **Simple:** Clean, Pythonic API
- ✅ **Powerful:** Handles auth, sessions, retries
- ✅ **Well-documented:** Extensive community support
- ✅ **Flexible:** Works with any HTTP API

**Rejected Alternatives:**
- REST Assured: Java-based, adds language complexity
- httpx: Good but Requests is more established

---

## Why Pytest (Framework)

**Advantages:**
- ✅ **Fixtures:** Perfect for setup/teardown and cleanup
- ✅ **Parallel:** Built-in support for parallel execution
- ✅ **Assertions:** Simple assert statements (not special methods)
- ✅ **Plugins:** Rich ecosystem (pytest-xdist, pytest-html, etc.)
- ✅ **Markers:** Easy test categorization (@pytest.mark.smoke)

**Rejected Alternatives:**
- unittest: Less powerful, verbose syntax
- TestNG: Java-based

---

## Why GitHub Actions (CI/CD)

**Advantages:**
- ✅ **Free:** For public repos
- ✅ **Integrated:** Lives in same repo as code
- ✅ **Easy:** YAML configuration, extensive marketplace
- ✅ **Fast:** Good performance for test execution

**Rejected Alternatives:**
- Jenkins: Requires server setup, more complex
- CircleCI: Good but GitHub Actions is simpler

---

**Next Document:** [05_implementation_plan.md](05_implementation_plan.md) - How to build it
