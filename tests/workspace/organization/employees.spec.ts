import { test } from '@playwright/test';
import LoginPage, { baseURL } from '../../../pageobjects/loginPage';
import EmployeesPage from '../../../pages/workspace/organization/employees';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}/settings/workspace/organization/employees`);
  await page.waitForTimeout(2000);
});
test.only('Employees Page Check ', async ({ page }) => {
  const settings = new EmployeesPage(page);
  await settings.jobTitleAndEmployeesPageCheck();
});
test.only('Create Job Title Cancel Button Control ', async ({ page }) => {
  const settings = new EmployeesPage(page);
  await settings.createJobTitleCancelButtonControl();
});
test.only('Create New Job Title', async ({ page }) => {
  const settings = new EmployeesPage(page);
  await settings.createNewJobTitle();
  await settings.deleteJobTitle();
});
test.only('Edit Job Title ', async ({ page }) => {
  const settings = new EmployeesPage(page);
  await settings.createNewJobTitle();
  await settings.editJobTitle();
  await settings.deleteJobTitle();
});
test.only('Delete Job Title', async ({ page }) => {
  const settings = new EmployeesPage(page);
  await settings.createNewJobTitle();
  await settings.deleteJobTitleCheck();
});
test.only('Create New Employee Cancel Button Control', async ({ page }) => {
  const settings = new EmployeesPage(page);
  await settings.createNewEmployeeCancelButtonControl();
});
test.only('Create New Employee', async ({ page }) => {
  const settings = new EmployeesPage(page);
  await settings.createNewEmployee();
  await settings.deleteEmployee();
});
test.only('Create New Employee Detail Check', async ({ page }) => {
  const settings = new EmployeesPage(page);
  await settings.employeeDetailCheck();
});
test.only('Edit Employee', async ({ page }) => {
  const settings = new EmployeesPage(page);
  await settings.createNewEmployee();
  await settings.editEmployee();
  await settings.deleteEmployee();
});
test.only('Edit Employee Button Control', async ({ page }) => {
  const settings = new EmployeesPage(page);
  await settings.createNewEmployee();
  await settings.editEmployeeButtonControl();
  await settings.deleteEmployee();
});
test.only('Delete Employee', async ({ page }) => {
  const settings = new EmployeesPage(page);
  await settings.createNewEmployee();
  await settings.deleteEmployee();
});
// Delete Employee 404 sayfasına gönderiyor.
// Give CRM Access
