// createNewCustomerStatus
const uuid = () => Math.floor(Math.random() * 10000);
const id = uuid();
const nameText = `Name${id}`;
const editNameText = `Edit Name${id}`;

const createButton =
  '[class="flex flex-row items-center justify-between mt-[24px]"] button';
const nameInput = '[data-test-id="customerStatus-field-name"]';
const saveButton = '[data-test-id="customerStatus-form-footer-action"]';
const listStatusArea =
  '[data-test-id="settings-statuses-customer-status-body-row-0-column-name"]';

//statusNameControlInFilter
const statusFilter = '[class] .items-center:nth-of-type(4) [tabindex]';
const statusOptions = '.floating-ui-select-group > li';

//editStatus
const detailButton =
  '[data-test-id="settings-statuses-customer-status-table-body-row-0"] [type]';
const editButton = 'ul[role="menu"] > li:nth-of-type(2)';

//removeStatus
const listFirstStatusName =
  '[data-test-id="settings-statuses-customer-status-body-row-0-column-name"]';
const removeButton = 'li:nth-of-type(4) > .flex.items-center.space-x-2';
const removeConfirmButton = '[data-test-id="confirm-modal-footer-action"]';

//searchCustomerStatuses
const searchInput = '[data-test-id="-search-input"]';

//createNewCustomFields
const customFieldNameArea = '[data-test-id="customerCustomField-field-key"]';
const typeContainer = '[class="truncate max-w-full !mr-0"]';
const types = 'div#floating-ui-0 > ul[role="group"] > li';
const parameterText = '[data-test-id="option-collapse-0-header"]';
const customFieldSaveButton =
  '[data-test-id="customerCustomField-form-footer-action"]';
const listKeyArea =
  '[data-test-id="modules-customers-custom-fields-table-body-row-0-column-key"]';

const listCustomerTypeArea =
  '[data-test-id="modules-customers-custom-fields-table-body-row-0-column-type"]';
const listParameterTypeArea =
  '[data-test-id="modules-customers-custom-fields-table-body-row-0-column-parameters"]';
const customFieldDetailButton =
  '[data-test-id="modules-customers-custom-fields-table-table-body-row-0"] [type]';
const customFieldEditButton = '[class="flex items-center space-x-2 w-full"]';
const parameterTextArea =
  '[data-test-id="option-collapse-1-header"] .font-medium';
//removeCustomFields
const removeCustomFieldButton = 'ul[role="menu"] > li:nth-of-type(4)';

const values = {
  searchInput,
  removeCustomFieldButton,
  parameterTextArea,
  customFieldEditButton,
  customFieldDetailButton,
  listParameterTypeArea,
  listCustomerTypeArea,
  listKeyArea,
  customFieldSaveButton,
  parameterText,
  types,
  typeContainer,
  customFieldNameArea,
  removeConfirmButton,
  removeButton,
  listFirstStatusName,
  editButton,
  detailButton,
  editNameText,
  statusOptions,
  statusFilter,
  listStatusArea,
  saveButton,
  nameInput,
  createButton,
  nameText,
};
export default values;
