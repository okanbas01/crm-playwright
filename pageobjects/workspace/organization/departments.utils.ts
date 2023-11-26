//departmentsPageCheck
const departmentHeader =
  "[data-test-id='company-management-departments-header-title']";
const departmentText = ['Department'];

// addNewDepartmentCancelButtons
const addButton =
  "[data-test-id='company-management-departments-create-button']";
const crossMark =
  '.mantine-1j79dk3.mantine-ActionIcon-root.mantine-Modal-close.mantine-UnstyledButton-root';
const cancelButton = "[data-test-id='department-form-footer-cancel']";

//addNewDepartment
const managerArea =
  "[class= 'border flex w-full text-left text-text border-gray-300 dark:border-gray-600 rounded-[4px] relative bg-white dark:bg-body shadow-sm transition-all [&>span]:mr-1 cursor-pointer px-3 h-[36px] items-center text-sm pr-8 group']";
const selectManager =
  ".floating-ui-select-group [role='option']:nth-of-type(1)";
const nameArea = '[data-test-id="department-field-name"]';
const descriptionArea = '[data-test-id="department-field-description"]';
const createDepartmentButton = '[data-test-id="department-form-footer-action"]';

const uuid = () => Math.floor(Math.random() * 1000000);
const id = uuid();
const nameText = `name${id}`;
const descriptionText = `description name${id}`;

// Columns
const departmentColumnMenu = '.mantine-UnstyledButton-root';
const managersCheck =
  "[data-test-id='company-management-departments-display-button-managers']";
const managersHeader = "//th[contains(text(),'Managers')]";
const usersCheck =
  "[data-test-id='company-management-departments-display-button-users']";
const usersHeader = "//th[contains(text(),'Members')]";
const teamsCheck =
  "[data-test-id='company-management-departments-display-button-teamsCount']";
const teamsHeader = "//th[contains(text(),'Teams')]";

//editDepartmentCancelButtonControl
const editDepartmentCrossMark =
  '.mantine-1j79dk3.mantine-ActionIcon-root.mantine-Modal-close.mantine-UnstyledButton-root';
const editDepartmentCancelButton =
  '[data-test-id="department-form-footer-cancel"]';

//editDepartment
const firstDepartment =
  '[data-test-id="company-management-departments-name-0"]';
const editDepartmentButton =
  "[class='items-center gap-2 hidden md:flex'] [data-test-id='company-management-department-detail-edit-button']";
//   "[data-test-id='company-management-department-detail-edit-button']";  ------2 element buluyor
const oldManagerName =
  "div[role='combobox'] div[class='ml-2 leading-tight'] div[class='text-sm text-inherit dark:text-text truncate text-ellipsis max-w-[190px]']";
const editedManager = "//div[@id='async-select']//li[2]";
const editedManagerName =
  "div[role='combobox'] div[class='ml-2 leading-tight'] div[class='text-sm text-inherit dark:text-text truncate text-ellipsis max-w-[190px]']";
const updateButton = '[data-test-id="department-form-footer-action"]';

//removeManager
const managerDetailNameArea =
  "[data-test-id='company-management-department-detail-overview-managers-0-title']";
const managerNotFoundArea =
  '.max-w-3xl.mx-auto.w-full > div > div:nth-of-type(1) .font-medium.font-sans.mb-1.normal-case.text-inherit.text-sm';
const managerDropDownAction =
  "[data-test-id='company-management-department-detail-overview-managers-menu-button-0']";
const removeManager =
  "[data-test-id='company-management-department-detail-overview-managers-remove-0']";

//addManagerShortcutCancelButton
const addManagerButton =
  "[data-test-id='company-management-department-detail-overview-managers-add-button']";
const addManagerCrossMark =
  '.mantine-1j79dk3.mantine-ActionIcon-root.mantine-Modal-close.mantine-UnstyledButton-root';
const addManagerCancelButton =
  '[data-test-id="department-manager-modal-footer-cancel"]';

//AddManagerShortcut
const managerSelectArea = '[data-test-id="department-manager-modal-managers"]';
const shortcutSearchArea = "[placeholder='Select...']";
const managerName = 'Nedim Arabacı';
const selectManagerName = "ul[role='group'] > li[role='option']";
const updateDepartmentManagerButton =
  "[data-test-id='department-manager-modal-footer-action']";
const managerSelectedNameArea = "div[role='combobox']  .leading-tight.ml-2";
const managerTableNameArea =
  "[class='text-sm text-inherit dark:text-text truncate text-ellipsis max-w-[190px]']";

// deleteDepartment
const departmentDropdownMenu =
  "[class='items-center gap-2 hidden md:flex'] [type]";
const deleteDepartmentButton =
  "[data-test-id='company-management-department-detail-remove-button']";
const departmentDeleteButton =
  "[data-test-id='department-delete-modal-footer-action']";

//departmentsTeamCancelButton
const addTeamButton = "[id='department-team-create-button']";
const addTeamCrossMark =
  '.mantine-1j79dk3.mantine-ActionIcon-root.mantine-Modal-close.mantine-UnstyledButton-root';
const addTeamCancelButton = '[data-test-id="team-form-footer-cancel"]';

//departmentsTeamAddButton
const addTeamNameArea = '[data-test-id="team-field-name"]';
const addTeamDescriptionArea = '[data-test-id="team-field-description"]';
const addTeamMangerArea = '[data-test-id="team-field-managerIds"]';
const addTeamMangerSearchArea = '[data-test-id="undefined-field-undefined"]';
const addTeamMangerName = 'Nedim Arabacı';
const addTeamMangerSelect =
  "[data-test-id='user-async-select-card-option-title']";
const addTeamCreate = '[data-test-id="team-form-footer-action"]';
const managerNameArea = '[data-test-id="user-async-select-card-title"]';
const nameDetailArea =
  "[data-test-id='company-management-department-detail-overview-teams-team-0-title']";
const managerNameDetailArea = "[data-test-id='undefined-title']";
const descriptionDetails = '.block.font-normal.mt-1.text-gray-500.text-sm';

//departmentsTeamEditCancelButton
const teamDetailButton =
  "[data-test-id='company-management-department-detail-overview-teams-menu-button-0']";
const teamEditButton =
  "[data-test-id='company-management-department-detail-overview-teams-edit-0']";
const teamEditButtonCrossMark =
  '.mantine-1j79dk3.mantine-ActionIcon-root.mantine-Modal-close.mantine-UnstyledButton-root';
const teamEditCancelButton = '[data-test-id="team-form-footer-cancel"]';

//departmentsTeamEditE
const editManagerName = 'Nedim Arabacı';
const editManagerSelect = "ul[role='group'] > li:nth-of-type(2)";
const teamEditUpdateButton = '[data-test-id="team-form-footer-action"]';

//departmentsTeamGoToDetail
const teamGoToDetailButton =
  "[data-test-id='company-management-department-detail-overview-teams-view-details-0']";
const teamDetailNameArea =
  "/html//div[@id='crm-layout']/div[2]/div[1]//span[.='name974008']";
const teamDetailManagerNameArea = '[data-test-id="undefined-title"]';
const descriptionDetail = '.block.font-normal.mt-1.text-gray-500.text-sm';

const values = {
  descriptionDetails,
  departmentText,
  departmentHeader,
  //buttonSelector,
  crossMark,
  cancelButton,
  addButton,
  managerArea,
  selectManager,
  nameArea,
  descriptionArea,
  createDepartmentButton,
  nameText,
  descriptionText,
  editDepartmentCrossMark,
  editDepartmentCancelButton,
  firstDepartment,
  departmentColumnMenu,
  managersCheck,
  managersHeader,
  usersCheck,
  usersHeader,
  teamsCheck,
  teamsHeader,
  editDepartmentButton,
  oldManagerName,
  editedManager,
  editedManagerName,
  updateButton,
  addManagerButton,
  addManagerCrossMark,
  addManagerCancelButton,
  managerSelectArea,
  shortcutSearchArea,
  selectManagerName,
  updateDepartmentManagerButton,
  managerSelectedNameArea,
  managerTableNameArea,
  managerName,
  managerNotFoundArea,
  managerDropDownAction,
  removeManager,
  addTeamButton,
  addTeamCrossMark,
  addTeamCancelButton,
  addTeamNameArea,
  addTeamDescriptionArea,
  addTeamMangerArea,
  addTeamMangerSearchArea,
  addTeamMangerName,
  addTeamMangerSelect,
  addTeamCreate,
  nameDetailArea,
  managerNameDetailArea,
  managerNameArea,
  teamDetailButton,
  teamEditButton,
  editManagerName,
  teamEditUpdateButton,
  teamEditButtonCrossMark,
  teamEditCancelButton,
  teamGoToDetailButton,
  teamDetailManagerNameArea,
  teamDetailNameArea,
  departmentDropdownMenu,
  departmentDeleteButton,
  deleteDepartmentButton,
  editManagerSelect,
  managerDetailNameArea,
};
export default values;
