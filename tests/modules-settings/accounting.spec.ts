import { test } from '@playwright/test';
import LoginPage, { baseURL } from '../../pageobjects/loginPage';
import accountingSettingsPage from '../../pages/modules-settings/accounting';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}/settings/modules/accounting`);
  await page.waitForTimeout(2000);
});

test.only('Account Groups Add New Bank ', async ({ page }) => {
  const loan = new accountingSettingsPage(page);
  await loan.accountingAddNewBank();
  await loan.accountingRemoveBank();
});
test.only('Account Groups Enable Bank ', async ({ page }) => {
  const loan = new accountingSettingsPage(page);
  await loan.accountingAddNewBank();
  await loan.accountingBankEnable();
});
test.only('Account Groups Disable Bank ', async ({ page }) => {
  const loan = new accountingSettingsPage(page);
  await loan.accountingAddNewBank();
  await loan.accountingBankEnable();
  await loan.accountingBankDisable();
  await loan.accountingRemoveBank();
});
test.only('Account Groups Edit Bank ', async ({ page }) => {
  const loan = new accountingSettingsPage(page);
  await loan.accountingAddNewBank();
  await loan.accountingBankEdit();
  await loan.accountingRemoveBank();
});
test.only('Account Groups Add Swift Code Bank ', async ({ page }) => {
  const loan = new accountingSettingsPage(page);
  await loan.accountingAddNewBankSwiftCode();
});
test.only('Account Groups Add New Cash Group ', async ({ page }) => {
  const loan = new accountingSettingsPage(page);
  await loan.addNewCashAccountGroup();
  await loan.removeAccountGroup();
});
test.only('Account Groups Add New Bank Group ', async ({ page }) => {
  const loan = new accountingSettingsPage(page);
  await loan.addNewBankAccountGroup();
  await loan.removeAccountGroup();
});
test.only('Account Groups Edit Cash Group ', async ({ page }) => {
  const loan = new accountingSettingsPage(page);
  await loan.addNewCashAccountGroup();
  await loan.editCashAccountGroups();
  await loan.removeAccountGroup();
});
test.only('Account Groups Edit Bank Group ', async ({ page }) => {
  const loan = new accountingSettingsPage(page);
  await loan.addNewBankAccountGroup();
  await loan.editBankAccountGroups();
  await loan.removeAccountGroup();
});
test.only('Account Groups Filter Check ', async ({ page }) => {
  const loan = new accountingSettingsPage(page);
  await loan.accountGroupsFilterCheck();
});
test.only('Account Groups Add New External Entities ', async ({ page }) => {
  const loan = new accountingSettingsPage(page);
  await loan.addExternalEntities();
  await loan.externalEntitiesRemove();
});
test.only('Account Groups Edit External Entities ', async ({ page }) => {
  const loan = new accountingSettingsPage(page);
  await loan.addExternalEntities();
  await loan.editExternalEntities();
  await loan.externalEntitiesRemove();
});
test.only(' Account Groups Remove External Entities ', async ({ page }) => {
  const loan = new accountingSettingsPage(page);
  await loan.addExternalEntities();
  await loan.externalEntitiesRemove();
});
test.only('Account Groups External Entities Filter Check ', async ({
  page,
}) => {
  const loan = new accountingSettingsPage(page);
  await loan.externalEntitiesFilterCheck();
});
