import { test } from '@playwright/test';
import values from '../../pageobjects/accounting/transactions.utils';
import LoginPage, { baseURL } from '../../pageobjects/loginPage';
import TransactionsPage from '../../pages/accounting/transactions';
import OperationsPage from '../../pages/exchange/operations';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.validLogin();

  await page.goto(`${baseURL}`);
  await page.waitForTimeout(2000);
});
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

// test('Currency Change', async ({ page }) => {
//   const loan = new LoanPage(page);
//   const login = new LoginPage(page);

//   // İzin kontrolünü burada yapabilirsiniz
//   const requiredPermissions = ['all_including_linked_companies', 'read_bank'];
//   const hasPermission = await login.checkPermissions(
//     permissonResponse,
//     requiredPermissions,
//   );
//   console.log(`Kullanıcı: ${emailAddresses}, İzin: ${hasPermission}`);
//   await page.goto(`${baseURL}/loan/dashboard`);
//   await page.waitForTimeout(2000);

//   if (hasPermission) {
//     await loan.currencyChange();
//     console.log('Yetkisi olan kullanıcı.');
//   } else {
//     await loan.currencyChangeNoPermission();
//     console.log(
//       'Yetkisi olmayan kullanıcı, currencyChangeNoPermission Çalıştı . ',
//     );
//   }
// });

// test('New Operation Alert', async ({ page }) => {
//   await page.goto(`${baseURL}/loan/operations`);
//   await page.waitForTimeout(2000);

//   const loan = new LoanPage(page);
//   await loan.newOperationAlerts();
// });

test('Check Transactions For Add New Payment Receive Money', async ({
  page,
}) => {
  const operations = new OperationsPage(page);
  const transactions = new TransactionsPage(page);

  await operations.clearAllData();
  await operations.createNewOperation(1, '1000', '10', values.buyTab);
  await transactions.checkTransactionsForAddPayment(values.receiveMoney);
});

test('Check Transactions For Add New Payment Give Money', async ({ page }) => {
  const operations = new OperationsPage(page);
  const transactions = new TransactionsPage(page);

  await operations.clearAllData();
  await operations.createNewOperation(1, '1000', '10', values.buyTab);
  await transactions.checkTransactionsForAddPayment(values.giveMoney);
});

test('Check Transactions For Resolve To Buy Operation', async ({ page }) => {
  const operations = new OperationsPage(page);
  const transactions = new TransactionsPage(page);

  await operations.clearAllData();
  await operations.createNewOperation(1, '1000', '10', values.buyTab);
  await transactions.checkTransactionsForResolve();
});
test('Check Transactions For Resolve To Sell Operation', async ({ page }) => {
  const operations = new OperationsPage(page);
  const transactions = new TransactionsPage(page);

  await operations.clearAllData();
  await operations.createNewOperation(1, '1000', '10', values.sellTab);
  await transactions.checkTransactionsForResolve();
});
// test('Check Transactions For New Entry', async ({ page }) => {
//   const transactions = new TransactionsPage(page);
//   await transactions.checkTransactionsForNewEntry();
// });
//--- new entry
