import { test } from '@playwright/test';
import LoginPage, { baseURL } from '../../pageobjects/loginPage';
import manufacturingSettingsPage from '../../pages/modules-settings/manufacturing';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}/settings/modules/manufacturing`);
  await page.waitForTimeout(2000);
});

test.only('General - Create New Unit Of Measure', async ({ page }) => {
  const manufacturing = new manufacturingSettingsPage(page);
  await manufacturing.createUnitsOfMeasure();
});
test.only('General - Edit Unit Of Measure', async ({ page }) => {
  const manufacturing = new manufacturingSettingsPage(page);
  await manufacturing.createUnitsOfMeasure();
  await manufacturing.editUnitsOfMeasure();
});
test.only('General - Remove Unit Of Measure', async ({ page }) => {
  const manufacturing = new manufacturingSettingsPage(page);
  await manufacturing.createUnitsOfMeasure();
  await manufacturing.removeUnitsOfMeasure();
});
test.only('General - Create New TaxRate', async ({ page }) => {
  const manufacturing = new manufacturingSettingsPage(page);
  await manufacturing.createTaxRate();
});
test.only('General - Edit New TaxRate', async ({ page }) => {
  const manufacturing = new manufacturingSettingsPage(page);
  await manufacturing.createTaxRate();
  await manufacturing.editTaxRate();
});
test.only('General - Remove New TaxRate', async ({ page }) => {
  const manufacturing = new manufacturingSettingsPage(page);
  await manufacturing.createTaxRate();
  await manufacturing.removeTaxRate();
});
test.only('General - Create New Location', async ({ page }) => {
  const manufacturing = new manufacturingSettingsPage(page);
  await manufacturing.createNewLocation();
});
test.only('General - Edit New Location', async ({ page }) => {
  const manufacturing = new manufacturingSettingsPage(page);
  await manufacturing.createNewLocation();
  await manufacturing.editNewLocation();
});
test.only('General - Remove Location', async ({ page }) => {
  const manufacturing = new manufacturingSettingsPage(page);
  await manufacturing.createNewLocation();
  await manufacturing.removeLocation();
});
test.only('General - Create New Supplier', async ({ page }) => {
  const manufacturing = new manufacturingSettingsPage(page);
  await manufacturing.createSupplier();
});
test.only('General - Edit New Supplier', async ({ page }) => {
  const manufacturing = new manufacturingSettingsPage(page);
  await manufacturing.createSupplier();
  await manufacturing.editSupplier();
});
test.only('General - Remove New Supplier', async ({ page }) => {
  const manufacturing = new manufacturingSettingsPage(page);
  await manufacturing.createSupplier();
  await manufacturing.removeSupplier();
});
