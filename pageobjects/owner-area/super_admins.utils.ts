//createNewUser
const uuid = () => Math.floor(Math.random() * 10000);
const id = uuid();
const firstNameText = `First Name${id}`;
const lastNameText = `Last Name${id}`;
const emailText = `email${id}@gmail.com`;
const passwordText = `password${id}`;
const dropdownList = '.floating-ui-select-group > li';

const createButton =
  '[class="flex flex-row items-center justify-between mt-[24px]"] button';
const firstNameInput = '[data-test-id="admin-field-firstName"]';
const lastNameInput = '[data-test-id="admin-field-lastName"]';
const emailInput = '[data-test-id="admin-field-email"]';
const passwordInput = '[data-test-id="admin-field-password"]';
const languageInput = '[aria-expanded] .group';
const saveButton = '[data-test-id="admin-form-footer-action"]';
const listAdminName =
  '[data-test-id="admin-table-body-row-0"] [data-test-id="undefined-title"]';
const listEmail = 'tr:nth-of-type(1) > td:nth-of-type(1) > div > div > div';
const subdomain = 'admin';
const loginMailArea = '[data-test-id="sign-in-page-field-email"]';
const loginPasswordArea = '[data-test-id="sign-in-page-field-password"]';
const submitButton = '[data-test-id="sign-in-page-submit-button"]';
//editAdmin
const actionsButton = '[data-test-id="admin-table-body-row-0"] [type]';
const actionsEditButton = '[class="flex items-center space-x-2 w-full"]';
const values = {
  submitButton,
  loginPasswordArea,
  loginMailArea,
  subdomain,
  actionsEditButton,
  actionsButton,
  listEmail,
  listAdminName,
  saveButton,
  dropdownList,
  languageInput,
  passwordInput,
  passwordText,
  emailInput,
  lastNameInput,
  firstNameInput,
  createButton,
  firstNameText,
  lastNameText,
  emailText,
};
export default values;
