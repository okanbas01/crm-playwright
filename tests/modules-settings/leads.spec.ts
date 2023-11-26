import { test } from '@playwright/test';
import LoginPage, { baseURL } from '../../pageobjects/loginPage';
import values from '../../pageobjects/modules-settings/leads.utils';
import leadsSettingsPage from '../../pages/modules-settings/leads';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}/settings/modules/leads`);
  await page.waitForTimeout(2000);
});

test.only('Leads Statuses: Create New Lead Status', async ({ page }) => {
  const settings = new leadsSettingsPage(page);
  await settings.createNewLeadStatus();
  await settings.statusNameControlInFilter(values.nameText);
});
test.only('Leads Statuses: Edit Lead Status', async ({ page }) => {
  const settings = new leadsSettingsPage(page);
  await settings.editStatus();
  await settings.statusNameControlInFilter(values.editNameText);
});
test.only('Leads Statuses: Remove Lead Status', async ({ page }) => {
  const settings = new leadsSettingsPage(page);
  await settings.createNewLeadStatus();
  await settings.removeStatus();
  await settings.removedStatusControlInFilter(values.nameText);
});
test.only('Leads Statuses: Search Lead Status', async ({ page }) => {
  const settings = new leadsSettingsPage(page);
  await settings.createNewLeadStatus();
  await settings.searchLeadStatuses();
});
