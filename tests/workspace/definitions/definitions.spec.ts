import { test } from '@playwright/test';
import LoginPage, { baseURL } from '../../../pageobjects/loginPage';
import definitionsPage from '../../../pages/workspace/definitions/definitions';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}`);
  await page.waitForTimeout(2000);
});

test.only('Enable Currency', async ({ page }) => {
  const settings = new definitionsPage(page);
  await settings.manageCurrency('enable');
});

test.only('Disable Currency', async ({ page }) => {
  const settings = new definitionsPage(page);
  await settings.manageCurrency('disable');
});
test.only('Enable  Filter Currency', async ({ page }) => {
  const settings = new definitionsPage(page);
  await settings.manageFilterCurrency('enable');
});

test.only('Disable Filter Currency', async ({ page }) => {
  const settings = new definitionsPage(page);
  await settings.manageFilterCurrency('disable');
});
