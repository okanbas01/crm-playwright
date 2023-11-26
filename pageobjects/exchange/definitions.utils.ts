//AddAsset
const addButton =
  '[class="flex flex-row items-center justify-between mt-[24px]"] button';
const displayName = '[data-test-id="asset-field-displayName"]';
const parityArea =
  '[class="space-y-6"] > [class="mantine-InputWrapper-root mantine-1ryrb3t"]:nth-of-type(2) [tabindex]';
const parityDropdown = 'div#async-select > .relative > div > ul > li';
const selectedParity =
  '[class="space-y-6"] > [class="mantine-InputWrapper-root mantine-1ryrb3t"]:nth-of-type(2) [tabindex]';
const baseCurrencyArea =
  'div:nth-of-type(1) > div > .mantine-1ryrb3t.mantine-InputWrapper-root > div[role="combobox"]  .group.relative';
const baseCurrencyDropdown = '.floating-ui-select-group > li';
const selectedBaseCurrency =
  '[class] [class] > [class="mantine-InputWrapper-root mantine-1ryrb3t"]:nth-of-type(1) [class="truncate max-w-full !mr-0"]';
const quoteCurrencyArea =
  'div:nth-of-type(3) > div:nth-of-type(2) > div > .mantine-1ryrb3t.mantine-InputWrapper-root > div[role="combobox"]  .group.relative';
const quoteCurrencyDropdown = 'div[role="listbox"] > ul > li';
const selectedQuoteCurrency =
  '[class="space-y-6"] [class] [class="mantine-InputWrapper-root mantine-1ryrb3t"]:nth-of-type(2) [tabindex]';
const askDifferenceInput = '[data-test-id="asset-field-askDifference"]';
const bidDifferenceInput = '[data-test-id="asset-field-bidDifference"]';
const rateDigistsInput = '[data-test-id="asset-field-rateDigits"]';
const rateSmallDigistsInput = '[data-test-id="asset-field-rateSmallDigits"]';
const newAssetSaveButton = '[data-test-id="asset-form-footer-action"]';
const listParity =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-metaSymbol"]';
const listDisplayName =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-displayName"]';
const listBaseCurrency =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-baseCurrency"]';
const listPairCurrency =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-pairCurrency"]';
const listAskDifference =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-askDifference"]';
const listBidDifference =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-bidDifference"]';

// Create
const uuid = () => Math.floor(Math.random() * 10000);
const id = uuid();
const nameText = `Name${id}`;
//removeAsset
const assetDetailButton =
  '[data-test-id="exchange-office-assets-table-table-body-row-0"] [type]';
const removeAssetButton = 'ul[role="menu"] > li:nth-of-type(4)';
const removeConfirmAssetButton = '[data-test-id="confirm-modal-footer-action"]';

//editAsset
const assetEditButton =
  'li:nth-of-type(2) > .flex.items-center.space-x-2.w-full';

//isCurrencyEditingDisabled
const loanAssetSearchInput =
  '[data-test-id="loan-form-loan-asset-select-search"]';
const selectDisplayName = 'li[role="option"]';
//randomSelect
const dropdownList = '.floating-ui-select-group > li';

//isCurrencyEditingDisabled
const newOperationButton =
  "[class='items-center gap-2 hidden md:flex'] [class] button:nth-of-type(2)";
const customerInput =
  '[class] [class="mantine-InputWrapper-root mantine-1ryrb3t"]:nth-of-type(2) [tabindex]';
const assetsInput = '[class="grid grid-cols-2 gap-x-2"] [tabindex]';
const companyAmountInput = 'input[name="companyAmount"]';
const companyAmountType = '1';
const exchangeRate = '[data-test-id="loan-form-agreed-rate-input"]';
const operationCreateButton = "[data-test-id='loan-form-footer-action']";

const values = {
  //isCurrencyEditingDisabled
  newOperationButton,
  customerInput,
  assetsInput,
  companyAmountInput,
  companyAmountType,
  exchangeRate,
  operationCreateButton,
  //randomSelect
  dropdownList,
  //isCurrencyEditingDisabled
  loanAssetSearchInput,
  //removeAsset
  removeConfirmAssetButton,
  removeAssetButton,
  assetDetailButton,
  //AddAsset
  nameText,
  selectDisplayName,
  assetEditButton,
  listBidDifference,
  listAskDifference,
  listPairCurrency,
  listBaseCurrency,
  listDisplayName,
  listParity,
  newAssetSaveButton,
  rateSmallDigistsInput,
  rateDigistsInput,
  bidDifferenceInput,
  askDifferenceInput,
  selectedQuoteCurrency,
  quoteCurrencyDropdown,
  quoteCurrencyArea,
  selectedBaseCurrency,
  baseCurrencyDropdown,
  baseCurrencyArea,
  selectedParity,
  parityDropdown,
  parityArea,
  displayName,
  addButton,
};
export default values;
