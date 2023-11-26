import { test } from '@playwright/test';
import LoginPage, { baseURL } from '../../pageobjects/loginPage';
import EmployeePage from '../../pages/accounting/employee';

// let apiContext;
// let permissonResponse;
// const emailAddresses = [
//   'testowner@pretreer.com',
//   // 'testadmin@pretreer.com',
//   // 'testdepartmentmanager@pretreer.com',
//   // 'testteamleader@pretreer.com',
//   // 'testmember1@pretreer.com',
// ];

// test.beforeAll(async ({ browser, playwright }) => {
//   // Tarayıcıyı başlatın ve sayfayı oluşturun
//   const context = await browser.newContext({ storageState: undefined });
//   const page = await context.newPage();

//   // Oturum açma işlemini çağırın
//   const login = new LoginPage(page);
//   await login.validLogin();
//   await context.storageState({ path: 'state.json' });

//   apiContext = await playwright.request.newContext({
//     baseURL: 'https://testrunner2.birdefter.dev',
//     extraHTTPHeaders: {
//       'Content-Type': 'application/json',
//     },
//   });

//   for (const emailAddress of emailAddresses) {
//     // Burada permission değerini kontrol edin ve hasPermission değişkenini ayarlayın
//     const fetchResponse = await apiContext
//       .post('/api/auth/login', {
//         data: {
//           email: emailAddress,
//           password: 'test1234',
//           isCustomer: false,
//         },
//       })
//       .then((res) => res.json());

//     const accessToken = fetchResponse.accessToken;

//     permissonResponse = await apiContext
//       .get('/api/auth/permissions', {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       })
//       .then((res) => res.json());

//     if (!Array.isArray(permissonResponse)) {
//       // Yanıt dizi değilse, uygun bir dönüşüm işlemi yapın
//       permissonResponse = [permissonResponse];
//     }
//     console.log(permissonResponse);
//   }
// });

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}/accounting/accounts/employees`);
  await page.waitForTimeout(2000);
});

test('Accounting Employee Accounts Create Cash', async ({ page }) => {
  const employee = new EmployeePage(page);
  await employee.createNewAccountGroupCash();
});
test('Accounting Employee Accounts Create Bank', async ({ page }) => {
  const employee = new EmployeePage(page);
  await employee.createNewAccountGroupBank();
});
