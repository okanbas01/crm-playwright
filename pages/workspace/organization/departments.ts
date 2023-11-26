/*
import { expect, Page } from '@playwright/test';
import values from '../../pageobjects/company-management/departments.utils';
import { baseURL } from '../../pageobjects/loginPage';
import { clickAndWait, fillAndWait } from '../../component/constant';

export default class DepartmentsPage {
  constructor(public page: Page) { }

  async departmentsPageCheck() {
    const button = this.page.locator(values.departmentHeader);
    await expect(button).toContainText(values.departmentText);
  }
  async AddNewDepartmentCancelButtonControl() {
    // New Department butonuna tıklandığında Create butonu valid geliyor.
    await this.page.locator(values.addButton).click();
    await this.page.locator(values.crossMark).click();
    await this.page.locator(values.addButton).click();
    await this.page.locator(values.cancelButton).click();
  }
  async invalidAddNewDepartment() {
    await this.page.locator(values.addButton).click();
    // await expect(this.page.locator(values.createDepartmentButton)).toBeDisabled() // create butonu aktif geliyor.
    // await this.page.locator(values.createDepartmentButton).click();
    // await expect(
    //     this.page.locator(values.createDepartmentButton),
    // ).toBeDisabled();
    await this.page.locator(values.managerArea).click();
    await this.page.locator(values.selectManager).click();
    // await expect(
    //     this.page.locator(values.createDepartmentButton),
    // ).toBeDisabled();
    await this.page
      .locator(values.descriptionArea)
      .fill(values.descriptionText);
    // await expect(
    //     this.page.locator(values.createDepartmentButton),
    // ).toBeDisabled();
    await this.page.locator(values.cancelButton).click();
  }
  async addNewDepartment() {
    await this.page.locator(values.addButton).click();
    await this.page.locator(values.managerArea).click();
    await this.page.locator(values.selectManager).click();
    await this.page.locator(values.nameArea).fill(values.nameText);
    await this.page
      .locator(values.descriptionArea)
      .fill(values.descriptionText);

    const inputElement = await this.page.$(values.nameArea);
    const inputValue = await inputElement?.getAttribute('value');
    const inputValueTrim = inputValue;
    console.log(inputValueTrim);

    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.createDepartmentButton, 3000);

    const newDepartment = await this.page.$(values.firstDepartment);
    const newDepartmentText = await newDepartment?.textContent();
    const newDepartmentTextTrim = newDepartmentText?.trim();
    console.log(newDepartmentTextTrim);

    expect(inputValueTrim).toEqual(newDepartmentTextTrim);
  }
  async columnOpenClose() {
    await clickAndWait(this.page, values.departmentColumnMenu, 3000);
    await clickAndWait(this.page, values.managersCheck, 1000);

    await expect(this.page.locator(values.managersHeader)).not.toBeVisible();
    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.usersCheck, 1000);

    await expect(this.page.locator(values.usersHeader)).not.toBeVisible();
    await clickAndWait(this.page, values.teamsCheck, 1000);

    await expect(this.page.locator(values.teamsHeader)).not.toBeVisible();
    await this.page.waitForTimeout(1000);
    await this.page.locator(values.managersCheck).click();
    await this.page.locator(values.usersCheck).click();
    await clickAndWait(this.page, values.teamsCheck, 1000);

    await expect(this.page.locator(values.managersHeader)).toBeVisible();
    await expect(this.page.locator(values.usersHeader)).toBeVisible();
    await expect(this.page.locator(values.teamsHeader)).toBeVisible();
  }
  async editDepartmentCancelButtonControl() {
    await clickAndWait(this.page, values.firstDepartment, 2000);
    await clickAndWait(this.page, values.editDepartmentButton, 1000);
    await clickAndWait(this.page, values.editDepartmentCrossMark, 1000);
    await clickAndWait(this.page, values.editDepartmentButton, 1000);
    await this.page.click(values.editDepartmentCancelButton);
  }
  async editDepartmentInvalidCases() {
    await clickAndWait(this.page, values.firstDepartment, 2000);
    await clickAndWait(this.page, values.editDepartmentButton, 2000);
    await this.page.locator(values.nameArea).fill('');
    await expect(this.page.locator(values.updateButton)).toBeDisabled();
  }
  async editDepartment() {
    // Description alanı kontrol edilmedi. Detay sayfasında yok.

    await clickAndWait(this.page, values.firstDepartment, 2000);
    await clickAndWait(this.page, values.editDepartmentButton, 2000);

    const managerElement = await this.page.$(values.oldManagerName);
    const managerValue = await managerElement?.textContent();
    console.log(managerValue);

    await this.page.waitForTimeout(1000);

    const nameElement = await this.page.$(values.nameArea);
    const nameValue = await nameElement?.getAttribute('value');
    const nameValueTrim = nameValue?.trim();
    console.log(nameValueTrim);

    await this.page.waitForTimeout(1000);
    await this.page.locator(values.nameArea).fill(values.nameText);

    const editedNameElement = await this.page.$(values.nameArea);
    const editedNameValue = await editedNameElement?.getAttribute('value');
    const editedNameValueTrim = editedNameValue?.trim();
    console.log(editedNameValueTrim);

    await this.page
      .locator(values.descriptionArea)
      .fill(values.descriptionText);
    await clickAndWait(this.page, values.updateButton, 3000);

    expect(nameValue).not.toEqual(editedNameValueTrim);
  }
  async removeManager() {
    await clickAndWait(this.page, values.managerDropDownAction, 1000);
    await clickAndWait(this.page, values.removeManager, 2000);

    const managerAreaElement = await this.page.$(values.managerNotFoundArea);
    const managerNotFoundAreaText = await managerAreaElement?.textContent();
    console.log('bulunamadı:', managerNotFoundAreaText);

    expect(managerNotFoundAreaText).toContain('not-found');
  }
  async departmentDetailRemoveManager() {
    await clickAndWait(this.page, values.firstDepartment, 4000);

    const managerAreaElement = await this.page.$(values.managerNotFoundArea);
    const managerNotFoundAreaText = await managerAreaElement?.textContent();
    console.log('bulunamadı:', managerNotFoundAreaText);

    if (managerNotFoundAreaText == 'not-found') {
      await this.page.goto(`${baseURL}/v2/settings/departments`);
      await this.page.waitForTimeout(4000);
      await this.shortcutAddManager();
      await this.removeManager();
    } else {
      await this.removeManager();
    }
  }
  async addManagerShortcutCancelButton() {
    await clickAndWait(this.page, values.firstDepartment, 1000);
    await clickAndWait(this.page, values.addManagerButton, 1000);
    await clickAndWait(this.page, values.addManagerCrossMark, 1000);
    await clickAndWait(this.page, values.addManagerButton, 1000);
    await clickAndWait(this.page, values.addManagerCancelButton, 1000);
  }
  async shortcutAddManager() {
    await clickAndWait(this.page, values.firstDepartment, 2000);
    await clickAndWait(this.page, values.addManagerButton, 5000);
    await clickAndWait(this.page, values.managerSelectArea, 5000);
    await fillAndWait(
      this.page,
      values.shortcutSearchArea,
      values.managerName,
      3000,
    );
    await clickAndWait(this.page, values.selectManagerName, 5000);

    const managerNameElement = await this.page.$(
      values.managerSelectedNameArea,
    );
    const managerNameValue = await managerNameElement?.textContent();
    console.log(managerNameValue);

    await this.page.locator('div#async-select > .z-overlay').click(); //Sayfada boşluga tıklanır; dropdown kapanması için
    await clickAndWait(this.page, values.updateDepartmentManagerButton, 5000);

    const managerTableNameElement = await this.page.$(
      values.managerTableNameArea,
    );
    const managerTableNameValue = await managerTableNameElement?.textContent();
    console.log(managerTableNameValue);

    expect(managerNameValue).toEqual(managerTableNameValue);
  }
  async deleteDepartment() {
    await clickAndWait(this.page, values.firstDepartment, 2000);
    await clickAndWait(this.page, values.departmentDropdownMenu, 1000);
    await clickAndWait(this.page, values.deleteDepartmentButton, 1000);
    await clickAndWait(this.page, values.departmentDeleteButton, 2000);
  }
  async departmentDetailAddTeamCancelButton() {
    await clickAndWait(this.page, values.firstDepartment, 1000);
    await clickAndWait(this.page, values.addTeamButton, 1000);
    await clickAndWait(this.page, values.addTeamCrossMark, 1000);
    await clickAndWait(this.page, values.addTeamButton, 1000);
    await clickAndWait(this.page, values.addTeamCancelButton, 1000);
  }
  async departmentDetailAddTeamInvalidCases() {
    // New Department butonuna tıklandığında Create butonu valid geliyor.
    await this.page.locator(values.firstDepartment).click();
    await this.page.locator(values.addTeamButton).click();
    // await expect(this.page.locator(values.addTeamCreate)).toBeDisabled()
    await fillAndWait(
      this.page,
      values.addTeamDescriptionArea,
      values.descriptionText,
      1000,
    );
    // expect(this.page.locator(values.addTeamCreate)).toBeDisabled();
    await clickAndWait(this.page, values.addTeamMangerArea, 1000);
    await fillAndWait(
      this.page,
      values.addTeamMangerSearchArea,
      values.addTeamMangerName,
      2000,
    );
    await this.page.locator(values.addTeamMangerSelect).click();
    // await expect(this.page.locator(values.addTeamCreate)).toBeDisabled();
    await this.page.waitForTimeout(8000);
  }
  async departmentDetailAddTeamCreate() {
    await clickAndWait(this.page, values.firstDepartment, 5000);
    await this.page.locator(values.addTeamButton).click();
    await this.page.locator(values.addTeamNameArea).fill(values.nameText);

    const nameElement = await this.page.$(values.addTeamNameArea);
    const nameValue = await nameElement?.getAttribute('value');
    const nameValueTrim = nameValue?.trim();
    console.log('formName:', nameValueTrim);

    await this.page
      .locator(values.addTeamDescriptionArea)
      .fill(values.descriptionText);
    await clickAndWait(this.page, values.addTeamMangerArea, 5000);

    await fillAndWait(
      this.page,
      values.addTeamMangerSearchArea,
      values.addTeamMangerName,
      1000,
    );

    await this.page.locator(values.addTeamMangerSelect).click();

    const ManagerNameElement = await this.page.$(values.managerNameArea);
    const ManagerNameValue = await ManagerNameElement?.textContent();
    console.log('formManager:', ManagerNameValue);

    await this.page.waitForTimeout(5000);
    await clickAndWait(this.page, values.addTeamCreate, 5000);

    const detailNameElement = await this.page.$(values.nameDetailArea);
    const detailNameValue = await detailNameElement?.textContent();
    console.log('listName:', detailNameValue);

    const detailManagerNameElement = await this.page.$(
      values.managerNameDetailArea,
    );
    const detailManagerNameValue =
      await detailManagerNameElement?.textContent();
    console.log('listManager:', detailManagerNameValue);

    // expect(nameValueTrim).toEqual(detailNameValue);
    expect(ManagerNameValue).toEqual(detailManagerNameValue);
  }
  async departmentDetailTeamEditCancelButton() {
    await clickAndWait(this.page, values.firstDepartment, 1000);
    await clickAndWait(this.page, values.teamDetailButton, 1000);
    await clickAndWait(this.page, values.teamEditButton, 1000);
    await clickAndWait(this.page, values.teamEditButtonCrossMark, 1000);
    await clickAndWait(this.page, values.teamDetailButton, 1000);
    await clickAndWait(this.page, values.teamEditButton, 1000);
    await clickAndWait(this.page, values.teamEditCancelButton, 1000);
  }
  async departmentDetailTeamEdit() {
    await clickAndWait(this.page, values.firstDepartment, 1000);
    await clickAndWait(this.page, values.teamDetailButton, 1000);
    await clickAndWait(this.page, values.teamEditButton, 1000);
    await this.page.locator(values.addTeamNameArea).fill(values.nameText);

    const nameElement = await this.page.$(values.addTeamNameArea);
    const nameValue = await nameElement?.getAttribute('value');
    const nameValueTrim = nameValue?.trim();
    console.log('formName:', nameValueTrim);

    await this.page.waitForTimeout(1000);

    await this.page
      .locator(values.addTeamDescriptionArea)
      .fill(values.descriptionText);

    const descriptionElement = await this.page.$(values.addTeamDescriptionArea);
    const descriptionValue = await descriptionElement?.inputValue();
    const descriptionValueTrim = descriptionValue?.trim();
    console.log(descriptionValueTrim); //undifident geliyor

    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.teamEditUpdateButton, 1000);

    const listNameElement = await this.page.$(values.nameDetailArea);
    const listNameValue = await listNameElement?.textContent();
    console.log('formName:', listNameValue);

    // expect(descriptionValueTrim).toEqual(listNameValue);

    await clickAndWait(this.page, values.nameDetailArea, 1000);

    const descriptionDetailElement = await this.page.$(
      values.descriptionDetails,
    );
    const descriptionDetailValue =
      await descriptionDetailElement?.textContent();
    console.log('detailDescription:', descriptionDetailValue);

    // expect(NameValueTrim).toEqual(detailNameValue);
    // expect(descriptionValueTrim).toEqual(detailManagerNameValue); TODO: kontrol edilecek
  }
  async departmentDetailTeamEditInvalidCases() {
    await clickAndWait(this.page, values.firstDepartment, 1000);
    await clickAndWait(this.page, values.teamDetailButton, 1000);
    await clickAndWait(this.page, values.teamEditButton, 1000);

    await fillAndWait(this.page, values.addTeamNameArea, '', 1000);
    await expect(this.page.locator(values.teamEditUpdateButton)).toBeDisabled();
  }
  async departmentDetailTeamGoToDetail() {
    await clickAndWait(this.page, values.firstDepartment, 1000);

    const listNameElement = await this.page.$(values.nameDetailArea);
    const listNameValue = await listNameElement?.textContent();
    console.log('listName:', listNameValue);

    const listManagerNameElement = await this.page.$(
      values.managerNameDetailArea,
    );
    const listManagerValue = await listManagerNameElement?.textContent();
    console.log('listManager:', listManagerValue);

    await clickAndWait(this.page, values.teamDetailButton, 1000);
    await clickAndWait(this.page, values.teamGoToDetailButton, 1000);

    const teamDetailManagerNameElement = await this.page.$(
      values.teamDetailManagerNameArea,
    );
    const teamDetailManagerName =
      await teamDetailManagerNameElement?.textContent();
    console.log(teamDetailManagerName);

    await this.page.waitForTimeout(1000);
    expect(listManagerValue).toEqual(teamDetailManagerName);
  }
}
*/
