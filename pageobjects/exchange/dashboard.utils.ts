//currency change
const boxElement = '[class="items-center gap-2 hidden md:flex"] [tabindex]';
const dropdownElement = '#rc_select_0_list_';
const options = [
  "ul[role='group'] > li:nth-of-type(1)",
  "ul[role='group'] > li:nth-of-type(2)",
  "ul[role='group'] > li:nth-of-type(3)",
  "ul[role='group'] > li:nth-of-type(4)",
  "ul[role='group'] > li:nth-of-type(5)",
];
const optionIndex = Math.floor(Math.random() * options.length); // Generate a random index
const optionElement = options[optionIndex]; // Select the option at the random index

//profit/loss
const negativeColor = 'rgb(220, 38, 38)';
const positiveColor = 'rgb(21, 128, 61)';
const capitalArea =
  '[class="tabular-nums whitespace-nowrap text-3xl font-semibold"]';
const profitLossArea =
  'div:nth-of-type(1) > div > .font-semibold.tabular-nums.text-3xl.text-error-700.whitespace-nowrap';
const activePnlArea =
  'div:nth-of-type(2) > div > .font-semibold.tabular-nums.text-2xl.text-success-700.whitespace-nowrap';
const realizedPnlArea =
  '.bg-sidebar.border-b.border-frame.border-r-0.p-[24px] > div > .font-semibold.tabular-nums.text-3xl.text-error-700.whitespace-nowrap';

//randomSelect
const dropdownList = '.floating-ui-select-group > li';

//realizedDetail
const realizedDetailButton = '[class] div:nth-child(4) p';
const currencyBox =
  '[class="items-center gap-2 hidden md:flex"] [class="truncate max-w-full !mr-0"]';
const currencySearchArea = 'input';
const currencySelect =
  '.floating-ui-select-group [role="option"]:nth-of-type(2) [class]';
const realizedProfitLoss =
  '[class] div:nth-child(4) [class="tabular-nums whitespace-nowrap text-error-700 text-3xl font-semibold"]';
const operationDetailOneButton = '[data-test-id="row-0-menu-action"]';
const operationDetailEditButton = '[role] div:nth-child(3) span';
const customerAmountCurrency =
  '[class="mantine-InputWrapper-root mantine-TextInput-root w-full mantine-1ryrb3t"] [class="text-sm font-light !text-sm !font-normal mb-0 text-secondary-500 normal-case cursor-default"]';
const values = {
  //randomSelect
  dropdownList,
  //realizedDetail
  customerAmountCurrency,
  operationDetailEditButton,
  operationDetailOneButton,
  realizedProfitLoss,
  currencySelect,
  currencySearchArea,
  currencyBox,
  realizedDetailButton,
  //profit/loss
  boxElement,
  dropdownElement,
  options,
  positiveColor,
  negativeColor,
  optionIndex,
  optionElement,
  capitalArea,
  profitLossArea,
  activePnlArea,
  realizedPnlArea,
};
export default values;
