/*
import { expect, Page } from '@playwright/test';
import values from '../../pageobjects/company-management/teams.utils';
import { clickAndWait, fillAndWait } from '../../component/constant';

export default class TeamsPage {
  constructor(public page: Page) {}

  async teamsPageCheck() {
    const button = this.page.locator(values.teamsHeader);
    await expect(button).toContainText(values.teamsText);
  }
  async AddNewTeamCancelButtonControl() {
    await this.page.locator(values.teamCreateButton).click();
    await this.page.locator(values.crossMark).click();
    await this.page.locator(values.teamCreateButton).click();
    await this.page.locator(values.cancelButton).click();
  }
  async addTeamInvalidCases() {
    await this.page.locator(values.teamCreateButton).click();
    await expect(this.page.locator(values.addTeamCreate)).toBeEnabled();
    await clickAndWait(this.page, values.addTeamCreate, 1000);

    await fillAndWait(
      this.page,
      values.descriptionArea,
      values.descriptionText,
      1000,
    );
    await this.page.locator(values.addTeamCreate).click();
    await clickAndWait(this.page, values.departmentsArea, 1000);
    await fillAndWait(
      this.page,
      values.departmentsSearchArea,
      values.departmentText,
      1000,
    );
    await this.page.locator(values.departmentSelect).click();
    await this.page.locator(values.addTeamCreate).click();
    await clickAndWait(this.page, values.addTeamMangerArea, 1000);
    await fillAndWait(
      this.page,
      values.addTeamMangerSearchArea,
      values.addTeamMangerName,
      1000,
    );
    await this.page.locator(values.addTeamMangerSelect).click();
    await clickAndWait(this.page, values.addTeamCreate, 1000);
    await clickAndWait(this.page, values.departmentDeleteButton, 1000);
    await this.page.locator(values.addTeamCreate).click();
    await this.page.locator(values.nameArea).fill(values.nameText);
    await this.page.locator(values.addTeamCreate).click();
  }
  async newTeamCreate() {
    await this.page.locator(values.teamCreateButton).click();
    await this.page.locator(values.nameArea).fill(values.nameText);

    const nameElement = await this.page.$(values.nameArea);
    const nameValue = await nameElement?.getAttribute('value');
    const nameValueTrim = nameValue?.trim();
    console.log(nameValueTrim);

    await this.page
      .locator(values.descriptionArea)
      .fill(values.descriptionText);

    await clickAndWait(this.page, values.departmentsArea, 1000);
    await fillAndWait(
      this.page,
      values.departmentsSearchArea,
      values.departmentText,
      1000,
    );
    await this.page.locator(values.departmentSelect).click();

    const departmentNameElement = await this.page.$(values.departmentNameArea);
    const departmentNameValue = await departmentNameElement?.textContent();
    console.log(departmentNameValue);

    await clickAndWait(this.page, values.addTeamMangerArea, 1000);
    await fillAndWait(
      this.page,
      values.addTeamMangerSearchArea,
      values.addTeamMangerName,
      1000,
    );

    await clickAndWait(this.page, values.addTeamMangerSelect, 2000);
    await clickAndWait(this.page, values.addTeamCreate, 2000);

    const detailNameElement = await this.page.$(values.listNameArea);
    const detailNameValue = await detailNameElement?.textContent();
    console.log(detailNameValue);

    const detailDepartmentNameElement = await this.page.$(
      values.listDepartmentNameArea,
    );
    const detailDepartmentNameValue =
      await detailDepartmentNameElement?.textContent();
    console.log(detailDepartmentNameValue);

    expect(nameValueTrim).toEqual(detailNameValue);
    expect(departmentNameValue).toEqual(detailDepartmentNameValue);
  }
  async columnOpenClose() {
    await clickAndWait(this.page, values.departmentColumnMenu, 1000);
    await clickAndWait(this.page, values.departmentsCheck, 1000);
    expect(this.page.locator(values.departmentsHeader)).not.toBeVisible();
    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.managersCheck, 1000);
    expect(this.page.locator(values.managersHeader)).not.toBeVisible();
    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.createdDateCheck, 1000);
    expect(this.page.locator(values.createdDateHeader)).not.toBeVisible();
    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.departmentsCheck, 1000);
    await clickAndWait(this.page, values.managersCheck, 1000);
    await clickAndWait(this.page, values.createdDateCheck, 2000);

    await expect(this.page.locator(values.departmentsHeader)).toBeVisible();
    await expect(this.page.locator(values.managersHeader)).toBeVisible();
    await expect(this.page.locator(values.createdDateHeader)).toBeVisible();
  }
  async editTeamCancelButtonControl() {
    await clickAndWait(this.page, values.teamListFirst, 2000);
    await clickAndWait(this.page, values.editTeamButton, 1000);
    await clickAndWait(this.page, values.editTeamCrossMark, 1000);
    await clickAndWait(this.page, values.editTeamButton, 1000);
    await clickAndWait(this.page, values.editTeamCancelButton, 1000);
  }
  async editTeamInvalidCases() {
    const editTeamUpdate = this.page.locator(values.editTeamUpdate);

    await clickAndWait(this.page, values.teamListFirst, 2000);
    await clickAndWait(this.page, values.editTeamButton, 1000);
    await expect(editTeamUpdate).toBeDisabled();
    await this.page.waitForTimeout(1000);

    await fillAndWait(
      this.page,
      values.descriptionArea,
      values.descriptionText,
      3000,
    );
    await expect(editTeamUpdate).toBeEnabled();
    await this.page.waitForTimeout(3000);
    await fillAndWait(this.page, values.nameArea, '', 3000);

    await expect(editTeamUpdate).toBeDisabled();
    await this.page.waitForTimeout(1000);
    await this.page.locator(values.nameArea).fill(values.nameText);
    await clickAndWait(this.page, values.departmentDeleteButton, 1000);

    await expect(editTeamUpdate).toBeDisabled();
  }
  async editTeam() {
    await clickAndWait(this.page, values.teamListFirst, 2000);

    await this.page.click(values.editTeamButton);
    await expect(this.page.locator(values.editTeamUpdate)).toBeDisabled();
    //name
    const NameElement = await this.page.$(values.nameArea);
    const NameValue = await NameElement?.getAttribute('value');
    const NameValueTrim = NameValue?.trim();
    console.log(NameValueTrim);

    await fillAndWait(this.page, values.nameArea, values.nameText, 1000);

    const newNameElement = await this.page.$(values.nameArea);
    const newNameValue = await newNameElement?.getAttribute('value');
    const newNameValueTrim = newNameValue?.trim();
    console.log(newNameValueTrim);
    await this.page.waitForTimeout(2000);
    //description

    // const descriptionElement = await this.page.$("textarea#mantine-yfn9alynn");
    // const descriptionValue = await descriptionElement?.getAttribute('value');
    // const descriptionValueTrim = descriptionValue?.trim();
    // console.log(descriptionValueTrim);

    await fillAndWait(
      this.page,
      values.descriptionArea,
      values.descriptionText,
      1000,
    );

    // const newDescriptionElement = await this.page.$(values.descriptionArea);
    // const newDescriptionValue = await newDescriptionElement?.getAttribute('value');
    // const newDescriptionValueTrim = newDescriptionValue?.trim();
    // console.log(newDescriptionValueTrim);
    //departments
    await this.page.waitForTimeout(1000);

    await clickAndWait(this.page, values.departmentDeleteButton, 1000);
    await clickAndWait(this.page, values.departmentsArea, 1000);

    await fillAndWait(
      this.page,
      values.departmentsSearchArea,
      values.newDepartmentText,
      1000,
    );
    await clickAndWait(this.page, values.departmentSelect, 1000);
    //pop up içinde eski/yeni assertion

    expect(NameValueTrim).not.toEqual(newNameElement);
    // await expect(descriptionValueTrim).not.toEqual(newDescriptionValueTrim);

    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.editTeamUpdate, 3000);

    // const editedNameElement = await this.page.$(values.detailNameArea);
    // const editedNameValue = await editedNameElement?.getAttribute('value');
    // const editedNameValueTrim = editedNameValue?.trim();
    // console.log(editedNameValueTrim);

    // const editedDescriptionElement = await this.page.$(values.detailDescriptionArea);
    // const editedDescriptionValue = await editedDescriptionElement?.getAttribute('value');
    // const editedDescriptionValueTrim = editedDescriptionValue?.trim();
    // console.log(editedDescriptionValueTrim);
    // detay sayfasında editlerin doğru olması
    // await expect(newNameValueTrim).toEqual(editedNameValueTrim);
    // await expect(newDescriptionValueTrim).toEqual(editedDescriptionValueTrim);
  }
  async shortcutEditLeaderCancelButton() {
    await clickAndWait(this.page, values.teamListFirst, 1000);
    await clickAndWait(this.page, values.editLeaderButton, 1000);
    await clickAndWait(this.page, values.crossMark, 1000);
    await clickAndWait(this.page, values.editLeaderButton, 1000);
    await clickAndWait(this.page, values.editLeaderCancelButton, 1000);
  }
  async shortcutEditLeader() {
    await clickAndWait(this.page, values.teamListFirst, 1000);
    await clickAndWait(this.page, values.editLeaderButton, 2000);
    await clickAndWait(this.page, values.editTeamMangerArea, 1000);

    await clickAndWait(this.page, values.shortcutEditLeaderSelect, 2000);

    const editedTeamManagerNameElement = await this.page.$(
      values.editTeamMangerArea,
    );
    const editedTeamManagerNameValue =
      await editedTeamManagerNameElement?.textContent();
    console.log(editedTeamManagerNameValue);

    await clickAndWait(this.page, values.updateTeamLeaderButton, 3000);

    const detailManagerNameElement = await this.page.$(
      values.detailManagerNameArea,
    );
    const detailManagerNameValue =
      await detailManagerNameElement?.textContent();
    console.log(detailManagerNameValue);

    expect(editedTeamManagerNameValue).toEqual(detailManagerNameValue);
  }
  async shortcutRemoveLeaderButton() {
    await clickAndWait(this.page, values.teamListFirst, 1000);
    await clickAndWait(this.page, values.editLeaderButton, 1000);
    await clickAndWait(this.page, values.shortcutRemoveLeader, 1000);

    const areaElement = await this.page.$(values.teamManagerArea);
    const areaValue = await areaElement?.textContent();
    console.log(areaValue);

    expect(areaValue).toContain(values.teamManagerAreaText);
  }
  async shortcutAddLeader() {
    await clickAndWait(this.page, values.teamListFirst, 1000);
    await clickAndWait(this.page, values.shortcutAddLeaderButton, 1000);
    await clickAndWait(this.page, values.shortcutAddLeaderArea, 1000);

    await clickAndWait(this.page, values.shortcutAddLeaderSelect, 2000);

    const shortcutAddLeaderNameElement = await this.page.$(
      values.shortcutAddLeaderName,
    );
    const shortcutAddLeaderNameValue =
      await shortcutAddLeaderNameElement?.textContent();
    console.log(shortcutAddLeaderNameValue);

    await clickAndWait(this.page, values.updateTeamLeaderButton, 3000);

    const detailManagerNameElement = await this.page.$(
      values.detailManagerNameArea,
    );
    const detailManagerNameValue =
      await detailManagerNameElement?.textContent();
    console.log(detailManagerNameValue);

    expect(shortcutAddLeaderNameValue).toEqual(detailManagerNameValue);
  }
  async addTeamMember() {
    await clickAndWait(this.page, values.teamListFirst, 1000);
    await clickAndWait(this.page, values.addTeamMemberButton, 2000);
    await clickAndWait(this.page, values.addTeamMemberArea, 1000);

    await clickAndWait(this.page, values.addTeamMemberSelected, 2000);

    const addTeamMemberNameElement = await this.page.$(
      values.addTeamMemberName,
    );
    const addTeamMemberNameArea = await addTeamMemberNameElement?.textContent();
    console.log(addTeamMemberNameArea);

    await clickAndWait(this.page, values.updateTeamLeaderButton, 3000);

    const teamMemberNameAreaElement = await this.page.$(
      values.teamMemberNameArea,
    );
    const teamMemberNameAreaValue =
      await teamMemberNameAreaElement?.textContent();
    console.log(teamMemberNameAreaValue);

    expect(addTeamMemberNameArea).toEqual(teamMemberNameAreaValue);
  }
  async teamMemberTableColumn() {
    await clickAndWait(this.page, values.teamListFirst, 1000);
    await clickAndWait(this.page, values.teamMemberColumnMenu, 1000);
    await clickAndWait(this.page, values.branchCheck, 1000);

    expect(this.page.locator(values.branchHeader)).not.toBeVisible();
    await clickAndWait(this.page, values.branchCheck, 1000);
    await expect(this.page.locator(values.branchHeader)).toBeVisible();
  }
  async deleteTeamCancelButtonControl() {
    await clickAndWait(this.page, values.teamListFirst, 1000);
    await clickAndWait(this.page, values.deleteTeamActionButton, 2000);
    await clickAndWait(this.page, values.deleteTeamButton, 1000);
    await clickAndWait(this.page, values.deleteTeamCrossMark, 1000);
    await clickAndWait(this.page, values.deleteTeamActionButton, 2000);
    await clickAndWait(this.page, values.deleteTeamButton, 1000);
    await clickAndWait(this.page, values.deleteTeamCancelButton, 1000);
  }
  async deleteTeam() {
    await clickAndWait(this.page, values.teamListFirst, 1000);
    await clickAndWait(this.page, values.deleteTeamActionButton, 2000);
    await clickAndWait(this.page, values.deleteTeamButton, 1000);
    await clickAndWait(this.page, values.deleteTeamDeleteButton, 1000);
  }
}
*/
