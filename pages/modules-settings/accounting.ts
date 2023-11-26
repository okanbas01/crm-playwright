import { Page, expect } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../component/constant';
import { baseURL } from '../../pageobjects/loginPage';
import values from '../../pageobjects/modules-settings/accounting.utils';

export default class accountingSettingsPage {
  constructor(public page: Page) {}

  async accountingAddNewBank() {
    await this.page.goto(`${baseURL}/settings/modules/accounting`);
    await this.page.waitForTimeout(5000);
    await clickAndWait(this.page, values.addNewBankButton, 1000);
    await fillAndWait(
      this.page,
      values.addNewBankNameArea,
      values.bankNameText,
      2000,
    );
    await clickAndWait(this.page, values.addNewBankCountryArea, 1000);

    const addNewBankCountryElements = await this.page.$$(
      values.addNewBankCountrySelect,
    );
    const bankCountrySelectRandomIndex = Math.floor(
      Math.random() * addNewBankCountryElements.length,
    );
    const bankCountrySelectRandomElement =
      addNewBankCountryElements[bankCountrySelectRandomIndex];
    await bankCountrySelectRandomElement.click();

    const addNewBankCountryText = await this.page.textContent(
      values.addNewBankCountryArea,
    );
    await clickAndWait(this.page, values.addNewBankSaveButton, 1000);

    const bankTableNameAOneText = await this.page.textContent(
      values.bankTableNameAreaOne,
    );
    const bankTableCountryNameAreaOneText = await this.page.textContent(
      values.bankTableCountryNameAreaOne,
    );

    expect(bankTableNameAOneText).toEqual(values.bankNameText);
    expect(addNewBankCountryText).toEqual(bankTableCountryNameAreaOneText);
  }
  async accountingBankEnable() {
    await this.page.goto(`${baseURL}/settings/modules/accounting`);
    await this.page.waitForTimeout(1000);
    const bankTableNameAOneText = await this.page.textContent(
      values.bankTableNameAreaOne,
    );
    const bankTableCountryNameAreaOneText = await this.page.textContent(
      values.bankTableCountryNameAreaOne,
    );
    await clickAndWait(this.page, values.bankEnableButtonOne, 2000);
    const activeBankTableNameAreaOne = await this.page.textContent(
      values.activeBankTableNameAreaOne,
    );
    const activeBankTableCountryNameAreaOneText = await this.page.textContent(
      values.activeBankTableCountryNameAreaOne,
    );

    expect(bankTableNameAOneText).toEqual(activeBankTableNameAreaOne);
    expect(activeBankTableCountryNameAreaOneText).toEqual(
      bankTableCountryNameAreaOneText,
    );
  }
  async accountingBankDisable() {
    await this.page.goto(`${baseURL}/settings/modules/accounting`);
    await this.page.waitForTimeout(1000);
    const activeBankTableNameAreaOne = await this.page.textContent(
      values.activeBankTableNameAreaOne,
    );
    const activeBankTableCountryNameAreaOneText = await this.page.textContent(
      values.activeBankTableCountryNameAreaOne,
    );
    await clickAndWait(this.page, values.activeBankDetailButtonOne, 2000);
    await clickAndWait(
      this.page,
      values.activeBankDetailDisableButtonOne,
      2000,
    );
    const bankTableNameAOneText = await this.page.textContent(
      values.bankTableNameAreaOne,
    );
    const bankTableCountryNameAreaOneText = await this.page.textContent(
      values.bankTableCountryNameAreaOne,
    );
    expect(bankTableNameAOneText).toEqual(activeBankTableNameAreaOne);
    expect(activeBankTableCountryNameAreaOneText).toEqual(
      bankTableCountryNameAreaOneText,
    );
  }
  async accountingBankEdit() {
    await this.page.goto(`${baseURL}/settings/modules/accounting`);
    await this.page.waitForTimeout(1000);

    await clickAndWait(this.page, values.bankDetailButtonOne, 2000);
    await clickAndWait(this.page, values.bankDetailEditButtonOne, 2000);
    await fillAndWait(
      this.page,
      values.addNewBankNameArea,
      values.editBankNameText,
      2000,
    );
    await clickAndWait(this.page, values.addNewBankCountryArea, 1000);

    const addNewBankCountryElements = await this.page.$$(
      values.addNewBankCountrySelect,
    );
    const bankCountrySelectRandomIndex = Math.floor(
      Math.random() * addNewBankCountryElements.length,
    );
    const bankCountrySelectRandomElement =
      addNewBankCountryElements[bankCountrySelectRandomIndex];
    await bankCountrySelectRandomElement.click();

    const addNewBankCountryText = await this.page.textContent(
      values.addNewBankCountryArea,
    );
    await clickAndWait(this.page, values.addNewBankSaveButton, 1000);
    const bankTableNameAOneText = await this.page.textContent(
      values.bankTableNameAreaOne,
    );
    const bankTableCountryNameAreaOneText = await this.page.textContent(
      values.bankTableCountryNameAreaOne,
    );
    expect(bankTableNameAOneText).toEqual(values.editBankNameText);
    expect(addNewBankCountryText).toEqual(bankTableCountryNameAreaOneText);
  }
  async accountingRemoveBank() {
    await this.page.goto(`${baseURL}/settings/modules/accounting`);
    await this.page.waitForTimeout(1000);

    const bankTableNameAOneText = await this.page.textContent(
      values.bankTableNameAreaOne,
    );
    const bankTableCountryNameAreaOneText = await this.page.textContent(
      values.bankTableCountryNameAreaOne,
    );
    await clickAndWait(this.page, values.bankDetailButtonOne, 2000);
    await clickAndWait(this.page, values.bankDetailRemoveButtonOne, 2000);
    await clickAndWait(this.page, values.bankDeleteConfirmButton, 2000);

    const deletedBankTableNameAOneText = await this.page.textContent(
      values.bankTableNameAreaOne,
    );
    const deletedBankTableCountryNameAreaOneText = await this.page.textContent(
      values.bankTableCountryNameAreaOne,
    );
    expect(bankTableNameAOneText).not.toEqual(deletedBankTableNameAOneText);
    expect(bankTableCountryNameAreaOneText).not.toEqual(
      deletedBankTableCountryNameAreaOneText,
    );
  }
  async accountingAddNewBankSwiftCode() {
    await this.page.goto(`${baseURL}/settings/modules/accounting`);
    await this.page.waitForTimeout(5000);
    await clickAndWait(this.page, values.addNewBankButton, 1000);
    await fillAndWait(
      this.page,
      values.addNewBankNameArea,
      values.bankNameText,
      2000,
    );
    await clickAndWait(this.page, values.addNewBankCountryArea, 1000);

    const addNewBankCountryElements = await this.page.$$(
      values.addNewBankCountrySelect,
    );
    const bankCountrySelectRandomIndex = Math.floor(
      Math.random() * addNewBankCountryElements.length,
    );
    const bankCountrySelectRandomElement =
      addNewBankCountryElements[bankCountrySelectRandomIndex];
    await bankCountrySelectRandomElement.click();

    await fillAndWait(
      this.page,
      values.addNewBankSwiftCodeArea,
      values.addNewBankSwiftCodeText,
      2000,
    );
    const addNewBankCountryText = await this.page.textContent(
      values.addNewBankCountryArea,
    );
    await clickAndWait(this.page, values.addNewBankSaveButton, 1000);

    const bankTableNameAOneText = await this.page.textContent(
      values.bankTableNameAreaOne,
    );
    const bankTableCountryNameAreaOneText = await this.page.textContent(
      values.bankTableCountryNameAreaOne,
    );

    expect(bankTableNameAOneText).toContain(values.bankNameText);
    expect(bankTableNameAOneText).toContain(values.addNewBankSwiftCodeText);
    expect(bankTableCountryNameAreaOneText).toEqual(addNewBankCountryText);
  }
  async addNewCashAccountGroup() {
    await this.page.goto(
      `${baseURL}/settings/modules/accounting/account-groups`,
    );
    await this.page.waitForTimeout(1000);

    await clickAndWait(this.page, values.addNewAccountGroupButton, 2000);
    await clickAndWait(this.page, values.addNewAccountGroupCashTab, 2000);
    await fillAndWait(
      this.page,
      values.addNewAccountGroupNameArea,
      values.nameText,
      1000,
    );
    await clickAndWait(
      this.page,
      values.addNewAccountGroupAccountScopeSelect,
      2000,
    );
    const accountScopeElements = await this.page.$$(
      values.accountScopeElements,
    );
    const accountScopeRandomIndex = Math.floor(
      Math.random() * accountScopeElements.length,
    );
    const accountScopeRandomIndexRandomElement =
      accountScopeElements[accountScopeRandomIndex];
    await accountScopeRandomIndexRandomElement.click();

    const addNewAccountGroupCashTab = await this.page.textContent(
      values.addNewAccountGroupCashTab,
    );
    const addNewAccountGroupCashTabText =
      addNewAccountGroupCashTab?.toLowerCase();
    const addNewAccountGroupAccountScopeSelectText =
      await this.page.textContent(values.addNewAccountGroupAccountScopeSelect);
    await clickAndWait(
      this.page,
      values.addNewAccountGroupAccountSaveButton,
      4000,
    );
    const accountGroupsTableNameOneText = await this.page.textContent(
      values.accountGroupsTableNameOne,
    );
    const accountGroupsTableTypeOneText = await this.page.textContent(
      values.accountGroupsTableTypeOne,
    );
    const accountGroupsTableAccountScopeText = await this.page.textContent(
      values.accountGroupsTableAccountScope,
    );
    expect(values.nameText).toEqual(accountGroupsTableNameOneText);
    expect(addNewAccountGroupCashTabText).toEqual(
      accountGroupsTableTypeOneText,
    );
    expect(addNewAccountGroupAccountScopeSelectText).toEqual(
      accountGroupsTableAccountScopeText,
    );
  }
  async addNewBankAccountGroup() {
    await this.page.goto(
      `${baseURL}/settings/modules/accounting/account-groups`,
    );
    await this.page.waitForTimeout(1000);

    await clickAndWait(this.page, values.addNewAccountGroupButton, 2000);
    await clickAndWait(this.page, values.addNewAccountGroupBankTab, 2000);
    await fillAndWait(
      this.page,
      values.addNewAccountGroupNameArea,
      values.nameText,
      1000,
    );
    await clickAndWait(
      this.page,
      values.addNewAccountGroupAccountScopeSelect,
      2000,
    );
    const accountScopeElements = await this.page.$$(
      values.accountScopeElements,
    );
    const accountScopeRandomIndex = Math.floor(
      Math.random() * accountScopeElements.length,
    );
    const accountScopeRandomIndexRandomElement =
      accountScopeElements[accountScopeRandomIndex];
    await accountScopeRandomIndexRandomElement.click();

    await this.page.waitForTimeout(2000);
    await clickAndWait(
      this.page,
      values.addNewAccountGroupAccountBankSelect,
      2000,
    );
    const bankElements = await this.page.$$(values.bankElements);
    const bankRandomIndex = Math.floor(Math.random() * bankElements.length); // Rastgele bir indeks seçin
    const bankRandomElement = bankElements[bankRandomIndex];
    await bankRandomElement.click();

    const addNewAccountGroupAccountScopeSelectText =
      await this.page.textContent(values.addNewAccountGroupAccountScopeSelect);
    await clickAndWait(
      this.page,
      values.addNewAccountGroupAccountSaveButton,
      4000,
    );
    const accountGroupsTableNameOneText = await this.page.textContent(
      values.accountGroupsTableNameOne,
    );
    // const accountGroupsTableTypeOneText = await this.page.textContent(
    //   values.accountGroupsTableTypeOne,
    // );
    const accountGroupsTableAccountScopeText = await this.page.textContent(
      values.accountGroupsTableAccountScope,
    );
    expect(values.nameText).toEqual(accountGroupsTableNameOneText);

    expect(addNewAccountGroupAccountScopeSelectText).toEqual(
      accountGroupsTableAccountScopeText,
    );
  }
  async editCashAccountGroups() {
    await this.page.goto(
      `${baseURL}/settings/modules/accounting/account-groups`,
    );
    await this.page.waitForTimeout(1000);
    await clickAndWait(
      this.page,
      values.accountGroupsTableDetailButtonOne,
      2000,
    );
    await clickAndWait(this.page, values.accountGroupsTableEditButtonOne, 3000);
    await fillAndWait(
      this.page,
      values.addNewAccountGroupNameArea,
      values.editNameText,
      1000,
    );
    await clickAndWait(
      this.page,
      values.addNewAccountGroupAccountSaveButton,
      4000,
    );
    const editedAccountGroupsTableNameOneText = await this.page.textContent(
      values.accountGroupsTableNameOne,
    );

    expect(values.editNameText).toEqual(editedAccountGroupsTableNameOneText);
  }
  async editBankAccountGroups() {
    await this.page.goto(
      `${baseURL}/settings/modules/accounting/account-groups`,
    );
    await this.page.waitForTimeout(1000);

    await clickAndWait(
      this.page,
      values.accountGroupsTableDetailButtonOne,
      2000,
    );
    await clickAndWait(this.page, values.accountGroupsTableEditButtonOne, 3000);
    await fillAndWait(
      this.page,
      values.addNewAccountGroupNameArea,
      values.editNameText,
      1000,
    );
    await clickAndWait(
      this.page,
      values.addNewAccountGroupAccountSaveButton,
      4000,
    );
    const editedAccountGroupsTableNameOneText = await this.page.textContent(
      values.accountGroupsTableNameOne,
    );
    expect(values.editNameText).toEqual(editedAccountGroupsTableNameOneText);
  }
  async accountGroupsFilterCheck() {
    await this.page.goto(
      `${baseURL}/settings/modules/accounting/account-groups`,
    );
    await this.page.waitForTimeout(1000);
    const headers = [
      values.accountGroupsNameHeader,
      values.accountGroupsTypeHeader,
      values.accountGroupsAccountScopeHeader,
    ];

    const filters = [
      values.accountGroupsNameFilter,
      values.accountGroupsTypeFilter,
      values.accountGroupsAccountScopeFilter,
    ];

    for (let i = 0; i < headers.length; i++) {
      const headerText = await this.page.textContent(headers[i]);

      await clickAndWait(this.page, values.accountGroupsFilterButton, 1000);
      await clickAndWait(this.page, filters[i], 1000);

      const accountGroupsHeaderAreaText = await this.page.textContent(
        values.accountGroupsHeaderArea,
      );

      expect(accountGroupsHeaderAreaText).not.toContain(headerText);

      await clickAndWait(this.page, values.accountGroupsFilterButton, 1000);
      await clickAndWait(this.page, filters[i], 1000);
    }
  }
  async removeAccountGroup() {
    await this.page.goto(
      `${baseURL}/settings/modules/accounting/account-groups`,
    );
    await this.page.waitForTimeout(1000);

    const deletedAccountGroupsTableNameOneText = await this.page.textContent(
      values.accountGroupsTableNameOne,
    );
    await clickAndWait(
      this.page,
      values.accountGroupsTableDetailButtonOne,
      2000,
    );
    await clickAndWait(
      this.page,
      values.accountGroupsTableDeleteButtonOne,
      3000,
    );
    await clickAndWait(
      this.page,
      values.accountGroupsTableDeleteConfirmButton,
      3000,
    );
    const accountGroupsTableNameOneText = await this.page.textContent(
      values.accountGroupsTableNameOne,
    );
    expect(accountGroupsTableNameOneText).not.toEqual(
      deletedAccountGroupsTableNameOneText,
    );
  }
  async addExternalEntities() {
    await this.page.goto(
      `${baseURL}/settings/modules/accounting/external-entities`,
    );
    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.addNewExternalEntitiesButton, 3000);
    await fillAndWait(
      this.page,
      values.addNewExternalEntitiesNameArea,
      values.nameText,
      2000,
    );
    await fillAndWait(
      this.page,
      values.addNewExternalEntitiesDescriptionArea,
      values.descriptionText,
      2000,
    );
    await clickAndWait(
      this.page,
      values.addNewExternalEntitiesSaveButton,
      3000,
    );
    const externalEntitiesTableNameAreaOneText = await this.page.textContent(
      values.externalEntitiesTableNameOneArea,
    );
    const externalEntitiesDescriptionAreaText = await this.page.textContent(
      values.externalEntitiesTableDescriptionOneArea,
    );

    expect(values.nameText).toEqual(externalEntitiesTableNameAreaOneText);
    expect(values.descriptionText).toEqual(externalEntitiesDescriptionAreaText);
  }
  async editExternalEntities() {
    await this.page.goto(
      `${baseURL}/settings/modules/accounting/external-entities`,
    );
    await this.page.waitForTimeout(1000);
    const externalEntitiesTableNameAreaOneText = await this.page.textContent(
      values.externalEntitiesTableNameOneArea,
    );
    const externalEntitiesDescriptionAreaText = await this.page.textContent(
      values.externalEntitiesTableDescriptionOneArea,
    );
    await clickAndWait(
      this.page,
      values.externalEntitiesTableDetailButtonOne,
      3000,
    );
    await clickAndWait(
      this.page,
      values.externalEntitiesTableEditButtonOne,
      3000,
    );
    await fillAndWait(
      this.page,
      values.addNewExternalEntitiesNameArea,
      values.editNameText,
      2000,
    );
    await fillAndWait(
      this.page,
      values.addNewExternalEntitiesDescriptionArea,
      values.editDescriptionText,
      2000,
    );

    await clickAndWait(
      this.page,
      values.addNewExternalEntitiesSaveButton,
      3000,
    );
    const editedExternalEntitiesTableNameAreaOneText =
      await this.page.textContent(values.externalEntitiesTableNameOneArea);
    const editedExternalEntitiesTableDescriptionAreaText =
      await this.page.textContent(
        values.externalEntitiesTableDescriptionOneArea,
      );

    expect(values.editNameText).toEqual(
      editedExternalEntitiesTableNameAreaOneText,
    );
    expect(values.editDescriptionText).toEqual(
      editedExternalEntitiesTableDescriptionAreaText,
    );
    expect(externalEntitiesTableNameAreaOneText).not.toEqual(
      editedExternalEntitiesTableNameAreaOneText,
    );
    expect(externalEntitiesDescriptionAreaText).not.toEqual(
      editedExternalEntitiesTableDescriptionAreaText,
    );
  }
  async externalEntitiesRemove() {
    await this.page.goto(
      `${baseURL}/settings/modules/accounting/external-entities`,
    );
    await this.page.waitForTimeout(1000);
    const deletedExternalEntitiesTableNameAreaOneText =
      await this.page.textContent(values.externalEntitiesTableNameOneArea);
    const deletedExternalEntitiesDescriptionAreaText =
      await this.page.textContent(
        values.externalEntitiesTableDescriptionOneArea,
      );
    await clickAndWait(
      this.page,
      values.externalEntitiesTableDetailButtonOne,
      3000,
    );
    await clickAndWait(this.page, values.externalEntitiesOneDeleteButton, 3000);
    await clickAndWait(
      this.page,
      values.externalEntitiesOneDeleteConfirmButton,
      3000,
    );
    const externalEntitiesTableNameAreaOneText = await this.page.textContent(
      values.externalEntitiesTableNameOneArea,
    );
    const externalEntitiesDescriptionAreaText = await this.page.textContent(
      values.externalEntitiesTableDescriptionOneArea,
    );
    expect(deletedExternalEntitiesTableNameAreaOneText).not.toEqual(
      externalEntitiesTableNameAreaOneText,
    );
    expect(deletedExternalEntitiesDescriptionAreaText).not.toEqual(
      externalEntitiesDescriptionAreaText,
    );
  }
  async externalEntitiesFilterCheck() {
    await this.page.goto(
      `${baseURL}/settings/modules/accounting/external-entities`,
    );
    await this.page.waitForTimeout(1000);
    const headers = [
      values.externalEntitiesNameHeader,
      values.externalEntitiesDescriptionHeader,
    ];

    const filters = [
      values.externalEntitiesNameFilter,
      values.externalEntitiesDescriptionFilter,
    ];

    for (let i = 0; i < headers.length; i++) {
      const headerText = await this.page.textContent(headers[i]);

      await clickAndWait(this.page, values.externalEntitiesFilterButton, 1000);
      await clickAndWait(this.page, filters[i], 1000);

      const externalEntitiesHeaderAreaText = await this.page.textContent(
        values.externalEntitiesHeaderArea,
      );

      expect(externalEntitiesHeaderAreaText).not.toContain(headerText);

      await clickAndWait(this.page, values.externalEntitiesFilterButton, 1000);
      await clickAndWait(this.page, filters[i], 1000);
    }
  }
}
