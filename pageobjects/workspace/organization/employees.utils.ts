// Create
const uuid = () => Math.floor(Math.random() * 1000000);
const id = uuid();
const nameText = `name${id}`;
const lastNameText = `Lastname${id}`;
const descriptionText = `description${id}`;
const addressText = `address${id}`;
const emailText = `name${id}@gmail.com`;
const phoneText = `5052${id}`;
const editNameText = `Edit Name${id}`;
const editLastNameText = `EditLastname${id}`;
const editDescriptionText = `Edit Description${id}`;
const editAddressText = `Edit Address${id}`;
const editEmailText = `editname${id}@gmail.com`;
const editPhoneText = `5055${id}`;
const jobTitleText = `Job Title${id}`;
const editedJobTitleText = `Edited Job Title${id}`;
// Create Job Title
const jobTitleCreateButton =
  '[data-test-id="company-management-employees-title-create-button"]';
const jobTitleCreateNameArea = '[data-test-id="title-form-name-input"]';
const JobTitleDeleteConfirmButton =
  '[data-test-id="confirm-modal-footer-action"]';
const jobTitleCreateCancelButton = '[data-test-id="title-form-footer-cancel"]';
const jobTitleSaveButton = '[data-test-id="title-form-footer-action"]';
const jobTitleCreateCrossMarkButton =
  '[data-test-id="title-create-form-modal-close-button"]';
const JobTitleAndEmployeesHeader =
  'div:nth-of-type(1) > div > .flex.flex-row.items-center.justify-between > .flex.flex-row > div > .capitalize.font-medium.font-sans.mb-0.text-base.text-inherit';
const JobTitleAndEmployeesHeaderText = 'Manage employees and Job Titles';
const employeesTabButton =
  '[class="flex border-b-2 border-transparent space-x-6 h-12"] [aria-current="page"]:nth-of-type(5)';
// Job Title Table Area
const jobTitleTableNameAreaFirst =
  '[data-test-id="company-management-employees-title-table-body-row-0-column-name"]';
const jobTitleTableDetailButtonFirst =
  '[data-test-id="company-management-employees-title-row-button-0"]';
const jobTitleTableEditButtonFirst =
  '[data-test-id="company-management-employees-title-edit-button-0"]';
const jobTitleTableRemoveButtonFirst =
  '[data-test-id="company-management-employees-title-remove-button-0"]';
// Employees Create
const employeesCreateButton =
  '[data-test-id="company-management-employees-employee-create-button"]';
const employeesCreateCrossMarkButton =
  '[data-test-id="undefined-close-button"]';
const employeesCreateCancelButton =
  '[data-test-id="employee-form-footer-cancel"]';
const employeesCreateSaveButton =
  '[data-test-id="employee-form-footer-action"]';
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
const dropdownList = 'div[role="listbox"] > ul > li';
// Employees Table
const employeesTableNameAreaFirst =
  '[data-test-id="company-management-employees-employee-table-table-body-row-0"] [data-test-id="undefined-title"]';
const employeesTableEmailAreaFirst =
  '[data-test-id="company-management-employees-employee-table-table-body-row-0"] [class="font-normal text-light-400 dark:text-dark-300 truncate max-w-[190px]"]';
const employeesTableNameDetailButtonFirst =
  '[data-test-id="company-management-employees-employee-row-button-0"]';
const employeesTableGoToDetailButtonFirst =
  '[data-test-id="company-management-employees-employee-goto-detail-0"]';
// Employees Detail
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
const employeeDetailDeleteButton = '[data-test-id="branch-detail-delete"]';
const employeeDetailEditButton = '[data-test-id="branch-detail-edit"]';
const employeeDetailEditSaveButton =
  '[data-test-id="employee-form-footer-action"]';

const editEmployeeCountryArea =
  '[class] [class="mantine-InputWrapper-root mantine-1ryrb3t"]:nth-child(6) [aria-expanded]';

const values = {
  nameText,
  lastNameText,
  descriptionText,
  addressText,
  emailText,
  phoneText,
  editNameText,
  editLastNameText,
  editDescriptionText,
  editAddressText,
  editEmailText,
  editPhoneText,
  jobTitleText,
  editedJobTitleText,
  // Create Job Title
  jobTitleCreateButton,
  jobTitleCreateNameArea,
  JobTitleDeleteConfirmButton,
  jobTitleCreateCancelButton,
  jobTitleSaveButton,
  jobTitleCreateCrossMarkButton,
  JobTitleAndEmployeesHeader,
  JobTitleAndEmployeesHeaderText,
  employeesTabButton,
  // Job Title Table Area
  jobTitleTableNameAreaFirst,
  jobTitleTableDetailButtonFirst,
  jobTitleTableEditButtonFirst,
  jobTitleTableRemoveButtonFirst,
  // Employees Create
  employeesCreateButton,
  employeesCreateCrossMarkButton,
  employeesCreateCancelButton,
  employeesCreateSaveButton,
  employeesCreateFirstNameArea,
  employeesCreateLastNameArea,
  employeesCreateEmailArea,
  employeesCreatePhoneArea,
  employeesCreateBirthdayArea,
  employeesCreateBirthdayDate,
  employeesCreateBranchArea,
  employeesCreateCountryArea,
  dropdownList,
  employeesCreateAddressArea,
  // Employees Table
  employeesTableNameAreaFirst,
  employeesTableEmailAreaFirst,
  employeesTableNameDetailButtonFirst,
  employeesTableGoToDetailButtonFirst,
  // Employees Detail
  employeeDetailNameHeader,
  employeeDetailEmailArea,
  employeeDetailPhoneArea,
  employeeDetailBranchNameArea,
  employeeDetailAddressArea,
  employeeDetailDeleteButton,
  employeeDetailEditButton,
  employeeDetailEditSaveButton,
  editEmployeeCountryArea,
};
export default values;
