# Hybrid UI + API Automation Framework — Playwright & TypeScript

A hybrid test automation framework built from scratch with **Playwright** and **TypeScript**. Instead of logging in through the UI, the framework authenticates through the **backend API**, reuses the session in the browser, and then runs UI tests on top of it — combining API speed with real end-to-end coverage.

![Playwright](https://img.shields.io/badge/Playwright-1.57-45ba4b?style=flat&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

## ✨ Key Features

- **API-based authentication** — the login is performed with a Playwright `request` POST (form data), the response is asserted (`302` redirect), and the **session ID is extracted from the `set-cookie` header** and injected into the browser context, so UI tests start already logged in.
- **Serial execution mode** — tests run with `test.describe.configure({ mode: 'serial' })` because the UI flow depends on the API login test completing first.
- **Page Object Model (POM)** — a `BasePage` with specialised pages (`FormPage`, `AboutPage`) keeps selectors and page behaviour out of the tests.
- **Custom fixtures** — an extended `test` object automatically provides ready-to-use page objects (`formPage`, `aboutPage`) to every test.
- **Data-driven** — URLs and login data live outside the code in `TestData/WebsiteData.json`.
- **Reusable utilities** — shared `Actions` and `Assertions` helper classes under `Utilties/`.
- **HTML reporting** — Playwright's built-in HTML reporter (`reporter: 'html'`).

## 📁 Project Structure

```
├── Fixture/
│   └── Fixture.ts            # Custom fixtures (formPage, aboutPage)
├── Pages/
│   ├── BasePage.ts
│   ├── FormPage.ts
│   └── AboutPage.ts
├── TestData/
│   └── WebsiteData.json      # URLs & login data
├── Utilties/
│   ├── Actions.ts            # Reusable UI actions
│   └── Assertions.ts         # Reusable assertions
├── tests/
│   └── example.spec.ts       # API login + UI test flow (serial)
├── playwright.config.ts
└── package.json
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install

# Run all tests
npx playwright test

# Open the HTML report
npx playwright show-report
```

## 🛠️ Tech Stack

| Tool | Purpose |
| --- | --- |
| Playwright Test (`@playwright/test` 1.57) | UI + API testing |
| TypeScript | Test code |
| Node.js | Runtime |
