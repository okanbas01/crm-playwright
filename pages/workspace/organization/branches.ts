import { expect, Page } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../../component/constant';
import { baseURL } from '../../../pageobjects/loginPage';
import values from '../../../pageobjects/workspace/organization/branches.utils';

export default class BranchesPage {
  constructor(public page: Page) {}
  async getElementInnerText(
    page: Page,
    selector: string,
  ): Promise<string | undefined> {
    const element = await page.locator(selector);
    const innerText: string | undefined = await element.innerText();
    return innerText;
  }
  async getInputNumericValue(
    page: Page,
    selector: string,
  ): Promise<number | null> {
    const numericRegex = /-?[0-9,.]+/g;

    const element = page.locator(selector);
    const inputValue: string | null = await element.getAttribute('value');
    const numericValue: number | null = parseFloat(
      inputValue?.match(numericRegex)?.[0]?.replace(/[^\d.-]/g, '') || '',
    );
    return numericValue;
  }
  async randomSelect() {
    const elements = await this.page.$$(values.dropdownList);
    const randomIndex = Math.floor(Math.random() * elements.length); // Rastgele bir indeks seçin
    const randomElement = elements[randomIndex];
    await randomElement.click();
  }
  async branchesPageCheck() {
    await clickAndWait(this.page, values.branchesPageTab, 2000);
    const branchesPageHeaderAreaText = await this.page.textContent(
      values.branchesPageHeaderArea,
    );
    expect(branchesPageHeaderAreaText).toEqual(values.branchesPageHeaderText);
  }
  async addNewBranchCancelButtonControl() {
    await clickAndWait(this.page, values.addBranchButton, 2000);
    await clickAndWait(this.page, values.addBranchCrossMark, 2000); //x ikonuna tıklayarak kapatma
    await clickAndWait(this.page, values.addBranchButton, 2000);
    await clickAndWait(this.page, values.newBranchCancelButton, 2000);
  }
  async addNewBranch() {
    await clickAndWait(this.page, values.addBranchButton, 2000);
    await fillAndWait(this.page, values.nameArea, values.nameText, 1000);
    await fillAndWait(this.page, values.addressArea, values.addressText, 1000);
    await fillAndWait(
      this.page,
      values.descriptionArea,
      values.descriptionText,
      1000,
    );
    await fillAndWait(this.page, values.eMailArea, values.emailText, 2000);
    await fillAndWait(this.page, values.phoneArea, values.phoneText, 2000);
    // Random Country Seçimi
    await clickAndWait(this.page, values.countryArea, 1000);
    this.randomSelect();
    // Random manager select
    await clickAndWait(this.page, values.managerArea, 1000);
    this.randomSelect();

    await this.page.waitForTimeout(2000);
    const nameAreaText = await this.page.inputValue(values.nameArea);
    const countryAreaText = await this.page.textContent(values.countryArea);
    clickAndWait(this.page, values.createBranchButton, 2000);
    await this.page.waitForTimeout(2000);
    await this.page.goto(`${baseURL}/settings/workspace/organization/branches`); // Sayfa yenilenir.

    await this.page.waitForTimeout(3000);

    const listBranchNameAreaOneText = await this.page.textContent(
      values.listBranchNameAreaOne,
    );

    const listBranchCountryAreaOneText = await this.page.textContent(
      values.listBranchCountryAreaOne,
    );
    expect(listBranchNameAreaOneText).toEqual(nameAreaText);
    expect(listBranchCountryAreaOneText).toEqual(countryAreaText);
  }
  async branchDetailCheck() {
    await clickAndWait(this.page, values.addBranchButton, 2000);
    await fillAndWait(this.page, values.nameArea, values.nameText, 1000);
    await fillAndWait(this.page, values.addressArea, values.addressText, 1000);

    await fillAndWait(
      this.page,
      values.descriptionArea,
      values.descriptionText,
      1000,
    );
    await fillAndWait(this.page, values.eMailArea, values.emailText, 2000);
    await fillAndWait(this.page, values.phoneArea, values.phoneText, 2000);

    // Random Country Seçimi
    await clickAndWait(this.page, values.countryArea, 1000);
    this.randomSelect();

    // Random manager select
    await clickAndWait(this.page, values.managerArea, 1000);
    this.randomSelect();
    await this.page.waitForTimeout(2000);

    const nameAreaText = await this.page.inputValue(values.nameArea);
    const addressAreaText = await this.page.inputValue(values.addressArea);
    const descriptionAreaText = await this.page.inputValue(
      values.descriptionArea,
    );
    const eMailAreaText = await this.page.inputValue(values.eMailArea);
    const phoneAreaText = await this.page.inputValue(values.phoneArea);
    const countryAreaText = await this.page.textContent(values.countryArea);
    const managerAreaText = await this.page.textContent(values.managerArea);

    clickAndWait(this.page, values.createBranchButton, 2000);
    await this.page.waitForTimeout(2000);
    await this.page.goto(`${baseURL}/settings/workspace/organization/branches`);
    await this.page.waitForTimeout(3000);

    const listBranchNameAreaOneText = await this.page.textContent(
      values.listBranchNameAreaOne,
    );

    const listBranchCountryAreaOneText = await this.page.textContent(
      values.listBranchCountryAreaOne,
    );
    expect(listBranchNameAreaOneText).toEqual(nameAreaText);
    expect(listBranchCountryAreaOneText).toEqual(countryAreaText);
    await this.page.waitForTimeout(4000);

    clickAndWait(this.page, values.listBranchDetailButtonOne, 2000);
    clickAndWait(this.page, values.listBranchGoToDetailOne, 2000);

    const branchDetailNameHeaderAreaText = await this.page.textContent(
      values.branchDetailNameHeaderArea,
    );
    const branchDetailDescriptionHeaderAreaText = await this.page.textContent(
      values.branchDetailDescriptionHeaderArea,
    );
    const branchDetailAddressAreaText = await this.page.textContent(
      values.branchDetailAddressArea,
    );
    const branchDetailCountryAreaText = await this.page.textContent(
      values.branchDetailCountryArea,
    );
    const branchDetailPhoneAreaText = await this.page.textContent(
      values.branchDetailPhoneArea,
    );
    const branchDetailEmailAreaText = await this.page.textContent(
      values.branchDetailEmailArea,
    );
    const branchDetailBranchManagerNameAreaText = await this.page.textContent(
      values.branchDetailBranchManagerNameArea,
    );
    const modifiedManagerAreaText = managerAreaText?.substring(2);
    const modifiedPhoneText = phoneAreaText
      ?.replace(/[()\- ]/g, '')
      .replace(/[()]/g, '');
    const modifiedDetailPhoneText = branchDetailPhoneAreaText
      ?.replace(/\s+/g, '')
      .replace(/[()]/g, '');

    expect(branchDetailNameHeaderAreaText).toEqual(nameAreaText);
    expect(branchDetailDescriptionHeaderAreaText).toEqual(descriptionAreaText);
    expect(branchDetailAddressAreaText).toEqual(addressAreaText);
    expect(branchDetailCountryAreaText).toEqual(countryAreaText);
    expect(modifiedDetailPhoneText).toEqual(modifiedPhoneText);
    expect(branchDetailEmailAreaText).toEqual(eMailAreaText);
    expect(branchDetailBranchManagerNameAreaText).toContain(
      modifiedManagerAreaText,
    );
  }
  async editBranch() {
    clickAndWait(this.page, values.listBranchDetailButtonOne, 2000);
    clickAndWait(this.page, values.listBranchGoToDetailOne, 2000);
    await clickAndWait(this.page, values.branchDetailEditButton, 2000);
    await fillAndWait(this.page, values.nameArea, values.editNameText, 1000);
    await fillAndWait(
      this.page,
      values.addressArea,
      values.editAddressText,
      1000,
    );

    await fillAndWait(
      this.page,
      values.descriptionArea,
      values.editDescriptionText,
      1000,
    );

    await fillAndWait(this.page, values.eMailArea, values.editEmailText, 2000);
    await fillAndWait(this.page, values.phoneArea, values.editPhoneText, 2000);

    // Random Country Seçimi
    await clickAndWait(this.page, values.countryArea, 1000);
    this.randomSelect();
    await this.page.waitForTimeout(2000);

    const nameAreaText = await this.page.inputValue(values.nameArea);
    const addressAreaText = await this.page.inputValue(values.addressArea);
    const descriptionAreaText = await this.page.inputValue(
      values.descriptionArea,
    );
    const eMailAreaText = await this.page.inputValue(values.eMailArea);
    const phoneAreaText = await this.page.inputValue(values.phoneArea);
    const countryAreaText = await this.page.textContent(values.countryArea);
    clickAndWait(this.page, values.createBranchButton, 2000);
    await this.page.waitForTimeout(2000);
    await this.page.goto(`${baseURL}/settings/workspace/organization/branches`);
    await this.page.waitForTimeout(3000);

    const listBranchNameAreaOneText = await this.page.textContent(
      values.listBranchNameAreaOne,
    );

    const listBranchCountryAreaOneText = await this.page.textContent(
      values.listBranchCountryAreaOne,
    );
    expect(listBranchNameAreaOneText).toEqual(nameAreaText);
    expect(listBranchCountryAreaOneText).toEqual(countryAreaText);
    await this.page.waitForTimeout(4000);

    clickAndWait(this.page, values.listBranchDetailButtonOne, 2000);
    clickAndWait(this.page, values.listBranchGoToDetailOne, 2000);

    const branchDetailNameHeaderAreaText = await this.page.textContent(
      values.branchDetailNameHeaderArea,
    );
    const branchDetailDescriptionHeaderAreaText = await this.page.textContent(
      values.branchDetailDescriptionHeaderArea,
    );
    const branchDetailAddressAreaText = await this.page.textContent(
      values.branchDetailAddressArea,
    );
    const branchDetailCountryAreaText = await this.page.textContent(
      values.branchDetailCountryArea,
    );
    const branchDetailPhoneAreaText = await this.page.textContent(
      values.branchDetailPhoneArea,
    );
    const branchDetailEmailAreaText = await this.page.textContent(
      values.branchDetailEmailArea,
    );

    const modifiedPhoneText = phoneAreaText
      ?.replace(/[()\- ]/g, '')
      .replace(/[()]/g, '');
    const modifiedDetailPhoneText = branchDetailPhoneAreaText
      ?.replace(/\s+/g, '')
      .replace(/[()]/g, '');

    expect(branchDetailNameHeaderAreaText).toEqual(nameAreaText);
    expect(branchDetailDescriptionHeaderAreaText).toEqual(descriptionAreaText);
    expect(branchDetailAddressAreaText).toEqual(addressAreaText);
    expect(branchDetailCountryAreaText).toEqual(countryAreaText);
    expect(modifiedDetailPhoneText).toEqual(modifiedPhoneText);
    expect(branchDetailEmailAreaText).toEqual(eMailAreaText);
  }
  async branchManagerChange() {
    clickAndWait(this.page, values.listBranchDetailButtonOne, 2000);
    clickAndWait(this.page, values.listBranchGoToDetailOne, 2000);
    clickAndWait(this.page, values.branchDetailChangeManagerButton, 2000);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.branchDetailManagerSelectArea, 1000);
    this.randomSelect();
    await this.page.waitForTimeout(2000);
    const managerAreaText = await this.page.textContent(
      values.branchDetailManagerSelectArea,
    );
    const modifiedManagerAreaText = managerAreaText?.substring(2);
    clickAndWait(this.page, values.branchDetailManagerUpdate, 2000);
    await this.page.waitForTimeout(2000);
    const branchDetailBranchManagerNameEdited = await this.page.textContent(
      values.branchDetailBranchManagerNameArea,
    );
    expect(modifiedManagerAreaText).toEqual(
      branchDetailBranchManagerNameEdited,
    );
  }
  async branchManagerDelete() {
    clickAndWait(this.page, values.listBranchDetailButtonOne, 2000);
    await this.page.waitForTimeout(3000);
    clickAndWait(this.page, values.listBranchGoToDetailOne, 2000);
    await this.page.waitForTimeout(3000);
    clickAndWait(this.page, values.branchDetailChangeManagerButton, 2000);
    await this.page.waitForTimeout(3000);
    clickAndWait(this.page, values.branchDetailManagerRemoveButton, 1000);
    await this.page.waitForTimeout(3000);
  }
  async branchManagerDetailDelete() {
    clickAndWait(this.page, values.listBranchDetailButtonOne, 2000);
    clickAndWait(this.page, values.listBranchGoToDetailOne, 2000);
    clickAndWait(this.page, values.branchManagerDetailButton, 2000);
    clickAndWait(this.page, values.branchManagerRemoveButton, 1000);
    clickAndWait(this.page, values.deleteBranchConfirmButton, 1000);

    await this.page.waitForTimeout(3000);
  }
  async branchAddManager() {
    await this.page.goto(`${baseURL}/settings/workspace/organization/branches`);
    await this.page.waitForTimeout(3000);
    clickAndWait(this.page, values.listBranchDetailButtonOne, 2000);
    clickAndWait(this.page, values.listBranchGoToDetailOne, 2000);
    clickAndWait(this.page, values.branchDetailAddManagerButton, 2000);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.branchDetailManagerSelectArea, 1000);
    this.randomSelect();
    await this.page.waitForTimeout(2000);
    const managerAreaText = await this.page.textContent(
      values.branchDetailManagerSelectArea,
    );
    const modifiedManagerAreaText = managerAreaText?.substring(2);
    clickAndWait(this.page, values.branchDetailManagerUpdate, 2000);
    await this.page.waitForTimeout(2000);
    const branchDetailBranchManagerNameEdited = await this.page.textContent(
      values.branchDetailBranchManagerNameArea,
    );
    expect(modifiedManagerAreaText).toEqual(
      branchDetailBranchManagerNameEdited,
    );
  }
  async branchDelete() {
    await this.page.goto(`${baseURL}/settings/workspace/organization/branches`);
    await this.page.waitForTimeout(3000);
    clickAndWait(this.page, values.listBranchDetailButtonOne, 2000);
    clickAndWait(this.page, values.listBranchGoToDetailOne, 2000);
    const branchDetailNameHeaderAreaText = await this.page.textContent(
      values.branchDetailNameHeaderArea,
    );
    clickAndWait(this.page, values.branchDetailDeleteBranchButton, 2000);
    clickAndWait(this.page, values.deleteBranchConfirmButton, 2000);
    await this.page.waitForTimeout(3000);
    await this.page.goto(`${baseURL}/settings/workspace/organization/branches`);
    await this.page.waitForTimeout(3000);
    const listBranchNameAreaOneText = await this.page.textContent(
      values.listBranchNameAreaOne,
    );
    expect(branchDetailNameHeaderAreaText).not.toEqual(
      listBranchNameAreaOneText,
    );
  }
  async branchAddEmployee() {
    clickAndWait(this.page, values.listBranchDetailButtonOne, 2000);
    clickAndWait(this.page, values.listBranchGoToDetailOne, 2000);
    await this.page.waitForTimeout(5000);
    clickAndWait(this.page, values.branchDetailEmployeesTab, 2000);
    await this.page.waitForTimeout(5000);
    // const branchDetailEmployeesTabHeader = this.page.textContent(
    //   values.branchDetailEmployeesTabHeader,
    // );
    // expect(branchDetailEmployeesTabHeader).toEqual(
    //   values.branchDetailEmployeesTabHeaderText,
    // );
    const branchDetailNameHeaderAreaText = await this.page.textContent(
      values.branchDetailNameHeaderArea,
    );
    clickAndWait(this.page, values.branchDetailEmployeeCreateButton, 2000);
    await fillAndWait(
      this.page,
      values.employeesCreateFirstNameArea,
      values.nameText,
      1000,
    );
    await fillAndWait(
      this.page,
      values.employeesCreateLastNameArea,
      values.lastnameText,
      1000,
    );
    await fillAndWait(
      this.page,
      values.employeesCreateEmailArea,
      values.emailText,
      1000,
    );
    await fillAndWait(
      this.page,
      values.employeesCreateEmailArea,
      values.emailText,
      1000,
    );
    await fillAndWait(
      this.page,
      values.employeesCreatePhoneArea,
      values.phoneText,
      1000,
    );
    await clickAndWait(this.page, values.employeesCreateBirthdayArea, 3000);
    await clickAndWait(this.page, values.employeesCreateBirthdayDate, 3000);
    // Random Country Seçimi
    await clickAndWait(this.page, values.employeesCreateCountryArea, 1000);
    this.randomSelect();

    await fillAndWait(
      this.page,
      values.employeesCreateAddressArea,
      values.addressText,
      1000,
    );
    const employeesCreateFirstNameAreaText = await this.page.inputValue(
      values.employeesCreateFirstNameArea,
    );
    const employeesCreateLastNameAreaText = await this.page.inputValue(
      values.employeesCreateLastNameArea,
    );
    const employeesCreateEmailAreaText = await this.page.inputValue(
      values.employeesCreateEmailArea,
    );
    const employeesCreateBranchAreaText = await this.page.textContent(
      values.employeesCreateBranchArea,
    );
    const employeesCreateAddressAreaText = await this.page.inputValue(
      values.employeesCreateAddressArea,
    );
    const employeesCreatePhoneAreaText = await this.page.inputValue(
      values.employeesCreatePhoneArea,
    );
    expect(branchDetailNameHeaderAreaText).toEqual(
      employeesCreateBranchAreaText,
    );
    await clickAndWait(this.page, values.employeeCreateSaveButton, 1000); // Save butonuna tıklanır.
    await this.page.waitForTimeout(3000);

    const employeesCreateFirstLastNameText =
      employeesCreateFirstNameAreaText + ' ' + employeesCreateLastNameAreaText;

    const branchEmployeeDetailNameHeaderText = await this.page.textContent(
      values.branchEmployeeDetailNameHeaderArea,
    );
    const branchEmployeeDetailEmailText = await this.page.textContent(
      values.branchEmployeeDetailEmailArea,
    );
    // Branch Employees Sayfasında Bilgiler Kontrol ediliyor.
    expect(employeesCreateFirstLastNameText).toEqual(
      branchEmployeeDetailNameHeaderText,
    );
    expect(employeesCreateEmailAreaText).toEqual(branchEmployeeDetailEmailText);
    // Employees Detail Bilgileri kontrol Ediliyor
    await clickAndWait(
      this.page,
      values.employeesTableNameDetailButtonFirst,
      2000,
    );
    await clickAndWait(
      this.page,
      values.employeesTableGoToDetailButtonFirst,
      2000,
    );
    const employeeDetailNameHeaderText = await this.page.textContent(
      values.employeeDetailNameHeader,
    );
    const employeeDetailEmailAreaText = await this.page.textContent(
      values.employeeDetailEmailArea,
    );
    const employeeDetailPhoneAreaText = await this.page.textContent(
      values.employeeDetailPhoneArea,
    );
    const employeeDetailBranchNameAreaText = await this.page.textContent(
      values.employeeDetailBranchNameArea,
    );
    const employeeDetailAddressAreaText = await this.page.textContent(
      values.employeeDetailAddressArea,
    );
    const modifiedPhoneText = employeesCreatePhoneAreaText
      ?.replace(/[()\- ]/g, '')
      .replace(/[()]/g, '');
    const modifiedDetailPhoneText = employeeDetailPhoneAreaText
      ?.replace(/\s+/g, '')
      .replace(/[()]/g, '');

    expect(employeesCreateFirstLastNameText).toEqual(
      employeeDetailNameHeaderText,
    );
    expect(employeesCreateEmailAreaText).toEqual(employeeDetailEmailAreaText);
    expect(modifiedPhoneText).toEqual(modifiedDetailPhoneText);
    expect(employeesCreateBranchAreaText).toEqual(
      employeeDetailBranchNameAreaText,
    );
    expect(employeesCreateAddressAreaText).toEqual(
      employeeDetailAddressAreaText,
    );
  }
}
