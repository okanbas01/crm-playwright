//Customer Account
// Create
const uuid = () => Math.floor(Math.random() * 10000);
const id = uuid();
const nameText = `Name${id}`;
const createGroupButton =
  '[class="items-center gap-2 hidden md:flex"] [data-test-id="employee-accounts-list-create-button"] .normal-case';
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
const values = {
  navBarElements,
  filters,
  clickFilterButton,
  banks,
  bankSelectArea,
  bankTab,
  saveButton,
  createGroupButton,
  newAccountGroupNameArea,
  nameText,
};

export default values;
