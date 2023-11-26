//createNewUser
const uuid = () => Math.floor(Math.random() * 10000);
const id = uuid();
const firstNameText = `First Name${id}`;
const lastNameText = `Last Name${id}`;
const emailText = `email${id}@gmail.com`;
const passwordText = `password${id}`;

const createButton =
  '[class="flex flex-row items-center justify-between mt-[24px]"] button';
const firstNameInput = '[data-test-id="user-field-firstName"]';
const lastNameInput = '[data-test-id="user-field-lastName"]';
const emailInput = '[data-test-id="user-field-email"]';
const branchInput =
  '[class] [class="mantine-InputWrapper-root mantine-1ryrb3t"]:nth-of-type(4) [tabindex]';
const titleInput =
  '[class] [class="mantine-InputWrapper-root mantine-1ryrb3t"]:nth-of-type(5) [tabindex]';
const roleInput = '[class] [class="mb-3"]:nth-of-type(7) [tabindex]';
const saveButton = '[data-test-id="user-form-footer-action"]';
const dropdownList = '.floating-ui-select-group > li';
const listUserName =
  '[data-test-id="user-management-table-table-body-row-0"] [data-test-id="undefined-title"]';
const listEmail =
  '[data-test-id="user-management-table-table-body-row-0"] [class="font-normal text-light-400 dark:text-dark-300 truncate max-w-[190px]"]';
const actionsButton =
  '[data-test-id="user-management-table-body-row-0-column-actions"]';
const goToDetailButton = '.flex.items-center.space-x-2.w-full';
const detailNameArea =
  '[class="font-normal text-light-800 dark:text-dark-1000 cursor-default text-2xl"] .items-center span';
const detailTitleArea =
  '[class] [class="mb-3"]:nth-of-type(1) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const detailBranchArea =
  '[class] [class="mb-3"]:nth-of-type(2) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';
const detailEmailArea =
  '[class] [class="mb-3"]:nth-of-type(2) [class="text-base font-normal !text-sm !font-normal mb-0 text-inherit normal-case"]';

//editUser
const editButton =
  '[class="false pt-[32px] pb-[64px]"] > div:nth-of-type(1) button';
//impersonateUser
const impersonateButton =
  '[class="border border-frame rounded-md px-5 py-5 cursor-pointer bg-light-0 dark:bg-dark-100"] button';
const impersonateHeader =
  '.flex.items-center.justify-center.space-x-2.text-white.w-full';
const headerImpersonateButton =
  '.cursor-pointer.font-semibold.underline.underline-offset-4';
//changePassword
const newPasswordArea = '[data-test-id="change-password-field-newPassword"]';
const confirmNewPasswordArea =
  '[data-test-id="change-password-field-confirmNewPassword"]';
const changePasswordSaveButton =
  '[data-test-id="change-password-form-footer-action"]';
const loginMailArea = '[data-test-id="sign-in-page-field-email"]';
const loginPasswordArea = '[data-test-id="sign-in-page-field-password"]';
const submitButton = '[data-test-id="sign-in-page-submit-button"]';

//banUser
const banUser = '[class] [data-test-id="user-detail-archive"]:nth-of-type(1)';
const confirmBan = '[data-test-id="confirm-modal-footer-action"]';
const subdomain = 'gonzales';
const banInformation =
  '[class="false pt-[32px] pb-[64px]"] > div:nth-of-type(1) [class="font-sans text-base font-medium mb-0 text-inherit capitalize"]';
const banned = 'this user is banned.';
const revokeUserBan =
  '[class] [data-test-id="user-detail-archive"]:nth-of-type(1)';
const values = {
  revokeUserBan,
  banned,
  banInformation,
  subdomain,
  confirmBan,
  banUser,
  submitButton,
  loginPasswordArea,
  loginMailArea,
  changePasswordSaveButton,
  confirmNewPasswordArea,
  passwordText,
  newPasswordArea,
  headerImpersonateButton,
  impersonateHeader,
  impersonateButton,
  editButton,
  detailEmailArea,
  detailBranchArea,
  detailTitleArea,
  detailNameArea,
  goToDetailButton,
  actionsButton,
  dropdownList,
  titleInput,
  listEmail,
  listUserName,
  saveButton,
  roleInput,
  branchInput,
  emailInput,
  lastNameInput,
  firstNameInput,
  createButton,
  firstNameText,
  lastNameText,
  emailText,
};
export default values;
