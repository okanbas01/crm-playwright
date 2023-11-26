// Capital - Add New
const addNewCapitalButton =
  '[class="items-center gap-2 hidden md:flex"] button';
const newCapitalBalanceArea = '[data-test-id="add-capital-form-balance-input"]';
const newCapitalCurrencySelect =
  '[data-test-id="add-capital-form-currency-select"]';
const newCapitalSaveButton = '[data-test-id="capital-form-footer-action"]';
const tableCurrencyFirstNameArea =
  '[data-test-id="exchange-capital-row-0-currency-name"]';
const tableFirstCurrencyDetailButton =
  '[data-test-id="exchange-capital-row-0-action-menu"]';
const tableFirstCurrencyEditSelect =
  '[data-test-id="exchange-capital-row-0-edit-action-menu"]';
const tableCurrencyEditSaveButton =
  '[data-test-id="capital-form-footer-action"]';
const tableCurrencyDeleteButton = 'ul[role="menu"] > li:nth-of-type(4)';
const tableCurrencyDeleteConfirmButton =
  '[data-test-id="confirm-modal-footer-action"]';
const liveTotalCapitalArea =
  '[data-test-id="exchange-capital-total-capitals-price-text"]';
const tableFirstCurrencyLive =
  '[data-test-id="exchange-capital-row-0-selected-currency-balance-text"]';
const tableSecondCurrencyLive =
  '[data-test-id="exchange-capital-row-1-selected-currency-balance-text"]';
const tableThirdCurrencyLive =
  '[data-test-id="exchange-capital-row-2-selected-currency-balance-text"]';
const tableFourthCurrencyLive =
  '[data-test-id="exchange-capital-row-3-selected-currency-balance-text"]';
const tableFifthCurrencyLive =
  '[data-test-id="exchange-capital-row-4-selected-currency-balance-text"]';
const tableFirstCurrencyArea =
  '[data-test-id="exchange-capital-row-0-balance-text"]';

//randomSelect
const dropdownList = '.floating-ui-select-group > li';
const values = {
  //randomSelect
  dropdownList,
  // Capital
  addNewCapitalButton,
  newCapitalBalanceArea,
  newCapitalCurrencySelect,
  newCapitalSaveButton,
  tableCurrencyFirstNameArea,
  tableFirstCurrencyDetailButton,
  tableFirstCurrencyEditSelect,
  tableCurrencyEditSaveButton,
  tableCurrencyDeleteButton,
  liveTotalCapitalArea,
  tableFirstCurrencyLive,
  tableSecondCurrencyLive,
  tableThirdCurrencyLive,
  tableFourthCurrencyLive,
  tableFifthCurrencyLive,
  tableFirstCurrencyArea,
  tableCurrencyDeleteConfirmButton,
};
export default values;
