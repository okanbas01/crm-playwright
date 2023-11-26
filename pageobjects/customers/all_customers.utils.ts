//branchesPageCheck
const pageTitle = '.font-medium.cursor-default';
const customersText = 'Customers';

//CreateCustomer
const customerButton = "[class='items-center gap-2 hidden md:flex'] button";
const firstNameArea = "[data-test-id='field-firstName']";
const lastNameArea = "[data-test-id='field-lastName']";
const phoneArea = '.bg-inputbg.form-control.pl-6.tabular-nums.w-full';
const languageArea =
  "[class] [class='space-y-6']:nth-of-type(2) [tabindex='0']";
const selectLanguage = "div[role='listbox'] > ul > li:nth-of-type(1)";
const saveButton = "[data-test-id='customer-form-footer-action']";
const firstCustomer = 'tr:nth-of-type(1)  .cursor-pointer.w-full';
const firstCustomerName =
  '[data-test-id="customerTable-table-body-row-0"] [class="whitespace-nowrap px-0.5 text-sm align-middle h-[50px] w-auto stretch"] p';
const firstCustomerNameArea =
  '[data-test-id="customerTable-body-row-0-column-firstName"]';
const emptyPageTextArea =
  '[class="font-sans text-sm font-medium mb-1 text-inherit normal-case"]';
const detailNameArea = '.mantine-4ur6qe.mantine-Text-root.text-text';
const detailFirstNameArea =
  '[class] [class="grid grid-cols-3 gap-4"]:nth-of-type(1) [class="min-w-0 w-full truncate"]';
const detailLastNameArea =
  '[class] [class="grid grid-cols-3 gap-4"]:nth-of-type(2) [class="min-w-0 w-full truncate"]';
const detailPhoneArea =
  '[class] [class="grid grid-cols-3 gap-4"]:nth-of-type(6) [class="min-w-0 w-full truncate"]';
const searchInput = '[class="items-center gap-2 hidden md:flex"] [type]';
const uuid = () => Math.floor(Math.random() * 10000);
const id = uuid();
const nameText = `name${id}`;
const lastNameText = `lastname${id}`;
const phoneNumber = `5052${id}`;
const emailText = `email${id}@gmail.com`;
const passwordText = `Sifre${id}`;
const invalidName = 'invalid Name';
const emptyPageText = 'No results Found';
//writeComment
const notesTab =
  '#drawer-layout > div:nth-of-type(2) [data-test-id] [class="___ref-control mantine-1ryipl8 mantine-SegmentedControl-control"]:nth-child(3)';
const commentArea =
  '[class="relative p-2 mantine-Input-wrapper mantine-Textarea-wrapper mantine-1v7s5f8"] [data-test-id]';
const sendButton = '.bg-inputbg button';
const notesArea = '[class="mantine-480qv8 mantine-Timeline-itemContent"]';

//assigneeToMe
const assigneeToMeButton = '[class="flex items-center space-x-2"] [type]';
const assigneeFilterName = '[data-test-id="user-async-select-card-title"]';
const tableAssignees = 'tbody > tr > td > a > div > div > p';
const assigneeArea =
  '[data-test-id="customerTable-body-row-0-column-assignedTo"]';
//allRowsSelected
const toggleBox = '[data-test-id="customerTable-all-row-select"]';
const isRowSelected = '[class="text-xs tabular-nums mr-3"]';
const selectedText = 'selected';

//selectedCheckboxsClearing
const clearButton = '[lang] .text-xs:nth-of-type(2) button';

//customersAssign
const assignButton =
  "span[role='combobox'] > .custom-transition.mantine-ActionIcon-root.mantine-UnstyledButton-root.mantine-s81457";
const assignTo = 'ul > li:nth-of-type(1)';
const assignName = 'tbody > tr > td > a';

//customersUnassign
const unAssignButton =
  '[lang] div:nth-of-type(2) > div:nth-of-type(3) [class="flex items-center space-x-1"] > span ';
const confirmUnassignedButton = '[role="dialog"] button';

const values = {
  assigneeArea,
  confirmUnassignedButton,
  invalidName,
  emptyPageTextArea,
  emptyPageText,
  firstCustomerName,
  firstCustomerNameArea,
  searchInput,
  tableAssignees,
  assigneeFilterName,
  assigneeToMeButton,
  notesTab,
  detailLastNameArea,
  detailFirstNameArea,
  assignName,
  notesArea,
  unAssignButton,
  assignTo,
  assignButton,
  clearButton,
  toggleBox,
  selectedText,
  isRowSelected,
  sendButton,
  commentArea,
  detailPhoneArea,
  detailNameArea,
  firstCustomer,
  saveButton,
  passwordText,
  emailText,
  phoneNumber,
  lastNameText,
  nameText,
  selectLanguage,
  phoneArea,
  languageArea,
  lastNameArea,
  firstNameArea,
  customerButton,
  pageTitle,
  customersText,
};
export default values;
