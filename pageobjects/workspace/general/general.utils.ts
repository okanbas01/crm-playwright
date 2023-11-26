//editCompany
const uuid = () => Math.floor(Math.random() * 10000);
const id = uuid();
const nameText = `Workspace Name${id}`;
const addressText = `Address Name${id}`;
const descriptionText = `Description Name${id}`;

const editButton = '[class="space-x-[8px]"] button';
const nameInput = '[data-test-id="company-field-name"]';
const addressInput = '[data-test-id="company-field-address"]';
const descriptionInput = '[data-test-id="company-field-description"]';
const saveButton = '[data-test-id="company-form-footer-action"]';
const listWorkspaceArea =
  '[class] [class="mb-3"]:nth-of-type(1) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const listAddressArea =
  '[class] [class="mb-3"]:nth-of-type(4) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const listDescriptionArea =
  '[class="text-base font-normal !text-sm !font-normal mb-0 text-light-400 dark:text-dark-300 normal-case"]';
const searchInput = '[data-test-id="-search-input"]';
const listFirstWorkspaceNameArea =
  '[data-test-id="Company-table-body-row-0"] [data-test-id="undefined-title"]';
const workspaceMainMenu = '.szh-menu-button.w-full';
const selectedWorkspaceName =
  '[class="flex items-center w-full pr-1 justify-between space-x-2"] p';
const values = {
  selectedWorkspaceName,
  workspaceMainMenu,
  listFirstWorkspaceNameArea,
  searchInput,
  listDescriptionArea,
  listAddressArea,
  listWorkspaceArea,
  saveButton,
  descriptionInput,
  addressInput,
  nameInput,
  editButton,
  descriptionText,
  addressText,
  nameText,
};
export default values;
