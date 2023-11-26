import { Page, expect } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../component/constant';
import values from '../../pageobjects/accounting/customer.utils';
import { baseURL } from '../../pageobjects/loginPage';

export default class CustomerPage {
  constructor(public page: Page) {}

  async createNewCustomerAccountGroupCash(customerName) {
    await this.page.goto(`${baseURL}/accounting/accounts/customer-accounts`);
    await this.page.waitForTimeout(1000);

    await clickAndWait(this.page, values.createGroupButton, 500);

    const saveButton = await this.page.locator(values.saveButton);
    const saveState = await saveButton.isDisabled();
    expect(saveState).toBe(true);

    await fillAndWait(
      this.page,
      values.newAccountGroupNameArea,
      customerName,
      500,
    );
    await clickAndWait(this.page, values.saveButton, 1000);

    // Önce nav bar içindeki tüm elementleri seçin
    const navBarElements = await this.page.$$(values.navBarElements);

    let isCashNameFound = false;

    for (const element of navBarElements) {
      const elementText = await element.textContent();

      if (elementText !== null && elementText.includes(customerName)) {
        isCashNameFound = true;
        break;
      }
    }

    if (isCashNameFound) {
      console.log(`Nav bar içinde cashName (${customerName}) bulundu.`);
    } else {
      throw new Error(`Nav bar içinde cashName (${customerName}) bulunamadı.`);
    }
  }
  async createNewCustomerAccountGroupBank() {
    await this.page.goto(`${baseURL}/accounting/accounts/customer-accounts`);
    await this.page.waitForTimeout(1000);

    await clickAndWait(this.page, values.createGroupButton, 500);
    await clickAndWait(this.page, values.bankTab, 500);
    const saveButton = await this.page.locator(values.saveButton);

    const saveState = await saveButton.isDisabled();
    expect(saveState).toBe(true);

    await fillAndWait(
      this.page,
      values.newAccountGroupNameArea,
      values.customerNameText,
      500,
    );

    await fillAndWait(
      this.page,
      values.newAccountGroupNameArea,
      values.customerNameText,
      500,
    );

    await clickAndWait(this.page, values.bankSelectArea, 500);
    const banks = await this.page.$$(values.banks);
    const randomIndex = Math.floor(Math.random() * banks.length); // Rastgele bir indeks seçin
    const selectBank = banks[randomIndex];
    await selectBank.click();

    await clickAndWait(this.page, values.saveButton, 500); //createGroupButton
    // Önce nav bar içindeki tüm elementleri seçin
    const navBarElements = await this.page.$$(values.navBarElements);

    let isCashNameFound = false;

    for (const element of navBarElements) {
      const elementText = await element.textContent();

      if (
        elementText !== null &&
        elementText.includes(values.customerNameText)
      ) {
        isCashNameFound = true;
        break;
      }
    }

    if (isCashNameFound) {
      console.log(
        `Nav bar içinde cashName (${values.customerNameText}) bulundu.`,
      );
    } else {
      throw new Error(
        `Nav bar içinde cashName (${values.customerNameText}) bulunamadı.`,
      );
    }
  }
  async clearAllCustomerAccount() {
    await this.page.goto(`${baseURL}/accounting/accounts/workspace`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.clearAllDataButton, 500);
    await clickAndWait(this.page, values.deleteConfirmActionButton, 500);
  }
}
