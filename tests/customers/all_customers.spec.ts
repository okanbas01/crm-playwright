import { test } from '@playwright/test';
import LoginPage, { baseURL } from '../../pageobjects/loginPage';
import CustomersPage from '../../pages/customers/all_customers';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}/customers`);
  await page.waitForTimeout(2000);
});

test.only('Customers Page Check', async ({ page }) => {
  const customers = new CustomersPage(page);
  await customers.customersPageCheck();
});
test.only('New Customer Create', async ({ page }) => {
  const customers = new CustomersPage(page);
  await customers.createCustomer();
});
test.only('Customers Write Comment', async ({ page }) => {
  const customers = new CustomersPage(page);
  await customers.writeComment();
});
test.only('Assignee To Me Button Check', async ({ page }) => {
  const customers = new CustomersPage(page);
  await customers.assigneeToMe();
});
test.only('All Checkboxs Selected', async ({ page }) => {
  const customers = new CustomersPage(page);
  await customers.allCheckBoxesSelected();
});
test.only('Selected Checkboxs Clearing', async ({ page }) => {
  const customers = new CustomersPage(page);
  await customers.allCheckBoxesSelected();
  await customers.selectedCheckBoxesClearing();
});
test.only('Selected Customers Assignee', async ({ page }) => {
  const customers = new CustomersPage(page);
  await customers.allCheckBoxesSelected();
  await customers.customersAssignee();
});
test('Selected Customers UnAssignee', async ({ page }) => {
  const customers = new CustomersPage(page);
  await customers.customersUnassigned();
});
test.only('Valid Search Text', async ({ page }) => {
  const customers = new CustomersPage(page);
  await customers.validSearch();
});

test.only('Invalid Search Text', async ({ page }) => {
  const customers = new CustomersPage(page);
  await customers.invalidSearch();
});
