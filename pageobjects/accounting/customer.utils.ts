//Customer Account
// Create
const uuid = () => Math.floor(Math.random() * 10000);
const id = uuid();
const customerNameText = `CustomerName${id}`;
const newCustomerNameText = `NewCustomerName${id}`;

const createGroupButton =
  '[class="items-center gap-2 hidden md:flex"] [data-test-id="customer-accounts-list-create-button"] .normal-case';
const newAccountGroupNameArea =
  '[data-test-id="account-group-form-name-input"]';
const saveButton = '[data-test-id="accountGroup-form-footer-action"]';
const bankTab = '[data-test-id="bank-account-group-form-basic-type-toggle"]';
const bankSelectArea =
  '[data-test-id="account-group-form-account-bank-select"] [tabindex]';
const banks = '.floating-ui-select-group > li';
const clickFilterButton = '[aria-expanded] .group';
const filters = 'div#floating-ui-0 > ul[role="group"] > li';
const navBarElements =
  '[class="flex border-b-2 border-transparent space-x-6 h-12"]';

//clearAllCustomerAccount
const clearAllDataButton =
  '[class="items-center gap-2 hidden md:flex"] [data-test-id="clear-all-data-button"] .normal-case';
const deleteConfirmActionButton =
  '[data-test-id="confirm-modal-footer-action"] .normal-case';

const values = {
  //clearAllCustomerAccount
  deleteConfirmActionButton,
  clearAllDataButton,
  newCustomerNameText,
  navBarElements,
  filters,
  clickFilterButton,
  banks,
  bankSelectArea,
  bankTab,
  saveButton,
  createGroupButton,
  newAccountGroupNameArea,
  customerNameText,
};

export default values;
