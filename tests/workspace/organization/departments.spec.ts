// import { chromium, test } from '@playwright/test';
// import LoginPage, { baseURL } from '../../pageobjects/loginPage';

// test.beforeEach(async ({ page }) => {
//   await page.goto(`${baseURL}/v2/settings/departments`);
//   await page.waitForTimeout(2000);
// });

// test.beforeAll(async () => {
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   const login = new LoginPage(page);

//   await page.goto(`${baseURL}/v2/settings/branches`);
//   await page.waitForTimeout(2000);

//   const cardTitle = await page.$('.ant-card-head-title');

//   if (cardTitle !== null) {
//     await login.validLogin();
//     await context.storageState({ path: 'state.json' });
//     await page.waitForTimeout(2000);
//   } else {
//     console.log("Couldn't find the .ant-card-head-title element.");
//   }
// });
// test.beforeEach(async ({ page }) => {
//   const login = new LoginPage(page);
//   await login.validLogin();

//   await page.goto(`${baseURL}/v2/settings/departments`);
//   await page.waitForTimeout(2000);
// });
// test('Department Page Check', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.departmentsPageCheck();
// });
// test('New Department Cancel Button Control', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.AddNewDepartmentCancelButtonControl();
// });
// test('New Department Invalid Cases', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.invalidAddNewDepartment();
//   // New Department butonuna tıklandığında Create butonu valid geliyor.
//   // Name alanı uyarısı kontrol edilmedi.
// });
// test('Departments Create ', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.addNewDepartment();
//   // Description alanı kontrol edilmedi. Detay sayfasında yok.
// });
// test('Checkbox Control ', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.columnOpenClose();
// });
// test('Edit Department Cancel Button', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.editDepartmentCancelButtonControl();
// Name alanı uyarısı kontrol edilmedi.
// });
// test('Edit Department Invalid Cases', async ({ page }) => {
//     const department = new DepartmentsPage(page);
//     await department.editDepartmentInvalidCases();
//     // Name alanı uyarısı kontrol edilmedi.
// });
// test('Edit Department ', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.editDepartment();
//   //Description alanı kontrol edilmedi. Detay sayfasında yok.
// });
// test('Remove Manager Shortcut ', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.departmentDetailRemoveManager();
// }); // not-found yazı alanı seçemiyorum
// test('ADD Manager Shortcut Cancel Button Control ', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.addManagerShortcutCancelButton();
// });
// test('Add Manager Shortcut ', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.departmentDetailRemoveManager();
//   await page.goto(`${baseURL}/v2/settings/departments`);
//   await department.shortcutAddManager();
// });
// test('Delete Department', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.deleteDepartment();
//   // Name alanında id olmadığı için assertion yapılamadı.
// });
// test('Department Detail Add Team Cancel Button Control ', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.departmentDetailAddTeamCancelButton();
// });
// test('Department Detail Add Team Invalid Cases ', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.departmentDetailAddTeamInvalidCases();
//   // Create butonu disable hiç gelmiyor
// });
// test('Department Detail Add Team Create', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.departmentDetailAddTeamCreate();
// });
// test('Department Detail Edit Team Cancel Button Control ', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.departmentDetailTeamEditCancelButton();
// });
// test('Department Detail Team Edit Invalid Cases ', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.departmentDetailTeamEditInvalidCases();
//   // save butonu disable gelmiyor
// });
// test('Department Detail Team Edit', async ({ page }) => {
//   const department = new DepartmentsPage(page);
//   await department.departmentDetailTeamEdit(); //descriptions undifident geliyor kontrol edilecek
// });
// test('Department Detail Team Go To Detail', async ({ page }) => {
//   // Name alanı assertion olmadı.
//   const department = new DepartmentsPage(page);
//   await department.departmentDetailTeamGoToDetail();
// });
// test('valid search text', async ({ page }) => {
//   await validSearch(MODULE_NAMES.DEPARTMENTS, page);
// });

// test('Invalid search text', async ({ page }) => {
//   await invalidSearch(MODULE_NAMES.DEPARTMENTS, page);
// });
// test('Departments Detail Teams - Invalid search text', async ({ page }) => {
//   await detailInvalidSearch(MODULE_NAMES.DEPARTMENTS_TEAMS, page);
// });
// test('Pagination kontrol', async ({ page }) => {
//   await paginations(MODULE_NAMES.WORKSPACES, page);
// });
