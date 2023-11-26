import { Page, expect } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../component/constant';
import { baseURL } from '../../pageobjects/loginPage';
import values from '../../pageobjects/modules-settings/manufacturing.utils';

export default class manufacturingSettingsPage {
  constructor(public page: Page) {}

  async createUnitsOfMeasure() {
    await this.page.goto(`${baseURL}/settings/modules/manufacturing`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.unitOfMeasureCreateButton, 500);
    await fillAndWait(
      this.page,
      values.unitOfMeasureCreateNameInput,
      values.nameText,
      500,
    );

    const unitOfMeasureFormName = await this.getValueFromInput(
      this.page,
      values.unitOfMeasureCreateNameInput,
    );
    console.log('unitOfMeasureFormName:', unitOfMeasureFormName);

    await clickAndWait(this.page, values.saveButton, 500);

    const unitOfMeasureListName = await this.page.textContent(
      values.unitOfMeasureListName,
    );
    console.log('unitOfMeasureListName:', unitOfMeasureListName);

    expect(unitOfMeasureFormName).toEqual(unitOfMeasureListName);
  }

  async getValueFromInput(
    page: Page,
    selector: string,
  ): Promise<string | null> {
    const element = await page.$(selector);
    if (!element) {
      console.log(`Element with selector ${selector} not found`);
      return null;
    }
    const value: string | null = await element.getAttribute('value');
    return value;
  }

  async editUnitsOfMeasure() {
    await this.page.goto(`${baseURL}/settings/modules/manufacturing`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.detailMenuButton, 500);
    await clickAndWait(this.page, values.editButton, 500);

    await fillAndWait(
      this.page,
      values.unitOfMeasureCreateNameInput,
      values.editText,
      500,
    );
    const unitOfMeasureFormName = await this.getValueFromInput(
      this.page,
      values.unitOfMeasureCreateNameInput,
    );
    console.log('unitOfMeasureFormName:', unitOfMeasureFormName);

    await clickAndWait(this.page, values.saveButton, 500);

    const unitOfMeasureListName = await this.page.textContent(
      values.unitOfMeasureListName,
    );
    console.log('unitOfMeasureListName:', unitOfMeasureListName);

    expect(unitOfMeasureFormName).toEqual(unitOfMeasureListName);
  }
  async removeUnitsOfMeasure() {
    await this.page.goto(`${baseURL}/settings/modules/manufacturing`);
    await this.page.waitForTimeout(2000);

    const beforeRemoveListName = await this.page.textContent(
      values.unitOfMeasureListName,
    );
    console.log('beforeRemoveListName:', beforeRemoveListName);

    await clickAndWait(this.page, values.detailMenuButton, 500);
    await clickAndWait(this.page, values.removeButton, 500);
    await clickAndWait(this.page, values.confirmButton, 500);

    const afterRemoveListName = await this.page.textContent(
      values.unitOfMeasureListName,
    );
    console.log('afterRemoveListName:', afterRemoveListName);

    expect(beforeRemoveListName).not.toEqual(afterRemoveListName);
  }
  async createTaxRate() {
    await this.page.goto(`${baseURL}/settings/modules/manufacturing`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.createTaxRateButton, 500);
    await fillAndWait(this.page, values.taxRateNameInput, values.nameText, 500);
    await fillAndWait(this.page, values.taxRateInput, '2', 500);

    const taxRateFormName = await this.getValueFromInput(
      this.page,
      values.taxRateNameInput,
    );
    console.log('taxRateFormName:', taxRateFormName);

    const taxRateFormRate = await this.getValueFromInput(
      this.page,
      values.taxRateInput,
    );
    console.log('taxRateFormRate:', taxRateFormRate);

    await clickAndWait(this.page, values.taxRateSaveButton, 500);

    const taxRateListName = await this.page.textContent(values.taxRateListName);
    console.log('taxRateListName:', taxRateListName);

    const taxRateListRate = await this.page.textContent(values.taxRateListRate);
    console.log('taxRateListRate:', taxRateListRate);

    expect(taxRateFormName).toEqual(taxRateListName);
    expect(taxRateFormRate).toEqual(taxRateListRate);
  }
  async editTaxRate() {
    await this.page.goto(`${baseURL}/settings/modules/manufacturing`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.detailTaxRateMenuButton, 500);
    await clickAndWait(this.page, values.editButton, 500);

    await fillAndWait(this.page, values.taxRateNameInput, values.editText, 500);
    await fillAndWait(this.page, values.taxRateInput, '3', 500);

    const taxRateFormName = await this.getValueFromInput(
      this.page,
      values.taxRateNameInput,
    );
    console.log('taxRateFormName:', taxRateFormName);

    const taxRateFormRate = await this.getValueFromInput(
      this.page,
      values.taxRateInput,
    );
    console.log('taxRateFormRate:', taxRateFormRate);

    await clickAndWait(this.page, values.taxRateSaveButton, 500);

    const taxRateListName = await this.page.textContent(values.taxRateListName);
    console.log('taxRateListName:', taxRateListName);

    const taxRateListRate = await this.page.textContent(values.taxRateListRate);
    console.log('taxRateListRate:', taxRateListRate);

    expect(taxRateFormName).toEqual(taxRateListName);
    expect(taxRateFormRate).toEqual(taxRateListRate);
  }
  async removeTaxRate() {
    await this.page.goto(`${baseURL}/settings/modules/manufacturing`);
    await this.page.waitForTimeout(2000);

    const taxRateListName = await this.page.textContent(values.taxRateListName);
    console.log('taxRateListName:', taxRateListName);

    const taxRateListRate = await this.page.textContent(values.taxRateListRate);
    console.log('taxRateListRate:', taxRateListRate);

    await clickAndWait(this.page, values.detailTaxRateMenuButton, 500);
    await clickAndWait(this.page, values.removeButton, 500);
    await clickAndWait(this.page, values.confirmButton, 500);

    const afterRemoveListName = await this.page.textContent(
      values.taxRateListName,
    );
    console.log('afterRemoveListName:', afterRemoveListName);

    const afterRemoveListRate = await this.page.textContent(
      values.taxRateListRate,
    );
    console.log('afterRemoveListRate:', afterRemoveListRate);

    expect(taxRateListName).not.toEqual(afterRemoveListName);
    expect(taxRateListRate).not.toEqual(afterRemoveListRate);
  }

  async createNewLocation() {
    await this.page.goto(`${baseURL}/settings/modules/manufacturing`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.createNewLocation, 500);
    await fillAndWait(this.page, values.locationName, values.nameText, 500);
    await fillAndWait(
      this.page,
      values.locationLegalName,
      values.legalNameText,
      500,
    );

    const locationName = await this.getValueFromInput(
      this.page,
      values.locationName,
    );
    console.log('locationName:', locationName);

    const locationLegalName = await this.getValueFromInput(
      this.page,
      values.locationLegalName,
    );
    console.log('locationLegalName:', locationLegalName);

    await clickAndWait(this.page, values.countryInput, 500);
    this.randomSelect();
    await clickAndWait(this.page, values.stateInput, 500);
    this.randomSelect();
    await this.page.waitForTimeout(500);

    const stateName = await this.page.textContent(values.stateInput);
    console.log('stateName:', stateName);

    await clickAndWait(this.page, values.buyCheckBox, 500);
    await clickAndWait(this.page, values.makeCheckBox, 500);
    await clickAndWait(this.page, values.saveLocationButton, 500);

    const listName = await this.page.textContent(values.listName);
    const listLegalName = await this.page.textContent(values.listLegalName);
    const listAddress = await this.page.textContent(values.listAddress);
    const listEnabledFunctions = await this.page.textContent(
      values.listEnabledFunctions,
    );

    expect(locationName).toEqual(listName);
    expect(locationLegalName).toEqual(listLegalName);
    expect(stateName).toEqual(listAddress);
    expect(listEnabledFunctions).toEqual('Make, Purchase');
  }
  async editNewLocation() {
    await this.page.goto(`${baseURL}/settings/modules/manufacturing`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.detailLocationMenuButton, 500);
    await clickAndWait(this.page, values.editButton, 500);
    await fillAndWait(this.page, values.locationName, values.editText, 500);
    await fillAndWait(
      this.page,
      values.locationLegalName,
      values.editLegalNameText,
      500,
    );

    const editName = await this.getValueFromInput(
      this.page,
      values.locationName,
    );
    console.log('editName:', editName);

    const editLegalName = await this.getValueFromInput(
      this.page,
      values.locationLegalName,
    );
    console.log('editLegalName:', editLegalName);

    await clickAndWait(this.page, values.countryInput, 1000);
    this.randomSelect();
    await clickAndWait(this.page, values.stateInput, 1000);
    this.randomSelect();
    await this.page.waitForTimeout(500);

    const stateName = await this.page.textContent(values.stateInput);
    console.log('stateName:', stateName);

    await clickAndWait(this.page, values.buyCheckBox, 500);
    await clickAndWait(this.page, values.saveLocationButton, 500);

    const listName = await this.page.textContent(values.listName);
    const listLegalName = await this.page.textContent(values.listLegalName);
    const listAddress = await this.page.textContent(values.listAddress);
    const listEnabledFunctions = await this.page.textContent(
      values.listEnabledFunctions,
    );

    expect(editName).toEqual(listName);
    expect(editLegalName).toEqual(listLegalName);
    expect(stateName).toEqual(listAddress);
    expect(listEnabledFunctions).toEqual('Make');
  }
  async removeLocation() {
    await this.page.goto(`${baseURL}/settings/modules/manufacturing`);
    await this.page.waitForTimeout(2000);
    const listName = await this.page.textContent(values.listName);
    const listLegalName = await this.page.textContent(values.listLegalName);
    const listAddress = await this.page.textContent(values.listAddress);

    await clickAndWait(this.page, values.detailLocationMenuButton, 500);
    await clickAndWait(this.page, values.removeButton, 500);
    await clickAndWait(this.page, values.confirmButton, 500);

    const afterRemoveListName = await this.page.textContent(values.listName);
    const afterRemoveListLegalName = await this.page.textContent(
      values.listLegalName,
    );
    const afterRemoveListAddress = await this.page.textContent(
      values.listAddress,
    );

    expect(listName).not.toEqual(afterRemoveListName);
    expect(listLegalName).not.toEqual(afterRemoveListLegalName);
    expect(listAddress).not.toEqual(afterRemoveListAddress);
  }
  async createSupplier() {
    await this.page.goto(`${baseURL}/settings/modules/manufacturing`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.createSupplierButton, 500);
    await fillAndWait(
      this.page,
      values.supplierNameInput,
      values.nameText,
      500,
    );
    await fillAndWait(
      this.page,
      values.supplierEmailInput,
      values.emailText,
      500,
    );

    const supplierFormName = await this.getValueFromInput(
      this.page,
      values.supplierNameInput,
    );
    console.log('supplierFormName:', supplierFormName);

    const supplierFormEmail = await this.getValueFromInput(
      this.page,
      values.supplierEmailInput,
    );
    console.log('supplierFormEmail:', supplierFormEmail);

    await clickAndWait(this.page, values.supplierSaveButton, 500);

    const supplierListName = await this.page.textContent(
      values.supplierListName,
    );
    console.log('supplierListName:', supplierListName);

    const supplierListEmail = await this.page.textContent(
      values.supplierListEmail,
    );
    console.log('supplierListEmail:', supplierListEmail);

    expect(supplierFormName).toEqual(supplierListName);
    expect(supplierFormEmail).toEqual(supplierListEmail);
  }
  async editSupplier() {
    await this.page.goto(`${baseURL}/settings/modules/manufacturing`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.detailSupplierMenuButton, 500);
    await clickAndWait(this.page, values.editButton, 500);

    await fillAndWait(
      this.page,
      values.supplierNameInput,
      values.editText,
      500,
    );
    await fillAndWait(
      this.page,
      values.supplierEmailInput,
      values.emailText,
      500,
    );

    const supplierFormName = await this.getValueFromInput(
      this.page,
      values.supplierNameInput,
    );
    console.log('supplierFormName:', supplierFormName);

    const supplierFormEmail = await this.getValueFromInput(
      this.page,
      values.supplierEmailInput,
    );
    console.log('supplierFormEmail:', supplierFormEmail);

    await clickAndWait(this.page, values.supplierSaveButton, 500);

    const supplierListName = await this.page.textContent(
      values.supplierListName,
    );
    console.log('supplierListName:', supplierListName);

    const supplierListEmail = await this.page.textContent(
      values.supplierListEmail,
    );
    console.log('supplierListEmail:', supplierListEmail);

    expect(supplierFormName).toEqual(supplierListName);
    expect(supplierFormEmail).toEqual(supplierListEmail);
  }

  async removeSupplier() {
    await this.page.goto(`${baseURL}/settings/modules/manufacturing`);
    await this.page.waitForTimeout(2000);

    const supplierListName = await this.page.textContent(
      values.supplierListName,
    );
    console.log('supplierListName:', supplierListName);

    const supplierListEmail = await this.page.textContent(
      values.supplierListEmail,
    );
    console.log('supplierListEmail:', supplierListEmail);

    await clickAndWait(this.page, values.detailSupplierMenuButton, 500);
    await clickAndWait(this.page, values.removeButton, 500);
    await clickAndWait(this.page, values.confirmButton, 500);

    const afterRemoveListName = await this.page.textContent(
      values.supplierListName,
    );
    console.log('afterRemoveListName:', afterRemoveListName);

    const afterRemoveListEmail = await this.page.textContent(
      values.supplierListEmail,
    );
    console.log('afterRemoveListEmail:', afterRemoveListEmail);

    expect(supplierListName).not.toEqual(afterRemoveListName);
    expect(supplierListEmail).not.toEqual(afterRemoveListEmail);
  }
  async randomSelect() {
    const elements = await this.page.$$(values.dropdownList);
    const randomIndex = Math.floor(Math.random() * elements.length); // Rastgele bir indeks seçin
    const randomElement = elements[randomIndex];
    await randomElement.click();
  }
}
