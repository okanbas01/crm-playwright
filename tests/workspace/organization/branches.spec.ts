import { test } from '@playwright/test';
import LoginPage, { baseURL } from '../../../pageobjects/loginPage';
import BranchesPage from '../../../pages/workspace/organization/branches';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}/settings/workspace/organization/branches`);
  await page.waitForTimeout(2000);
});

test.only('Branch Page Check ', async ({ page }) => {
  const settings = new BranchesPage(page);
  await settings.branchesPageCheck();
});
test.only('Create Brach Cancel Buttons Control ', async ({ page }) => {
  const settings = new BranchesPage(page);
  await settings.addNewBranchCancelButtonControl();
});
test.only('Add New Branch ', async ({ page }) => {
  const settings = new BranchesPage(page);
  await settings.addNewBranch();
});
test.only('Add New Branch Detail Check ', async ({ page }) => {
  const settings = new BranchesPage(page);
  await settings.branchDetailCheck();
  await settings.branchDelete();
});
test.only('Edit Branch Check ', async ({ page }) => {
  const settings = new BranchesPage(page);
  await settings.addNewBranch();
  await settings.editBranch();
  await settings.branchDelete();
});
test.only('Branch Manager Change ', async ({ page }) => {
  const settings = new BranchesPage(page);
  await settings.addNewBranch();
  await settings.branchManagerChange();
  await settings.branchDelete();
});
test.only('Branch Manager Delete ', async ({ page }) => {
  const settings = new BranchesPage(page);
  await settings.addNewBranch();
  await settings.branchManagerDelete();
});
test.only('Branch Manager-Detail Delete ', async ({ page }) => {
  const settings = new BranchesPage(page);
  await settings.addNewBranch();
  await settings.branchManagerDetailDelete();
});
test.only('Branch Add Manager  ', async ({ page }) => {
  const settings = new BranchesPage(page);
  await settings.addNewBranch();
  await settings.branchManagerDelete();
  await settings.branchAddManager();
});
test.only('Delete Branch', async ({ page }) => {
  const settings = new BranchesPage(page);
  await settings.addNewBranch();
  await settings.branchDelete();
});
test.only('Branch Add Employee', async ({ page }) => {
  const settings = new BranchesPage(page);
  await settings.addNewBranch();
  await settings.branchAddEmployee();
  await settings.branchDelete();
});
// Delete Check
