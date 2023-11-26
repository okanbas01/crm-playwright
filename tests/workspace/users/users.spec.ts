import { test } from '@playwright/test';
import LoginPage, { baseURL } from '../../../pageobjects/loginPage';
import usersPage from '../../../pages/workspace/users/users';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}`);
  await page.waitForTimeout(2000);
});

test.only('Create New User', async ({ page }) => {
  const settings = new usersPage(page);
  await settings.createNewUser();
});
test.only('Edit User', async ({ page }) => {
  const settings = new usersPage(page);
  await settings.editUser();
});
test.only('Impersonate User', async ({ page }) => {
  const settings = new usersPage(page);
  await settings.impersonateUser();
});
test.only('Change Password', async ({ page }) => {
  const settings = new usersPage(page);
  await settings.createNewUser();
  await settings.changePassword();
});
test.only('Ban User', async ({ page }) => {
  const settings = new usersPage(page);
  await settings.createNewUser();
  await settings.banUser();
});
