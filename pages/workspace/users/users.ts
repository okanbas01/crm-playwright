import { expect, Page } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../../component/constant';
import { baseURL } from '../../../pageobjects/loginPage';
import values from '../../../pageobjects/workspace/users/users.utils';

export default class usersPage {
  constructor(public page: Page) {}

  async createNewUser() {
    await this.page.goto(`${baseURL}/settings/workspace/users`);
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

    await clickAndWait(this.page, values.branchInput, 500);
    this.randomSelect();
    await this.page.waitForTimeout(1000);

    const branchName = await this.page.textContent(values.branchInput);
    console.log('branchName:', branchName);

    // await clickAndWait(this.page, values.titleInput, 1000);
    // this.randomSelect();
    // await this.page.waitForTimeout(1000);

    // const titleName = await this.page.textContent(values.titleInput);
    // console.log('titleName:', titleName);

    await clickAndWait(this.page, values.roleInput, 500);
    this.randomSelect();

    await clickAndWait(this.page, values.saveButton, 1000);

    //Users Sayfasındaki  listeye yansıdığı kontrol edilir

    const listUserName = await this.page.textContent(values.listUserName);
    console.log('listUserName:', listUserName);

    const listEmail = await this.page.textContent(values.listEmail);
    console.log('listEmail:', listEmail);

    expect(`${formFirstNameText} ${formLastNameText}`).toEqual(listUserName);
    expect(formEmailText).toEqual(listEmail);

    //Detail sayfasındaki değerlerin doğruluğu kontrol edilir

    await clickAndWait(this.page, values.actionsButton, 500);
    await clickAndWait(this.page, values.goToDetailButton, 1000);

    const detailName = await this.page.textContent(values.detailNameArea);
    console.log('detailName:', detailName);

    const detailTitle = await this.page.textContent(values.detailTitleArea);
    console.log('detailTitle:', detailTitle);

    const detailBranch = await this.page.textContent(values.detailBranchArea);
    console.log('detailBranch:', detailBranch);

    const detailEmail = await this.page.textContent(values.detailEmailArea);
    console.log('detailEmail:', detailEmail);

    expect(`${formFirstNameText} ${formLastNameText}`).toEqual(detailName);
    // expect(titleName).toEqual(detailTitle);
    // expect(branchName).toEqual(detailBranch);
    expect(formEmailText).toEqual(detailEmail);
  }

  async editUser() {
    await this.page.goto(`${baseURL}/settings/workspace/users`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.actionsButton, 500);
    await clickAndWait(this.page, values.goToDetailButton, 1000);

    await clickAndWait(this.page, values.editButton, 500);

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

    await clickAndWait(this.page, values.branchInput, 500);
    this.randomSelect();
    await this.page.waitForTimeout(1000);

    const branchName = await this.page.textContent(values.branchInput);
    console.log('branchName:', branchName);

    await clickAndWait(this.page, values.titleInput, 1000);
    this.randomSelect();
    await this.page.waitForTimeout(1000);

    const titleName = await this.page.textContent(values.titleInput);
    console.log('titleName:', titleName);

    await clickAndWait(this.page, values.roleInput, 1000);
    this.randomSelect();
    await this.page.waitForTimeout(1000);

    await clickAndWait(this.page, values.saveButton, 1000);

    //Detail sayfasındaki değerlerin doğruluğu kontrol edilir

    const detailName = await this.page.textContent(values.detailNameArea);
    console.log('detailName:', detailName);

    const detailTitle = await this.page.textContent(values.detailTitleArea);
    console.log('detailTitle:', detailTitle);

    const detailBranch = await this.page.textContent(values.detailBranchArea);
    console.log('detailBranch:', detailBranch);

    const detailEmail = await this.page.textContent(values.detailEmailArea);
    console.log('detailEmail:', detailEmail);

    expect(`${formFirstNameText} ${formLastNameText}`).toEqual(detailName);
    expect(titleName).toEqual(detailTitle);
    expect(branchName).toEqual(detailBranch);
    expect(formEmailText).toEqual(detailEmail);
  }

  async impersonateUser() {
    await this.page.goto(`${baseURL}/settings/workspace/users`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.actionsButton, 500);
    await clickAndWait(this.page, values.goToDetailButton, 1000);

    await clickAndWait(this.page, values.impersonateButton, 500);
    const detailName = await this.page.textContent(values.detailNameArea);
    console.log('detailName:', detailName);

    const activeImpersonate = await this.page.textContent(
      values.impersonateButton,
    );
    console.log('activeImpersonate:', activeImpersonate);

    const impersonateHeader = await this.page.textContent(
      values.impersonateHeader,
    );
    console.log('impersonateHeader:', impersonateHeader);

    //Detayda bulunan kullanıcının hesabı yerine geçildiği kontrol edilir
    expect(
      `You are now impersonating ${detailName}-Stop Impersonation`,
    ).toEqual(impersonateHeader);

    //Stop impersonate butonuna tıkladıktan sonra header alanındaki text'in kaybolduğunu kontrol edilir
    await clickAndWait(this.page, values.impersonateButton, 500);
    const impersonateHeaderSelector = await this.page.$(
      values.impersonateHeader,
    );

    if (!impersonateHeaderSelector) {
      console.log('impersonateHeader sayfada bulunmuyor. Doğru durum.');
    } else {
      throw new Error('Element sayfada bulunuyor.');
    }

    //Header alanındaki "Stop impersonate" linkine tıklayarak main hesaba dönülmesi kontrol edilir
    await clickAndWait(this.page, values.impersonateButton, 500);
    await clickAndWait(this.page, values.headerImpersonateButton, 500);

    if (!impersonateHeaderSelector) {
      console.log('impersonateHeader sayfada bulunmuyor. Doğru durum.');
    } else {
      throw new Error('Element sayfada bulunuyor.');
    }
  }
  async randomSelect() {
    const elements = await this.page.$$(values.dropdownList);
    const randomIndex = Math.floor(Math.random() * elements.length); // Rastgele bir indeks seçin
    const randomElement = elements[randomIndex];
    await randomElement.click();
  }
  async changePassword() {
    await this.page.goto(`${baseURL}/settings/workspace/users`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.actionsButton, 500);
    await clickAndWait(this.page, values.goToDetailButton, 1000);

    const detailEmail = await this.page.textContent(values.detailEmailArea);
    console.log('detailEmail:', detailEmail);
    await fillAndWait(
      this.page,
      values.newPasswordArea,
      values.passwordText,
      500,
    );
    await fillAndWait(
      this.page,
      values.confirmNewPasswordArea,
      values.passwordText,
      500,
    );
    console.log(values.passwordText);
    await clickAndWait(this.page, values.changePasswordSaveButton, 500);

    await this.page.goto(`https://${values.subdomain}.birdefter.dev`);
    await this.page.waitForTimeout(1000);
    if (detailEmail !== null) {
      await fillAndWait(this.page, values.loginMailArea, detailEmail, 500);
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
  async banUser() {
    await this.page.goto(`${baseURL}/settings/workspace/users`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.actionsButton, 500);
    await clickAndWait(this.page, values.goToDetailButton, 1000);

    await clickAndWait(this.page, values.banUser, 500);
    await clickAndWait(this.page, values.confirmBan, 2000);

    const banText = await this.page.textContent(values.banInformation);
    console.log('banText:', banText);
    expect(banText).toEqual(values.banned);
    //ban kaldırılır
    await clickAndWait(this.page, values.revokeUserBan, 2000);
  }
}
