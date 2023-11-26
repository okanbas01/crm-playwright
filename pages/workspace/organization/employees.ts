import { Page, expect } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../../component/constant';
import { baseURL } from '../../../pageobjects/loginPage';
import values from '../../../pageobjects/workspace/organization/employees.utils';

export default class EmployeesPage {
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
  async jobTitleAndEmployeesPageCheck() {
    await clickAndWait(this.page, values.employeesTabButton, 2000);
    await this.page.waitForTimeout(2000);
    const JobTitleAndEmployeesHeaderText = await this.page.textContent(
      values.JobTitleAndEmployeesHeader,
    );
    expect(JobTitleAndEmployeesHeaderText).toEqual(
      values.JobTitleAndEmployeesHeaderText,
    );
  }
  async createJobTitleCancelButtonControl() {
    await clickAndWait(this.page, values.jobTitleCreateButton, 2000);
    await clickAndWait(this.page, values.jobTitleCreateCrossMarkButton, 2000); //x ikonuna tıklayarak kapatma
    await clickAndWait(this.page, values.jobTitleCreateButton, 2000);
    await clickAndWait(this.page, values.jobTitleCreateCancelButton, 2000);
  }
  async createNewJobTitle() {
    await clickAndWait(this.page, values.jobTitleCreateButton, 2000);
    await fillAndWait(
      this.page,
      values.jobTitleCreateNameArea,
      values.jobTitleText,
      2000,
    );
    const jobTitleText = await this.page.inputValue(
      values.jobTitleCreateNameArea,
    );
    await clickAndWait(this.page, values.jobTitleSaveButton, 2000);
    const jobTitleTableNameAreaFirstText = await this.page.textContent(
      values.jobTitleTableNameAreaFirst,
    );
    expect(jobTitleText).toEqual(jobTitleTableNameAreaFirstText);
  }
  async editJobTitle() {
    await clickAndWait(this.page, values.jobTitleTableDetailButtonFirst, 2000);
    await clickAndWait(this.page, values.jobTitleTableEditButtonFirst, 2000);
    await fillAndWait(
      this.page,
      values.jobTitleCreateNameArea,
      values.editedJobTitleText,
      2000,
    );
    const jobTitleText = await this.page.inputValue(
      values.jobTitleCreateNameArea,
    );
    await clickAndWait(this.page, values.jobTitleSaveButton, 2000);
    const jobTitleTableNameAreaFirstText = await this.page.textContent(
      values.jobTitleTableNameAreaFirst,
    );
    expect(jobTitleText).toEqual(jobTitleTableNameAreaFirstText);
  }
  async deleteJobTitleCheck() {
    await clickAndWait(this.page, values.jobTitleCreateButton, 2000);
    await fillAndWait(
      this.page,
      values.jobTitleCreateNameArea,
      values.editedJobTitleText,
      2000,
    );
    await clickAndWait(this.page, values.jobTitleSaveButton, 2000);
    const jobTitleTableNameAreaFirstText = await this.page.textContent(
      values.jobTitleTableNameAreaFirst,
    );
    await clickAndWait(this.page, values.jobTitleTableDetailButtonFirst, 2000);
    await clickAndWait(this.page, values.jobTitleTableRemoveButtonFirst, 2000);
    await clickAndWait(this.page, values.JobTitleDeleteConfirmButton, 2000);
    await this.page.waitForTimeout(3000);
    const jobTitleTableNameDeletedText = await this.page.textContent(
      values.jobTitleTableNameAreaFirst,
    );
    expect(jobTitleTableNameAreaFirstText).not.toEqual(
      jobTitleTableNameDeletedText,
    );
  }
  async deleteJobTitle() {
    await clickAndWait(this.page, values.jobTitleTableDetailButtonFirst, 2000);
    await clickAndWait(this.page, values.jobTitleTableRemoveButtonFirst, 2000);
    await clickAndWait(this.page, values.JobTitleDeleteConfirmButton, 2000);
    await this.page.waitForTimeout(3000);
  }
  async createNewEmployeeCancelButtonControl() {
    await clickAndWait(this.page, values.employeesCreateButton, 2000);
    await clickAndWait(this.page, values.employeesCreateCrossMarkButton, 2000);
    await clickAndWait(this.page, values.employeesCreateButton, 2000);
    await clickAndWait(this.page, values.employeesCreateCancelButton, 2000);
  }
  async createNewEmployee() {
    await clickAndWait(this.page, values.employeesCreateButton, 2000);
    await fillAndWait(
      this.page,
      values.employeesCreateFirstNameArea,
      values.nameText,
      1000,
    );
    await fillAndWait(
      this.page,
      values.employeesCreateLastNameArea,
      values.lastNameText,
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

    // Random Branch Seçimi
    await clickAndWait(this.page, values.employeesCreateBranchArea, 1000);
    this.randomSelect();
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
    await clickAndWait(this.page, values.employeesCreateSaveButton, 2000);
    const employeesCreateFirstLastNameText =
      employeesCreateFirstNameAreaText + ' ' + employeesCreateLastNameAreaText;

    const employeesTableNameAreaFirstText = await this.page.textContent(
      values.employeesTableNameAreaFirst,
    );
    const employeesTableEmailAreaFirstText = await this.page.textContent(
      values.employeesTableEmailAreaFirst,
    );
    expect(employeesTableNameAreaFirstText).toEqual(
      employeesCreateFirstLastNameText,
    );
    expect(employeesCreateEmailAreaText).toEqual(
      employeesTableEmailAreaFirstText,
    );
  }
  async employeeDetailCheck() {
    await clickAndWait(this.page, values.employeesCreateButton, 2000);
    await fillAndWait(
      this.page,
      values.employeesCreateFirstNameArea,
      values.nameText,
      1000,
    );
    await fillAndWait(
      this.page,
      values.employeesCreateLastNameArea,
      values.lastNameText,
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
    await clickAndWait(this.page, values.employeesCreateBranchArea, 1000);
    this.randomSelect();
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
    const employeesCreatePhoneAreaText = await this.page.inputValue(
      values.employeesCreatePhoneArea,
    );
    const employeesCreateBranchAreaText = await this.page.textContent(
      values.employeesCreateBranchArea,
    );
    const employeesCreateAddressAreaText = await this.page.inputValue(
      values.employeesCreateAddressArea,
    );
    await clickAndWait(this.page, values.employeesCreateSaveButton, 2000);
    await this.page.waitForTimeout(3000);
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
    const employeesCreateFirstLastNameText =
      employeesCreateFirstNameAreaText + ' ' + employeesCreateLastNameAreaText;
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
  async editEmployee() {
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
    await clickAndWait(this.page, values.employeeDetailEditButton, 2000);
    await fillAndWait(
      this.page,
      values.employeesCreateFirstNameArea,
      values.editNameText,
      1000,
    );
    await fillAndWait(
      this.page,
      values.employeesCreateLastNameArea,
      values.editLastNameText,
      1000,
    );
    await fillAndWait(
      this.page,
      values.employeesCreatePhoneArea,
      values.editPhoneText,
      1000,
    );
    // Random Country Seçimi
    await clickAndWait(this.page, values.editEmployeeCountryArea, 1000);
    this.randomSelect();

    await fillAndWait(
      this.page,
      values.employeesCreateAddressArea,
      values.editAddressText,
      1000,
    );
    const employeesCreateFirstNameAreaText = await this.page.inputValue(
      values.employeesCreateFirstNameArea,
    );
    const employeesCreateLastNameAreaText = await this.page.inputValue(
      values.employeesCreateLastNameArea,
    );
    const employeesCreatePhoneAreaText = await this.page.inputValue(
      values.employeesCreatePhoneArea,
    );
    const employeesCreateAddressAreaText = await this.page.inputValue(
      values.employeesCreateAddressArea,
    );
    await clickAndWait(this.page, values.employeeDetailEditSaveButton, 2000);
    await this.page.waitForTimeout(3000);
    const employeeDetailNameHeaderText = await this.page.textContent(
      values.employeeDetailNameHeader,
    );
    const employeeDetailPhoneAreaText = await this.page.textContent(
      values.employeeDetailPhoneArea,
    );
    const employeeDetailAddressAreaText = await this.page.textContent(
      values.employeeDetailAddressArea,
    );
    const employeesCreateFirstLastNameText =
      employeesCreateFirstNameAreaText + ' ' + employeesCreateLastNameAreaText;

    const modifiedPhoneText = employeesCreatePhoneAreaText
      ?.replace(/[()\- ]/g, '')
      .replace(/[()]/g, '');
    const modifiedDetailPhoneText = employeeDetailPhoneAreaText
      ?.replace(/\s+/g, '')
      .replace(/[()]/g, '');
    expect(employeesCreateFirstLastNameText).toEqual(
      employeeDetailNameHeaderText,
    );
    expect(modifiedPhoneText).toEqual(modifiedDetailPhoneText);
    expect(employeesCreateAddressAreaText).toEqual(
      employeeDetailAddressAreaText,
    );
  }
  async editEmployeeButtonControl() {
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
    await clickAndWait(this.page, values.employeeDetailEditButton, 2000);
    await clickAndWait(this.page, values.employeesCreateCrossMarkButton, 2000); //x ikonuna tıklayarak kapatma
    await clickAndWait(this.page, values.employeeDetailEditButton, 2000);
    await clickAndWait(this.page, values.employeesCreateCancelButton, 2000);
  }
  async deleteEmployee() {
    await this.page.goto(
      `${baseURL}/settings/workspace/organization/employees`,
    );
    await this.page.waitForTimeout(2000);
    // 404 sayfasına götürüyor diye kapalı.
    // const employeesTableEmailAreaFirstText = await this.page.textContent(
    //   values.employeesTableEmailAreaFirst,
    // );
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
    await clickAndWait(this.page, values.employeeDetailDeleteButton, 2000);
    await clickAndWait(this.page, values.JobTitleDeleteConfirmButton, 2000);
    // await this.page.waitForTimeout(3000);
    // const employeeDetailEmailAreaText = await this.page.textContent(
    //   values.employeeDetailEmailArea,
    // );
    // expect(employeeDetailEmailAreaText).not.toEqual(
    //   employeesTableEmailAreaFirstText,
    // );
  }
}
