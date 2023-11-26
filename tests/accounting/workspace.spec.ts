import { test } from '@playwright/test';
import values from '../../pageobjects/accounting/workspace.utils';
import LoginPage, { baseURL } from '../../pageobjects/loginPage';
import CustomerPage from '../../pages/accounting/customer';
import WorkspacePage from '../../pages/accounting/workspace';
import OperationsPage from '../../pages/exchange/operations';
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

  await page.goto(`${baseURL}/accounting/accounts/workspace`);
  await page.waitForTimeout(2000);
});

test('Accounting Workspace Accounts Create Cash', async ({ page }) => {
  const workspace = new WorkspacePage(page);
  await workspace.createNewCompanyAccountGroup(
    values.cashTab,
    values.workspaceAccountGroupText,
  );
});
test('Accounting Workspace Accounts Create Bank', async ({ page }) => {
  const workspace = new WorkspacePage(page);
  await workspace.createNewCompanyAccountGroup(
    values.bankTab,
    values.workspaceAccountGroupText,
  );
});
test('Accounting Workspace Accounts Check Filter', async ({ page }) => {
  const workspace = new WorkspacePage(page);
  await workspace.typeFilterCheck();
});
test('Workspace Accounts Table Link Check', async ({ page }) => {
  const workspace = new WorkspacePage(page);
  await workspace.pageLinkCheck();
});
test('Workspace Accounts Detail Page Check For Add Payment Receive Money', async ({
  page,
}) => {
  const workspace = new WorkspacePage(page);
  const operations = new OperationsPage(page);
  const customer = new CustomerPage(page);

  await workspace.clearAllWorkspaceAccount();
  await customer.clearAllCustomerAccount();
  await customer.createNewCustomerAccountGroupCash(values.customerNameText);
  await workspace.createNewCompanyAccountGroup(
    values.cashTab,
    values.workspaceAccountGroupText,
  );
  await operations.clearAllData();
  await operations.createNewOperation(1, '1000', '10', values.buyTab);
  await workspace.accountsDetailCheckForAddPayment(values.receiveMoney, '2000');
});
test('Workspace Accounts Detail Page Check For Add Payment Give Money', async ({
  page,
}) => {
  const workspace = new WorkspacePage(page);
  const operations = new OperationsPage(page);
  const customer = new CustomerPage(page);

  await workspace.clearAllWorkspaceAccount();
  await customer.clearAllCustomerAccount();
  await customer.createNewCustomerAccountGroupCash(values.customerNameText);
  await workspace.createNewCompanyAccountGroup(
    values.cashTab,
    values.workspaceAccountGroupText,
  );
  await operations.clearAllData();
  await operations.createNewOperation(1, '1000', '10', values.buyTab);
  await workspace.accountsDetailCheckForAddPayment(values.giveMoney, '2000');
});
test('Workspace Accounts Detail Page Check For Resolve Buy Operation', async ({
  page,
}) => {
  const workspace = new WorkspacePage(page);
  const operations = new OperationsPage(page);
  const customer = new CustomerPage(page);

  await workspace.clearAllWorkspaceAccount();
  await customer.clearAllCustomerAccount();
  await customer.createNewCustomerAccountGroupCash(values.customerNameText);
  await customer.createNewCustomerAccountGroupCash(values.newCustomerNameText);
  await workspace.createNewCompanyAccountGroup(
    values.cashTab,
    values.workspaceAccountGroupText,
  );
  await workspace.createNewCompanyAccountGroup(
    values.cashTab,
    values.workspaceNewAccountGroupText,
  );
  await operations.clearAllData();
  await operations.createNewOperation(1, '1000', '10', values.buyTab);
  await workspace.accountsDetailCheckForResolve();
});
test('Workspace Accounts Detail Page Check For Resolve Sell Operation', async ({
  page,
}) => {
  const workspace = new WorkspacePage(page);
  const operations = new OperationsPage(page);
  const customer = new CustomerPage(page);

  await workspace.clearAllWorkspaceAccount();
  await customer.clearAllCustomerAccount();
  await customer.createNewCustomerAccountGroupCash(values.customerNameText);
  await customer.createNewCustomerAccountGroupCash(values.newCustomerNameText);
  await workspace.createNewCompanyAccountGroup(
    values.cashTab,
    values.workspaceAccountGroupText,
  );
  await workspace.createNewCompanyAccountGroup(
    values.cashTab,
    values.workspaceNewAccountGroupText,
  );
  await operations.clearAllData();
  await operations.createNewOperation(1, '1000', '10', values.sellTab);
  await workspace.accountsDetailCheckForResolve();
});
