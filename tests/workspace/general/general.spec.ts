import { test } from '@playwright/test';
import LoginPage, { baseURL } from '../../../pageobjects/loginPage';
import generalPage from '../../../pages/workspace/general/general';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}/settings/workspace/general`);
  await page.waitForTimeout(2000);
});

test.only('Workspace General, Edit', async ({ page }) => {
  const settings = new generalPage(page);
  await settings.editCompany();
});
