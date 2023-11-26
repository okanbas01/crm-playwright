// Create
const uuid = () => Math.floor(Math.random() * 10000);
const id = uuid();
const nameText = `Name${id}`;
const editNameText = `Edit Name${id}`;
const descriptionText = `Description${id}`;
const editDescriptionText = `Edit Description${id}`;
const bankNameText = `Bank ${id}`;
const editBankNameText = `Edit Bank ${id}`;

// Accounting - Banks
const addNewBankButton = '[class] .justify-between .nowrap';
const addNewBankNameArea = '[data-test-id="bank-form-name-input"]';
const addNewBankCountryArea = '[data-test-id="bank-form-country-select"]';
const addNewBankCountrySelect = 'div[role="listbox"] > ul > li';
const addNewBankSwiftCodeArea = '[data-test-id="bank-form-swift-input"]';
const addNewBankSwiftCodeText = 'TEKFTRISXXX';
const addNewBankSaveButton = '[data-test-id="bank-form-footer-action"]';
const bankDeleteConfirmButton = '[data-test-id="confirm-modal-footer-action"]';
// All Bank 1. sıra
const bankEnableButtonOne =
  '[data-test-id="settings-accounting-passive-banks-row-0-enable-button"]';
const bankDetailButtonOne =
  '[data-test-id="settings-accounting-passive-banks-row-0-menu-button"]';
const bankDetailEditButtonOne =
  '[data-test-id="settings-accounting-passive-banks-row-0-menu-edit-button"]';
const bankDetailRemoveButtonOne =
  '[data-test-id="settings-accounting-passive-banks-row-0-menu-delete-button"]';
const bankTableNameAreaOne =
  '[data-test-id="settings-accounting-passive-banks-body-row-0-column-name"]';
const bankTableCountryNameAreaOne =
  '[data-test-id="settings-accounting-passive-banks-body-row-0-column-country"]';
// Active Banks
const activeBankDetailButtonOne =
  '[data-test-id="settings-accounting-active-banks-row-0-menu-button"]';
const activeBankDetailDisableButtonOne =
  '[data-test-id="settings-accounting-active-banks-row-0-menu-disable-button"]';
const activeBankTableNameAreaOne =
  '[data-test-id="settings-accounting-active-banks-body-row-0-column-name"]';
const activeBankTableCountryNameAreaOne =
  '[data-test-id="settings-accounting-active-banks-body-row-0-column-country"]';
// Accounting - Account Groups/Add New Account Groups
const accountGroupsTab =
  '[data-test-id="settings-modules-accounting-account-groups-link"]';
const addNewAccountGroupButton =
  '[data-test-id="modules-accounting-external-entity-add-button"]';
const addNewAccountGroupCashTab =
  '[data-test-id="cash-account-group-form-basic-type-toggle"]';
const addNewAccountGroupBankTab =
  '[data-test-id="bank-account-group-form-basic-type-toggle"]';
const addNewAccountGroupNameArea =
  '[data-test-id="account-group-form-name-input"]';
const addNewAccountGroupAccountScopeSelect =
  '[data-test-id="account-group-form-account-context-type-select"]';
const addNewAccountGroupAccountBankSelect =
  '[data-test-id="account-group-form-account-bank-select"]';

const addNewAccountGroupAccountSaveButton =
  '[data-test-id="accountGroup-form-footer-action"]';
// Accounting - Account Groups Table
const accountGroupsTableNameOne =
  '[data-test-id="modules-accounting-external-entity-table-body-row-0-column-name"]';
const accountGroupsTableTypeOne =
  '[data-test-id="modules-accounting-external-entity-table-body-row-0-column-basicType"]';
const accountGroupsTableAccountScope =
  '[data-test-id="modules-accounting-external-entity-table-body-row-0-column-accountContextType"]';
const accountGroupsTableDetailButtonOne =
  '[data-test-id="modules-accounting-external-entity-row-0-menu-button"]';
const accountGroupsTableEditButtonOne =
  '[data-test-id="modules-accounting-external-entity-row-0-menu-edit-button"]';
const accountGroupsTableDeleteButtonOne =
  '[data-test-id="modules-accounting-external-entity-row-0-menu-delete-button"]';
const accountGroupsTableDeleteConfirmButton =
  '[data-test-id="confirm-modal-footer-action"]';
// Filter Check
const accountGroupsNameHeader =
  '[data-test-id="modules-accounting-external-entity-table-header-name"]';
const accountGroupsTypeHeader =
  '[data-test-id="modules-accounting-external-entity-table-header-basicType"]';
const accountGroupsAccountScopeHeader =
  '[data-test-id="modules-accounting-external-entity-table-header-accountContextType"]';
const accountScopeElements = 'div[role="listbox"] > ul > li';
const bankElements = '[role="listbox"] > ul > li';
const accountGroupsHeaderArea = 'table[role="table"] > .relative';
const accountGroupsNameFilter =
  '[data-test-id="modules-accounting-external-entity-table-display-button-name"]';
const accountGroupsTypeFilter =
  '[data-test-id="modules-accounting-external-entity-table-display-button-basicType"]';
const accountGroupsAccountScopeFilter =
  '[data-test-id="modules-accounting-external-entity-table-display-button-accountContextType"]';
const accountGroupsFilterButton =
  '[data-test-id="modules-accounting-external-entity-table-header-actions"]';

//Accounting - External Entities
const addNewExternalEntitiesButton =
  '[data-test-id="modules-accounting-external-entity-add-button"]';
const addNewExternalEntitiesNameArea =
  '[data-test-id="external-entity-form-name-input"]';
const addNewExternalEntitiesDescriptionArea =
  '[data-test-id="external-entity-form-description-input"]';
const addNewExternalEntitiesSaveButton =
  '[data-test-id="externalEntity-form-footer-action"]';
const externalEntitiesTableNameOneArea =
  '[data-test-id="modules-accounting-external-entity-table-body-row-0-column-name"]';
const externalEntitiesTableDescriptionOneArea =
  '[data-test-id="modules-accounting-external-entity-table-body-row-0-column-description"]';
const externalEntitiesTableDetailButtonOne =
  '[data-test-id="modules-accounting-external-entity-table-body-row-0-column-actions"]';
const externalEntitiesTableEditButtonOne =
  '[data-test-id="modules-accounting-external-entity-row-0-menu-edit-button"]';
const externalEntitiesOneDeleteButton =
  '[data-test-id="modules-accounting-external-entity-row-0-menu-delete-button"]';
const externalEntitiesOneDeleteConfirmButton =
  '[data-test-id="confirm-modal-footer-action"]';
const externalEntitiesFilterButton =
  '[data-test-id="modules-accounting-external-entity-table-header-actions"]';
const externalEntitiesHeaderArea = 'thead > tr[role="row"]';
const externalEntitiesNameFilter =
  '[data-test-id="modules-accounting-external-entity-table-display-button-name"]';
const externalEntitiesDescriptionFilter =
  '[data-test-id="modules-accounting-external-entity-table-display-button-description"]';
const externalEntitiesNameHeader =
  '[data-test-id="modules-accounting-external-entity-table-header-name"]';
const externalEntitiesDescriptionHeader =
  '[data-test-id="modules-accounting-external-entity-table-header-description"]';

const values = {
  //create
  nameText,
  editNameText,
  descriptionText,
  editDescriptionText,
  bankNameText,
  editBankNameText,
  // Banks
  addNewBankButton,
  addNewBankNameArea,
  addNewBankCountryArea,
  addNewBankCountrySelect,
  addNewBankSwiftCodeArea,
  addNewBankSwiftCodeText,
  addNewBankSaveButton,
  bankDeleteConfirmButton,
  bankEnableButtonOne,
  bankDetailButtonOne,
  bankDetailEditButtonOne,
  bankDetailRemoveButtonOne,
  bankTableNameAreaOne,
  bankTableCountryNameAreaOne,
  activeBankDetailButtonOne,
  activeBankDetailDisableButtonOne,
  activeBankTableNameAreaOne,
  activeBankTableCountryNameAreaOne,
  // Accounting - Account Groups
  accountGroupsTab,
  addNewAccountGroupButton,
  addNewAccountGroupCashTab,
  addNewAccountGroupBankTab,
  addNewAccountGroupNameArea,
  addNewAccountGroupAccountScopeSelect,
  accountScopeElements,
  bankElements,
  addNewAccountGroupAccountBankSelect,
  addNewAccountGroupAccountSaveButton,
  accountGroupsTableNameOne,
  accountGroupsTableTypeOne,
  accountGroupsTableAccountScope,
  accountGroupsTableDetailButtonOne,
  accountGroupsTableEditButtonOne,
  accountGroupsTableDeleteButtonOne,
  accountGroupsTableDeleteConfirmButton,
  accountGroupsNameHeader,
  accountGroupsTypeHeader,
  accountGroupsAccountScopeHeader,
  accountGroupsHeaderArea,
  accountGroupsNameFilter,
  accountGroupsTypeFilter,
  accountGroupsAccountScopeFilter,
  accountGroupsFilterButton,
  // External Entities
  addNewExternalEntitiesButton,
  addNewExternalEntitiesNameArea,
  addNewExternalEntitiesDescriptionArea,
  addNewExternalEntitiesSaveButton,
  externalEntitiesTableNameOneArea,
  externalEntitiesTableDescriptionOneArea,
  externalEntitiesTableDetailButtonOne,
  externalEntitiesTableEditButtonOne,
  externalEntitiesOneDeleteButton,
  externalEntitiesOneDeleteConfirmButton,
  externalEntitiesHeaderArea,
  externalEntitiesNameFilter,
  externalEntitiesDescriptionFilter,
  externalEntitiesNameHeader,
  externalEntitiesDescriptionHeader,
  externalEntitiesFilterButton,
};
export default values;
