//createNewUser
const uuid = () => Math.floor(Math.random() * 10000);
const id = uuid();
const groupNameText = `Group Name${id}`;
const descriptionText = `Description${id}`;
const workspaceNameText = `Workspace${id}`;
const subdomainText = `subdomain${id}`;
const addressText = `address${id}`;

const newGroupButton = '[class="space-x-[8px]"] button';
const groupNameInput = '[data-test-id="companyGroup-field-name"]';
const descriptionInput = '[data-test-id="companyGroup-field-description"]';
const dropdownList = '.floating-ui-select-group > li';
const formColorList = '#color > div';
const workspacesDropdown =
  '[class="absolute right-0 flex px-3 h-[36px] items-center text-sm"]';
const saveButton = '[data-test-id="companyGroup-form-footer-action"]';

//editGroup
const groupHeader =
  '[class] [class="rounded-md border border-frame shadow-sm mb-2 h-min dark:bg-dark-100 bg-light-0"]:nth-of-type(1) [data-test-id="undefined-header"]';
const groupHeaderDetailButton =
  '.flex.items-start.justify-between > div:nth-of-type(2)';
const editButton = '[class="flex items-center space-x-2 w-full"]';
const listGroupName =
  '[class] [class="rounded-md border border-frame shadow-sm mb-2 h-min dark:bg-dark-100 bg-light-0"]:nth-of-type(1) [class="text-sm ml-3"]';
const listDescriptionName =
  '[class] [class="rounded-md border border-frame shadow-sm mb-2 h-min dark:bg-dark-100 bg-light-0"]:nth-of-type(1) .text-xs';

//currentWorkspace
const workspaceDetailButton =
  'body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)';
const switchWorkspace = 'li:nth-of-type(3)  span';
const currentWorkspaceArea =
  'body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)';
const currentWorkspaceText = 'Current workspace';
const workspaceMainMenu = '.szh-menu-button.w-full';
const selectedWorkspaceName =
  '[class="flex items-center w-full pr-1 justify-between space-x-2"]';

//maintanenceMode
const maintenanceMode = 'li:nth-of-type(4)  span';
const confirmButton = '[data-test-id="confirm-modal-footer-action"]';
const groupMaintenanceInformation =
  '[data-test-id="company-group-table-body-row-0-column-maintenance"]';
const allWorkspacesMaintenanceInformation =
  '[data-test-id="Company-body-row-0-column-maintenance"]';
const maintenanceText = 'Maintenance';

//allCompanyMaintenanceMode
const maintenanceButton =
  '[data-test-id="companies.companiesTab.maintenance-button"]';
const allMaintenanceButton =
  '[data-test-id="companies.maintenance-modal.radio-select-all"]';
const updateButton =
  '[data-test-id="companies-maintenance-modal-footer-action"]';
const selectedCompanyMaintenanceButton =
  '[data-test-id="companies.maintenance-modal.radio-select-company"]';
const workspacesArea = '[aria-expanded] .group';

//createWorkspace
const workspaceButton =
  '[data-test-id="companies.companiesTab.create-company-button"]';
const workspaceNameInput = '[data-test-id="company-field-name"]';
const subdomainInput = '[data-test-id="company-field-subdomain"]';
const addressInput = '[data-test-id="company-field-address"]';
const workspaceDescriptionInput = '[data-test-id="company-field-description"]';
const saveWorkspace = '[data-test-id="company-form-footer-action"]';
const listWorkspaceName =
  '[data-test-id="Company-table-body-row-0"] > td > div > div > p';
const listSubDomainName =
  '[data-test-id="Company-table-body-row-0"] > td > div > div > div';

//detailSettings
const detailActionsButton =
  '[data-test-id="Company-body-row-0-column-actions"]';
const detailSettingsButton = 'ul[role="menu"] > li:nth-of-type(2)';
const generalWorkspaceArea =
  '[class] [class="mb-3"]:nth-of-type(1) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';

//detailSwitchWorkspace
const detailSwitchWorkspaceButton = 'li:nth-of-type(4)  span';

//detailMaintenanceWorkspace
const detailMaintenanceButton = 'li:nth-of-type(5)  span';

//deleteWorkspace
const detailDeleteButton = 'li:nth-of-type(6)  span';
const values = {
  detailDeleteButton,
  detailMaintenanceButton,
  detailSwitchWorkspaceButton,
  generalWorkspaceArea,
  detailSettingsButton,
  detailActionsButton,
  listSubDomainName,
  listWorkspaceName,
  saveWorkspace,
  workspaceDescriptionInput,
  addressText,
  addressInput,
  subdomainInput,
  subdomainText,
  workspaceNameText,
  workspaceNameInput,
  workspaceButton,
  workspacesArea,
  selectedCompanyMaintenanceButton,
  updateButton,
  allMaintenanceButton,
  maintenanceButton,
  maintenanceText,
  allWorkspacesMaintenanceInformation,
  groupMaintenanceInformation,
  confirmButton,
  maintenanceMode,
  selectedWorkspaceName,
  workspaceMainMenu,
  currentWorkspaceText,
  currentWorkspaceArea,
  switchWorkspace,
  workspaceDetailButton,
  listDescriptionName,
  listGroupName,
  editButton,
  groupHeaderDetailButton,
  groupHeader,
  saveButton,
  descriptionText,
  workspacesDropdown,
  formColorList,
  dropdownList,
  descriptionInput,
  groupNameInput,
  newGroupButton,
  groupNameText,
};
export default values;
