// Create
const uuid = () => Math.floor(Math.random() * 100000);
const id = uuid();
const descriptionText = `Description${id}`;
const customerNameText = `CustomerName${id}`;
const workspaceAccountGroupText = `DogusGold${id}`;
const workspaceNewAccountGroupText = `BirDefter${id}`;
const newCustomerNameText = `NewCus${id}`;

const bankTab = '[data-test-id="bank-account-group-form-basic-type-toggle"]';
const cashTab = '[data-test-id="cash-account-group-form-basic-type-toggle"]';
//checkTransactionsForAddPayment
const listCustomerNameOne =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-customer"] > div > div > div > p';
const operationDetailOneButton = '[data-test-id="row-0-menu-action"]';
const newAddLoanButton = '[data-test-id="row-0-menu-add-action"]';
const addLoanAmountArea = '[data-test-id="add-loan-form-amount-input"]';
const addLoanDescriptionArea =
  '[data-test-id="add-loan-form-description-input"]';
const addNewLoanSaveButton = '[data-test-id="addLoan-form-footer-action"]';
const operationTableDetailButton =
  '[data-test-id="exchange-office-operation-table-0-row-expander-action"]';
const companyAccountGroupAddPayment =
  '[data-test-id="add-loan-form-company-account-select"] [tabindex]';
const selectedCompanyAccount =
  '[data-test-id="add-loan-form-company-account-select"] [class="py-2 text-sm bg-zinc-50 dark:bg-zinc-900  flex justify-between cursor-pointer px-3 border border-frame rounded-b -mt-px"] .capitalize';
const customerAccountGroupAddPayment =
  '[data-test-id="add-loan-form-customer-account-select"] [tabindex]';
const selectedCustomerAccount =
  '[data-test-id="add-loan-form-customer-account-select"] [class="py-2 text-sm bg-zinc-50 dark:bg-zinc-900  flex justify-between cursor-pointer px-3 border border-frame rounded-b -mt-px"] .capitalize';
const selectAccountAddPayment =
  '.floating-ui-select-group [role="option"]:nth-of-type(1)';
const accountFromList =
  '[data-test-id="transaction-table-table-body-row-0"] [class="whitespace-nowrap px-0.5 text-sm align-middle h-[50px] pl-2 w-auto"]:nth-of-type(5) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const accountToList =
  '[data-test-id="transaction-table-table-body-row-0"] [class="whitespace-nowrap px-0.5 text-sm align-middle h-[50px] pl-2 w-auto"]:nth-of-type(6) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const receiveMoney =
  '[data-test-id="add-loan-form-direction-toggle"] div:nth-child(2)';
const giveMoney =
  '[data-test-id="add-loan-form-direction-toggle"] div:nth-child(3)';
const buyTab =
  '[data-test-id="loan-form-operation-type-toggle"] div:nth-child(2)';
const sellTab =
  '[data-test-id="loan-form-operation-type-toggle"] div:nth-child(3)';

//checkTransactionsForResolve
const actionStatus =
  '[data-test-id="exchange-office-operation-table-body-row-0-column-operationType"]';
const detailsActionButton = '[data-test-id="row-0-menu-action"]';
const readyToResolve = '[data-test-id="row-0-menu-change-status-action"]';
const resolve = '[data-test-id="1-resolve-action"]';
const resolveSaveButton = '[data-test-id="resolveLoan-form-footer-action"]';
const selectResolveAssignCustomer = 'ul[role="group"] > li[role="option"]';

const selectAccount =
  '.floating-ui-select-group [role="option"]:nth-of-type(1)';
const upCompanyAccount =
  '[data-test-id="baseTransfer.companyAccount-select"] [tabindex]';
const downCompanyAccount =
  '[data-test-id="companyAccountCustomerCurrency-select"] [tabindex]';
const upCustomerAccount =
  '[data-test-id="baseTransfer.customerAccount-select"] [tabindex]';
const downCustomerAccount =
  '[data-test-id="quoteTransfer.customer-select"] [tabindex]';
const upCompanyAccountName =
  '[data-test-id="baseTransfer.companyAccount-select"] [class="py-2 text-sm bg-zinc-50 dark:bg-zinc-900  flex justify-between cursor-pointer px-3 border border-frame rounded-b -mt-px"] .capitalize';
const downCompanyAccountName =
  '[data-test-id="companyAccountCustomerCurrency-select"] [class="py-2 text-sm bg-zinc-50 dark:bg-zinc-900  flex justify-between cursor-pointer px-3 border border-frame rounded-b -mt-px"] .capitalize';
const upCustomerAccountName =
  '[data-test-id="baseTransfer.customerAccount-select"] [class="py-2 text-sm bg-zinc-50 dark:bg-zinc-900  flex justify-between cursor-pointer px-3 border border-frame rounded-b -mt-px"] .capitalize';
const downCustomerAccountName =
  '[data-test-id="quoteTransfer.customer-select"] [class="py-2 text-sm bg-zinc-50 dark:bg-zinc-900  flex justify-between cursor-pointer px-3 border border-frame rounded-b -mt-px"] .capitalize';

const customerArea =
  '[class="flex flex-wrap gap-1 items-center max-w-full"] .group';
const customerDetailButton =
  '.mantine-1kugx1r.mantine-ActionIcon-root.mantine-UnstyledButton-root > svg[role="presentation"]';
const goToDetailButton = 'ul[role="menu"] > li:nth-of-type(2)';
const secondAccountToList =
  '[data-test-id="transaction-table-table-body-row-1"] [class="whitespace-nowrap px-0.5 text-sm align-middle h-[50px] pl-2 w-auto"]:nth-of-type(6) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const secondAccountFromList =
  '[data-test-id="transaction-table-table-body-row-1"] [class="whitespace-nowrap px-0.5 text-sm align-middle h-[50px] pl-2 w-auto"]:nth-of-type(5) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const userList =
  '[data-test-id="transaction-table-table-body-row-0"] [data-test-id="undefined-title"]';
const menuActionButton = '[data-test-id="row-0-transaction-menu-action"]';
const secondMenuActionButton = '[data-test-id="row-1-transaction-menu-action"]';
const detailButton = '[class="flex items-center space-x-2 w-full"]';
const detailAccountFromGroup =
  '[class="p-4 border border-frame rounded-lg gap-y-4 cursor-pointer bg-sidebar w-fll rounded-b-none relative"] [class="flex items-center justify-between space-x-2"]:nth-of-type(2) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const detailAmountSent =
  '[class="p-4 border border-frame rounded-lg gap-y-4 cursor-pointer bg-sidebar w-fll rounded-b-none relative"] [class="flex items-center justify-between space-x-2"]:nth-of-type(4) .whitespace-nowrap';
const detailAccountToGroup =
  '[class="p-4 border border-frame rounded-lg gap-y-4 cursor-pointer bg-sidebar w-fll rounded-t-none border-t-0"] [class="flex items-center justify-between space-x-2"]:nth-of-type(2) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const detailAmountReceived =
  '[class="p-4 border border-frame rounded-lg gap-y-4 cursor-pointer bg-sidebar w-fll rounded-t-none border-t-0"] [class="flex items-center justify-between space-x-2"]:nth-of-type(4) .whitespace-nowrap';
const detailUser =
  '[class="border border-b-none border-light-150 dark:border-dark-150 rounded-lg rounded-b-none border-b-0 flex flex-col p-4 gap-y-4"] [data-test-id="undefined-title"]';
const amountSentList =
  '[data-test-id="transaction-table-body-row-0-column-amountFrom"]';
const amountReceivedList =
  '[data-test-id="transaction-table-body-row-0-column-amountTo"]';
const secondUserList =
  '[data-test-id="transaction-table-table-body-row-1"] [data-test-id="undefined-title"]';
const secondAmountSentList =
  '[data-test-id="transaction-table-body-row-1-column-amountFrom"]';
const secondAmountReceivedList =
  '[data-test-id="transaction-table-body-row-1-column-amountTo"]';
const closeDetailButton =
  '.mantine-15mo9h8.mantine-ActionIcon-root.mantine-UnstyledButton-root';
const detailStatusAccountFrom =
  '[class="p-4 border border-frame rounded-lg gap-y-4 cursor-pointer bg-sidebar w-fll rounded-b-none relative"] [class="text-sm font-normal text-light-400 dark:text-dark-300 truncate leading-tight"]';
const detailStatusAccountTo =
  '[class="p-4 border border-frame rounded-lg gap-y-4 cursor-pointer bg-sidebar w-fll rounded-t-none border-t-0"] [class="text-sm font-normal text-light-400 dark:text-dark-300 truncate leading-tight"]';

//checkTransactionsForNewEntry
const customerSelectArea = '[data-test-id="filter-customer-select"]';
const customerCurrentSelect =
  '.floating-ui-select-group [role="option"]:nth-of-type(1) p';
const customerCurrentDetailButton =
  '[data-test-id="exchange-office-customer-current-table-body-row-0-column-actions"]';
const goToDetail = 'li:nth-of-type(2)  span';
const newEntryButton = 'button:nth-of-type(2) > .normal-case.nowrap';
const balanceGroup =
  ".mantine-15736ur.mantine-Modal-body div[role='combobox']  .group.relative";
const selectUsd =
  '[data-test-id="2-customer-current-form-wallet-select-option"]';
const balanceInput = "input[name='balance']";
const companyAccountGroup =
  '[data-test-id="customer-current-form-company-amount-select"] [tabindex]';
const customerAccountGroup =
  '[data-test-id="customer-current-form-customer-amount-select"] [tabindex]';
const newEntrySaveButton = '[data-test-id="entry-form-footer-action"]';
const companyAmountArea =
  '[data-test-id="transform-form-company-amount-input"]';
const customerAmountArea =
  '[data-test-id="transform-form-customer-amount-input"]';

//randomSelect
const dropdownList = '.floating-ui-select-group > li';

const values = {
  //randomSelect
  dropdownList,
  //checkTransactionsForNewEntry
  newEntrySaveButton,
  customerAmountArea,
  companyAmountArea,
  customerAccountGroup,
  companyAccountGroup,
  balanceInput,
  selectUsd,
  balanceGroup,
  newEntryButton,
  customerCurrentDetailButton,
  goToDetail,
  customerSelectArea,
  customerCurrentSelect,
  //checkTransactionsForResolve
  actionStatus,
  secondMenuActionButton,
  closeDetailButton,
  secondAmountReceivedList,
  secondAmountSentList,
  secondUserList,
  amountReceivedList,
  amountSentList,
  userList,
  detailUser,
  detailAmountReceived,
  detailAccountToGroup,
  detailAmountSent,
  detailAccountFromGroup,
  detailButton,
  menuActionButton,
  secondAccountFromList,
  secondAccountToList,
  goToDetailButton,
  customerDetailButton,
  customerArea,
  downCustomerAccount,
  upCustomerAccount,
  downCompanyAccount,
  upCompanyAccount,
  upCompanyAccountName,
  downCompanyAccountName,
  upCustomerAccountName,
  downCustomerAccountName,
  selectResolveAssignCustomer,
  resolveSaveButton,
  selectAccount,
  detailsActionButton,
  readyToResolve,
  resolve,

  //checkTransactionsForAddPayment
  selectedCompanyAccount,
  selectedCustomerAccount,
  newCustomerNameText,
  workspaceNewAccountGroupText,
  workspaceAccountGroupText,
  cashTab,
  bankTab,
  customerNameText,
  buyTab,
  sellTab,
  detailStatusAccountTo,
  detailStatusAccountFrom,
  giveMoney,
  receiveMoney,
  accountToList,
  accountFromList,
  descriptionText,
  listCustomerNameOne,
  operationDetailOneButton,
  newAddLoanButton,
  addLoanAmountArea,
  addNewLoanSaveButton,
  addLoanDescriptionArea,
  operationTableDetailButton,
  companyAccountGroupAddPayment,
  selectAccountAddPayment,
  customerAccountGroupAddPayment,
};
export default values;
