// Create
const uuid = () => Math.floor(Math.random() * 1000000);
const id = uuid();
const nameText = `name${id}`;
const lastnameText = `lastname${id}`;
const descriptionText = `description${id}`;
const addressText = `address${id}`;
const emailText = `name${id}@gmail.com`;
const phoneText = `5052${id}`;
const editNameText = `Edit Name${id}`;
const editDescriptionText = `Edit Description${id}`;
const editAddressText = `Edit Address${id}`;
const editEmailText = `editname${id}@gmail.com`;
const editPhoneText = `5055${id}`;

//branchesPageCheck
const branchesPageTab = '[class] [aria-current="page"]:nth-of-type(2)';
const branchTabText = 'Branches';
const branchesPageHeaderArea =
  '[class="font-sans text-base font-medium mb-0 text-inherit capitalize"]';
const branchesPageHeaderText = 'Manage branches';

// addNewBranchCancelButtons
const addBranchButton =
  '[data-test-id="company-management-branches-create-button"]';
const addBranchCrossMark = '[data-test-id="undefined-close-button"]';
const newBranchCancelButton = "[data-test-id='branch-form-footer-cancel']";

//addNewBranch
const nameArea = '[data-test-id="branch-field-name"]';
const addressArea = '[data-test-id="branch-field-address"]';
const descriptionArea = '[data-test-id="branch-field-description"]';
const eMailArea = '[data-test-id="branch-field-email"]';
const phoneArea = '.form-control.w-full';
const countryArea = '[aria-expanded] [tabindex]';
const managerArea =
  'div:nth-of-type(7) > div > .mantine-1ryrb3t.mantine-InputWrapper-root';
const createBranchButton = '[data-test-id="branch-form-footer-action"]';
const dropdownList = 'div[role="listbox"] > ul > li';

//Branches page Table
const listBranchNameAreaOne =
  '[data-test-id="company-management-branches-table-table-body-row-0"] [data-test-id="undefined-title"]';
const listBranchCountryAreaOne =
  '[data-test-id="company-management-branches-table-body-row-0-column-country"]';
const listBranchDetailButtonOne =
  '[data-test-id="company-management-branches-table-table-body-row-0"] [type]';
const listBranchGoToDetailOne = 'ul[role="menu"] > li:nth-of-type(2)';

//Branch Detail
const branchDetailNameHeaderArea =
  '[data-test-id="company-management-branch-detail-header-title"]';
const branchDetailDescriptionHeaderArea =
  '[data-test-id="company-management-branch-detail-header-title-description"]';
const branchDetailAddressArea =
  '[class] [class="mb-3"]:nth-of-type(1) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const branchDetailCountryArea =
  '[class] [class="mb-3"]:nth-of-type(2) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const branchDetailPhoneArea =
  '[class] [class="mb-3"]:nth-of-type(3) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const branchDetailEmailArea =
  '[class] [class="mb-3"]:nth-of-type(4) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const branchDetailBranchManagerNameArea = '[data-test-id="undefined-title"]';
const branchDetailOverviewTab =
  '[data-test-id="company-management.branches.tabs.overview"]';
const branchDetailEmployeesTab =
  '[data-test-id="company-management.branches.tabs.employees"]';
const branchDetailEditButton = '[data-test-id="branch-detail-edit"]';
const branchDetailManagerSelectArea =
  '[data-test-id="branch-manager-modal-managers"]';
const branchDetailManagerUpdate =
  '[data-test-id="branch-manager-modal-footer-action"]';
const branchDetailManagerRemoveButton =
  '[data-test-id="branch-manager-modal-footer-secondary"]';
const branchManagerDetailButton = '[data-test-id="branch-manager-row-button"]';
const branchManagerRemoveButton = '[data-test-id="branch-manager-remove"]';
const branchDetailDeleteBranchButton = '[data-test-id="branch-detail-delete"]';
const deleteBranchConfirmButton =
  '[data-test-id="confirm-modal-footer-action"]';
// Manager Button
const branchDetailAddManagerButton = '[data-test-id="branch-manager-add"]';
const branchDetailChangeManagerButton =
  '[data-test-id="branch-manager-change"]';
const branchDetailNoManagerArea = '.text-center [class]';
const branchDetailNoManagerText = 'No branch manager';
// Employees Tab
const branchDetailEmployeesTabHeader =
  '[class="font-sans text-base font-medium mb-0 text-inherit capitalize"]';
const branchDetailEmployeesTabHeaderText = 'manage employees';
const branchDetailEmployeeCreateButton =
  '[id="branches-employees-add-employee"]';
const employeesCreateFirstNameArea =
  '[data-test-id="employee-field-firstName"]';
const employeesCreateLastNameArea = '[data-test-id="employee-field-lastName"]';
const employeesCreateEmailArea = '[data-test-id="employee-field-contactEmail"]';
const employeesCreatePhoneArea = '.form-control.w-full';
const employeesCreateBirthdayArea = '[data-test-id="employee-field-birthday"]';
const employeesCreateBirthdayDate =
  'tr:nth-of-type(3) > td:nth-of-type(1) > .mantine-DatePickerInput-day.mantine-Day-day.mantine-UnstyledButton-root.mantine-hbm8x3';
const employeesCreateBranchArea =
  '[class] [class="mantine-InputWrapper-root mantine-1ryrb3t"]:nth-child(7) [tabindex]';
const employeesCreateCountryArea =
  '[class] [class="mantine-InputWrapper-root mantine-1ryrb3t"]:nth-child(8) [tabindex]';
const employeesCreateAddressArea = '[data-test-id="employee-field-address"]';
const employeeCreateSaveButton = '[data-test-id="employee-form-footer-action"]';
const branchEmployeeDetailNameHeaderArea = '[data-test-id="undefined-title"]';
const branchEmployeeDetailEmailArea =
  '[class="font-normal text-light-400 dark:text-dark-300 truncate max-w-[190px]"]';
const employeesTableNameDetailButtonFirst =
  '[data-test-id="company-management-branch-employees-body-row-0-column-actions"]';
const employeesTableGoToDetailButtonFirst = 'li:nth-of-type(2) > .block.w-full';
const employeeDetailNameHeader =
  '[data-test-id="company-management-employee-detail-header-title"]';
const employeeDetailEmailArea =
  '[class] [class="mb-3"]:nth-of-type(1) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const employeeDetailPhoneArea =
  '[class] [class="mb-3"]:nth-of-type(2) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const employeeDetailBranchNameArea =
  '[class] [class="mb-3"]:nth-of-type(4) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const employeeDetailAddressArea =
  '[class] [class="mb-3"]:nth-of-type(5) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';

const values = {
  nameText,
  lastnameText,
  descriptionText,
  addressText,
  emailText,
  phoneText,
  editNameText,
  editDescriptionText,
  editAddressText,
  editEmailText,
  editPhoneText,
  //branchesPageCheck
  branchesPageTab,
  branchTabText,
  branchesPageHeaderArea,
  branchesPageHeaderText,
  branchDetailDescriptionHeaderArea,
  branchDetailAddressArea,
  branchDetailCountryArea,
  branchDetailPhoneArea,
  branchDetailEmailArea,
  branchDetailBranchManagerNameArea,
  // addNewBranchCancelButtons
  addBranchButton,
  addBranchCrossMark,
  newBranchCancelButton,
  //addNewBranch
  nameArea,
  addressArea,
  descriptionArea,
  eMailArea,
  phoneArea,
  countryArea,
  managerArea,
  dropdownList,
  createBranchButton,
  //Branches page Table
  listBranchNameAreaOne,
  listBranchCountryAreaOne,
  listBranchDetailButtonOne,
  listBranchGoToDetailOne,
  //Branch Detail
  branchDetailNameHeaderArea,
  branchDetailOverviewTab,
  branchDetailEmployeesTab,
  branchDetailEditButton,
  branchDetailManagerSelectArea,
  branchDetailManagerUpdate,
  branchDetailManagerRemoveButton,
  branchManagerDetailButton,
  branchManagerRemoveButton,
  branchDetailDeleteBranchButton,
  deleteBranchConfirmButton,
  branchDetailAddManagerButton,
  branchDetailChangeManagerButton,
  branchDetailNoManagerArea,
  branchDetailNoManagerText,
  branchDetailEmployeesTabHeader,
  branchDetailEmployeesTabHeaderText,
  branchDetailEmployeeCreateButton,
  employeesCreateFirstNameArea,
  employeesCreateLastNameArea,
  employeesCreateEmailArea,
  employeesCreatePhoneArea,
  employeesCreateBirthdayArea,
  employeesCreateBirthdayDate,
  employeesCreateBranchArea,
  employeesCreateCountryArea,
  employeesCreateAddressArea,
  employeeCreateSaveButton,
  branchEmployeeDetailNameHeaderArea,
  branchEmployeeDetailEmailArea,
  employeesTableNameDetailButtonFirst,
  employeesTableGoToDetailButtonFirst,
  employeeDetailNameHeader,
  employeeDetailEmailArea,
  employeeDetailPhoneArea,
  employeeDetailBranchNameArea,
  employeeDetailAddressArea,
};
export default values;
