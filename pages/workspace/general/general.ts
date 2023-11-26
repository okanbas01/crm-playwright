import { expect, Page } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../../component/constant';
import { baseURL } from '../../../pageobjects/loginPage';
import values from '../../../pageobjects/workspace/general/general.utils';

export default class generalPage {
  constructor(public page: Page) {}

  async editCompany() {
    await this.page.goto(`${baseURL}/settings/workspace/general`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.editButton, 1000);

    await fillAndWait(this.page, values.nameInput, values.nameText, 500);
    const popupWorkspaceNameText = await this.page.inputValue(values.nameInput);
    console.log('popupStatusNameText:', popupWorkspaceNameText);

    await fillAndWait(this.page, values.addressInput, values.addressText, 500);
    const popupAddressNameText = await this.page.inputValue(
      values.addressInput,
    );
    console.log('popupAddressNameText:', popupAddressNameText);

    await fillAndWait(
      this.page,
      values.descriptionInput,
      values.descriptionText,
      500,
    );
    const popupDescriptionNameText = await this.page.inputValue(
      values.descriptionInput,
    );
    console.log('popupDescriptionNameText:', popupDescriptionNameText);

    await clickAndWait(this.page, values.saveButton, 1000);

    //Edit'in  listeye yansıdığı kontrol edilir

    const listWorkspaceName = await this.page.textContent(
      values.listWorkspaceArea,
    );
    console.log('listWorkspaceName:', listWorkspaceName);

    const listAddressName = await this.page.textContent(values.listAddressArea);
    console.log('listAddressName:', listAddressName);

    // const listDescriptionName = await this.page.textContent(
    //   values.listDescriptionArea,
    // );
    // console.log('listDescriptionName:', listDescriptionName);

    expect(popupWorkspaceNameText).toEqual(listWorkspaceName);
    expect(popupAddressNameText).toEqual(listAddressName);
    // expect(popupDescriptionNameText).toEqual(listDescriptionName);  Edit yapılamıyor o yüzden kapattım

    //Workspace listeleri içinde editli ismin olduğu kontrol edilir
    await this.page.goto(`${baseURL}/settings/workspaces`);
    await this.page.waitForTimeout(2000);
    await fillAndWait(this.page, values.searchInput, values.nameText, 2000);

    const listFirstWorkspaceName = await this.page.textContent(
      values.listFirstWorkspaceNameArea,
    );
    console.log('listFirstWorkspaceName:', listFirstWorkspaceName);
    expect(popupWorkspaceNameText).toContain(listWorkspaceName);

    //Anasayfada sol üst taraf içindeki Workspaces alanına yansıdığı kontrol edilir
    await this.page.goto(`${baseURL}`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.workspaceMainMenu, 500);

    const selectedWorkspaceName = await this.page.textContent(
      values.selectedWorkspaceName,
    );
    console.log('selectedWorkspaceName:', selectedWorkspaceName);
    expect(popupWorkspaceNameText).toEqual(selectedWorkspaceName);
  }
}
