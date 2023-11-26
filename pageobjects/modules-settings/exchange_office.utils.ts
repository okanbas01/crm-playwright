// Create
const uuid = () => Math.floor(Math.random() * 10000);
const id = uuid();
const nameText = `Name${id}`;
const editNameText = `Edit Name${id}`;
const descriptionText = `Description${id}`;
const editDescriptionText = `Edit Description${id}`;
const bankNameText = `Bank ${id}`;
const editBankNameText = `Edit Bank ${id}`;

//Exchange Office - Spread Groups
const createNewSpreadGroupsButton =
  '[data-test-id="modules-management.asset-groups.create-button"]';
const groupDetailCustomerEditButton =
  '[data-test-id="spread-group.overview.edit-button"]';
const groupDetailCustomerDeleteButton =
  '[data-test-id="spread-group.overview.delete-this-group-button"]';
const spreadGroupsRemoveConfirmButton =
  '[data-test-id="confirm-modal-footer-action"]';
// 1. Satır Bilgileri
const spreadGroupsTableNameAreaOne =
  '[data-test-id="exchange-office-assets-groups-table-body-row-0-column-name"]';
const spreadGroupsTableAskDifferenceAreaOne =
  '[data-test-id="exchange-office-assets-groups-table-body-row-0-column-askDifference"]';
const spreadGroupsTableBidDifferenceAreaOne =
  '[data-test-id="exchange-office-assets-groups-table-body-row-0-column-bidDifference"]';
const spreadGroupsTableAssetsNumberAreaOne =
  '[data-test-id="exchange-office-assets-groups-table-body-row-0-column-loanAssets"]';
const spreadGroupsTableCustomersNumberAreaOne =
  '[data-test-id="exchange-office-assets-groups-table-body-row-0-column-customers"]';
const spreadGroupsDetailButtonOne =
  '[data-test-id="exchange-office-assets-groups-table-body-row-0-column-actions"]';
const spreadGroupsGoToDetailDetailOne =
  '[data-test-id="company-exchange-office-spread-groups-row-0-detail"]';
const spreadGroupsRemoveButtonOne =
  '[data-test-id="company-exchange-office-spread-groups-row-0-remove"]';
// 1. Satır Detay sayfası bilgileri
const groupDetailNameHeader =
  '[data-test-id="company-exchange-office-spread-group-detail-header-title"]';
const groupDetailCustomersNumberArea =
  '[data-test-id="spread-group.overview.customers-text"]';
const groupDetailCustomersAskDifferenceArea =
  '[data-test-id="spread-group.overview.ask-difference-text"]';
const groupDetailCustomersAssetsArea =
  '[data-test-id="spread-group.overview.loan-assets-text"]';
const groupDetailCustomersBidDifferenceArea =
  '[data-test-id="spread-group.overview.bid-difference-text"]';
// Exchange Office - New Spread Group Create
const newSpreadGroupsNameArea = '[data-test-id="spreadGroup-field-name"]';
const newSpreadGroupsLoanAssetLeadsArea =
  '[data-test-id="spread-group-form-loanAssetIds-select"]';
const newSpreadGroupsLoanAssetLeadsSelected =
  '[data-test-id="1-spread-group-form-loanAssetIds-select-option"]';
const newSpreadGroupsCustomerLeadsArea =
  '[data-test-id="spread-group-form-customerIds-select"]';
const newSpreadGroupsCustomerLeadsSelectElements =
  'div[role="listbox"] > ul > li';
const newSpreadGroupsAskDifferenceArea =
  '[data-test-id="spread-group-form-askDifference-input"]';
const newSpreadGroupsBidDifferenceArea =
  '[data-test-id="spread-group-form-bidDifference-input"]';
const newSpreadGroupsSaveButton =
  '[data-test-id="spreadGroup-form-footer-action"]';
//Exchange Office - Spread Group Assets Tab
const spreadGroupAssetsTab =
  '[data-test-id="company-exchange-office.spread-group.tabs.assets"]';
const spreadGroupAssetsAddButton =
  '[data-test-id="spread-group.assets.create-button"]';
const spreadGroupAddAssetSelectBoxAll =
  '[data-test-id="exchange-office-assets-table-all-row-select"]';
const spreadGroupAddAssetSelectBoxOne =
  '[data-test-id="exchange-office-assets-table-0-row-select"]';
const spreadGroupAddAssetParityNameOne =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-metaSymbol"]';
const spreadGroupAddAssetDisplayNameOne =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-displayName"]';
const spreadGroupAddAssetBaseCurrencyOne =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-baseCurrency"]';
const spreadGroupAddAssetPairCurrencyOne =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-pairCurrency"]';
const spreadGroupAddAssetAskDifferenceOne =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-askDifference"]';
const spreadGroupAddAssetBidDifferenceOne =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-bidDifference"]';
const spreadGroupAssetsAddAssetAddButton =
  '[data-test-id="add-asset-table-modal-footer-action"]';
const spreadGroupAddAssetTableParityNameOne =
  '[data-test-id="spread-group.assets.table-body-row-0-column-metaSymbol"]';
const spreadGroupAddAssetTableDisplayNameOne =
  '[data-test-id="spread-group.assets.table-body-row-0-column-displayName"]';
const spreadGroupAddAssetTableBaseCurrencyOne =
  '[data-test-id="spread-group.assets.table-body-row-0-column-baseCurrency"]';
const spreadGroupAddAssetTablePairCurrencyOne =
  '[data-test-id="spread-group.assets.table-body-row-0-column-pairCurrency"]';
const spreadGroupAddAssetTableAskDifferenceOne =
  '[data-test-id="spread-group.assets.table-body-row-0-column-askDifference"]';
const spreadGroupAddAssetTableBidDifferenceOne =
  '[data-test-id="spread-group.assets.table-body-row-0-column-bidDifference"]';
//Exchange Office - Spread Group Customers Tab
const spreadGroupCustomersTab =
  '[data-test-id="spread-group.customers.create-button"]';
const spreadGroupCustomersCreateButton =
  '[class="flex flex-row items-center justify-between mt-[24px]"] button';
const spreadGroupAddCustomersSelectBoxAll =
  '[data-test-id="exchange-office-assets-table-all-row-select"]';
const spreadGroupAddCustomersSelectBoxOne =
  '[data-test-id="exchange-office-assets-table-0-row-select"]';
const spreadGroupAddCustomersIDOne =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-id"]';
const spreadGroupAddCustomersNameOne =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-firstName"]';
const spreadGroupAddCustomersEmailOne =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-email"]';
const spreadGroupAddCustomersAddButton =
  '[data-test-id="add-asset-table-modal-footer-action"]';
// Exchange Office -Spread Group Filter Check
const spreadGroupTableHeaderArea = 'thead > tr[role="row"]';
const spreadGroupFilterButton =
  '[data-test-id="exchange-office-assets-groups-table-header-actions"]';
const spreadGroupNameFilter =
  '[data-test-id="exchange-office-assets-groups-table-display-button-name"]';
const spreadGroupAskDifferenceFilter =
  '[data-test-id="exchange-office-assets-groups-table-display-button-askDifference"]';
const spreadGroupBidDifferenceFilter =
  '[data-test-id="exchange-office-assets-groups-table-display-button-bidDifference"]';
const spreadGroupAssetNumberFilter =
  '[data-test-id="exchange-office-assets-groups-table-display-button-loanAssets"]';
const spreadGroupCustomersNumberFilter =
  '[data-test-id="exchange-office-assets-groups-table-display-button-customers"]';
const spreadGroupTableNameHeader =
  '[data-test-id="exchange-office-assets-groups-table-header-name"]';
const spreadGroupTableAskDifferenceHeader =
  '[data-test-id="exchange-office-assets-groups-table-header-askDifference"]';
const spreadGroupTableBidDifferenceHeader =
  '[data-test-id="exchange-office-assets-groups-table-header-bidDifference"]';
const spreadGroupTableAssetNumberHeader =
  '[data-test-id="exchange-office-assets-groups-table-header-loanAssets"]';
const spreadGroupTableCustomersNumberHeader =
  '[data-test-id="exchange-office-assets-groups-table-header-customers"]';

const values = {
  //create
  nameText,
  editNameText,
  descriptionText,
  editDescriptionText,
  bankNameText,
  editBankNameText,
  // Exchange Office - Spread Group
  createNewSpreadGroupsButton,
  groupDetailCustomerEditButton,
  groupDetailCustomerDeleteButton,
  spreadGroupsRemoveConfirmButton,
  spreadGroupsTableNameAreaOne,
  spreadGroupsTableAskDifferenceAreaOne,
  spreadGroupsTableBidDifferenceAreaOne,
  spreadGroupsTableAssetsNumberAreaOne,
  spreadGroupsTableCustomersNumberAreaOne,
  spreadGroupsDetailButtonOne,
  spreadGroupsGoToDetailDetailOne,
  spreadGroupsRemoveButtonOne,
  groupDetailNameHeader,
  groupDetailCustomersNumberArea,
  groupDetailCustomersAskDifferenceArea,
  groupDetailCustomersAssetsArea,
  groupDetailCustomersBidDifferenceArea,
  newSpreadGroupsNameArea,
  newSpreadGroupsLoanAssetLeadsArea,
  newSpreadGroupsLoanAssetLeadsSelected,
  newSpreadGroupsCustomerLeadsArea,
  newSpreadGroupsCustomerLeadsSelectElements,
  newSpreadGroupsAskDifferenceArea,
  newSpreadGroupsBidDifferenceArea,
  newSpreadGroupsSaveButton,
  //Exchange Office -  Assets Tab
  spreadGroupAssetsTab,
  spreadGroupAssetsAddButton,
  spreadGroupAddAssetSelectBoxAll,
  spreadGroupAddAssetSelectBoxOne,
  spreadGroupAddAssetParityNameOne,
  spreadGroupAddAssetDisplayNameOne,
  spreadGroupAddAssetBaseCurrencyOne,
  spreadGroupAddAssetPairCurrencyOne,
  spreadGroupAddAssetAskDifferenceOne,
  spreadGroupAddAssetBidDifferenceOne,
  spreadGroupAssetsAddAssetAddButton,
  spreadGroupAddAssetTableParityNameOne,
  spreadGroupAddAssetTableDisplayNameOne,
  spreadGroupAddAssetTableBaseCurrencyOne,
  spreadGroupAddAssetTablePairCurrencyOne,
  spreadGroupAddAssetTableAskDifferenceOne,
  spreadGroupAddAssetTableBidDifferenceOne,
  //Exchange Office - Customers Tab
  spreadGroupCustomersTab,
  spreadGroupCustomersCreateButton,
  spreadGroupAddCustomersSelectBoxAll,
  spreadGroupAddCustomersSelectBoxOne,
  spreadGroupAddCustomersIDOne,
  spreadGroupAddCustomersNameOne,
  spreadGroupAddCustomersEmailOne,
  spreadGroupAddCustomersAddButton,
  //Exchange Office - Spread Groups Filter
  spreadGroupTableHeaderArea,
  spreadGroupFilterButton,
  spreadGroupNameFilter,
  spreadGroupAskDifferenceFilter,
  spreadGroupBidDifferenceFilter,
  spreadGroupAssetNumberFilter,
  spreadGroupCustomersNumberFilter,
  spreadGroupTableNameHeader,
  spreadGroupTableAskDifferenceHeader,
  spreadGroupTableBidDifferenceHeader,
  spreadGroupTableAssetNumberHeader,
  spreadGroupTableCustomersNumberHeader,
};
export default values;
