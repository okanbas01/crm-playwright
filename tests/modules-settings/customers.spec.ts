import { test } from '@playwright/test';
import LoginPage, { baseURL } from '../../pageobjects/loginPage';
import values from '../../pageobjects/modules-settings/customers.utils';
import customersSettingsPage from '../../pages/modules-settings/customers';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}/settings/modules/customers`);
  await page.waitForTimeout(2000);
});

test.only('Customers Statuses: Create New Customer Status', async ({
  page,
}) => {
  const settings = new customersSettingsPage(page);
  await settings.createNewCustomerStatus();
  await settings.statusNameControlInFilter(values.nameText);
});
test.only('Customers Statuses: Edit Customer Status', async ({ page }) => {
  const settings = new customersSettingsPage(page);
  await settings.editStatus();
  await settings.statusNameControlInFilter(values.editNameText);
});
test.only('Customers Statuses: Remove Customer Status', async ({ page }) => {
  const settings = new customersSettingsPage(page);
  await settings.createNewCustomerStatus();
  await settings.removeStatus();
  await settings.removedStatusControlInFilter(values.nameText);
});
test.only('Customers Statuses: Search Customer Status', async ({ page }) => {
  const settings = new customersSettingsPage(page);
  await settings.createNewCustomerStatus();
  await settings.searchCustomerStatuses();
});
test.only('Custom Fields: Create New Custom Field', async ({ page }) => {
  const settings = new customersSettingsPage(page);
  await settings.createNewCustomFields();
});
test.only('Custom Fields: Edit Custom Field', async ({ page }) => {
  const settings = new customersSettingsPage(page);
  await settings.editCustomFields();
});
test.only('Custom Fields: Remove Custom Field', async ({ page }) => {
  const settings = new customersSettingsPage(page);
  await settings.createNewCustomFields();
  await settings.removeCustomFields();
});
test.only('Custom Fields: Search Custom Field', async ({ page }) => {
  const settings = new customersSettingsPage(page);
  await settings.createNewCustomFields();
  await settings.searchCustomField();
});
