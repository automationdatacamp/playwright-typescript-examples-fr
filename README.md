# playwright-typescript-examples-fr

Exemples Playwright + TypeScript : Page Object Model et GitHub Actions. Compagnon du cours AutomationDataCamp.

## Prérequis

- Node.js 20 ou plus récent

## Installation

```bash
npm ci
npx playwright install chromium
```

## Lancer les tests

```bash
npx playwright test          # tous les tests
npx playwright test --ui     # mode interactif
npx playwright show-report   # rapport HTML
```

## Structure du dépôt

```
pages/TodoPage.ts               Page Object de l'application TodoMVC
tests/todomvc.spec.ts           3 tests utilisant le Page Object
tests/playwright-site.spec.ts   2 tests simples sur playwright.dev
playwright.config.ts            configuration (Chromium, rapport HTML)
.github/workflows/playwright.yml  exécution automatique sur GitHub Actions
```

Les tests s'exécutent sur des sites de démonstration publics ([playwright.dev](https://playwright.dev) et [demo.playwright.dev/todomvc](https://demo.playwright.dev/todomvc)).

## Aller plus loin

Ces exemples illustrent les modules 2 à 4 de la [formation Playwright en ligne d'AutomationDataCamp](https://www.automationdatacamp.com/formation-playwright-certifiante). Pour une reconversion complète, découvrez la [formation de reconversion testeur QA](https://www.automationdatacamp.com/formation-qa-adc). Cours gratuit en PDF : [mini-cours Playwright](https://www.automationdatacamp.com/mini-cours-gratuit).

## Licence

MIT, voir [LICENSE](LICENSE).
