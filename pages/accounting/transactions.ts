import { Page, expect } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../component/constant';
import values from '../../pageobjects/accounting/transactions.utils';
import { baseURL } from '../../pageobjects/loginPage';

export default class TransactionsPage {
  constructor(public page: Page) {}

  async checkTransactionsForAddPayment(selectTab: string) {
    //Operations Sayfasında New Payment işlemi yapılır
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.operationDetailOneButton, 500);
    await clickAndWait(this.page, values.newAddLoanButton, 1000);
    await clickAndWait(this.page, selectTab, 500);
    await fillAndWait(this.page, values.addLoanAmountArea, '20000', 500);

    await clickAndWait(this.page, values.companyAccountGroupAddPayment, 1000);
    await clickAndWait(this.page, values.selectAccountAddPayment, 1000);
    await clickAndWait(this.page, values.customerAccountGroupAddPayment, 1000);
    this.randomSelect();

    await this.page
      .locator(values.addLoanDescriptionArea)
      .fill(values.descriptionText);
    await this.page.waitForTimeout(2000);

    const selectedCompanyAccount = await this.page.textContent(
      values.selectedCompanyAccount,
    );

    const selectedCustomerAccount = await this.page.textContent(
      values.selectedCustomerAccount,
    );

    await clickAndWait(this.page, values.addNewLoanSaveButton, 2000);

    //Transactions sayfasındaki liste ile karşılaştırma yapılır

    await this.page.goto(`${baseURL}/accounting/transactions`);
    await this.page.waitForTimeout(1000);

    const userList = await this.page.textContent(values.userList);
    const accountFromList = await this.page.textContent(values.accountFromList);
    const accountToList = await this.page.textContent(values.accountToList);
    const amountSentList = await this.page.textContent(values.amountSentList);
    const amountReceivedList = await this.page.textContent(
      values.amountReceivedList,
    );

    //Detay sayfası açılır
    await clickAndWait(this.page, values.menuActionButton, 500);
    await clickAndWait(this.page, values.detailButton, 500);

    const detailAccountFromGroup = await this.page.textContent(
      values.detailAccountFromGroup,
    );

    const detailAmountSent = await this.page.textContent(
      values.detailAmountSent,
    );

    const detailAccountToGroup = await this.page.textContent(
      values.detailAccountToGroup,
    );

    const detailAmountReceived = await this.page.textContent(
      values.detailAmountReceived,
    );

    const detailUser = await this.page.textContent(values.detailUser);

    const detailStatusAccountFrom = await this.page.textContent(
      values.detailStatusAccountFrom,
    ); //customer mı company mi diye kontrol edilir
    const detailStatusAccountTo = await this.page.textContent(
      values.detailStatusAccountTo,
    );

    //yaptığımız işlemin yönüne göre işlem yapıyoruz

    if (selectTab === values.receiveMoney) {
      expect(selectedCustomerAccount).toContain(accountFromList);
      expect(selectedCompanyAccount).toContain(accountToList);

      expect(userList).toContain(detailUser);
      expect(detailStatusAccountFrom).toContain('customer');
      expect(detailStatusAccountTo).toContain('company');

      expect(accountFromList).toContain(detailAccountFromGroup);
      expect(accountToList).toContain(detailAccountToGroup);
      expect(amountSentList).toContain(detailAmountSent);
      expect(amountReceivedList).toContain(detailAmountReceived);
    } else {
      expect(selectedCompanyAccount).toContain(accountFromList);
      expect(selectedCustomerAccount).toContain(accountToList);

      expect(userList).toContain(detailUser);
      expect(detailStatusAccountTo).toContain('customer');
      expect(detailStatusAccountFrom).toContain('company');

      expect(accountFromList).toContain(detailAccountFromGroup);
      expect(accountToList).toContain(detailAccountToGroup);
      expect(amountSentList).toContain(detailAmountSent);
      expect(amountReceivedList).toContain(detailAmountReceived);
    }
  }
  async checkTransactionsForResolve() {
    //Operations Sayfasında Resolve işlemi yapılır
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);

    const actionStatus = await this.page.textContent(values.actionStatus);
    console.log('actionStatus:', actionStatus);

    await clickAndWait(this.page, values.detailsActionButton, 500);
    await clickAndWait(this.page, values.readyToResolve, 1000);

    await clickAndWait(this.page, values.detailsActionButton, 500);
    await clickAndWait(this.page, values.resolve, 500);

    //Primary loan alanı doldurulur
    await clickAndWait(this.page, values.upCompanyAccount, 1000);
    // await clickAndWait(this.page, values.selectAccount, 500);
    this.randomSelect();

    await clickAndWait(this.page, values.downCompanyAccount, 1000);
    await clickAndWait(this.page, values.selectAccount, 500);

    await clickAndWait(this.page, values.upCustomerAccount, 1000);
    this.randomSelect();

    await clickAndWait(this.page, values.downCustomerAccount, 1000);
    this.randomSelect();
    await this.page.waitForTimeout(1000);

    //Resolve Pop-up'ı içinde gelen bilgilerin listedeki operasyona ait olduğunun doğruluğunu kontrol ederiz
    const upCustomerAccount = await this.page.textContent(
      values.upCustomerAccountName,
    );
    const upCompanyAccount = await this.page.textContent(
      values.upCompanyAccountName,
    );
    const downCompanyAccount = await this.page.textContent(
      values.downCompanyAccountName,
    );
    const downCustomerAccount = await this.page.textContent(
      values.downCustomerAccountName,
    );

    await clickAndWait(this.page, values.resolveSaveButton, 1000);

    //Transactions sayfasındaki liste ile karşılaştırma yapılır

    await this.page.goto(`${baseURL}/accounting/transactions`);
    await this.page.waitForTimeout(1000);

    const userList = await this.page.textContent(values.userList);
    const accountFromList = await this.page.textContent(values.accountFromList);
    const accountToList = await this.page.textContent(values.accountToList);
    const amountSentList = await this.page.textContent(values.amountSentList);
    const amountReceivedList = await this.page.textContent(
      values.amountReceivedList,
    );

    const secondUserList = await this.page.textContent(values.secondUserList);
    const secondAccountFromList = await this.page.textContent(
      values.secondAccountFromList,
    );
    const secondAccountToList = await this.page.textContent(
      values.secondAccountToList,
    );
    const secondAmountSentList = await this.page.textContent(
      values.secondAmountSentList,
    );
    const secondAmountReceivedList = await this.page.textContent(
      values.secondAmountReceivedList,
    );

    // Buy operasyonu için Pop-up'daki Üst satırdaki gönderme işlemi 1. satırda , alt tarafta yapılan 2. satıra düşmektedir.
    if (actionStatus === 'Buy') {
      expect(upCompanyAccount).toContain(accountToList);
      expect(upCustomerAccount).toContain(accountFromList);

      expect(downCompanyAccount).toContain(secondAccountFromList);
      expect(downCustomerAccount).toContain(secondAccountToList);
      await clickAndWait(this.page, values.menuActionButton, 500);
      await clickAndWait(this.page, values.detailButton, 500);
    } else {
      expect(upCompanyAccount).toContain(secondAccountFromList);
      expect(upCustomerAccount).toContain(secondAccountToList);

      expect(downCompanyAccount).toContain(accountToList);
      expect(downCustomerAccount).toContain(accountFromList);

      await clickAndWait(this.page, values.secondMenuActionButton, 500);
      await clickAndWait(this.page, values.detailButton, 500);
    }
    //Transactions sayfası ile detay kıyaslanır
    const detailStatusAccountFrom = await this.page.textContent(
      values.detailStatusAccountFrom,
    );
    const detailStatusAccountTo = await this.page.textContent(
      values.detailStatusAccountTo,
    );
    const detailAccountFromGroup = await this.page.textContent(
      values.detailAccountFromGroup,
    );
    const detailAmountSent = await this.page.textContent(
      values.detailAmountSent,
    );
    const detailAccountToGroup = await this.page.textContent(
      values.detailAccountToGroup,
    );
    const detailAmountReceived = await this.page.textContent(
      values.detailAmountReceived,
    );
    const detailUser = await this.page.textContent(values.detailUser);

    const secondDetailAccountFromGroup = await this.page.textContent(
      values.detailAccountFromGroup,
    );
    const secondDetailAmountSent = await this.page.textContent(
      values.detailAmountSent,
    );
    const secondDetailAccountToGroup = await this.page.textContent(
      values.detailAccountToGroup,
    );
    const secondDetailAmountReceived = await this.page.textContent(
      values.detailAmountReceived,
    );
    const secondDetailUser = await this.page.textContent(values.detailUser);

    if (actionStatus === 'Buy') {
      expect(userList).toContain(detailUser);
      expect(detailStatusAccountFrom).toContain('customer');
      expect(detailStatusAccountTo).toContain('company');
      expect(accountFromList).toContain(detailAccountFromGroup);
      expect(accountToList).toContain(detailAccountToGroup);
      expect(amountSentList).toContain(detailAmountSent);
      expect(amountReceivedList).toContain(detailAmountReceived);

      //Listenin 2. satırındaki bilgiler için kıyaslama yapılır
      await clickAndWait(this.page, values.closeDetailButton, 500);
      await clickAndWait(this.page, values.secondMenuActionButton, 500);
      await clickAndWait(this.page, values.detailButton, 500);
      const detailSecondStatusAccountFrom = await this.page.textContent(
        values.detailStatusAccountFrom,
      );
      const detailSecondStatusAccountTo = await this.page.textContent(
        values.detailStatusAccountTo,
      );
      const secondDetailAccountFromGroup = await this.page.textContent(
        values.detailAccountFromGroup,
      );
      const secondDetailAmountSent = await this.page.textContent(
        values.detailAmountSent,
      );
      const secondDetailAccountToGroup = await this.page.textContent(
        values.detailAccountToGroup,
      );
      const secondDetailAmountReceived = await this.page.textContent(
        values.detailAmountReceived,
      );
      const secondDetailUser = await this.page.textContent(values.detailUser);
      expect(detailSecondStatusAccountFrom).toContain('company');
      expect(detailSecondStatusAccountTo).toContain('customer');
      expect(secondUserList).toContain(secondDetailUser);
      expect(secondAccountFromList).toContain(secondDetailAccountFromGroup);
      expect(secondAccountToList).toContain(secondDetailAccountToGroup);
      expect(secondAmountSentList).toContain(secondDetailAmountSent);
      expect(secondAmountReceivedList).toContain(secondDetailAmountReceived);
    } else {
      expect(detailStatusAccountFrom).toContain('company');
      expect(detailStatusAccountTo).toContain('customer');
      expect(secondUserList).toContain(secondDetailUser);
      expect(secondAccountFromList).toContain(secondDetailAccountFromGroup);
      expect(secondAccountToList).toContain(secondDetailAccountToGroup);
      expect(secondAmountSentList).toContain(secondDetailAmountSent);
      expect(secondAmountReceivedList).toContain(secondDetailAmountReceived);

      //Listenin 1. satırındaki bilgiler için kıyaslama yapılır
      await clickAndWait(this.page, values.closeDetailButton, 500);
      await clickAndWait(this.page, values.menuActionButton, 500);
      await clickAndWait(this.page, values.detailButton, 500);

      const detailFirstStatusAccountFrom = await this.page.textContent(
        values.detailStatusAccountFrom,
      );
      const detailFirstStatusAccountTo = await this.page.textContent(
        values.detailStatusAccountTo,
      );

      const detailAccountFromGroup = await this.page.textContent(
        values.detailAccountFromGroup,
      );
      const detailAmountSent = await this.page.textContent(
        values.detailAmountSent,
      );
      const detailAccountToGroup = await this.page.textContent(
        values.detailAccountToGroup,
      );
      const detailAmountReceived = await this.page.textContent(
        values.detailAmountReceived,
      );
      const detailUser = await this.page.textContent(values.detailUser);

      expect(userList).toContain(detailUser);
      expect(detailFirstStatusAccountFrom).toContain('customer');
      expect(detailFirstStatusAccountTo).toContain('company');
      expect(accountFromList).toContain(detailAccountFromGroup);
      expect(accountToList).toContain(detailAccountToGroup);
      expect(amountSentList).toContain(detailAmountSent);
      expect(amountReceivedList).toContain(detailAmountReceived);
    }
  }

  async checkTransactionsForNewEntry() {
    //Customer Current Sayfasında New Entry işlemi yapılır
    await this.page.goto(`${baseURL}/loan/customer`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.customerSelectArea, 500);
    await clickAndWait(this.page, values.customerCurrentSelect, 500);

    await clickAndWait(this.page, values.customerCurrentDetailButton, 500);
    await clickAndWait(this.page, values.goToDetail, 500);

    await clickAndWait(this.page, values.newEntryButton, 500);
    await clickAndWait(this.page, values.balanceGroup, 500);
    await clickAndWait(this.page, values.selectUsd, 500);
    await this.page.locator(values.balanceInput).fill('800');
    await clickAndWait(this.page, values.companyAccountGroup, 500);
    await this.randomSelect();
    await clickAndWait(this.page, values.customerAccountGroup, 500);
    await this.randomSelect();

    // *****Buy işleminde Company ve Customer Amount değerleri alın******
    const companyAmountValue = await this.page.textContent(
      values.companyAccountGroup,
    );
    const customerAmountValue = await this.page.textContent(
      values.customerAccountGroup,
    );

    await clickAndWait(this.page, values.newEntrySaveButton, 1000);

    //Transactions sayfasındaki liste ile karşılaştırma yapılır
    await this.page.goto(`${baseURL}/accounting/transactions`);
    await this.page.waitForTimeout(1000);

    const userList = await this.page.textContent(values.userList);
    const accountFromList = await this.page.textContent(values.accountFromList);
    const accountToList = await this.page.textContent(values.accountToList);
    const amountSentList = await this.page.textContent(values.amountSentList);
    const amountReceivedList = await this.page.textContent(
      values.amountReceivedList,
    );
    expect(customerAmountValue).toContain(accountFromList);
    expect(companyAmountValue).toContain(accountToList);

    await clickAndWait(this.page, values.menuActionButton, 500);
    await clickAndWait(this.page, values.detailButton, 500);

    const detailAccountFromGroup = await this.page.textContent(
      values.detailAccountFromGroup,
    );
    const detailAmountSent = await this.page.textContent(
      values.detailAmountSent,
    );
    const detailAccountToGroup = await this.page.textContent(
      values.detailAccountToGroup,
    );
    const detailAmountReceived = await this.page.textContent(
      values.detailAmountReceived,
    );
    const detailUser = await this.page.textContent(values.detailUser);

    expect(userList).toContain(detailUser);
    expect(accountFromList).toContain(detailAccountFromGroup);
    expect(accountToList).toContain(detailAccountToGroup);
    expect(amountSentList).toContain(detailAmountSent);
    expect(amountReceivedList).toContain(detailAmountReceived);
  }
  async randomSelect() {
    const elements = await this.page.$$(values.dropdownList);
    const randomIndex = Math.floor(Math.random() * elements.length); // Rastgele bir indeks seçin
    const randomElement = elements[randomIndex];
    await randomElement.click();
  }
  async getInputNumericValue(
    page: Page,
    selector: string,
  ): Promise<number | null> {
    const numericRegex = /-?[0-9,.]+/g;

    const element = page.locator(selector);
    const inputValue: string | null = await element.getAttribute('value');
    const numericValue: number | null = parseFloat(
      inputValue?.match(numericRegex)?.[0]?.replace(/[^\d.-]/g, '') || '',
    );
    return numericValue;
  }
}
