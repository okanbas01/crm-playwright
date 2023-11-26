import { test } from '@playwright/test';
import values from '../../pageobjects/exchange/operations.utils';
import LoginPage, { baseURL } from '../../pageobjects/loginPage';
import CustomerCurrentsPage from '../../pages/exchange/customer-currents';
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
test('Loan Dataset', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.clearAllData();
  await exchange.loanOperations();
  await exchange.clearAllData();
});

// test('Mark ve Unmark kontrol', async ({ page }) => {
//   const loan = new OperationsPage(page);
//   await loan.markUnmark();
// });
// test('Customer detayına gidilmesi', async ({ page }) => {
//   const loan = new OperationsPage(page);
//   await loan.customerDetail();
// });
test.only('Split And Shift Disable', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.createNewOperation(1, '1000', '10', values.buyTab);
  await exchange.splitAndShiftDisable();
});
test('Split And Shift One Customer Change', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.createNewOperation(1, '1000', '10', values.buyTab);
  await exchange.splitAndShiftOneCustomerChange();
});
test('Add New Payment', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.clearAllData();
  await exchange.createNewOperation(1, '1000', '10', values.buyTab);
  await exchange.newAddPayment();
});
test('Split Operations', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.clearAllData();
  await exchange.createNewOperation(1, '1000', '10', values.buyTab);
  await exchange.splitOperation();
});
test('Marked Operations', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.createNewOperation(1, '1000', '10', values.buyTab);
  await exchange.operationsMarked();
});
test('Edit Operations', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.createNewOperation(1, '1000', '10', values.buyTab);
  await exchange.editOperation();
});
test('Operations Edit Loan Asset Unchangeable Assertion', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.createNewOperation(1, '1000', '10', values.buyTab);
  await exchange.operationEditLoanAssetUnchangeable();
});
test('Unable to Click Previous Days in the Calendar', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.createNewOperation(1, '1000', '10', values.buyTab);
  await exchange.calendarDisabledDays();
});
test('Calendar Shows Todays Date', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.createNewOperation(1, '1000', '10', values.buyTab);
  await exchange.SelectedToday();
});
test('Customer Detail Check - New Operation', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.clearAllData();
  await exchange.createNewOperation(1, '1000', '10', values.buyTab);
  await exchange.customerCheckNewOperation();
});
// test('Customer Detail Check - Shift Operation', async ({ page }) => {
//   const loan = new OperationsPage(page);
//   await loan.clearAllData();
//   await loan.createNewOperation(1, '1000', '10');
//   await loan.splitAndShiftOneCustomerChange();
//   await loan.customerCheckShiftOperation();
// });
// test('Customer Detail Check - Edited Operation', async ({ page }) => {
//   const loan = new LoanPage(page);
//   await loan.clearAllData();
//   await loan.createNewOperation(1, '1000', '10');
//   await loan.editOperation();
//   await loan.customerCheckEditOperation();
// });
// test('Customer Detail Check - Split Operation', async ({ page }) => {
//   const loan = new LoanPage(page);
//   await loan.clearAllData();
//   await loan.createNewOperation(1, '1000', '10');
//   await loan.customerCheckSplitOperation();
// });

test('Multiple Selected Shift On Operation Table', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.clearAllData();
  await exchange.createNewOperation(1, '1000', '10', values.buyTab);
  await exchange.createNewOperation(2, '500', '2', values.buyTab);
  await exchange.multipleShiftSelectedOperation();
});
test('Total Amount Difference and Customer Change Check', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.clearAllData();
  await exchange.createNewOperation(1, '1000', '10', values.buyTab); // 1. customer select
  await exchange.createNewOperation(2, '500', '2', values.buyTab); // 2. customer select
  await exchange.assertTotalAmountDifference();
});
test('Resolve', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.clearAllData();
  await exchange.createNewOperation(1, '1000', '10', values.buyTab);
  await exchange.resolve();
});

test('Remove Operation', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.clearAllData();
  await exchange.createNewOperation(1, '1000', '10', values.buyTab);
  await exchange.removeOperation();
});
test('Check Customer Current List With Detail Page', async ({ page }) => {
  const exchange = new OperationsPage(page);
  await exchange.clearAllData();
  await exchange.createNewOperation(1, '1000', '10', values.buyTab);
  await exchange.checkCustomerCurrentListWithDetailPage();
});
test('Activation Of The New Transform On The Operation Page', async ({
  page,
}) => {
  const loan = new OperationsPage(page);
  const exchange = new CustomerCurrentsPage(page);

  await loan.clearAllData();
  await loan.createNewOperation(1, '1000', '10', values.buyTab);
  await exchange.newTransform();
  await loan.menuActivation();
});
// test('Customer Log Check - New Operation', async ({ page }) => {
//   const loan = new OperationsPage(page);
//   await loan.clearAllData();
//   await loan.createNewOperation(1, '1000', '10');
//   await loan.logDetailsCheckNewOperation();
// });
// test('Customer Log Check - Shift Operation', async ({ page }) => {
//   const loan = new OperationsPage(page);
//   await loan.clearAllData();
//   await loan.createNewOperation(1, '1000', '10');
//   await loan.splitAndShiftOneCustomerChange();
//   await loan.logDetailsCheckShiftOperation();
// });

// test('Customer Log Check - Split Operation', async ({ page }) => {
//   const loan = new OperationsPage(page);
//   await loan.clearAllData();
//   await loan.createNewOperation(1, '1000', '10');
//   await loan.logDetailsCheckSplitOperation();
// });
// test('Customer Log Check - Edited Operation', async ({ page }) => {
//   const loan = new OperationsPage(page);
//   await loan.clearAllData();
//   await loan.createNewOperation(1, '1000', '10');
//   await loan.editOperation();
//   await loan.logDetailsCheckEditOperation();
// });
