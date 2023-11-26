//Workspace Account
// Create
const uuid = () => Math.floor(Math.random() * 1000);
const id = uuid();
const workspaceAccountGroupText = `DogusGold${id}`;
const workspaceNewAccountGroupText = `BirDefter${id}`;
const customerNameText = `CustomerName${id}`;
const newCustomerNameText = `NewCus${id}`;

const createGroupButton =
  '[class="items-center gap-2 hidden md:flex"] [data-test-id="workspace-list-create-button"] .normal-case';
const newAccountGroupNameArea =
  '[data-test-id="account-group-form-name-input"]';
const saveButton = '[data-test-id="accountGroup-form-footer-action"]';
const bankTab = '[data-test-id="bank-account-group-form-basic-type-toggle"]';
const cashTab = '[data-test-id="cash-account-group-form-basic-type-toggle"]';
const bankSelectArea =
  '[data-test-id="account-group-form-account-bank-select"] [tabindex]';
const banks = '.floating-ui-select-group > li';
const clickFilterButton = '[data-test-id="filter-basic-type-select"]';
const filters = '[class="floating-ui-select-group pt-1"] > li';

const buyTab =
  '[data-test-id="loan-form-operation-type-toggle"] div:nth-child(2)';
const sellTab =
  '[data-test-id="loan-form-operation-type-toggle"] div:nth-child(3)';

//accountsDetailCheckForAddPayment
const listCustomerNameOne =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-customer"] > div > div > div > p';
const operationDetailOneButton = '[data-test-id="row-0-menu-action"]';
const newAddLoanButton = '[data-test-id="row-0-menu-add-action"]';
const addLoanAmountArea = '[data-test-id="add-loan-form-amount-input"]';
const companyAccountGroupAddPayment =
  '[data-test-id="add-loan-form-company-account-select"] [tabindex]';
const customerAccountGroupAddPayment =
  '[data-test-id="add-loan-form-customer-account-select"] [tabindex]';
const selectAccountAddPayment =
  '.floating-ui-select-group [role="option"]:nth-of-type(1)';
const addNewLoanSaveButton = '[data-test-id="addLoan-form-footer-action"]';
const receiveMoney =
  '[data-test-id="add-loan-form-direction-toggle"] div:nth-child(2)';
const giveMoney =
  '[data-test-id="add-loan-form-direction-toggle"] div:nth-child(3)';
const companyTransactionListAmount =
  '[data-test-id="account-detail-transaction-table-body-row-0-column-accountFrom"]';
const formLoanCurrencyText =
  '[data-test-id="add-loan-form-currency-select"] [tabindex]';
const accountPriceDetail =
  '[data-test-id="accounting-workspace-table-table-body-row-0"] > td > a';
const secondAccountPriceDetail =
  '[data-test-id="accounting-workspace-table-table-body-row-1"] > td > a';
const customerFilter = '[data-test-id="filter-customer-select"]';
const selectAccount = '[data-test-id="user-async-select-card-option-title"]';
const searchInput = 'input';
const customerCurrentListFirstName =
  '[data-test-id="accounting-customer-table-body-row-0-column-firstName"]';
const closeFilter = '[class] .items-center:nth-of-type(4) button';
const customerAccountPriceDetail = 'tbody > tr > td > a';
const customerTransactionListAmount =
  '[data-test-id="account-detail-transaction-table-body-row-0-column-accountFrom"]';

//accountsDetailCheckForResolve
const detailsActionButton = '[data-test-id="row-0-menu-action"]';
const resolve = '[data-test-id="1-resolve-action"]';
const readyToResolve = '[data-test-id="row-0-menu-change-status-action"]';
const selectFirstAccount =
  '.floating-ui-select-group [role="option"]:nth-of-type(1)';
const selectSecondAccount =
  '.floating-ui-select-group [role="option"]:nth-of-type(2)';
const upCompanyAccountArea =
  '[data-test-id="baseTransfer.companyAccount-select"] [tabindex]';
const downCompanyAccountArea =
  '[data-test-id="companyAccountCustomerCurrency-select"] [tabindex]';
const upCustomerAccountArea =
  '[data-test-id="baseTransfer.customerAccount-select"] [tabindex]';
const downCustomerAccountArea =
  '[data-test-id="quoteTransfer.customer-select"] [tabindex]';
const resolveSaveButton = '[data-test-id="resolveLoan-form-footer-action"]';
const formAction =
  '[class] [class="space-y-1"]:nth-of-type(2) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const formCompanyAmount =
  'div:nth-of-type(3) > .tabular-nums.whitespace-nowrap';
const formCustomerAmount =
  'div:nth-of-type(4) > .tabular-nums.whitespace-nowrap';
const customerAccountGroupsNav =
  '[lang] > div:nth-of-type(2) > div:nth-of-type(3) > nav > span';
const workspaceAccountsFirstName =
  '[data-test-id="accounting-workspace-table-body-row-0-column-name"]';
const workspaceAccountsSecondName =
  '[data-test-id="accounting-workspace-table-body-row-0-column-name"]';
const upCompanySearchInput =
  '[data-test-id="baseTransfer.companyAccount-select-search"]';
const selectedAccount = '.floating-ui-select-group > li';
const downCompanySearchInput =
  '[data-test-id="companyAccountCustomerCurrency-select-search"]';
const upCustomerSearchInput =
  '[data-test-id="baseTransfer.customerAccount-select-search"]';
const downCustomerSearchInput =
  '[data-test-id="quoteTransfer.customer-select-search"]';
const transactionDetailMenu =
  '[data-test-id="account-detail-transaction-table-menu-0-action"]';
const transactionDetail = '[class="flex items-center space-x-2 w-full"]';
const accountFromGroupName =
  '[class="p-4 border border-frame rounded-lg gap-y-4 cursor-pointer bg-sidebar w-fll rounded-b-none relative"] [class="flex items-center justify-between space-x-2"]:nth-of-type(2) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const accountToGroupName =
  '[class="p-4 border border-frame rounded-lg gap-y-4 cursor-pointer bg-sidebar w-fll rounded-t-none border-t-0"] [class="flex items-center justify-between space-x-2"]:nth-of-type(2) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const transactionDetailCloseButton =
  '[class="px-6 pt-4 pb-4 flex items-center gap-x-2 w-full"] [type]';
const clickableInput = 'tbody > tr > td > a';

//clearAllWorkspaceAccount
const clearAllDataButton =
  '[class="items-center gap-2 hidden md:flex"] [data-test-id="clear-all-data-button"] .normal-case';
const deleteConfirmActionButton =
  '[data-test-id="confirm-modal-footer-action"] .normal-case';
const values = {
  //clearAllWorkspaceAccount
  deleteConfirmActionButton,
  clearAllDataButton,
  //accountsDetailCheckForResolve
  clickableInput,
  transactionDetailCloseButton,
  accountToGroupName,
  accountFromGroupName,
  transactionDetailMenu,
  transactionDetail,
  formAction,
  downCustomerSearchInput,
  upCustomerSearchInput,
  downCompanySearchInput,
  selectedAccount,
  upCompanySearchInput,
  workspaceAccountsSecondName,
  workspaceAccountsFirstName,
  customerAccountGroupsNav,
  selectSecondAccount,
  newCustomerNameText,
  customerNameText,
  workspaceNewAccountGroupText,
  secondAccountPriceDetail,
  formCustomerAmount,
  formCompanyAmount,
  resolveSaveButton,
  downCustomerAccountArea,
  upCustomerAccountArea,
  downCompanyAccountArea,
  upCompanyAccountArea,
  selectFirstAccount,
  readyToResolve,
  resolve,
  detailsActionButton,
  //accountsDetailCheckForAddPayment
  customerTransactionListAmount,
  customerAccountPriceDetail,
  closeFilter,
  customerCurrentListFirstName,
  searchInput,
  selectAccount,
  customerFilter,
  accountPriceDetail,
  formLoanCurrencyText,
  companyTransactionListAmount,
  giveMoney,
  receiveMoney,
  addNewLoanSaveButton,
  selectAccountAddPayment,
  customerAccountGroupAddPayment,
  companyAccountGroupAddPayment,
  addLoanAmountArea,
  newAddLoanButton,
  listCustomerNameOne,
  operationDetailOneButton,
  //createNewCompanyAccountGroupCash
  cashTab,
  sellTab,
  buyTab,
  filters,
  clickFilterButton,
  banks,
  bankSelectArea,
  bankTab,
  saveButton,
  createGroupButton,
  newAccountGroupNameArea,
  workspaceAccountGroupText,
};

export default values;
