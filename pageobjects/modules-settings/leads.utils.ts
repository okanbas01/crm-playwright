// createNewLeadStatus
const uuid = () => Math.floor(Math.random() * 10000);
const id = uuid();
const nameText = `Name${id}`;
const editNameText = `Edit Name${id}`;

const createButton =
  '[class="flex flex-row items-center justify-between mt-[24px]"] button';
const nameInput = '[data-test-id="leadStatus-field-name"]';
const saveButton = '[data-test-id="leadStatus-form-footer-action"]';
const listStatusArea =
  '[data-test-id="settings-statuses-lead-status-body-row-0-column-name"]';

//statusNameControlInFilter
const statusFilter = '[class] .items-center:nth-of-type(4) [tabindex]';
const statusOptions = '.floating-ui-select-group > li';

//editStatus
const detailButton =
  '[data-test-id="settings-statuses-lead-status-table-body-row-0"] [type]';
const editButton = 'ul[role="menu"] > li:nth-of-type(2)';

//removeStatus
const removeButton = 'li:nth-of-type(4) > .flex.items-center.space-x-2';
const removeConfirmButton = '[data-test-id="confirm-modal-footer-action"]';

//searchCustomerStatuses
const searchInput = '[data-test-id="-search-input"]';

const values = {
  searchInput,
  removeConfirmButton,
  removeButton,
  editButton,
  detailButton,
  statusOptions,
  statusFilter,
  listStatusArea,
  saveButton,
  nameInput,
  createButton,
  editNameText,
  nameText,
};
export default values;
