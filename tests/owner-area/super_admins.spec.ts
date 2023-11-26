import { test } from '@playwright/test';
import LoginPage, { baseURL } from '../../pageobjects/loginPage';
import superAdminsPage from '../../pages/owner-area/super_admins';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}`);
  await page.waitForTimeout(2000);
});

test.only('Create New Admin', async ({ page }) => {
  const settings = new superAdminsPage(page);
  await settings.createNewAdmin();
});
test.only('Edit Admin', async ({ page }) => {
  const settings = new superAdminsPage(page);
  await settings.editAdmin();
});
