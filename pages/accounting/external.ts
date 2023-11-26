import { Page, expect } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../component/constant';
import values from '../../pageobjects/accounting/external.utils';
import { baseURL } from '../../pageobjects/loginPage';

export default class ExternalPage {
  constructor(public page: Page) {}

  async createNewAccountGroupCash() {
    await this.page.goto(`${baseURL}/accounting/accounts/externals`);
    await this.page.waitForTimeout(1000);

    await clickAndWait(this.page, values.createGroupButton, 500);

    const saveButton = await this.page.locator(values.saveButton);
    const saveState = await saveButton.isDisabled();
    expect(saveState).toBe(true);

    await fillAndWait(
      this.page,
      values.newAccountGroupNameArea,
      values.nameText,
      500,
    );

    await clickAndWait(this.page, values.saveButton, 1000);

    // Önce nav bar içindeki tüm elementleri seçin
    const navBarElements = await this.page.$$(values.navBarElements);

    let isCashNameFound = false;

    for (const element of navBarElements) {
      const elementText = await element.textContent();

      if (elementText !== null && elementText.includes(values.nameText)) {
        isCashNameFound = true;
        break;
      }
    }

    if (isCashNameFound) {
      console.log(`Nav bar içinde cashName (${values.nameText}) bulundu.`);
    } else {
      throw new Error(
        `Nav bar içinde cashName (${values.nameText}) bulunamadı.`,
      );
    }
  }
  async createNewAccountGroupBank() {
    await this.page.goto(`${baseURL}/accounting/accounts/externals`);
    await this.page.waitForTimeout(1000);

    await clickAndWait(this.page, values.createGroupButton, 500);
    await clickAndWait(this.page, values.bankTab, 500);
    const saveButton = await this.page.locator(values.saveButton);

    const saveState = await saveButton.isDisabled();
    expect(saveState).toBe(true);

    await fillAndWait(
      this.page,
      values.newAccountGroupNameArea,
      values.nameText,
      500,
    );

    await fillAndWait(
      this.page,
      values.newAccountGroupNameArea,
      values.nameText,
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

      if (elementText !== null && elementText.includes(values.nameText)) {
        isCashNameFound = true;
        break;
      }
    }

    if (isCashNameFound) {
      console.log(`Nav bar içinde cashName (${values.nameText}) bulundu.`);
    } else {
      throw new Error(
        `Nav bar içinde cashName (${values.nameText}) bulunamadı.`,
      );
    }
  }
}
