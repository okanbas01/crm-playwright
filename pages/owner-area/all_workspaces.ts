import { expect, Page } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../component/constant';
import { baseURL } from '../../pageobjects/loginPage';
import values from '../../pageobjects/owner-area/all_workspaces.utils';

export default class allWorkspacesPage {
  constructor(public page: Page) {}

  async createNewGroup() {
    await this.page.goto(`${baseURL}/settings/workspaces`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.newGroupButton, 500);

    await fillAndWait(
      this.page,
      values.groupNameInput,
      values.groupNameText,
      500,
    );
    const formGroupNameText = await this.page.inputValue(values.groupNameInput);
    console.log('formGroupNameText:', formGroupNameText);

    await fillAndWait(
      this.page,
      values.descriptionInput,
      values.descriptionText,
      500,
    );
    const formDescriptionText = await this.page.inputValue(
      values.descriptionInput,
    );
    console.log('formDescriptionText:', formDescriptionText);
    this.randomSelect(values.formColorList);
    await this.page.waitForTimeout(500);
    const selectedColor = await this.getBackgroundColorAfterSelect(
      values.formColorList,
    );
    console.log('Selected color:', selectedColor);

    await clickAndWait(this.page, values.workspacesDropdown, 500);
    this.randomSelect(values.dropdownList);
    await this.page.waitForTimeout(500);
    await clickAndWait(this.page, values.saveButton, 500);
  }
  async randomSelect(selector) {
    const elements = await this.page.$$(selector);
    const randomIndex = Math.floor(Math.random() * elements.length); // Rastgele bir indeks seçin
    const randomElement = elements[randomIndex];
    await randomElement.click();
  }
  async getBackgroundColorAfterSelect(selector) {
    // Rengi seçin
    await this.randomSelect(selector);

    // Rengi temsil eden elementi seçin
    const colorElement = await this.page.$(selector);

    // Elementin hesaplanmış stilini alın ve arka plan rengini öğrenin
    const style = await this.page.evaluate((element) => {
      const computedStyle = window.getComputedStyle(element);
      return computedStyle.backgroundColor;
    }, colorElement);

    return style;
  }
  async editGroup() {
    await this.page.goto(`${baseURL}/settings/workspaces`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.groupHeader, 500);
    await clickAndWait(this.page, values.groupHeaderDetailButton, 500);
    await clickAndWait(this.page, values.editButton, 500);

    await fillAndWait(
      this.page,
      values.groupNameInput,
      values.groupNameText,
      500,
    );
    const formGroupNameText = await this.page.inputValue(values.groupNameInput);
    console.log('formGroupNameText:', formGroupNameText);

    await fillAndWait(
      this.page,
      values.descriptionInput,
      values.descriptionText,
      500,
    );
    const formDescriptionText = await this.page.inputValue(
      values.descriptionInput,
    );
    console.log('formDescriptionText:', formDescriptionText);
    this.randomSelect(values.formColorList);
    await this.page.waitForTimeout(500);
    const selectedColor = await this.getBackgroundColorAfterSelect(
      values.formColorList,
    );
    console.log('Selected color:', selectedColor);

    await clickAndWait(this.page, values.workspacesDropdown, 500);
    this.randomSelect(values.dropdownList);
    await this.page.waitForTimeout(500);
    await clickAndWait(this.page, values.saveButton, 500);

    //edit işlemi kontrol edilir
    const listGroupName = await this.page.textContent(values.listGroupName);
    console.log('listGroupName:', listGroupName);
    const listDescriptionName = await this.page.textContent(
      values.listDescriptionName,
    );
    console.log('listDescriptionName:', listDescriptionName);

    expect(listGroupName).toEqual(formGroupNameText);
    expect(listDescriptionName).toEqual(formDescriptionText);
  }
  async currentWorkspace() {
    await this.page.goto(`${baseURL}/settings/workspaces`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.groupHeader, 500);
    await clickAndWait(this.page, values.workspaceDetailButton, 500);
    await clickAndWait(this.page, values.switchWorkspace, 500);
    await this.page.goto(`${baseURL}/settings/workspaces`);
    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.groupHeader, 500);

    const currentWorkspace = await this.page.textContent(
      values.currentWorkspaceArea,
    );
    //Group içinde workspace ismi yanındaki textde yansıdığı kontrol edilir
    expect(currentWorkspace).toContain(values.currentWorkspaceText);
    console.log('currentWorkspace:', currentWorkspace);

    //Anasayfada sol üst taraf içindeki Workspaces alanına yansıdığı kontrol edilir
    await this.page.goto(`${baseURL}`);
    await this.page.waitForTimeout(2000);

    const selectedWorkspaceName = await this.page.textContent(
      values.workspaceMainMenu,
    );
    console.log('selectedWorkspaceName:', selectedWorkspaceName);
    if (selectedWorkspaceName !== null && currentWorkspace !== null) {
      const cleanedcurrentWorkspace = currentWorkspace
        .replace('(Current workspace)', '')
        .trim();

      const cleanedSelectedWorkspaceName = selectedWorkspaceName
        .replace('(Current workspace)', '')
        .trim();
      const modifiedSelectedWorkspaceName =
        cleanedSelectedWorkspaceName.substring(2);
      expect(cleanedcurrentWorkspace).toEqual(modifiedSelectedWorkspaceName);
    }
  }
  async maintenanceMode() {
    await this.page.goto(`${baseURL}/settings/workspaces`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.groupHeader, 500);
    await clickAndWait(this.page, values.workspaceDetailButton, 500);
    await clickAndWait(this.page, values.maintenanceMode, 500);
    await clickAndWait(this.page, values.confirmButton, 500);

    const groupMaintenanceInformation = await this.page.textContent(
      values.groupMaintenanceInformation,
    );
    console.log('groupMaintenanceInformation:', groupMaintenanceInformation);

    const allWorkspacesMaintenanceInformation = await this.page.textContent(
      values.allWorkspacesMaintenanceInformation,
    );
    console.log(
      'allWorkspacesMaintenanceInformation:',
      allWorkspacesMaintenanceInformation,
    );

    expect(values.maintenanceText).toEqual(groupMaintenanceInformation);
    expect(values.maintenanceText).toEqual(allWorkspacesMaintenanceInformation);
  }
  async allCompanyMaintenanceMode() {
    await this.page.goto(`${baseURL}/settings/workspaces`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.maintenanceButton, 500);
    await clickAndWait(this.page, values.allMaintenanceButton, 500);
    await clickAndWait(this.page, values.updateButton, 500);
    //assertion eklenemedi bakım moduna geçilemediği için
  }
  async selectedCompanyMaintenanceMode() {
    await this.page.goto(`${baseURL}/settings/workspaces`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.maintenanceButton, 500);
    await clickAndWait(this.page, values.selectedCompanyMaintenanceButton, 500);
    await clickAndWait(this.page, values.workspacesArea, 500);
    this.randomSelect(values.dropdownList);
    await this.page.waitForTimeout(500);
    await clickAndWait(this.page, values.workspacesArea, 500);
    await clickAndWait(this.page, values.updateButton, 500);
    //assertion eklenemedi bakım moduna geçilemediği için
  }
  async createWorkspace() {
    await this.page.goto(`${baseURL}/settings/workspaces`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.workspaceButton, 500);

    await fillAndWait(
      this.page,
      values.workspaceNameInput,
      values.workspaceNameText,
      500,
    );
    const formWorkspaceNameText = await this.page.inputValue(
      values.workspaceNameInput,
    );
    console.log('formWorkspaceNameText:', formWorkspaceNameText);

    const randomWord = this.generateRandomWord(5); //random harfler yazılır

    await fillAndWait(this.page, values.subdomainInput, await randomWord, 500);
    const formSubdomainNameText = await this.page.inputValue(
      values.subdomainInput,
    );
    console.log('formSubdomainNameText:', formSubdomainNameText);

    await fillAndWait(this.page, values.addressInput, values.addressText, 1000);

    const formAddressNameText = await this.page.inputValue(values.addressInput);
    console.log('formAddressNameText:', formAddressNameText);

    await fillAndWait(
      this.page,
      values.workspaceDescriptionInput,
      values.descriptionText,
      500,
    );
    const formDescriptionText = await this.page.inputValue(
      values.workspaceDescriptionInput,
    );
    console.log('formDescriptionText:', formDescriptionText);

    await clickAndWait(this.page, values.saveWorkspace, 1000);
    await this.page.waitForTimeout(2000);

    await this.page.reload();

    await this.page.waitForTimeout(2000);

    const listWorkspaceName = await this.page.textContent(
      values.listWorkspaceName,
    );
    console.log('listWorkspaceName:', listWorkspaceName);

    const listSubDomainName = await this.page.textContent(
      values.listSubDomainName,
    );
    console.log('listSubDomainName:', listSubDomainName);

    // expect(formWorkspaceNameText).toEqual(listWorkspaceName);
    // expect(formSubdomainNameText).toEqual(listSubDomainName);
  }
  // Rastgele bir kelime oluşturan bir fonksiyon
  async generateRandomWord(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyz';
    let randomWord = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomWord += charset.charAt(randomIndex);
    }

    return randomWord;
  }
  async detailSettings() {
    await this.page.goto(`${baseURL}/settings/workspaces`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.detailActionsButton, 500);
    await clickAndWait(this.page, values.detailSettingsButton, 500);
    await this.page.waitForTimeout(5000);

    const generalWorkspaceName = await this.page.textContent(
      values.generalWorkspaceArea,
    );
    console.log('generalWorkspaceName:', generalWorkspaceName);

    await this.page.goto(`${baseURL}/settings/workspaces`);
    await this.page.waitForTimeout(2000);

    const listWorkspaceName = await this.page.textContent(
      values.listWorkspaceName,
    );
    console.log('listWorkspaceName:', listWorkspaceName);

    expect(listWorkspaceName).toEqual(
      `${generalWorkspaceName} (Current workspace)`,
    );
    await this.page.goto(`${baseURL}`);
    await this.page.waitForTimeout(2000);

    const selectedWorkspaceName = await this.page.textContent(
      values.workspaceMainMenu,
    );
    console.log('selectedWorkspaceName:', selectedWorkspaceName);
    if (selectedWorkspaceName !== null && listWorkspaceName !== null) {
      const cleanedCurrentWorkspace = listWorkspaceName
        .replace('(Current workspace)', '')
        .trim();

      const cleanedSelectedWorkspaceName = selectedWorkspaceName
        .replace('(Current workspace)', '')
        .trim();
      const modifiedSelectedWorkspaceName =
        cleanedSelectedWorkspaceName.substring(1);
      expect(cleanedCurrentWorkspace).toEqual(modifiedSelectedWorkspaceName);
    }
  }
  async detailSwitchWorkspace() {
    await this.page.goto(`${baseURL}/settings/workspaces`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.detailActionsButton, 500);
    await clickAndWait(this.page, values.detailSwitchWorkspaceButton, 500);
    await this.page.waitForTimeout(5000);
    const generalWorkspaceName = await this.page.textContent(
      values.generalWorkspaceArea,
    );
    console.log('generalWorkspaceName:', generalWorkspaceName);

    await this.page.goto(`${baseURL}/settings/workspaces`);
    await this.page.waitForTimeout(2000);

    const listWorkspaceName = await this.page.textContent(
      values.listWorkspaceName,
    );
    console.log('listWorkspaceName:', listWorkspaceName);

    expect(listWorkspaceName).toEqual(
      `${generalWorkspaceName} (Current workspace)`,
    );
    await this.page.goto(`${baseURL}`);
    await this.page.waitForTimeout(2000);

    const selectedWorkspaceName = await this.page.textContent(
      values.workspaceMainMenu,
    );
    console.log('selectedWorkspaceName:', selectedWorkspaceName);

    if (selectedWorkspaceName !== null && listWorkspaceName !== null) {
      const cleanedCurrentWorkspace = listWorkspaceName
        .replace('(Current workspace)', '')
        .trim();

      const cleanedSelectedWorkspaceName = selectedWorkspaceName
        .replace('(Current workspace)', '')
        .trim();
      const modifiedSelectedWorkspaceName =
        cleanedSelectedWorkspaceName.substring(1);
      expect(cleanedCurrentWorkspace).toEqual(modifiedSelectedWorkspaceName);
    }
  }
  async detailMaintenanceWorkspace() {
    await this.page.goto(`${baseURL}/settings/workspaces`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.detailActionsButton, 500);
    await clickAndWait(this.page, values.detailMaintenanceButton, 500);
    await clickAndWait(this.page, values.confirmButton, 500);

    const listMaintenanceText = await this.page.textContent(
      values.allWorkspacesMaintenanceInformation,
    );
    console.log('listMaintenanceText:', listMaintenanceText);
    expect(listMaintenanceText).toEqual(values.maintenanceText);
    await this.page.waitForTimeout(500);

    //tekrar bakım modundan çıkarılır
    await clickAndWait(this.page, values.detailActionsButton, 500);
    await clickAndWait(this.page, values.detailMaintenanceButton, 500);
    await clickAndWait(this.page, values.confirmButton, 500);
  }
  async deleteWorkspace() {
    await this.page.goto(`${baseURL}/settings/workspaces`);
    await this.page.waitForTimeout(2000);

    const listWorkspaceName = await this.page.textContent(
      values.listWorkspaceName,
    );
    console.log('listWorkspaceName:', listWorkspaceName);
    await clickAndWait(this.page, values.detailActionsButton, 500);
    await clickAndWait(this.page, values.detailDeleteButton, 500);
    await clickAndWait(this.page, values.confirmButton, 500);

    const afterDeleteWorkspaceName = await this.page.textContent(
      values.listWorkspaceName,
    );
    expect(listWorkspaceName).not.toEqual(afterDeleteWorkspaceName);
  }
}
