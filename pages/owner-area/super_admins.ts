import { expect, Page } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../component/constant';
import { baseURL } from '../../pageobjects/loginPage';
import values from '../../pageobjects/owner-area/super_admins.utils';

export default class superAdminsPage {
  constructor(public page: Page) {}

  async randomSelect() {
    const elements = await this.page.$$(values.dropdownList);
    const randomIndex = Math.floor(Math.random() * elements.length); // Rastgele bir indeks seçin
    const randomElement = elements[randomIndex];
    await randomElement.click();
  }
  async createNewAdmin() {
    await this.page.goto(`${baseURL}/settings/workspaces/admins`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.createButton, 1000);

    await fillAndWait(
      this.page,
      values.firstNameInput,
      values.firstNameText,
      500,
    );
    const formFirstNameText = await this.page.inputValue(values.firstNameInput);
    console.log('formFirstNameText:', formFirstNameText);

    await fillAndWait(
      this.page,
      values.lastNameInput,
      values.lastNameText,
      500,
    );
    const formLastNameText = await this.page.inputValue(values.lastNameInput);
    console.log('formLastNameText:', formLastNameText);

    await fillAndWait(this.page, values.emailInput, values.emailText, 500);
    const formEmailText = await this.page.inputValue(values.emailInput);
    console.log('formEmailText:', formEmailText);

    await fillAndWait(
      this.page,
      values.passwordInput,
      values.passwordText,
      500,
    );
    const formPasswordText = await this.page.inputValue(values.passwordInput);
    console.log('formPasswordText:', formPasswordText);

    await clickAndWait(this.page, values.languageInput, 500);
    this.randomSelect();
    await this.page.waitForTimeout(1000);

    const branchName = await this.page.textContent(values.languageInput);
    console.log('branchName:', branchName);
    await clickAndWait(this.page, values.saveButton, 500);

    //Users Sayfasındaki  listeye yansıdığı kontrol edilir

    const listAdminName = await this.page.textContent(values.listAdminName);
    console.log('listAdminName:', listAdminName);

    const listEmail = await this.page.textContent(values.listEmail);
    console.log('listEmail:', listEmail);

    expect(`${formFirstNameText} ${formLastNameText}`).toEqual(listAdminName);
    expect(formEmailText).toEqual(listEmail);

    //Yeni admin ile login olunur
    await this.page.goto(`https://${values.subdomain}.birdefter.dev`);
    await this.page.waitForTimeout(1000);
    if (formEmailText !== null) {
      await fillAndWait(this.page, values.loginMailArea, formEmailText, 500);
      await fillAndWait(
        this.page,
        values.loginPasswordArea,
        values.passwordText,
        500,
      );
      console.log(values.passwordText);

      await clickAndWait(this.page, values.submitButton, 1000);
      await this.page.waitForTimeout(1000);
    }
  }
  async editAdmin() {
    await this.page.goto(`${baseURL}/settings/workspaces/admins`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.actionsButton, 500);
    await clickAndWait(this.page, values.actionsEditButton, 500);

    await fillAndWait(
      this.page,
      values.firstNameInput,
      values.firstNameText,
      500,
    );
    const formFirstNameText = await this.page.inputValue(values.firstNameInput);
    console.log('formFirstNameText:', formFirstNameText);

    await fillAndWait(
      this.page,
      values.lastNameInput,
      values.lastNameText,
      500,
    );
    const formLastNameText = await this.page.inputValue(values.lastNameInput);
    console.log('formLastNameText:', formLastNameText);

    await fillAndWait(this.page, values.emailInput, values.emailText, 500);
    const formEmailText = await this.page.inputValue(values.emailInput);
    console.log('formEmailText:', formEmailText);

    await clickAndWait(this.page, values.languageInput, 500);
    this.randomSelect();
    await this.page.waitForTimeout(1000);

    const branchName = await this.page.textContent(values.languageInput);
    console.log('branchName:', branchName);
    await clickAndWait(this.page, values.saveButton, 500);

    //Users Sayfasındaki  listeye yansıdığı kontrol edilir

    const listAdminName = await this.page.textContent(values.listAdminName);
    console.log('listAdminName:', listAdminName);

    const listEmail = await this.page.textContent(values.listEmail);
    console.log('listEmail:', listEmail);

    expect(`${formFirstNameText} ${formLastNameText}`).toEqual(listAdminName);
    expect(formEmailText).toEqual(listEmail);
  }
}
