import { test, expect, type Page } from '@playwright/test';
import { baseURL } from '../pageobjects/loginPage';
import LoginPage from '../pageobjects/loginPage';
import TasksPage from '../pages/task';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}tasks`);
  await page.waitForTimeout(2000);
});

test('Add Tasks Check', async ({ page }) => {
  const teams = new TasksPage(page);
  await teams.tasksPageCheck();
});
test('New Task Cancel Button Control', async ({ page }) => {
  const department = new TasksPage(page);
  await department.addNewTaskCancelButtonControl();
});
test('Add Tasks Invalid Cases', async ({ page }) => {
  const teams = new TasksPage(page);
  await teams.addNewTaskInvalidCases();
});
test('New Task Create', async ({ page }) => {
  const department = new TasksPage(page);
  await department.addNewTask();
});

test('Add Comment', async ({ page }) => {
  const department = new TasksPage(page);
  await department.addComment();
});
