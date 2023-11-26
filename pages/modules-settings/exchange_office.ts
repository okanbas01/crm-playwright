import { expect, Page } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../component/constant';
import { baseURL } from '../../pageobjects/loginPage';
import values from '../../pageobjects/modules-settings/exchange_office.utils';

export default class ExchangeOfficePage {
  constructor(public page: Page) {}

  async createNewSpreadGroup() {
    await this.page.goto(
      `${baseURL}/settings/modules/exchange-office/spread-groups`,
    );
    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.createNewSpreadGroupsButton, 1000);
    await fillAndWait(
      this.page,
      values.newSpreadGroupsNameArea,
      values.nameText,
      3000,
    );
    await clickAndWait(
      this.page,
      values.newSpreadGroupsLoanAssetLeadsArea,
      1000,
    );
    const loanAssetSelectElements = await this.page.$$(
      values.newSpreadGroupsCustomerLeadsSelectElements,
    );
    const loanAssetRandomIndex = Math.floor(
      Math.random() * loanAssetSelectElements.length,
    );
    const loanAssetRandomElement =
      loanAssetSelectElements[loanAssetRandomIndex];
    await loanAssetRandomElement.click();
    await clickAndWait(
      this.page,
      values.newSpreadGroupsCustomerLeadsArea,
      1000,
    );
    //customer leads random seçme
    const customerLeadsSelectElements = await this.page.$$(
      values.newSpreadGroupsCustomerLeadsSelectElements,
    );
    const customerLeadsRandomIndex = Math.floor(
      Math.random() * customerLeadsSelectElements.length,
    );
    const customerLeadsRandomElement =
      customerLeadsSelectElements[customerLeadsRandomIndex];
    await customerLeadsRandomElement.click();

    await fillAndWait(
      this.page,
      values.newSpreadGroupsAskDifferenceArea,
      '1',
      3000,
    );
    await fillAndWait(
      this.page,
      values.newSpreadGroupsBidDifferenceArea,
      '2',
      3000,
    );
    await clickAndWait(this.page, values.newSpreadGroupsSaveButton, 3000);

    const spreadGroupsTableNameAreaOneText = await this.page.textContent(
      values.spreadGroupsTableNameAreaOne,
    );
    const spreadGroupsTableAskDifferenceAreaOneText =
      await this.page.textContent(values.spreadGroupsTableAskDifferenceAreaOne);
    const spreadGroupsTableBidDifferenceAreaOneText =
      await this.page.textContent(values.spreadGroupsTableBidDifferenceAreaOne);
    const spreadGroupsTableAssetsNumberAreaOneText =
      await this.page.textContent(values.spreadGroupsTableAssetsNumberAreaOne);
    const spreadGroupsTableCustomersNumberAreaOneText =
      await this.page.textContent(
        values.spreadGroupsTableCustomersNumberAreaOne,
      );
    expect(values.nameText).toEqual(spreadGroupsTableNameAreaOneText);
    expect('1').toEqual(spreadGroupsTableAskDifferenceAreaOneText);
    expect('2').toEqual(spreadGroupsTableBidDifferenceAreaOneText);
    expect(spreadGroupsTableAssetsNumberAreaOneText).toEqual('1'); // tek bir tane seçildiği için
    expect(spreadGroupsTableCustomersNumberAreaOneText).toEqual('1'); // tek bir tane seçildiği için
  }
  async spreadGroupsDetailCheck() {
    const spreadGroupsTableNameAreaOneText = await this.page.textContent(
      values.spreadGroupsTableNameAreaOne,
    );
    const spreadGroupsTableAskDifferenceAreaOneText =
      await this.page.textContent(values.spreadGroupsTableAskDifferenceAreaOne);
    const spreadGroupsTableBidDifferenceAreaOneText =
      await this.page.textContent(values.spreadGroupsTableBidDifferenceAreaOne);
    const spreadGroupsTableAssetsNumberAreaOneText =
      await this.page.textContent(values.spreadGroupsTableAssetsNumberAreaOne);
    const spreadGroupsTableCustomersNumberAreaOneText =
      await this.page.textContent(
        values.spreadGroupsTableCustomersNumberAreaOne,
      );
    await clickAndWait(this.page, values.spreadGroupsDetailButtonOne, 2000);
    await clickAndWait(this.page, values.spreadGroupsGoToDetailDetailOne, 3000);

    const groupDetailNameHeaderText = await this.page.textContent(
      values.groupDetailNameHeader,
    );
    const groupDetailCustomersAskDifferenceAreaText =
      await this.page.textContent(values.groupDetailCustomersAskDifferenceArea);
    const groupDetailCustomersBidDifferenceAreaText =
      await this.page.textContent(values.groupDetailCustomersBidDifferenceArea);
    const groupDetailCustomersAssetsAreaText = await this.page.textContent(
      values.groupDetailCustomersAssetsArea,
    );
    const groupDetailCustomersNumberAreaText = await this.page.textContent(
      values.groupDetailCustomersNumberArea,
    );
    expect(spreadGroupsTableNameAreaOneText).toEqual(groupDetailNameHeaderText);
    expect(groupDetailCustomersAskDifferenceAreaText).toEqual(
      spreadGroupsTableAskDifferenceAreaOneText,
    );
    expect(groupDetailCustomersBidDifferenceAreaText).toEqual(
      spreadGroupsTableBidDifferenceAreaOneText,
    );
    expect(groupDetailCustomersAssetsAreaText).toEqual(
      spreadGroupsTableAssetsNumberAreaOneText,
    );
    expect(spreadGroupsTableCustomersNumberAreaOneText).toEqual(
      groupDetailCustomersNumberAreaText,
    );
  }
  async spreadGroupEdit() {
    await this.page.goto(
      `${baseURL}/settings/modules/exchange-office/spread-groups`,
    );
    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.spreadGroupsDetailButtonOne, 2000);
    await clickAndWait(this.page, values.spreadGroupsGoToDetailDetailOne, 3000);

    await clickAndWait(this.page, values.groupDetailCustomerEditButton, 3000);
    await fillAndWait(
      this.page,
      values.newSpreadGroupsNameArea,
      values.editNameText,
      3000,
    );
    await clickAndWait(
      this.page,
      values.newSpreadGroupsLoanAssetLeadsArea,
      1000,
    );
    const loanAssetSelectElements = await this.page.$$(
      values.newSpreadGroupsCustomerLeadsSelectElements,
    );
    const loanAssetRandomIndex = Math.floor(
      Math.random() * loanAssetSelectElements.length,
    );
    const loanAssetRandomElement =
      loanAssetSelectElements[loanAssetRandomIndex];
    await loanAssetRandomElement.click();

    await clickAndWait(
      this.page,
      values.newSpreadGroupsCustomerLeadsArea,
      1000,
    );
    //customer leads random seçme
    const customerLeadsSelectElements = await this.page.$$(
      values.newSpreadGroupsCustomerLeadsSelectElements,
    );
    const customerLeadsRandomIndex = Math.floor(
      Math.random() * customerLeadsSelectElements.length,
    );
    const customerLeadsRandomElement =
      customerLeadsSelectElements[customerLeadsRandomIndex];
    await customerLeadsRandomElement.click();

    await fillAndWait(
      this.page,
      values.newSpreadGroupsAskDifferenceArea,
      '3',
      3000,
    );
    await fillAndWait(
      this.page,
      values.newSpreadGroupsBidDifferenceArea,
      '4',
      3000,
    );
    await clickAndWait(this.page, values.newSpreadGroupsSaveButton, 3000);
    const editedGroupDetailNameHeaderText = await this.page.textContent(
      values.groupDetailNameHeader,
    );
    const editedGroupDetailCustomersAskDifferenceAreaText =
      await this.page.textContent(values.groupDetailCustomersAskDifferenceArea);
    const editedGroupDetailCustomersBidDifferenceAreaText =
      await this.page.textContent(values.groupDetailCustomersBidDifferenceArea);
    const editedGroupDetailCustomersAssetsAreaText =
      await this.page.textContent(values.groupDetailCustomersAssetsArea);
    const editedGroupDetailCustomersNumberAreaText =
      await this.page.textContent(values.groupDetailCustomersNumberArea);
    await this.page.goto(
      `${baseURL}/settings/modules/exchange-office/spread-groups`,
    );
    await this.page.waitForTimeout(3000);
    const spreadGroupsTableNameAreaOneText = await this.page.textContent(
      values.spreadGroupsTableNameAreaOne,
    );
    const spreadGroupsTableAskDifferenceAreaOneText =
      await this.page.textContent(values.spreadGroupsTableAskDifferenceAreaOne);
    const spreadGroupsTableBidDifferenceAreaOneText =
      await this.page.textContent(values.spreadGroupsTableBidDifferenceAreaOne);
    const spreadGroupsTableAssetsNumberAreaOneText =
      await this.page.textContent(values.spreadGroupsTableAssetsNumberAreaOne);
    const spreadGroupsTableCustomersNumberAreaOneText =
      await this.page.textContent(
        values.spreadGroupsTableCustomersNumberAreaOne,
      );

    expect(editedGroupDetailNameHeaderText).toEqual(
      spreadGroupsTableNameAreaOneText,
    );
    expect(editedGroupDetailCustomersAskDifferenceAreaText).toEqual(
      spreadGroupsTableAskDifferenceAreaOneText,
    );
    expect(editedGroupDetailCustomersBidDifferenceAreaText).toEqual(
      spreadGroupsTableBidDifferenceAreaOneText,
    );
    expect(editedGroupDetailCustomersAssetsAreaText).toEqual(
      spreadGroupsTableAssetsNumberAreaOneText,
    );
    expect(editedGroupDetailCustomersNumberAreaText).toEqual(
      spreadGroupsTableCustomersNumberAreaOneText,
    );
  }
  async spreadGroupRemove() {
    await this.page.goto(
      `${baseURL}/settings/modules/exchange-office/spread-groups`,
    );
    await this.page.waitForTimeout(1000);
    const spreadGroupsTableNameAreaOneDeletedText = await this.page.textContent(
      values.spreadGroupsTableNameAreaOne,
    );
    await clickAndWait(this.page, values.spreadGroupsDetailButtonOne, 2000);
    await clickAndWait(this.page, values.spreadGroupsRemoveButtonOne, 2000);
    await clickAndWait(this.page, values.spreadGroupsRemoveConfirmButton, 2000);
    const spreadGroupsTableNameAreaOneText = await this.page.textContent(
      values.spreadGroupsTableNameAreaOne,
    );
    expect(spreadGroupsTableNameAreaOneText).not.toEqual(
      spreadGroupsTableNameAreaOneDeletedText,
    );
  }
  async spreadGroupDetailRemove() {
    await this.page.goto(
      `${baseURL}/settings/modules/exchange-office/spread-groups`,
    );
    await this.page.waitForTimeout(1000);
    const spreadGroupsTableNameAreaOneDeletedText = await this.page.textContent(
      values.spreadGroupsTableNameAreaOne,
    );
    await clickAndWait(this.page, values.spreadGroupsDetailButtonOne, 2000);
    await clickAndWait(this.page, values.spreadGroupsGoToDetailDetailOne, 3000);
    await clickAndWait(this.page, values.groupDetailCustomerDeleteButton, 2000);
    await clickAndWait(this.page, values.spreadGroupsRemoveConfirmButton, 2000);
    const spreadGroupsTableNameAreaOneText = await this.page.textContent(
      values.spreadGroupsTableNameAreaOne,
    );
    expect(spreadGroupsTableNameAreaOneText).not.toEqual(
      spreadGroupsTableNameAreaOneDeletedText,
    );
  }
  async spreadGroupDetailAddAsset() {
    await this.page.goto(
      `${baseURL}/settings/modules/exchange-office/spread-groups`,
    );
    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.spreadGroupsDetailButtonOne, 2000);
    await clickAndWait(this.page, values.spreadGroupsGoToDetailDetailOne, 2000);
    await clickAndWait(this.page, values.spreadGroupAssetsTab, 3000);
    await clickAndWait(this.page, values.spreadGroupAssetsAddButton, 2000);
    await clickAndWait(this.page, values.spreadGroupAddAssetSelectBoxOne, 2000);

    const spreadGroupAddAssetParityNameOneText = await this.page.textContent(
      values.spreadGroupAddAssetParityNameOne,
    );
    const spreadGroupAddAssetDisplayNameOneText = await this.page.textContent(
      values.spreadGroupAddAssetDisplayNameOne,
    );
    const spreadGroupAddAssetBaseCurrencyOneText = await this.page.textContent(
      values.spreadGroupAddAssetBaseCurrencyOne,
    );
    const spreadGroupAddAssetPairCurrencyOneText = await this.page.textContent(
      values.spreadGroupAddAssetPairCurrencyOne,
    );
    const spreadGroupAddAssetAskDifferenceOneText = await this.page.textContent(
      values.spreadGroupAddAssetAskDifferenceOne,
    );
    const spreadGroupAddAssetBidDifferenceOneText = await this.page.textContent(
      values.spreadGroupAddAssetBidDifferenceOne,
    );
    await clickAndWait(
      this.page,
      values.spreadGroupAssetsAddAssetAddButton,
      2000,
    );
    const spreadGroupAddAssetTableParityNameOneText =
      await this.page.textContent(values.spreadGroupAddAssetTableParityNameOne);
    const spreadGroupAddAssetTableDisplayNameOneText =
      await this.page.textContent(
        values.spreadGroupAddAssetTableDisplayNameOne,
      );
    const spreadGroupAddAssetTableBaseCurrencyOneText =
      await this.page.textContent(
        values.spreadGroupAddAssetTableBaseCurrencyOne,
      );
    const spreadGroupAddAssetTablePairCurrencyOneText =
      await this.page.textContent(
        values.spreadGroupAddAssetTablePairCurrencyOne,
      );
    const spreadGroupAddAssetTableAskDifferenceOneText =
      await this.page.textContent(
        values.spreadGroupAddAssetTableAskDifferenceOne,
      );
    const spreadGroupAddAssetTableBidDifferenceOneText =
      await this.page.textContent(
        values.spreadGroupAddAssetTableBidDifferenceOne,
      );
    expect(spreadGroupAddAssetParityNameOneText).toEqual(
      spreadGroupAddAssetTableParityNameOneText,
    );
    expect(spreadGroupAddAssetDisplayNameOneText).toEqual(
      spreadGroupAddAssetTableDisplayNameOneText,
    );
    expect(spreadGroupAddAssetBaseCurrencyOneText).toEqual(
      spreadGroupAddAssetTableBaseCurrencyOneText,
    );
    expect(spreadGroupAddAssetPairCurrencyOneText).toEqual(
      spreadGroupAddAssetTablePairCurrencyOneText,
    );
    expect(spreadGroupAddAssetAskDifferenceOneText).toEqual(
      spreadGroupAddAssetTableAskDifferenceOneText,
    );
    expect(spreadGroupAddAssetBidDifferenceOneText).toEqual(
      spreadGroupAddAssetTableBidDifferenceOneText,
    );
  }
  async spreadGroupDetailAddCustomers() {
    await this.page.goto(
      `${baseURL}/settings/modules/exchange-office/spread-groups`,
    );
    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.spreadGroupsDetailButtonOne, 2000);
    await clickAndWait(this.page, values.spreadGroupsGoToDetailDetailOne, 2000);
    await clickAndWait(this.page, values.spreadGroupCustomersTab, 3000);
    await clickAndWait(
      this.page,
      values.spreadGroupCustomersCreateButton,
      2000,
    );
    await clickAndWait(
      this.page,
      values.spreadGroupAddCustomersSelectBoxOne,
      2000,
    );

    // const spreadGroupAddCustomersIDOneText = await this.page.textContent(
    //   values.spreadGroupAddCustomersIDOne,
    // );
    // const spreadGroupAddCustomersNameOneText = await this.page.textContent(
    //   values.spreadGroupAddCustomersNameOne,
    // );
    // const spreadGroupAddCustomersEmailOneText = await this.page.textContent(
    //   values.spreadGroupAddCustomersEmailOne,
    // );
    await clickAndWait(
      this.page,
      values.spreadGroupAddCustomersAddButton,
      2000,
    );
  }
  async spreadGroupTableFilterCheck() {
    await this.page.goto(
      `${baseURL}/settings/modules/exchange-office/spread-groups`,
    );
    await this.page.waitForTimeout(1000);
    const headers = [
      values.spreadGroupTableNameHeader,
      values.spreadGroupTableAskDifferenceHeader,
      values.spreadGroupTableBidDifferenceHeader,
      values.spreadGroupTableAssetNumberHeader,
      values.spreadGroupTableCustomersNumberHeader,
    ];

    const filters = [
      values.spreadGroupNameFilter,
      values.spreadGroupAskDifferenceFilter,
      values.spreadGroupBidDifferenceFilter,
      values.spreadGroupAssetNumberFilter,
      values.spreadGroupCustomersNumberFilter,
    ];

    for (let i = 0; i < headers.length; i++) {
      const headerText = await this.page.textContent(headers[i]);

      await clickAndWait(this.page, values.spreadGroupFilterButton, 1000);
      await clickAndWait(this.page, filters[i], 1000);

      const spreadGroupTableHeaderAreaText = await this.page.textContent(
        values.spreadGroupTableHeaderArea,
      );

      expect(spreadGroupTableHeaderAreaText).not.toContain(headerText);

      await clickAndWait(this.page, values.spreadGroupFilterButton, 1000);
      await clickAndWait(this.page, filters[i], 1000);
    }
  }
}
