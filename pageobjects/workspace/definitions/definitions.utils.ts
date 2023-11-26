//enableCurrency
const enableButton =
  '[data-test-id="settings-workspace-currency-list-table-body-row-0"] button';
const passiveCurrencyName =
  '[data-test-id="settings-workspace-currency-list-table-body-row-0"] [class="text-xs ml-2 text-gray-500"]';
const currencyBox =
  '[class="items-center gap-2 hidden md:flex"] [class="truncate max-w-full !mr-0"]';
const currencyList = '.floating-ui-select-group > li';

//disableCurrency
const activeCurrency =
  '[data-test-id="settings-workspace-currencies-table-body-row-1"] [class="text-xs ml-2 text-gray-500"]';
const detailActiveCurrencyActionButton =
  '[data-test-id="settings-workspace-currencies-table-body-row-1"] .text-inherit';
const disableButton = 'li:nth-of-type(3)  span';

//checkCurrencyFilter
const currencyFilterBox =
  '[data-test-id="filter-currency-select"] .text-inherit';
const currencyFilterList = 'div#async-select > .relative > div > ul > li';
const passiveCurrencyShortName =
  '[data-test-id="settings-workspace-currency-list-table-body-row-0"] [class="font-medium w-8"]';
const values = {
  passiveCurrencyShortName,
  currencyFilterList,
  currencyFilterBox,
  disableButton,
  detailActiveCurrencyActionButton,
  activeCurrency,
  currencyList,
  currencyBox,
  passiveCurrencyName,
  enableButton,
};
export default values;
