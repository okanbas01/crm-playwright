//loan dataset
const newOperationButton =
  "[class='items-center gap-2 hidden md:flex'] [class] button:nth-of-type(2)";
const operationCreateButton = "[data-test-id='loan-form-footer-action']";
const clearAllData =
  '[class="items-center gap-2 hidden md:flex"] [class] button:nth-of-type(1)';
const clearYesButton = "[data-test-id='confirm-modal-footer-action']";
const customerInput =
  '[class] [class="mantine-InputWrapper-root mantine-1ryrb3t"]:nth-of-type(2) [tabindex]';
const customerSelect = 'ul > li:nth-of-type(1)';
const assetsInput = '[class="grid grid-cols-2 gap-x-2"] [tabindex]';
const assetsSelect = "li[role='option']";
const companyAmountInput = 'input[name="companyAmount"]';
const companyAmountType = '1';
const exchangeRate = '[data-test-id="loan-form-agreed-rate-input"]';
const customerListName = 'tr:nth-of-type(1) > td:nth-of-type(4)  a';
const buyTab =
  '[data-test-id="loan-form-operation-type-toggle"] div:nth-child(2)';
const sellTab =
  '[data-test-id="loan-form-operation-type-toggle"] div:nth-child(3)';
const emptyPage =
  '.font-medium.font-sans.mb-1.normal-case.text-inherit.text-sm';
const emptyPageText = 'not-found';
const exposureBuyElement =
  '[data-test-id="loan-exposure-table-body-row-0-column-buy"]';
const exposureSellElement =
  '[data-test-id="loan-exposure-table-body-row-0-column-sell"]';
const NetPositionsCost =
  '[data-test-id="loan-net-positions-table-body-row-0-column-costRate"]';

//Mark-Unmark
const dropdownButton =
  '[data-test-id="company-management-loan-operations-action-button-dropdown"]';
const markButton = "ul[role='menu'] > li:nth-of-type(6)";
const companyValues =
  'tr:nth-of-type(1) > td:nth-of-type(5) > .font-bold.text-lg';
const customerValues =
  'tr:nth-of-type(1) > td:nth-of-type(6) > .font-bold.text-lg';
const customerName = '[data-test-id="undefined-title"]';
const markedCompanyValues =
  '.ant-table-row.ant-table-row-level-0 > td:nth-of-type(2)';
const markedCustomerValues =
  '.ant-table-row.ant-table-row-level-0 > td:nth-of-type(3)';
const markedCustomerName =
  '.ant-table-row.ant-table-row-level-0 > td:nth-of-type(5)';
const unmarkButton = '.ant-btn-dangerous';

//customer Detail
const pageTitle =
  "[class='ml-2 leading-normal flex-grow space-y-1'] [data-test-id]";

// Split And Shift
const operationDetailOneButton = '[data-test-id="row-0-menu-action"]';
const splitAndShiftButtonFirstRow =
  '[data-test-id="row-0-menu-split-and-shift-action"]';
const splitAndShiftSaveButton =
  '[data-test-id="splitAndShift-form-footer-action"]';
const splitAndShiftCustomerOne =
  '[data-test-id="0-split-and-shift-form-shift-customer-select"]';
const splitAndShiftCustomerSelect =
  'div[role="listbox"] > ul > li:nth-of-type(2)';
const splitAndShiftCompanyAmountOne = '[data-test-id="company-amount-text"]';
const splitAndShiftCustomerAmountOne = '[data-test-id="customer-amount-text"]';
const splitAndShiftAgreedRateOne = '[data-test-id="agreed-rate-text"]';

//splitAndShiftOneCustomerChange
//1.Satır
const listIDOneArea =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-displayId"]';
const listCustomerNameOne =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-customer"] > div > div > div > p';
const listCustomerActionOneArea =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-operationType"]';
const listCompanyAmountOne =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-companyAmount"]';
const listCustomerAmountOne =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-customerAmount"]';
const listCreatedDateOneArea =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-createdDate"]';
const listStatusOneArea =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-status"]';
const listTradeOffDateOneArea =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-tradeoffDate"]';
const listAgreedRateOne =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-agreedRate"]';
const listDetailFirstRowPayments =
  '[data-test-id="exchange-office-detail-table-body-row-0-column-amount"] > div > span';
const listDetailFirstRowDescription =
  '[data-test-id="exchange-office-detail-table-body-row-0-column-description"]';
const listDetailFirstRowPaymentDate =
  '[data-test-id="exchange-office-detail-table-body-row-0-column-paymentDate"]';
const listCustomerStatusOneArea =
  '[data-test-id="exchange-office-assets-table-body-row-0-column-status"]';
//2.Satır
const listIDTwoArea =
  '[data-test-id="exchange-office-operation-table-body-row-1-column-displayId"]';
const listCustomerNameTwo =
  '[data-test-id="exchange-office-operation-table-body-row-1-column-customer"] > div >div > div > p';
const listCustomerActionTwoArea =
  '[data-test-id="exchange-office-operation-table-body-row-1-column-operationType"]';
const listCompanyAmountTwo =
  '[data-test-id="exchange-office-operation-table-body-row-1-column-companyAmount"]';
const listCustomerAmountTwo =
  '[data-test-id="exchange-office-operation-table-body-row-1-column-customerAmount"]';
const listCreatedDateTwoArea =
  '[data-test-id="exchange-office-operation-table-body-row-1-column-createdDate"]';
const listStatusTwoArea =
  '[data-test-id="exchange-office-operation-table-body-row-1-column-status"]';
const listTradeOffDateTwoArea =
  '[data-test-id="exchange-office-operation-table-body-row-1-column-tradeoffDate"]';
const listAgreedRateTwo =
  '[data-test-id="exchange-office-operation-table-body-row-1-column-agreedRate"]';

// Operation Add New Payment
const newAddLoanButton = '[data-test-id="row-0-menu-add-action"]';
const addLoanAmountArea = '[data-test-id="add-loan-form-amount-input"]';
const addLoanDescriptionArea =
  '[data-test-id="add-loan-form-description-input"]';
const addNewLoanSaveButton = '[data-test-id="addLoan-form-footer-action"]';
const operationTableDetailButton =
  '[data-test-id="exchange-office-operation-table-0-row-expander-action"]';
const companyAccountGroupAddPayment =
  '[data-test-id="add-loan-form-company-account-select"] [tabindex]';
const customerAccountGroupAddPayment =
  '[data-test-id="add-loan-form-customer-account-select"] [tabindex]';
const selectAccountAddPayment =
  '.floating-ui-select-group [role="option"]:nth-of-type(1)';
const activeTab = '[data-active]';
const customerFilter = '[data-test-id="filter-customer-select"]';
const customerSearchInput = 'input';
const selectedCustomer = '[data-test-id="user-async-select-card-option-title"]';
const selectedListCustomer = '[data-test-id="undefined-title"]';
// Create
const uuid = () => Math.floor(Math.random() * 10000);
const id = uuid();
const descriptionText = `Description${id}`;

//splitOperation
const addFieldButton = '[data-test-id="split-and-shift-form-add-field"]';
const firstInputCompanyAmount =
  '[data-test-id="0-split-and-shift-form-company-amount-input"]';
('[data-test-id="0-split-and-shift-form-company-amount-input"]');

const secondInputCompanyAmount =
  '[data-test-id="1-split-and-shift-form-company-amount-input"]';
const firstInputCustomerAmount =
  '[data-test-id="0-split-and-shift-form-customer-amount-input"]';
const secondInputCustomerAmount =
  '[data-test-id="1-split-and-shift-form-customer-amount-input"]';
const mainCompanyAmount = '[data-test-id="company-amount-text"]';
const mainCustomerAmount = '[data-test-id="customer-amount-text"]';
const customerAmountListArea1 =
  '[data-test-id="exchange-office-operation-table-body-row-1-column-customerAmount"]';
const customerAmountListArea2 =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-customerAmount"]';

const companyAmountListArea1 =
  '[data-test-id="exchange-office-operation-table-body-row-1-column-companyAmount"]';
const companyAmountListArea2 =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-companyAmount"]';
const firstSplitIDArea =
  '[data-test-id="exchange-office-operation-table-body-row-1-column-displayId"]';
const secondSplitIDArea =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-displayId"]';
const mainOperationId =
  '[data-test-id="exchange-office-operation-table-body-row-2-column-displayId"]';
const secondPopupActionArea =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-operationType"]';
const firstPopupActionArea =
  '[data-test-id="exchange-office-operation-table-body-row-1-column-operationType"]';

// Operation Marked
const operationDetailMarkedButton = '[data-test-id="row-0-menu-mark-action"]';
const markedOperationsButton =
  '[data-test-id="filter-marked-operations-action"]';

//editOperation
const operationDetailEditButton = '[role] div:nth-child(3) span';
const editCustomerArea = '[data-test-id="loan-field-customer"]';
const editCustomerSelected =
  '.floating-ui-select-group [role="option"]:nth-of-type(2) p';
const editInputCompanyAmount =
  '[data-test-id="loan-form-company-amount-input"]';
const editCustomerSaveButton = '[data-test-id="loan-form-footer-action"]';

//calendar
const tradeOffDate = '[data-test-id="loan-form-trade-off-date-action"]';
const calendarArea = '.mantine-UnstyledButton-root.mantine-Day-day';
const daySelector = 'button[data-today="true"]';
const selectedDay =
  '.mantine-UnstyledButton-root.mantine-Day-day[data-today="true"][data-selected="true"]';

// Customer Current
const customerCurrentNameText =
  '.cursor-default.flex.font-medium.items-center.text-base';
const customerCurrentRowDetailButton =
  '[data-test-id="exchange-office-customer-current-table-body-row-0-column-actions"]';

//1.Satır
const customerCurrentCreatedDateOneText =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-table-body-row-0"] [class="whitespace-nowrap px-0.5 text-sm align-middle h-[50px] pl-2 w-auto"]:nth-of-type(2)';
const customerCurrentIDOneText =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-body-row-0-column-id"]';
const customerCurrentUSDOneArea =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-body-row-0-column-TRY"]';
const customerCurrentTRYOneArea =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-body-row-0-column-TRY"]';
const firstRowDetailLoanDisplayID =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-body-row-0-column-id"]';
const firstRowDetailAgreedRate =
  '[data-test-id="exchange-office-customer-current-detail-transaction-expanded-description-table-table-body-row-0"] [class="whitespace-nowrap px-0.5 text-sm align-middle h-[50px] pl-2 w-auto"]:nth-of-type(3)';
const firstRowDetailLoanTo = '[data-test-id="customer-current-title"]';
const firstRowDetailFrom = '[class="ml-2 leading-normal flex-grow"]';
const customerCurrentActionOne =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-body-row-0-column-action"]';
//2.Satır
const customerCurrentCreatedDateTwoText =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-body-row-0-column-createdDate"]';
const customerCurrentUSDTwoArea =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-table-body-row-1"] [class="whitespace-nowrap px-0.5 text-sm align-middle h-[50px] pl-2 text-right w-auto"]:nth-of-type(6)';
const customerCurrentTRYTwoArea =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-table-body-row-1"] [class="whitespace-nowrap px-0.5 text-sm align-middle h-[50px] pl-2 text-right w-auto"]:nth-of-type(8)';
const secondRowDetailLoanDisplayID =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-body-row-0-column-id"]';
const secondRowDetailAgreedRateArea =
  'tr:nth-of-type(4) [data-test-id] [class="whitespace-nowrap px-0.5 text-sm align-middle h-[50px] pl-2 w-auto"]:nth-of-type(3)';
const customerCurrentActionTwo =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-table-body-row-1"] [class="whitespace-nowrap px-0.5 text-sm align-middle h-[50px] pl-2 w-auto"]:nth-of-type(4)';
// Actions
const actionSplit = 'split';
const actionShifted = 'shifted';
const actionShift = 'shift';
const actionAdd = 'add';
const addToLoan = 'add_to_loan';
const statusOpen = 'open';
const actionCreate = 'create';

//randomSelect
const dropdownList = '.floating-ui-select-group > li';

//Multiple Shift Operation
const formFirstCustomerName =
  '[data-test-id="exchange-office-shift-table-body-row-0-column-customer"] >div > div > div > div > p';
const formSecondCustomerName =
  '[data-test-id="exchange-office-shift-table-body-row-1-column-customer"] >div > div > div > div > p';

const firstOperationCheckBox =
  '[data-test-id="exchange-office-operation-table-0-row-select"]';
const secondOperationCheckBox =
  '[data-test-id="exchange-office-operation-table-1-row-select"]';
const shiftSelectedLoan = '[data-test-id="operation-list-shift-selected-loan"]';

const assignFirstCustomerName =
  '[data-test-id="exchange-office-shift-table-table-body-row-0"] [data-test-id="user-async-select-card-title"]';
const formFirstCompanyAmount =
  '[data-test-id="exchange-office-shift-table-body-row-0-column-companyAmount"]';
const formFirstAgreedRate =
  '[data-test-id="exchange-office-shift-table-body-row-0-column-agreedRate"]';
const formFirstCustomerAmount =
  '[data-test-id="exchange-office-shift-table-body-row-0-column-customerAmount"]';
const assignSecondCustomerName =
  '[data-test-id="exchange-office-shift-table-table-body-row-1"] [data-test-id="user-async-select-card-title"]';
const formSecondCompanyAmount =
  '[data-test-id="exchange-office-shift-table-body-row-1-column-companyAmount"]';
const formSecondAgreedRate =
  '[data-test-id="exchange-office-shift-table-body-row-1-column-agreedRate"]';
const formSecondCustomerAmount =
  '[data-test-id="exchange-office-shift-table-body-row-1-column-customerAmount"]';
const applyAllButton =
  '[class="flex justify-end space-x-2 mt-3"] button:nth-of-type(2)';
const newCustomerArea = '[data-test-id="undefined-field-New Customer"]';

const listSixthCustomerName =
  '[data-test-id="exchange-office-operation-table-body-row-5-column-customer"] > div > div > div > p';
const listSixthStatus =
  '[data-test-id="exchange-office-operation-table-body-row-5-column-status"]';
const listFifthCustomerName =
  '[data-test-id="exchange-office-operation-table-body-row-4-column-customer"] > div > div > div > p';
const listFifthStatus =
  '[data-test-id="exchange-office-operation-table-body-row-4-column-status"]';
const listFourthCustomerName =
  '[data-test-id="exchange-office-operation-table-body-row-3-column-customer"] > div > div > div > p';
const listFourthStatus =
  '[data-test-id="exchange-office-operation-table-body-row-3-column-status"]';
const listThirdCustomerName =
  '[data-test-id="exchange-office-operation-table-body-row-2-column-customer"] > div > div > div > p';
const listThirdCompanyAmount =
  '[data-test-id="exchange-office-operation-table-body-row-2-column-companyAmount"]';
const listThirdCustomerAmount =
  '[data-test-id="exchange-office-operation-table-body-row-2-column-customerAmount"]';
const listThirdStatus =
  '[data-test-id="exchange-office-operation-table-body-row-2-column-status"]';
const listSecondCustomerName =
  '[data-test-id="exchange-office-operation-table-body-row-1-column-customer"] > div > div > div > p';
const listSecondStatus =
  'tr:nth-of-type(2) > td:nth-of-type(9)  .mantine-1t45alw.mantine-Badge-inner';
const listFirstCustomerName =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-customer"] > div > div > div > p';
const listFirstCompanyAmount =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-companyAmount"]';
const listFirstCustomerAmount =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-customerAmount"]';
const listFirstStatus =
  '[data-test-id="exchange-office-operation-table-table-body-row-0"] [class="whitespace-nowrap px-0.5 text-sm align-middle h-[50px] pl-2 w-auto"]:nth-of-type(9)';
const listFirstAction =
  '[data-test-id] [class="whitespace-nowrap px-0.5 text-sm align-middle h-[50px] pl-2 w-auto"]:nth-of-type(5)';
const popupShiftButton =
  '[data-test-id="selected-shift-loan-table-modal-footer-action"]';
const splitted = 'splitted';
const shifted = 'shifted';
const openShift = 'openShift';

//assertTotalAmountDifference
const agreedRateButton =
  '[data-test-id="exchange-office-shift-table-header-agreedRate"] > div > svg';
const newRateInput = '[type="text"]';

const totalAmountDiffrenceArea =
  '[class="flex justify-end items-center space-x-2 mt-3"] .whitespace-nowrap';
const assignArea = 'th:nth-of-type(3)  svg[role="presentation"]';
const selectAssignCustomer =
  '.floating-ui-select-group [role="option"]:nth-of-type(3) p';
const assignName =
  '[class="flex justify-end items-center space-x-2 mt-3"] [data-test-id="undefined-title"]';

const formFirstCustomerNewAmount =
  '[data-test-id="exchange-office-shift-table-table-body-row-0"] [class] .whitespace-nowrap:nth-child(3)';
const formSecondCustomerNewAmount =
  '[data-test-id="exchange-office-shift-table-table-body-row-1"] [class] .whitespace-nowrap:nth-child(3)';
const formFirstOldAgreedRateArea =
  '[data-test-id="exchange-office-shift-table-table-body-row-0"] [class="text-base font-normal !text-sm !font-normal mb-0 text-light-400 dark:text-dark-300 normal-case"]';
const firstAgreedRateArea =
  '[data-test-id="exchange-office-shift-table-table-body-row-0"] [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const formSecondOldAgreedRateArea =
  '[data-test-id="exchange-office-shift-table-table-body-row-1"] [class="text-base font-normal !text-sm !font-normal mb-0 text-light-400 dark:text-dark-300 normal-case"]';
const formFirstOldCustomerAmountArea =
  '[data-test-id="exchange-office-shift-table-table-body-row-0"] [class="text-base font-normal !text-sm !font-normal mb-0 text-light-400 dark:text-dark-300 normal-case"]';

const formSecondOldCustomerAmountArea =
  '[data-test-id="exchange-office-shift-table-table-body-row-1"] [class="tabular-nums whitespace-nowrap text-gray-500"]';

const secondAgreedRateArea =
  '[data-test-id="exchange-office-shift-table-table-body-row-1"] [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const firstCompanyAmountArea =
  '[data-test-id="exchange-office-shift-table-table-body-row-1"] [class="whitespace-nowrap text-sm align-middle h-[50px] text-right w-auto px-4"]:nth-of-type(4) [class="text-sm font-light !text-sm !font-normal mb-0 text-inherit normal-case !inline tabular-nums"]';
const secondCompanyAmountArea =
  '[data-test-id="exchange-office-shift-table-table-body-row-0"] [class="whitespace-nowrap text-sm align-middle h-[50px] text-right w-auto px-4"]:nth-of-type(4) [class="text-sm font-light !text-sm !font-normal mb-0 text-inherit normal-case !inline tabular-nums"]';
const assignCustomerArea = '[role="menu"] .group';
const selectArea =
  '[class="flex justify-end items-center space-x-2 mt-3"] [data-test-id]';
const selectShiftAssignCustomer =
  '.floating-ui-select-group [role="option"]:nth-of-type(4)';

//resolve
const detailsActionButton = '[data-test-id="row-0-menu-action"]';
const readyToResolve = '[data-test-id="row-0-menu-change-status-action"]';
const resolve = '[data-test-id="1-resolve-action"]';
const resolvePopupCustomerNameArea =
  '[class] [class="space-y-1"]:nth-of-type(1) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const resolvePopupActionArea =
  '[class] [class="space-y-1"]:nth-of-type(2) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const resolvePopupCompanyAmountArea =
  '[class] [class="space-y-1"]:nth-of-type(3) .whitespace-nowrap';
const resolvePopupCustomerAmountArea =
  '[class] [class="space-y-1"]:nth-of-type(4) .whitespace-nowrap';
const resolveSaveButton = '[data-test-id="resolveLoan-form-footer-action"]';
const selectResolveAssignCustomer = 'ul[role="group"] > li[role="option"]';
const customerCurrentAction =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-body-row-0-column-action"]';
const customerCurrentUSD =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-body-row-0-column-USD"]';
const customerCurrentTRY =
  '[data-test-id="exchange-office-customer-current-detail-transaction-table-body-row-0-column-TRY"]';
const ready = 'Ready';
const resolved = 'resolved';
const selectAccount =
  '.floating-ui-select-group [role="option"]:nth-of-type(1)';
const upCompanyAccountArea =
  '[data-test-id="baseTransfer.companyAccount-select"] [tabindex]';
const downCompanyAccountArea =
  '[data-test-id="companyAccountCustomerCurrency-select"] [tabindex]';
const upCustomerAccountArea =
  '[data-test-id="baseTransfer.customerAccount-select"] [tabindex]';
const downCustomerAccountArea =
  '[data-test-id="quoteTransfer.customer-select"] [tabindex]';
const customerArea =
  '[class="flex flex-wrap gap-1 items-center max-w-full"] .group';
const customerDetailButton =
  '.mantine-1kugx1r.mantine-ActionIcon-root.mantine-UnstyledButton-root > svg[role="presentation"]';
const goToDetailButton = 'ul[role="menu"] > li:nth-of-type(2)';
//Customer Current Currency Change
const totalCostArea =
  '[data-test-id="exchange-office-customer-current-table-header-loanWallets"]';
const firstCustomer =
  '[data-test-id="exchange-office-customer-current-table-table-body-row-0"] > td:nth-of-type(2)';
const boxElement = '[class="items-center gap-2 hidden md:flex"] [tabindex]';

//removeOperation
const deleteActionButton = '[data-test-id="row-0-menu-delete-action"]';
const deleteConfirmActionButton =
  '[data-test-id="confirm-modal-footer-action"]';

//checkCustomerCurrentListWithDetailPage
const customerCurrentListNameArea =
  '[data-test-id="exchange-office-customer-current-table-body-row-0-column-firstName"] > a > div > div > p';
const customerCurrentListTotalArea =
  '[data-test-id="exchange-office-customer-current-table-body-row-0-column-loanWallets"] > span';

const customerCurrentDetailNameArea = '[data-test-id="customer-current-title"]';
const customerCurrentDetailTotalArea =
  '[data-test-id="customer-current-price-text"]';

//menuActivation
const menuList = '.szh-menu-container > ul[role="menu"] > div';
const firstRowStatusArea =
  '[class="mantine-Badge-root mr-1 mantine-o311bf"] [class]';
const transform = 'TRANSFORM';

//logDetailsCheckNewOperation
const goDetailButtonOne = '[data-test-id="row-0-menu-detail-action"]';
const goDetailButtonTwo = '[data-test-id="row-1-menu-action"]';
const customerLogDetailOneButton =
  '[data-test-id="exchange-office-action-logs-table-all-row-expander-action"]';
const customerTwoLogDetailButton = '[data-test-id="row-1-menu-detail-action"]';
const logDetailsLoanIDArea =
  '[class] [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case col-span-2"]:nth-of-type(2)';
const logDetailsCustomerNameArea =
  '[data-test-id="operation-detail-info-customer-name-text-title"]';
const logDetailCustomerNameHeaderArea =
  '[data-test-id="loan-detail-customer-name-text"]';
const logDetailsActionArea =
  '[class="text-base font-normal !text-sm !font-semibold mb-0 text-success-500 normal-case col-span-2"]';
const logDetailsStatusArea = '[class] [class="col-span-2"]:nth-child(10)';
const logDetailsCompanyAmountArea =
  '[data-test-id="operation-detail-info-company-amount-text"]';
const logDetailsCustomerAmountArea =
  '[data-test-id="operation-detail-info-customer-amount-text"]';
const logDetailsAgreedRateArea =
  '[data-test-id="operation-detail-info-agreed-rate-text"]';
//1.Satır
const firstRowAction =
  '[data-test-id="exchange-office-action-logs-table-body-row-0-column-action"]';
const firstRowID =
  '[data-test-id="exchange-office-action-logs-table-body-row-0-column-id"]';
const firstRowDetailIDArea =
  '[data-test-id="exchange-office-action-logs-detail-table-body-row-0-column-id"]';
const firstRowDetailCustomerArea =
  '[data-test-id="exchange-office-action-logs-detail-table-body-row-0-column-customer"]';
const firstRowDetailCompanyAmountArea =
  '[data-test-id="exchange-office-action-logs-detail-table-body-row-0-column-companyAmount"]';
const firstRowDetailCustomerAmountArea =
  '[data-test-id="exchange-office-action-logs-detail-table-body-row-0-column-customerAmount"]';
const firstRowDetailAgreedRateArea =
  '[data-test-id="exchange-office-action-logs-detail-table-body-row-0-column-agreedRate"]';
//2. satır
const secondRowDetailButton =
  '[data-test-id="exchange-office-action-logs-table-1-row-expander-action"]';
const secondRowDetailIDArea =
  '[data-test-id="exchange-office-action-logs-detail-table-body-row-0-column-id"]';
const secondRowDetailCustomerArea =
  '[data-test-id="exchange-office-action-logs-detail-table-body-row-0-column-customer"]';
const secondRowDetailCompanyAmountArea =
  '[data-test-id="exchange-office-action-logs-detail-table-body-row-0-column-companyAmount"]';
const secondRowDetailCustomerAmountArea =
  '[data-test-id="exchange-office-action-logs-detail-table-body-row-0-column-customerAmount"]';
const secondRowDetailAgreedRateLogArea =
  '[data-test-id="exchange-office-action-logs-detail-table-body-row-0-column-agreedRate"]';

const values = {
  // Log operation
  actionShift,
  statusOpen,
  actionCreate,
  goDetailButtonOne,
  goDetailButtonTwo,
  customerLogDetailOneButton,
  customerTwoLogDetailButton,
  logDetailsLoanIDArea,
  logDetailsCustomerNameArea,
  logDetailsActionArea,
  logDetailsStatusArea,
  logDetailsCompanyAmountArea,
  logDetailsCustomerAmountArea,
  logDetailsAgreedRateArea,
  firstRowAction,
  firstRowID,
  firstRowDetailIDArea,
  firstRowDetailCustomerArea,
  firstRowDetailCompanyAmountArea,
  firstRowDetailCustomerAmountArea,
  firstRowDetailAgreedRateArea,
  logDetailCustomerNameHeaderArea,
  secondRowDetailIDArea,
  secondRowDetailCustomerArea,
  secondRowDetailCompanyAmountArea,
  secondRowDetailCustomerAmountArea,
  secondRowDetailAgreedRateLogArea,
  secondRowDetailButton,
  //menuActivation
  menuList,
  firstRowStatusArea,
  transform,
  //checkCustomerCurrentListWithDetailPage
  customerCurrentListNameArea,
  customerCurrentListTotalArea,
  customerCurrentDetailNameArea,
  customerCurrentDetailTotalArea,
  //removeOperation
  deleteActionButton,
  deleteConfirmActionButton,
  //Customer Current Currency Change
  firstCustomer,
  totalCostArea,
  boxElement,
  //resolve
  goToDetailButton,
  customerDetailButton,
  customerArea,
  downCustomerAccountArea,
  upCustomerAccountArea,
  downCompanyAccountArea,
  upCompanyAccountArea,
  selectAccount,
  resolved,
  ready,
  customerCurrentTRY,
  customerCurrentUSD,
  customerCurrentAction,
  selectResolveAssignCustomer,
  resolveSaveButton,
  resolvePopupCustomerAmountArea,
  resolvePopupCompanyAmountArea,
  resolvePopupActionArea,
  resolvePopupCustomerNameArea,
  resolve,
  readyToResolve,
  detailsActionButton,
  //assertTotalAmountDifference
  selectShiftAssignCustomer,
  selectArea,
  assignCustomerArea,
  formSecondOldCustomerAmountArea,
  formFirstOldAgreedRateArea,
  formFirstOldCustomerAmountArea,
  formSecondOldAgreedRateArea,
  secondCompanyAmountArea,
  firstCompanyAmountArea,
  secondAgreedRateArea,
  firstAgreedRateArea,
  formSecondCustomerNewAmount,
  formFirstCustomerNewAmount,
  selectAssignCustomer,
  assignArea,
  assignName,
  totalAmountDiffrenceArea,
  newRateInput,
  agreedRateButton,
  //multipleShiftSelectedOperation
  popupShiftButton,
  newCustomerArea,
  applyAllButton,
  formSecondCustomerName,
  formFirstCustomerName,
  openShift,
  shifted,
  splitted,
  listFirstStatus,
  listFirstAction,
  listFirstCustomerAmount,
  listFirstCompanyAmount,
  listFirstCustomerName,
  listSecondStatus,
  listSecondCustomerName,
  listThirdStatus,
  listThirdCustomerAmount,
  listThirdCompanyAmount,
  listThirdCustomerName,
  listFourthStatus,
  listFourthCustomerName,
  listFifthStatus,
  listFifthCustomerName,
  listSixthStatus,
  listSixthCustomerName,
  formSecondCustomerAmount,
  formSecondAgreedRate,
  formSecondCompanyAmount,
  assignSecondCustomerName,
  formFirstCustomerAmount,
  formFirstAgreedRate,
  formFirstCompanyAmount,
  assignFirstCustomerName,
  shiftSelectedLoan,
  secondOperationCheckBox,
  firstOperationCheckBox,
  //randomSelect
  dropdownList,
  //Customer Current
  customerCurrentCreatedDateOneText,
  customerCurrentIDOneText,
  customerCurrentNameText,
  customerCurrentUSDOneArea,
  customerCurrentTRYOneArea,
  firstRowDetailLoanDisplayID,
  firstRowDetailAgreedRate,
  firstRowDetailLoanTo,
  customerCurrentCreatedDateTwoText,
  customerCurrentUSDTwoArea,
  customerCurrentTRYTwoArea,
  secondRowDetailLoanDisplayID,
  secondRowDetailAgreedRateArea,
  customerCurrentRowDetailButton,
  firstRowDetailFrom,
  customerCurrentActionOne,
  customerCurrentActionTwo,
  actionSplit,
  actionShifted,
  actionAdd,
  addToLoan,
  //calendar
  tradeOffDate,
  calendarArea,
  daySelector,
  selectedDay,
  //editOperation
  operationDetailEditButton,
  editCustomerArea,
  editCustomerSelected,
  editInputCompanyAmount,
  editCustomerSaveButton,
  //Operation Marked
  operationDetailMarkedButton,
  markedOperationsButton,
  listStatusOneArea,
  //splitOperation
  addFieldButton,
  secondInputCustomerAmount,
  firstInputCustomerAmount,
  secondInputCompanyAmount,
  firstInputCompanyAmount,
  mainCompanyAmount,
  mainCustomerAmount,
  customerAmountListArea1,
  customerAmountListArea2,
  companyAmountListArea1,
  companyAmountListArea2,
  firstSplitIDArea,
  secondSplitIDArea,
  mainOperationId,
  secondPopupActionArea,
  firstPopupActionArea,
  // Operation Add New Payment
  newAddLoanButton,
  addLoanAmountArea,
  addNewLoanSaveButton,
  addLoanDescriptionArea,
  operationTableDetailButton,
  companyAccountGroupAddPayment,
  selectAccountAddPayment,
  activeTab,
  customerAccountGroupAddPayment,
  descriptionText,
  customerFilter,
  customerSearchInput,
  selectedCustomer,
  selectedListCustomer,
  //splitAndShiftOneCustomerChange
  listTradeOffDateTwoArea,
  listCustomerActionTwoArea,
  listCustomerNameOne,
  listCompanyAmountOne,
  listCustomerAmountOne,
  listAgreedRateOne,
  listIDOneArea,
  listCreatedDateOneArea,
  listCreatedDateTwoArea,
  listCompanyAmountTwo,
  listCustomerAmountTwo,
  listAgreedRateTwo,
  listCustomerNameTwo,
  listIDTwoArea,
  listStatusTwoArea,
  listDetailFirstRowPayments,
  listDetailFirstRowDescription,
  listDetailFirstRowPaymentDate,
  listCustomerActionOneArea,
  listCustomerStatusOneArea,
  listTradeOffDateOneArea,
  // operation split and shift
  operationDetailOneButton,
  splitAndShiftButtonFirstRow,
  splitAndShiftSaveButton,
  splitAndShiftCustomerOne,
  splitAndShiftCustomerSelect,
  splitAndShiftCompanyAmountOne,
  splitAndShiftCustomerAmountOne,
  splitAndShiftAgreedRateOne,
  //customer Detail
  pageTitle,

  //Mark-Unmark
  unmarkButton,
  markedCustomerName,
  markedCustomerValues,
  markedCompanyValues,
  customerName,
  customerValues,
  companyValues,
  dropdownButton,
  markButton,

  //loan dataset
  newOperationButton,
  operationCreateButton,
  NetPositionsCost,
  exposureSellElement,
  exposureBuyElement,
  emptyPageText,
  emptyPage,
  sellTab,
  buyTab,
  customerListName,
  exchangeRate,
  companyAmountType,
  companyAmountInput,
  assetsSelect,
  assetsInput,
  customerSelect,
  customerInput,
  //clearAllData
  clearYesButton,
  clearAllData,
};
export default values;

export const mockLoanData = [
  // Long Profit
  {
    operationType: 'buy',
    companyAmount: '10000.00000000',
    customerAmount: '150000.00000000',
    agreedRate: '15.00000000',
  },
  {
    operationType: 'buy',
    companyAmount: '10000.00000000',
    customerAmount: '170000.00000000',
    agreedRate: '17.00000000',
  },
  {
    operationType: 'sell',
    companyAmount: '10000.00000000',
    customerAmount: '180000.00000000',
    agreedRate: '18.00000000',
  },
  {
    operationType: 'sell',
    companyAmount: '10000.00000000',
    customerAmount: '170000.00000000',
    agreedRate: '17.00000000',
  },

  // Long Loss
  {
    operationType: 'buy',
    companyAmount: '10000.00000000',
    customerAmount: '170000.00000000',
    agreedRate: '17.00000000',
  },
  {
    operationType: 'buy',
    companyAmount: '10000.00000000',
    customerAmount: '180000.00000000',
    agreedRate: '18.00000000',
  },
  {
    operationType: 'sell',
    companyAmount: '10000.00000000',
    customerAmount: '170000.00000000',
    agreedRate: '17.00000000',
  },
  {
    operationType: 'sell',
    companyAmount: '10000.00000000',
    customerAmount: '150000.00000000',
    agreedRate: '15.00000000',
  },

  // Short Profit
  {
    operationType: 'sell',
    companyAmount: '10000.00000000',
    customerAmount: '170000.00000000',
    agreedRate: '17.00000000',
  },
  {
    operationType: 'sell',
    companyAmount: '10000.00000000',
    customerAmount: '180000.00000000',
    agreedRate: '18.00000000',
  },
  {
    operationType: 'buy',
    companyAmount: '10000.00000000',
    customerAmount: '170000.00000000',
    agreedRate: '17.00000000',
  },
  {
    operationType: 'buy',
    companyAmount: '10000.00000000',
    customerAmount: '160000.00000000',
    agreedRate: '16.00000000',
  },
  // Short Loss
  {
    operationType: 'sell',
    companyAmount: '10000.00000000',
    customerAmount: '140000.00000000',
    agreedRate: '14.00000000',
  },
  {
    operationType: 'sell',
    companyAmount: '10000.00000000',
    customerAmount: '160000.00000000',
    agreedRate: '16.00000000',
  },
  {
    operationType: 'buy',
    companyAmount: '10000.00000000',
    customerAmount: '180000.00000000',
    agreedRate: '18.00000000',
  },
  {
    operationType: 'buy',
    companyAmount: '10000.00000000',
    customerAmount: '190000.00000000',
    agreedRate: '19.00000000',
  },
  // Long Series
  {
    operationType: 'buy',
    companyAmount: '10000.00000000',
    customerAmount: '150000.00000000',
    agreedRate: '15.00000000',
  },
  {
    operationType: 'buy',
    companyAmount: '15000.00000000',
    customerAmount: '255000.00000000',
    agreedRate: '17.00000000',
  },
  {
    operationType: 'buy',
    companyAmount: '25000.00000000',
    customerAmount: '475000.00000000',
    agreedRate: '19.00000000',
  },
  // Reverse Operation
  {
    operationType: 'sell',
    companyAmount: '60000.00000000',
    customerAmount: '1080000.00000000',
    agreedRate: '18.00000000',
  },
  {
    operationType: 'buy',
    companyAmount: '50000.00000000',
    customerAmount: '700000.00000000',
    agreedRate: '14.00000000',
  },
];
export const mockLoanNetPositionData = [
  // Long Profit
  {
    baseAmount: '10,000.00 $',
    pairAmount: '150,000.00 ₺',
    calcDirection: 'CalcDirection.buy',
    costRate: '15.00',
  },
  {
    baseAmount: '20,000.00 $',
    pairAmount: '320,000.00 ₺',
    calcDirection: 'CalcDirection.buy',
    costRate: '16.00',
  },
  {
    baseAmount: '10,000.00 $',
    pairAmount: '160,000.00 ₺',
    calcDirection: 'CalcDirection.sell',
    costRate: '16.00',
  },
  {
    baseAmount: '0.00 $',
    pairAmount: '0.00 ₺',
    calcDirection: 'CalcDirection.sell',
    costRate: '16.00',
  },

  // Long Loss
  {
    baseAmount: '10,000.00 $',
    pairAmount: '170,000.00 ₺',
    calcDirection: 'CalcDirection.buy',
    costRate: '17.00',
  },
  {
    baseAmount: '20,000.00 $',
    pairAmount: '350,000.00 ₺',
    calcDirection: 'CalcDirection.buy',
    costRate: '17.50',
  },
  {
    baseAmount: '10,000.00 $',
    pairAmount: '175,000.00 ₺',
    calcDirection: 'CalcDirection.sell',
    costRate: '17.50',
  },
  {
    baseAmount: '0.00 $',
    pairAmount: '0.00 ₺',
    calcDirection: 'CalcDirection.sell',
    costRate: '17.50',
  },

  // Short Profit
  {
    baseAmount: '10,000.00 $',
    pairAmount: '170,000.00 ₺',
    calcDirection: 'CalcDirection.sell',
    costRate: '17.00',
  },
  {
    baseAmount: '20,000.00 $',
    pairAmount: '350,000.00 ₺',
    calcDirection: 'CalcDirection.sell',
    costRate: '17.50',
  },
  {
    baseAmount: '10,000.00 $',
    pairAmount: '175,000.00',
    calcDirection: 'CalcDirection.buy',
    costRate: '17.50',
  },
  {
    baseAmount: '0.00 $',
    pairAmount: '0.00 ₺',
    calcDirection: 'CalcDirection.buy',
    costRate: '17.50',
  },

  // Short Loss
  {
    baseAmount: '10,000.00 $',
    pairAmount: '140,000.00 ₺',
    calcDirection: 'CalcDirection.sell',
    costRate: '14.00',
  },
  {
    baseAmount: '20,000.00 $',
    pairAmount: '300,000.00 ₺',
    calcDirection: 'CalcDirection.sell',
    costRate: '15.00',
  },
  {
    baseAmount: '10,000.00 $',
    pairAmount: '150,000.00 ₺',
    calcDirection: 'CalcDirection.buy',
    costRate: '15.00',
  },
  {
    baseAmount: '0.00 $',
    pairAmount: '0.00 ₺',
    calcDirection: 'CalcDirection.buy',
    costRate: '15.00',
  },

  // Long Series
  {
    baseAmount: '10,000.00 $',
    pairAmount: '150,000.00 ₺',
    calcDirection: 'CalcDirection.buy',
    costRate: '15.00',
  },
  {
    baseAmount: '25,000.00 $',
    pairAmount: '405,000.00 ₺',
    calcDirection: 'CalcDirection.buy',
    costRate: '16.20',
  },
  {
    baseAmount: '50,000.00 $',
    pairAmount: '880,000.00 ₺',
    calcDirection: 'CalcDirection.buy',
    costRate: '17.60',
  },
  // Reverse Operation
  {
    baseAmount: '10,000.00 $',
    pairAmount: '180,000.00 ₺',
    calcDirection: 'CalcDirection.sell',
    costRate: '18.00',
  },
  {
    baseAmount: '10,000.00 $',
    pairAmount: '560,000.00 ₺',
    calcDirection: 'CalcDirection.buy',
    costRate: '14.00',
  },
];
