//New Transform
const customerSelectArea = '[data-test-id="filter-customer-select"]';
const customerCurrentSelect =
  '.floating-ui-select-group [role="option"]:nth-of-type(1) p';
const detailButton =
  '[data-test-id="exchange-office-customer-current-table-body-row-0-column-actions"]';
const goToDetail = 'li:nth-of-type(2)  span';
const newTransformButton = 'button:nth-of-type(1) > .normal-case.nowrap';
const loanAssetInput = "[class='grid grid-cols-2 gap-x-2'] [tabindex]";
const usdTry = '[data-test-id="2-transform-form-asset-select-option"]';
const companyAmountArea =
  '[data-test-id="transform-form-company-amount-input"]';
const rateArea = '[data-test-id="transform-form-agreed-rate-input"]';
const customerAmountArea =
  '[data-test-id="transform-form-customer-amount-input"]';
const saveButton = '[data-test-id="transform-form-footer-action"]';
const usdTabValue =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-body-row-0-column-USD"]';
const tryTabValue =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-body-row-0-column-TRY"]';
const actionTab =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-body-row-0-column-action"]';
const transformActionName = 'transform';

//New Entry
const newEntryButton = 'button:nth-of-type(2) > .normal-case.nowrap';
const balanceGroup =
  ".mantine-15736ur.mantine-Modal-body div[role='combobox']  .group.relative";
const selectUsd =
  '[data-test-id="2-customer-current-form-wallet-select-option"]';
const balanceInput = "input[name='balance']";
const entryActionName = 'entry';
const companyAccountGroup =
  '[data-test-id="customer-current-form-company-amount-select"] [tabindex]';
const selectCompanyAccount =
  '[data-test-id="1-customer-current-form-company-amount-select-option"]';
const customerAccountGroup =
  '[data-test-id="customer-current-form-customer-amount-select"] [tabindex]';
const selectCustomerAccount =
  '[data-test-id="2-customer-current-form-customer-amount-select-option"]';
const newEntrySaveButton = '[data-test-id="entry-form-footer-action"]';

//randomSelect
const dropdownList = '.floating-ui-select-group > li';

//Customer Current Currency Change
const totalCostArea =
  '[data-test-id="exchange-office-customer-current-table-header-loanWallets"]';
const firstCustomer =
  '[data-test-id="exchange-office-customer-current-table-table-body-row-0"] > td:nth-of-type(2)';
const boxElement = '[class="items-center gap-2 hidden md:flex"] [tabindex]';

const values = {
  //Customer Current Currency Change
  totalCostArea,
  firstCustomer,
  boxElement,
  //randomSelect
  dropdownList,
  //New Entry
  newEntryButton,
  balanceGroup,
  selectUsd,
  balanceInput,
  entryActionName,
  companyAccountGroup,
  selectCompanyAccount,
  customerAccountGroup,
  selectCustomerAccount,
  newEntrySaveButton,
  //New Transform
  customerSelectArea,
  customerCurrentSelect,
  detailButton,
  goToDetail,
  newTransformButton,
  loanAssetInput,
  usdTry,
  companyAmountArea,
  rateArea,
  customerAmountArea,
  saveButton,
  usdTabValue,
  tryTabValue,
  actionTab,
  transformActionName,
};
export default values;
