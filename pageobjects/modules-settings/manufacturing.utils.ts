// Create
const uuid = () => Math.floor(Math.random() * 10000);
const id = uuid();
const nameText = `Name${id}`;
const editText = `Edit${id}`;
const emailText = `email${id}@gmail.com`;
const legalNameText = `LegalName${id}`;
const editLegalNameText = `EditLegalName${id}`;

//randomSelect
const dropdownList = '.floating-ui-select-group > li';

//createUnitsOfMeasure
const unitOfMeasureCreateButton =
  '[data-test-id="UnitOfMeasureTable-create-button"]';
const unitOfMeasureCreateNameInput =
  '[data-test-id="UnitOfMeasure-form-name-input"]';
const saveButton = '[data-test-id="unitOfMeasure-form-footer-action"]';
const unitOfMeasureListName =
  '[data-test-id="UnitOfMeasureTable-body-row-0-column-name"]';

//editUnitsOfMeasure
const detailMenuButton = '[data-test-id="UnitOfMeasureTable-menu-0"]';
const editButton = '[role] .szh-menu__item:nth-of-type(2) div';
const confirmButton = '[data-test-id="confirm-modal-footer-action"]';

//removeUnitsOfMeasure
const removeButton = 'li:nth-of-type(4) > .flex.items-center.space-x-2.w-full';

//createTaxRate
const createTaxRateButton = '[data-test-id="taxRateTable-create-button"]';
const taxRateNameInput = '[data-test-id="taxRate-form-name-input"]';
const taxRateInput = '[data-test-id="taxRate-form-rate-input"]';
const taxRateSaveButton = '[data-test-id="TaxRate-form-footer-action"]';
const taxRateListName =
  '[data-test-id="taxRateTable-table-body-row-0"] .font-medium';
const taxRateListRate = '[class="ml-2 text-gray-500 flex items-center"]';

//editTaxRate
const detailTaxRateMenuButton = '[data-test-id="taxRateTable-menu-0"]';

//createAllLocation
const createNewLocation = '[data-test-id="locationTable-create-button"]';
const locationName = '[data-test-id="location-form-name-input"]';
const locationLegalName = '[data-test-id="location-form-legalName-input"]';
const countryInput = '[data-test-id="location-form-country-select"] [tabindex]';
const stateInput = '[data-test-id="location-form-state-select"] [tabindex]';
const buyCheckBox = '[data-test-id="location-form-enablePurchase-checkbox"]';
const makeCheckBox = '[data-test-id="location-form-enableMake-checkbox"]';
const saveLocationButton = '[data-test-id="Location-form-footer-action"]';
const listName = '[data-test-id="locationTable-body-row-0-column-name"]';
const listLegalName =
  '[data-test-id="locationTable-body-row-0-column-legalName"]';
const listAddress = '[data-test-id="locationTable-body-row-0-column-address"]';
const listEnabledFunctions =
  '[data-test-id="locationTable-body-row-0-column-enableMake"]';

//editNewLocation
const detailLocationMenuButton = '[data-test-id="locationTable-menu-0"]';

//createSupplier
const createSupplierButton = '[data-test-id="SupplierTable-create-button"]';
const supplierNameInput = '[data-test-id="supplier-form-name-input"]';
const supplierEmailInput = '[data-test-id="supplier-form-email-input"]';
const supplierSaveButton = '[data-test-id="Supplier-form-footer-action"]';
const supplierListName =
  '[data-test-id="SupplierTable-body-row-0-column-name"] > div > div > p';
const supplierListEmail =
  '[data-test-id="SupplierTable-body-row-0-column-name"] > div > div > div';

//editSupplier
const detailSupplierMenuButton = '[data-test-id="SupplierTable-menu-0"]';

const values = {
  //editNewLocation
  editLegalNameText,
  detailLocationMenuButton,
  //createAllLocation
  listEnabledFunctions,
  listAddress,
  listLegalName,
  listName,
  saveLocationButton,
  makeCheckBox,
  buyCheckBox,
  stateInput,
  countryInput,
  legalNameText,
  locationLegalName,
  locationName,
  createNewLocation,
  //createSupplier
  detailSupplierMenuButton,
  supplierListEmail,
  supplierListName,
  supplierSaveButton,
  emailText,
  supplierEmailInput,
  supplierNameInput,
  createSupplierButton,
  //editTaxRate
  detailTaxRateMenuButton,
  //createTaxRate
  taxRateListRate,
  taxRateListName,
  taxRateSaveButton,
  taxRateInput,
  taxRateNameInput,
  createTaxRateButton,
  //removeUnitsOfMeasure
  confirmButton,
  removeButton,
  //editUnitsOfMeasure
  editText,
  editButton,
  detailMenuButton,
  //createUnitsOfMeasure
  unitOfMeasureListName,
  saveButton,
  nameText,
  unitOfMeasureCreateButton,
  unitOfMeasureCreateNameInput,
  //randomSelect
  dropdownList,
};
export default values;
