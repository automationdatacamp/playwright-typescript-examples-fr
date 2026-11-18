import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test.describe('TodoMVC avec Page Object', () => {
  let todo: TodoPage;

  test.beforeEach(async ({ page }) => {
    todo = new TodoPage(page);
    await todo.goto();
  });

  test('ajoute deux tâches', async () => {
    await todo.addTodo('Apprendre Playwright');
    await todo.addTodo('Écrire un test');
    await todo.expectTodos(['Apprendre Playwright', 'Écrire un test']);
    await expect(todo.counter).toContainText('2');
  });

  test('termine une tâche', async () => {
    await todo.addTodo('Apprendre Playwright');
    await todo.addTodo('Écrire un test');
    await todo.complete('Apprendre Playwright');
    await expect(todo.counter).toContainText('1');
  });

  test('supprime une tâche', async () => {
    await todo.addTodo('Tâche à supprimer');
    await todo.remove('Tâche à supprimer');
    await expect(todo.items).toHaveCount(0);
  });
});
