import { expect, type Locator, type Page } from '@playwright/test';

/** Page Object pour l'application de démo TodoMVC. */
export class TodoPage {
  readonly page: Page;
  readonly newTodo: Locator;
  readonly items: Locator;
  readonly counter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodo = page.getByPlaceholder('What needs to be done?');
    this.items = page.getByTestId('todo-item');
    this.counter = page.getByTestId('todo-count');
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(text: string) {
    await this.newTodo.fill(text);
    await this.newTodo.press('Enter');
  }

  async complete(text: string) {
    await this.items.filter({ hasText: text }).getByRole('checkbox').check();
  }

  async remove(text: string) {
    const item = this.items.filter({ hasText: text });
    await item.hover();
    await item.getByRole('button', { name: 'Delete' }).click();
  }

  async expectTodos(texts: string[]) {
    await expect(this.items).toHaveText(texts);
  }
}
