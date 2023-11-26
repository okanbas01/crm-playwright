import { test } from '@playwright/test';
import LoginPage, { baseURL } from '../../pageobjects/loginPage';
import ExchangeOfficePage from '../../pages/modules-settings/exchange_office';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}/loan/dashboard`);
  await page.waitForTimeout(2000);
});
test.only('Spread Groups Create New Group', async ({ page }) => {
  const loan = new ExchangeOfficePage(page);
  await loan.createNewSpreadGroup();
  await loan.spreadGroupRemove();
});
test.only('Spread Groups Remove Group', async ({ page }) => {
  const loan = new ExchangeOfficePage(page);
  await loan.createNewSpreadGroup();
  await loan.spreadGroupRemove();
});
test.only('Spread Groups Detail Remove Group', async ({ page }) => {
  const loan = new ExchangeOfficePage(page);
  await loan.createNewSpreadGroup();
  await loan.spreadGroupDetailRemove();
});
test.only('Spread Groups Edit Group', async ({ page }) => {
  const loan = new ExchangeOfficePage(page);
  await loan.createNewSpreadGroup();
  await loan.spreadGroupEdit();
  await loan.spreadGroupRemove();
});
test.only('Spread Groups Group Detail Check ', async ({ page }) => {
  const loan = new ExchangeOfficePage(page);
  await loan.createNewSpreadGroup();
  await loan.spreadGroupsDetailCheck();
  await loan.spreadGroupRemove();
});
test.only('Spread Groups Filter Check ', async ({ page }) => {
  const loan = new ExchangeOfficePage(page);
  await loan.spreadGroupTableFilterCheck();
});
test.only('Spread Groups Add New Assets ', async ({ page }) => {
  const loan = new ExchangeOfficePage(page);
  await loan.createNewSpreadGroup();
  //await loan.spreadGroupDetailAddAsset();
  await loan.spreadGroupRemove();
});
test.only('Spread Groups Add New Customer ', async ({ page }) => {
  const loan = new ExchangeOfficePage(page);
  await loan.createNewSpreadGroup();
  //await loan.spreadGroupDetailAddCustomers();
  await loan.spreadGroupRemove();
});
