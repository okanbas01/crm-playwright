//teamsPageCheck
const teamsHeader =
  "[class='font-normal text-zinc-900 dark:text-zinc-100 cursor-default text-2xl'] .items-center";
const teamsText = ['Teams'];

// addNewTeamCancelButtons
const teamCreateButton =
  "[data-test-id='company-management-teams-create-button']";
const crossMark =
  "[class='mantine-121w2fi px-4 py-3 pb-0 mantine-Modal-header'] [type]";
const cancelButton = "[data-test-id='team-form-footer-cancel']";

//addNewTeam
const nameArea = "[data-test-id='team-field-name']";
const listNameArea = 'tr:nth-of-type(1)  .block.w-full';
const descriptionArea = "[data-test-id='team-field-description']";
const departmentsArea = "[data-test-id='team-field-department']";
const departmentsSearchArea = "[data-test-id='undefined-field-undefined']";
const departmentText = 'QA';
const departmentSelect = "li[role='option']";
const departmentNameArea = '.max-w-full.truncate';
const listDepartmentNameArea = 'tr:nth-of-type(1) > td:nth-of-type(3)';
const departmentDeleteButton =
  "//span[@role='combobox']//div//div//div//div//button[@type='button']//*[name()='svg']//*[name()='path' and contains(@d,'M11.7816 4')]";

const addTeamMangerArea = "[data-test-id='team-field-managerIds']";
const addTeamMangerSearchArea = "[data-test-id='undefined-field-undefined']";
const addTeamMangerName = 'Nedim Arabacı';
const addTeamMangerSelect = "li[role='option']";
const addTeamCreate = "[data-test-id='team-form-footer-action']";

const uuid = () => Math.floor(Math.random() * 1000000);
const id = uuid();
const nameText = `name${id}`;
const descriptionText = `description name${id}`;

// Columns
const departmentColumnMenu = '.szh-menu-button';
const departmentsCheck =
  "[data-test-id='company-management-teams-display-button-department']";
const departmentsHeader =
  "[class] [role] [class='px-0.5 py-1 h-10 text-left text-xs font-semibold border-b border-b-zinc-200 dark:border-b-zinc-800 nowrap bg-gray-50/80 dark:bg-zinc-900/80 backdrop-blur-sm uppercase sticky z-th top-0 left-0 right-0 text-zinc-400']:nth-of-type(3)";
const managersCheck =
  "[data-test-id='company-management-teams-display-button-managers']";
const managersHeader =
  "[class] [role] [class='px-0.5 py-1 h-10 text-left text-xs font-semibold border-b border-b-zinc-200 dark:border-b-zinc-800 nowrap bg-gray-50/80 dark:bg-zinc-900/80 backdrop-blur-sm uppercase sticky z-th top-0 left-0 right-0 text-zinc-400']:nth-of-type(4)";
const createdDateCheck =
  "[data-test-id='company-management-teams-display-button-createdDate']";
const createdDateHeader =
  "[class] [role] [class='px-0.5 py-1 h-10 text-left text-xs font-semibold border-b border-b-zinc-200 dark:border-b-zinc-800 nowrap bg-gray-50/80 dark:bg-zinc-900/80 backdrop-blur-sm uppercase sticky z-th top-0 left-0 right-0 text-zinc-400']:nth-of-type(5)";
const headerArea = "thead > tr[role='row']";

//editTeamCancelButton
const teamListFirst = 'tr:nth-of-type(1) > td:nth-of-type(2)';
const editTeamButton =
  "[class='items-center gap-2 hidden md:flex'] [class] button:nth-of-type(1)";
const editTeamCrossMark =
  "[class='mantine-121w2fi px-4 py-3 pb-0 mantine-Modal-header'] [type]";
const editTeamCancelButton = "[data-test-id='team-form-footer-cancel']";

//editTeam
const editTeamUpdate = "[data-test-id='team-form-footer-action']";
const newDepartmentText = 'Marketing';
const newManagerText = 'Company Super Admin';
const detailNameArea =
  "/html//div[@id='crm-layout']/div[2]/div[1]//span[.='name199188']";
const detailManagerNameArea = "[data-test-id='undefined-title']";
const detailDescriptionArea = '.block.font-normal.mt-1.text-gray-500.text-sm';

//editLeaderShortcut
const editLeaderButton =
  "[class] [class='lg:grid lg:gap-x-8 py-4 lg:grid-cols-1 gap-6']:nth-of-type(1) button";
const editLeaderCancelButton =
  "[data-test-id='add-member-modal-footer-cancel']";
const editTeamMangerArea = "[data-test-id='user-async-select-card-title']";
const editTeamManagerSearchArea = "[id='mantine-5ha62bij5']";
const shortcutEditLeaderText = 'Company Super Admin';
const shortcutEditLeaderSelect =
  ".floating-ui-select-group [role='option']:nth-of-type(1)";
const updateTeamLeaderButton =
  "[data-test-id='add-member-modal-footer-action']";

//shortcutRemoveLeader
const shortcutRemoveLeader =
  '//body/div[7]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/button[1]';
const teamManagerArea =
  '.max-w-3xl.mx-auto.w-full > div > div:nth-of-type(1) .font-medium.font-sans.mb-1.normal-case.text-inherit.text-sm';
const teamManagerAreaText = 'No Team Leader';

//shortcutAddLeader
const shortcutAddLeaderButton =
  "[class] [class='lg:grid lg:gap-x-8 py-4 lg:grid-cols-1 gap-6']:nth-of-type(1) button";
const shortcutAddLeaderArea = "[data-test-id='undefined-field-undefined']";
const shortcutAddLeaderSearchArea = '';
const shortcutAddLeaderText = '';
const shortcutAddLeaderSelect = "ul[role='group'] > li:nth-of-type(1)";
const shortcutAddLeaderName = "[data-test-id='user-async-select-card-title']";

//addTeamMember
const addTeamMemberButton = '.items-end button';
const addTeamMemberArea =
  "[class='mantine-InputWrapper-root mantine-1u48g6v'] [data-test-id]";
const addTeamMemberSearchArea = '';
const addTeamMemberSearchText = '';
const addTeamMemberSelected = "ul[role='group'] > li:nth-of-type(1)";
const addTeamMemberName = "[data-test-id='user-async-select-card-title']";
const teamMemberNameArea = "tbody [data-test-id='undefined-title']";

// teamMemberTableColumn
const teamMemberColumnMenu =
  "[data-test-id='company-management-teams-detail-display-properties-button']";
const branchCheck =
  "[data-test-id='company-management-teams-detail-display-button-branch']";
const branchHeader =
  "[class] [role] [class='px-0.5 py-1 h-10 text-left text-xs font-semibold border-b border-b-zinc-200 dark:border-b-zinc-800 nowrap bg-gray-50/80 dark:bg-zinc-900/80 backdrop-blur-sm uppercase sticky z-th top-0 left-0 right-0 text-zinc-400']:nth-of-type(5)";

//deleteTeam
const deleteTeamActionButton =
  'body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)';
const deleteTeamButton = ".szh-menu-container > ul[role='menu']";
const deleteTeamCrossMark =
  '.mantine-1j79dk3.mantine-ActionIcon-root.mantine-Modal-close.mantine-UnstyledButton-root';
const deleteTeamCancelButton = "[id='team-remove-cancel']";
const deleteTeamDeleteButton = "[id='team-remove-action']";

const values = {
  headerArea,
  teamsHeader,
  teamsText,
  teamCreateButton,
  crossMark,
  cancelButton,
  nameArea,
  listNameArea,
  descriptionArea,
  departmentsArea,
  departmentsSearchArea,
  departmentText,
  departmentSelect,
  departmentNameArea,
  listDepartmentNameArea,
  departmentDeleteButton,
  addTeamMangerArea,
  addTeamMangerSearchArea,
  addTeamMangerName,
  addTeamMangerSelect,
  addTeamCreate,
  nameText,
  descriptionText,
  departmentColumnMenu,
  departmentsCheck,
  departmentsHeader,
  managersCheck,
  managersHeader,
  createdDateCheck,
  createdDateHeader,
  teamListFirst,
  editTeamButton,
  editTeamCrossMark,
  editTeamCancelButton,
  editTeamUpdate,
  newDepartmentText,
  newManagerText,
  detailNameArea,
  detailManagerNameArea,
  detailDescriptionArea,
  editLeaderButton,
  editLeaderCancelButton,
  shortcutEditLeaderText,
  updateTeamLeaderButton,
  shortcutEditLeaderSelect,
  shortcutRemoveLeader,
  teamManagerArea,
  teamManagerAreaText,
  shortcutAddLeaderButton,
  editTeamMangerArea,
  editTeamManagerSearchArea,
  shortcutAddLeaderArea,
  shortcutAddLeaderSelect,
  shortcutAddLeaderName,
  addTeamMemberButton,
  addTeamMemberArea,
  addTeamMemberSelected,
  teamMemberNameArea,
  addTeamMemberName,
  deleteTeamActionButton,
  deleteTeamButton,
  deleteTeamCrossMark,
  deleteTeamCancelButton,
  deleteTeamDeleteButton,
  teamMemberColumnMenu,
  branchCheck,
  branchHeader,
};
export default values;
