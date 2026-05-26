# parabank-sdet

Playwright + TypeScript UI automation framework for the Parabank demo application.

## Tech stack

- Playwright Test
- TypeScript
- Page Object Model
- GitHub Actions (CI/CD)

## Project structure

- `pages/` – Page Objects (e.g. `LoginPage`)
- `tests/` – Test specs
- `utils/` – Helpers and utilities
- `fixtures/` – Test data and custom fixtures
- `playwright.config.ts` – Playwright configuration
- `tsconfig.json` – TypeScript configuration

## How to Run

```bash
Install dependencies:
npm install
Install browsers:
npx playwright install
Run all tests:
npx playwright test
View HTML report:
npx playwright show-report
