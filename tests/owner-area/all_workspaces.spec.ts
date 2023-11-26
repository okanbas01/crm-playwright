import { test } from '@playwright/test';
import LoginPage, { baseURL } from '../../pageobjects/loginPage';
import allWorkspacesPage from '../../pages/owner-area/all_workspaces';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}`);
  await page.waitForTimeout(2000);
});

test.only('Create New Group', async ({ page }) => {
  const settings = new allWorkspacesPage(page);
  await settings.createNewGroup();
});
test.only('Edit Group', async ({ page }) => {
  const settings = new allWorkspacesPage(page);
  await settings.editGroup();
});
test.only('Current Workspace', async ({ page }) => {
  const settings = new allWorkspacesPage(page);
  await settings.currentWorkspace();
});
test.only('Maintenance Mode', async ({ page }) => {
  const settings = new allWorkspacesPage(page);
  await settings.maintenanceMode();
});
test.only('All Company Maintenance Mode', async ({ page }) => {
  const settings = new allWorkspacesPage(page);
  await settings.allCompanyMaintenanceMode();
});
test.only('Selected Company Maintenance Mode', async ({ page }) => {
  const settings = new allWorkspacesPage(page);
  await settings.selectedCompanyMaintenanceMode();
});
test.only('Create Workspace', async ({ page }) => {
  const settings = new allWorkspacesPage(page);
  await settings.createWorkspace();
});
test.only('Settings Workspaces', async ({ page }) => {
  const settings = new allWorkspacesPage(page);
  await settings.detailSettings();
});
test.only('Switch Workspaces', async ({ page }) => {
  const settings = new allWorkspacesPage(page);
  await settings.detailSwitchWorkspace();
});
test.only('Detail Maintenance Workspaces', async ({ page }) => {
  const settings = new allWorkspacesPage(page);
  await settings.detailMaintenanceWorkspace();
});
test.only('Detail Delete Workspaces', async ({ page }) => {
  const settings = new allWorkspacesPage(page);
  await settings.createWorkspace();
  await settings.deleteWorkspace();
});
