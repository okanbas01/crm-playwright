import { Page, expect } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../component/constant';
import values from '../../pageobjects/accounting/workspace.utils';
import { baseURL } from '../../pageobjects/loginPage';

export default class WorkspacePage {
  constructor(public page: Page) {}
  async createNewCompanyAccountGroup(parityType, workspaceAccountGroup) {
    await this.page.goto(`${baseURL}/accounting/accounts/workspace`);
    await this.page.waitForTimeout(1000);

    await clickAndWait(this.page, values.createGroupButton, 500);
    await clickAndWait(this.page, parityType, 500);
    const saveButton = await this.page.locator(values.saveButton);
    const saveState = await saveButton.isDisabled();
    expect(saveState).toBe(true);

    await fillAndWait(
      this.page,
      values.newAccountGroupNameArea,
      workspaceAccountGroup,
      500,
    );

    if (parityType === values.bankTab) {
      await clickAndWait(this.page, values.bankSelectArea, 500);
      const banks = await this.page.$$(values.banks);
      const randomIndex = Math.floor(Math.random() * banks.length); // Rastgele bir indeks seçin
      const selectBank = banks[randomIndex];
      await selectBank.click();
    }
    await clickAndWait(this.page, values.saveButton, 500);
  }

  async typeFilterCheck() {
    await this.page.goto(`${baseURL}/accounting/accounts/workspace`);
    await this.page.waitForTimeout(1000);

    await clickAndWait(this.page, values.clickFilterButton, 500);

    const filters = await this.page.$$(values.filters);
    const randomIndex = Math.floor(Math.random() * filters.length); // Rastgele bir indeks seçin
    const selectFilter = filters[randomIndex];
    await selectFilter.click();
  }

  async pageLinkCheck() {
    await this.page.goto(`${baseURL}/accounting/accounts/workspace`);
    await this.page.waitForTimeout(2000);

    let elements = await this.page.$$(values.clickableInput);

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const elementHref = await element.getAttribute('href'); // Tıkladığınız elementin href değerini alın
      await element.click();

      // Elementin sayfada görüntülenmesini bekleme
      await this.page.waitForTimeout(2000);

      // Sayfanın URL'sini alın
      const currentURL = this.page.url();

      // Konsola yazdırma işlemi
      console.log(
        `Element ${i + 1} - URL: ${currentURL}, Href: ${elementHref}`,
      );

      // Karşılaştırma işlemi
      if (currentURL !== `${baseURL}${elementHref}`) {
        throw new Error(
          "Detay sayfası URL'si tıklanan elementin href değeri ile eşleşmiyor.",
        );
      }

      // Sayfa geçmişine dönmeden önce bekleme süresi ekleyin
      await this.page.waitForTimeout(2000);

      await this.page.goBack({ waitUntil: 'domcontentloaded' });

      // Elementlerin güncellendiğinden emin olmak için tekrar elementleri alın
      const updatedElements = await this.page.$$(values.clickableInput);
      elements = updatedElements;

      // Kısa bir bekleme süresi ekleyin
      await this.page.waitForTimeout(1000);
    }
  }

  async accountsDetailCheckForAddPayment(paymentType, amount) {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);

    //Yeni yaratılan company ve customer account'ları için Add Payment işlemi gerçekleştirilir
    const listCustomerNameOneText = await this.page.textContent(
      values.listCustomerNameOne,
    );
    await clickAndWait(this.page, values.operationDetailOneButton, 500);
    await clickAndWait(this.page, values.newAddLoanButton, 500);
    await clickAndWait(this.page, paymentType, 500);

    await fillAndWait(this.page, values.addLoanAmountArea, amount, 500);

    await clickAndWait(this.page, values.companyAccountGroupAddPayment, 500);
    await clickAndWait(this.page, values.selectAccountAddPayment, 1000);
    await clickAndWait(this.page, values.customerAccountGroupAddPayment, 1000);
    await clickAndWait(this.page, values.selectAccountAddPayment, 1000);

    const formLoanAmountText = await this.page.inputValue(
      values.addLoanAmountArea,
    );
    const numericLoanAmount = parseFloat(
      formLoanAmountText.replace(/,/g, ''),
    ).toFixed(2);

    const formLoanCurrencyName = await this.page.textContent(
      values.formLoanCurrencyText,
    );

    await clickAndWait(this.page, values.addNewLoanSaveButton, 500);

    //Workspace Accounts sayfasının detayında ki bilgileri karşılaştırırız
    await this.page.goto(`${baseURL}/accounting/accounts/workspace`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.accountPriceDetail, 500); //ilk kullanıcıda aktif olan price'a tıklanır

    const companyTransactionListAmount = await this.page.textContent(
      values.companyTransactionListAmount,
    );

    let expectedValue;

    if (paymentType === values.receiveMoney) {
      expectedValue = `+₺${numericLoanAmount} ${formLoanCurrencyName}`;
    } else {
      expectedValue = `-₺${numericLoanAmount} ${formLoanCurrencyName}`;
    }

    if (companyTransactionListAmount !== null) {
      // Temizleme işlemi
      const cleanedCompanyTransactionListAmount =
        companyTransactionListAmount.replace(/[\s,]/g, '');

      const cleanedExpectedValue = expectedValue.replace(/\s/g, '');

      // Verileri karşılaştırma
      if (cleanedCompanyTransactionListAmount === cleanedExpectedValue) {
        console.log('İki değer eşittir.');
      } else {
        throw new Error('İki değer eşit değildir.');
      }
    }

    //Customer Current Sayfasında işlemin doğru şekilde yansıdığı kontrol edilir
    await this.page.goto(`${baseURL}/accounting/accounts/customer-accounts`);
    await this.page.waitForTimeout(2000);

    // Elementleri seçme
    const customerAccountGroups = await this.page.$$(
      values.customerAccountGroupsNav,
    );

    // Sonuncuya tıklama işlemi
    if (customerAccountGroups.length > 0) {
      const lastCustomerAccountGroup =
        customerAccountGroups[customerAccountGroups.length - 1];
      if (lastCustomerAccountGroup) {
        await lastCustomerAccountGroup.click();
      } else {
        console.error('Son customer account group bulunamadı');
      }
    } else {
      throw new Error('Herhangi bir customer account group bulunamadı');
    }

    await clickAndWait(this.page, values.customerFilter, 500);
    if (listCustomerNameOneText !== null) {
      await fillAndWait(
        this.page,
        values.searchInput,
        listCustomerNameOneText,
        500,
      );
    }
    await clickAndWait(this.page, values.selectAccount, 1000);
    await clickAndWait(this.page, values.customerCurrentListFirstName, 500);

    const customerAccountPrice = await this.page.textContent(
      values.customerAccountPriceDetail,
    );

    //ilk kullanıcıda aktif olan price'a tıklanır
    await clickAndWait(this.page, values.customerAccountPriceDetail, 500);

    const customerTransactionListAmount = await this.page.textContent(
      values.customerTransactionListAmount,
    );

    if (paymentType == values.giveMoney) {
      expect(customerTransactionListAmount).toEqual(
        `+${customerAccountPrice} ${formLoanCurrencyName}`,
      );
    } else {
      expect(customerTransactionListAmount).toEqual(
        `${customerAccountPrice} ${formLoanCurrencyName}`,
      );
    }
  }

  async accountsDetailCheckForResolve() {
    //Workspace Sayfasında son yaratılan 2 company ismi alınır resolve işleminde kullanılmak için
    await this.page.goto(`${baseURL}/accounting/accounts/workspace`);
    await this.page.waitForTimeout(2000);

    const workspaceAccountsFirstName = await this.page.textContent(
      values.workspaceAccountsFirstName,
    );
    const workspaceAccountsSecondName = await this.page.textContent(
      values.workspaceAccountsSecondName,
    );
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.detailsActionButton, 500);
    await clickAndWait(this.page, values.readyToResolve, 1000);
    await clickAndWait(this.page, values.detailsActionButton, 500);
    await clickAndWait(this.page, values.resolve, 500);
    if (
      workspaceAccountsSecondName !== null &&
      workspaceAccountsFirstName !== null
    ) {
      //Primary loan alanı doldurulur
      await clickAndWait(this.page, values.upCompanyAccountArea, 1000);
      await fillAndWait(
        this.page,
        values.upCompanySearchInput,
        values.workspaceAccountGroupText,
        1000,
      );
      await clickAndWait(this.page, values.selectedAccount, 500);

      await clickAndWait(this.page, values.downCompanyAccountArea, 500);
      await fillAndWait(
        this.page,
        values.downCompanySearchInput,
        values.workspaceNewAccountGroupText,
        1000,
      );
      await clickAndWait(this.page, values.selectedAccount, 500);

      await clickAndWait(this.page, values.upCustomerAccountArea, 500);
      await fillAndWait(
        this.page,
        values.upCustomerSearchInput,
        values.customerNameText,
        1000,
      );
      await clickAndWait(this.page, values.selectedAccount, 500);

      await clickAndWait(this.page, values.downCustomerAccountArea, 500);
      await fillAndWait(
        this.page,
        values.downCustomerSearchInput,
        values.newCustomerNameText,
        1000,
      );
      await clickAndWait(this.page, values.selectedAccount, 500);

      //resolve sayfasındaki company ve customer amount değerlerini kaydederiz

      const formAction = await this.page.textContent(values.formAction);
      const formCompanyAmount = await this.page.textContent(
        values.formCompanyAmount,
      );
      const formCustomerAmount = await this.page.textContent(
        values.formCustomerAmount,
      );
      await clickAndWait(this.page, values.resolveSaveButton, 1000);

      //Workspace Accounts sayfasının detayında ki bilgileri karşılaştırırız
      await this.page.goto(`${baseURL}/accounting/accounts/workspace`);
      await this.page.waitForTimeout(2000);

      await clickAndWait(this.page, values.accountPriceDetail, 500); //ilk kullanıcıda aktif olan price'a tıklanır

      const firstCompanyTransactionListAmount = await this.page.textContent(
        values.companyTransactionListAmount,
      );
      expect(formCustomerAmount).toEqual(firstCompanyTransactionListAmount);

      await clickAndWait(this.page, values.transactionDetailMenu, 500);
      await clickAndWait(this.page, values.transactionDetail, 500);

      if (formAction == 'Buy') {
        const accountFromGroupName = await this.page.textContent(
          values.accountFromGroupName,
        );
        const accountToGroupName = await this.page.textContent(
          values.accountToGroupName,
        );
        expect(values.workspaceNewAccountGroupText).toEqual(
          accountFromGroupName,
        ); //account from alanı doğru mu kontrol edilir
        expect(values.newCustomerNameText).toEqual(accountToGroupName); //account to alanı doğru mu kontrol edilir
      } else {
        const accountFromGroupName = await this.page.textContent(
          values.accountFromGroupName,
        );
        const accountToGroupName = await this.page.textContent(
          values.accountToGroupName,
        );
        expect(values.newCustomerNameText).toEqual(accountFromGroupName);
        expect(values.workspaceNewAccountGroupText).toEqual(accountToGroupName);
      }
      await clickAndWait(this.page, values.transactionDetailCloseButton, 500);

      await this.page.goto(`${baseURL}/accounting/accounts/workspace`);
      await this.page.waitForTimeout(1000);

      await clickAndWait(this.page, values.secondAccountPriceDetail, 500); //ikinci kullanıcıda aktif olan price'a tıklanır

      const secondCompanyTransactionListAmount = await this.page.textContent(
        values.companyTransactionListAmount,
      );

      expect(formCompanyAmount).toEqual(secondCompanyTransactionListAmount);

      await clickAndWait(this.page, values.transactionDetailMenu, 500);
      await clickAndWait(this.page, values.transactionDetail, 500);
      if (formAction == 'Buy') {
        const accountFromGroupName = await this.page.textContent(
          values.accountFromGroupName,
        );
        const accountToGroupName = await this.page.textContent(
          values.accountToGroupName,
        );
        expect(values.customerNameText).toEqual(accountFromGroupName); //account from alanı doğru mu kontrol edilir
        expect(values.workspaceAccountGroupText).toEqual(accountToGroupName); //account to alanı doğru mu kontrol edilir
      } else {
        const accountFromGroupName = await this.page.textContent(
          values.accountFromGroupName,
        );
        const accountToGroupName = await this.page.textContent(
          values.accountToGroupName,
        );
        expect(values.workspaceAccountGroupText).toEqual(accountFromGroupName);
        expect(values.customerNameText).toEqual(accountToGroupName);
      }
    }
  }
  async clearAllWorkspaceAccount() {
    await this.page.goto(`${baseURL}/accounting/accounts/workspace`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.clearAllDataButton, 500);
    await clickAndWait(this.page, values.deleteConfirmActionButton, 500);
  }
}
