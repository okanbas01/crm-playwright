import { expect, Page } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../component/constant';
import values, {
  mockLoanData,
  mockLoanNetPositionData,
} from '../../pageobjects/exchange/operations.utils';
import { baseURL } from '../../pageobjects/loginPage';

const numericRegex = /-?[0-9,.]+/g;

export default class OperationsPage {
  constructor(public page: Page) {}

  async loanOperations() {
    for (let index = 0; index < mockLoanData.length; index++) {
      const profitData = mockLoanData[index];

      await this.page.goto(`${baseURL}/loan/operations`);
      await this.page.waitForTimeout(1000);
      await clickAndWait(this.page, values.newOperationButton, 1000);

      //Operasyon Değerleri girilir
      await this.page.click(values.customerInput);
      await this.page.click(values.customerSelect);
      await this.page.click(values.assetsInput);
      await this.page.click(values.assetsSelect);
      await clickAndWait(this.page, values.companyAmountInput, 1000);
      await this.page
        .locator(values.companyAmountInput)
        .fill(profitData.companyAmount);

      await this.page.locator(values.exchangeRate).fill(profitData.agreedRate);

      // Alım veya satım işlemlerinden hangisi olduğuna karar verilir
      if (profitData.operationType === 'buy') {
        await this.page.click(values.buyTab);
      } else {
        await this.page.click(values.sellTab);
      }
      await this.page.click(values.operationCreateButton);
      await this.page.waitForTimeout(2000);

      const operationControl = mockLoanNetPositionData[index];
      await this.page.goto(`${baseURL}/loan/dashboard`);
      await this.page.waitForTimeout(2000);

      if (
        operationControl.baseAmount === '0.00 $' &&
        operationControl.pairAmount === '0.00 ₺'
      ) {
        const emptyPageElement = await this.page.$(values.emptyPage);

        const emptyPageElementText = await this.page.evaluate(
          (element) => element?.textContent,
          emptyPageElement,
        );

        expect(emptyPageElementText).toEqual(values.emptyPageText);
      } else {
        const buyExposure = await this.page.$eval(
          values.exposureBuyElement,
          (el) => el.textContent,
        );
        const sellExposure = await this.page.$eval(
          values.exposureSellElement,
          (el) => el.textContent,
        );
        const cost = await this.page.$eval(
          values.NetPositionsCost,
          (el) => el.textContent,
        );
        if (
          operationControl.baseAmount === sellExposure &&
          operationControl.pairAmount === buyExposure
        ) {
          expect(cost).toEqual(operationControl.costRate);
        } else {
          expect(cost).toEqual(operationControl.costRate);
        }
      }
    }
  }
  async clearAllData() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);
    await this.page.click(values.clearAllData);
    await this.page.click(values.clearYesButton);
    await this.page.waitForTimeout(2000);
  }

  async markUnmark() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(3000);

    await this.page.click(values.dropdownButton);
    await this.page.click(values.markButton);

    // Opreations sayfadaki ilk satırdaki 3. ve 4. sütundaki değerlerini alın
    const companyValues = await this.page.$$eval(
      values.companyValues,
      (elements) => elements.map((el) => el.textContent),
    );
    const customerValues = await this.page.$$eval(
      values.customerValues,
      (elements) => elements.map((el) => el.textContent),
    );

    const customerNameValues = await this.page.$$eval(
      values.customerName,
      (elements) => elements.map((el) => el.textContent),
    );

    // const rateValues = await this.page.$$eval(
    //   'tr:nth-of-type(1) > td:nth-of-type(8) > span > .exchange-rate-display > .small-digitsx',
    //   (elements) => elements.map((el) => el.textContent),
    // ); //decimalden dolayı eşleşmiyor

    await this.page.goto(`${baseURL}/loan/marked-operations`);
    await this.page.waitForTimeout(3000);

    // Marked sayfadaki ilk satırdaki 2. , 3. ve 5. sütundaki değerleri alın
    const markedCompanyValues = await this.page.$$eval(
      values.markedCompanyValues,
      (elements) => elements.map((el) => el.textContent),
    );

    const markedCustomerValues = await this.page.$$eval(
      values.markedCustomerValues,
      (elements) => elements.map((el) => el.textContent),
    );

    const markedCustomerNameValues = await this.page.$$eval(
      values.markedCustomerName,
      (elements) => elements.map((el) => el.textContent),
    );

    // Operations sayfadaki değerleri Marked sayfadaki değerlerle karşılaştırın
    const areEqual = companyValues.every(
      (value, index) => value === markedCompanyValues[index],
    );
    const areEqual1 = customerValues.every(
      (value, index) => value === markedCustomerValues[index],
    );
    const areEqual2 = customerNameValues.every(
      (value, index) => value === markedCustomerNameValues[index],
    );

    if (areEqual && areEqual1 && areEqual2) {
      console.log('Değerler eşit');
    } else {
      throw new Error('Değerler eşit değil');
    }
    //Unmark yapılır test sonlandırılır
    await this.page.click(values.unmarkButton);
  }
  async customerDetail() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(3000);

    const customerName = await this.page.$$eval(
      values.customerName,
      (elements) => elements.map((el) => el.textContent),
    );
    await this.page.click(values.customerName);
    await this.page.waitForTimeout(1000);

    const customerDetailName = await this.page.$$eval(
      values.pageTitle,
      (elements) => elements.map((el) => el.textContent),
    );
    const areEqual = customerName.every(
      (value, index) => value === customerDetailName[index],
    );
    if (areEqual) {
      console.log('Değerler eşit');
    } else {
      throw new Error('Değerler eşit değil');
    }
  }
  async createNewOperation(
    customerSelectIndex: number,
    companyAmount: string,
    exchangeRate: string,
    action: string,
  ) {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.newOperationButton, 1000);
    await clickAndWait(this.page, action, 500);

    // Operasyon Değerleri girilir
    await this.page.click(values.customerInput);
    await this.page.waitForTimeout(1000);

    await this.page.click(`ul > li:nth-of-type(${customerSelectIndex})`);
    await this.page.click(values.assetsInput);
    await this.page.click(values.assetsSelect);

    // Değerleri parametre olarak geçirilen değerlerle doldur
    await clickAndWait(this.page, values.companyAmountInput, 1000);
    await this.page.locator(values.companyAmountInput).fill(companyAmount);

    await this.page.locator(values.exchangeRate).fill(exchangeRate);
    await this.page.click(values.operationCreateButton);
    await this.page.waitForTimeout(1000);
  }
  async createNewBuyOperation(
    customerSelectIndex: number,
    companyAmount: string,
    exchangeRate: string,
    assetSelectIndex: number,
  ) {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.newOperationButton, 1000);

    // Operasyon Değerleri girilir
    await this.page.click(values.customerInput);
    await this.page.waitForTimeout(1000);

    await this.page.click(`ul > li:nth-of-type(${customerSelectIndex})`);
    await this.page.click(values.assetsInput);
    await this.page.click(
      `.floating-ui-select-group [role="option"]:nth-of-type(${assetSelectIndex}) [class]`,
    );
    // Değerleri parametre olarak geçirilen değerlerle doldur
    await clickAndWait(this.page, values.companyAmountInput, 1000);
    await this.page.locator(values.companyAmountInput).fill(companyAmount);

    await this.page.locator(values.exchangeRate).fill(exchangeRate);
    await this.page.click(values.operationCreateButton);
    await this.page.waitForTimeout(1000);
  }
  async createNewSellOperation(
    customerSelectIndex: number,
    companyAmount: string,
    exchangeRate: string,
    assetSelectIndex: number,
  ) {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.newOperationButton, 1000);
    await clickAndWait(this.page, values.sellTab, 500);

    // Operasyon Değerleri girilir
    await this.page.click(values.customerInput);
    await this.page.waitForTimeout(1000);

    await this.page.click(`ul > li:nth-of-type(${customerSelectIndex})`);
    await this.page.click(values.assetsInput);
    await this.page.click(
      `.floating-ui-select-group [role="option"]:nth-of-type(${assetSelectIndex}) [class]`,
    );
    // Değerleri parametre olarak geçirilen değerlerle doldur
    await clickAndWait(this.page, values.companyAmountInput, 1000);
    await this.page.locator(values.companyAmountInput).fill(companyAmount);

    await this.page.locator(values.exchangeRate).fill(exchangeRate);
    await this.page.click(values.operationCreateButton);
    await this.page.waitForTimeout(1000);
  }
  async splitAndShiftDisable() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.operationDetailOneButton, 1000);
    await clickAndWait(this.page, values.splitAndShiftButtonFirstRow, 1000);

    const button = this.page.locator(values.splitAndShiftSaveButton);
    expect(await button.isEnabled()).toBe(false);
  }
  async splitAndShiftOneCustomerChange() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.operationDetailOneButton, 1000);
    await clickAndWait(this.page, values.splitAndShiftButtonFirstRow, 1000);

    await clickAndWait(this.page, values.splitAndShiftCustomerOne, 2000);
    await clickAndWait(this.page, values.splitAndShiftCustomerSelect, 1000);

    const companyAmountOneText = await this.page.textContent(
      values.splitAndShiftCompanyAmountOne,
    );
    const customerAmountOneText = await this.page.textContent(
      values.splitAndShiftCustomerAmountOne,
    );
    const agreedRateOneText = await this.page.textContent(
      values.splitAndShiftAgreedRateOne,
    );

    const splitAndShiftCustomerNameOne = await this.page.$(
      values.splitAndShiftCustomerOne,
    );
    const splitAndShiftCustomerNameOneValue =
      await splitAndShiftCustomerNameOne?.textContent();

    await clickAndWait(this.page, values.splitAndShiftSaveButton, 3000);

    const listCustomerNameOneText = await this.page.textContent(
      values.listCustomerNameOne,
    );
    const listCompanyAmountOneText = await this.page.textContent(
      values.listCompanyAmountOne,
    );
    const listCustomerAmountOneText = await this.page.textContent(
      values.listCustomerAmountOne,
    );
    const listAgreedRateOneText = await this.page.textContent(
      values.listAgreedRateOne,
    );

    expect(splitAndShiftCustomerNameOneValue).toContain(
      listCustomerNameOneText,
    );
    expect(companyAmountOneText).toEqual(listCompanyAmountOneText);
    expect(customerAmountOneText).toEqual(listCustomerAmountOneText);
    expect(agreedRateOneText).toContain(listAgreedRateOneText);
  }
  async newAddPayment() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);
    const listCustomerNameOneText = await this.page.textContent(
      values.listCustomerNameOne,
    );
    await clickAndWait(this.page, values.operationDetailOneButton, 500);
    await clickAndWait(this.page, values.newAddLoanButton, 500);
    await fillAndWait(this.page, values.addLoanAmountArea, '20000', 500);

    await clickAndWait(this.page, values.companyAccountGroupAddPayment, 500);
    await clickAndWait(this.page, values.selectAccountAddPayment, 1000);
    await clickAndWait(this.page, values.customerAccountGroupAddPayment, 1000);
    await clickAndWait(this.page, values.selectAccountAddPayment, 1000);
    await this.page
      .locator(values.addLoanDescriptionArea)
      .fill(values.descriptionText);
    await this.page.waitForTimeout(2000);

    const descriptionText = await this.page.textContent(
      values.addLoanDescriptionArea,
    );
    const selectedCompanyAmount = await this.page.textContent(
      values.companyAccountGroupAddPayment,
    );
    const selectedCustomerAmount = await this.page.textContent(
      values.customerAccountGroupAddPayment,
    );
    console.log('selectedCompanyAmount:', selectedCompanyAmount);
    console.log('selectedCustomerAmount:', selectedCustomerAmount);

    const formLoanAmountText = await this.page.inputValue(
      values.addLoanAmountArea,
    );
    const activeTab = await this.page.textContent(values.activeTab);

    await clickAndWait(this.page, values.addNewLoanSaveButton, 2000);
    await clickAndWait(this.page, values.operationTableDetailButton, 2000); //ID Kolonun solundaki "<" ikonuna tıklanır

    const loanAmountDetail = await this.page.innerText(
      values.listDetailFirstRowPayments,
    );

    // Virgülü kaldırın ve negatif işareti ele alın
    const numericFormLoanAmountText = parseFloat(
      formLoanAmountText.replace(/,/g, ''),
    );

    let numericLoanAmountDetail: number | null = null;

    // Eğer activeTab "Out" ise
    if (activeTab === 'Give Money') {
      numericLoanAmountDetail = parseFloat(
        loanAmountDetail?.replace(/[^\d.-]/g, '')?.match(numericRegex)?.[0] ||
          '',
      );
      if (numericLoanAmountDetail !== null) {
        numericLoanAmountDetail *= -1;
      }
    }
    console.log('numericFormLoanAmountText:', numericFormLoanAmountText);
    console.log('numericLoanAmountDetail:', numericLoanAmountDetail);

    const listDetailFirstRowDescription = await this.page.textContent(
      values.listDetailFirstRowDescription,
    );
    console.log(
      'listDetailFirstRowDescription:',
      listDetailFirstRowDescription,
    );

    // const listDetailFirstRowPaymentDate = await this.page.textContent(
    //   values.listDetailFirstRowPaymentDate,
    // );

    expect(numericFormLoanAmountText).toEqual(numericLoanAmountDetail);
    expect(descriptionText).toEqual(listDetailFirstRowDescription);

    //Customer Current sayfasına gider.
    await this.page.goto(`${baseURL}/loan/customer`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.customerFilter, 500);
    if (listCustomerNameOneText !== null) {
      await fillAndWait(
        this.page,
        values.customerSearchInput,
        listCustomerNameOneText,
        500,
      );
    }
    await clickAndWait(this.page, values.selectedCustomer, 500);
    await clickAndWait(this.page, values.selectedListCustomer, 500);
    // await clickAndWait(this.page, values.customerCurrentRowDetailButton, 500);

    // const customerCurrentCreatedDateOneText = await this.page.textContent(
    //   values.customerCurrentCreatedDateOneText,
    // );
    // const customerCurrentActionOneText = await this.page.textContent(
    //   values.customerCurrentActionOne,
    // );
    // const customerCurrentTRYOneArea = await this.page.textContent(
    //   values.customerCurrentTRYOneArea,
    // );
    // const customerCurrentTRYOneAreaText = customerCurrentTRYOneArea
    //   ?.trim()
    //   .replace('₺', '')
    //   .trim();

    // expect(customerCurrentCreatedDateOneText).toContain(
    //   listDetailFirstRowPaymentDate,
    // );
    // expect(customerCurrentActionOneText).toContain(values.addToLoan);
    // expect(loanAmountDetailText).toContain(customerCurrentTRYOneAreaText);
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
  async getElementInnerText(
    page: Page,
    selector: string,
  ): Promise<string | undefined> {
    const element = await page.locator(selector);
    const innerText: string | undefined = await element.innerText();
    return innerText;
  }
  async splitOperation() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);

    //yatay ... tıklanır
    await clickAndWait(this.page, values.operationDetailOneButton, 500);

    //splint seçilir
    await clickAndWait(this.page, values.splitAndShiftButtonFirstRow, 500);

    //Add field
    await clickAndWait(this.page, values.addFieldButton, 500);

    // İlk input alanını doldurun
    await this.page.locator(values.firstInputCompanyAmount).fill('400');

    // Company Amount değerleri alın
    const firstCompanyAmountValue = await this.getInputNumericValue(
      this.page,
      values.firstInputCompanyAmount,
    );
    const secondCompanyAmountValue = await this.getInputNumericValue(
      this.page,
      values.secondInputCompanyAmount,
    );
    // Customer Amount değerleri alın
    const firstCustomerAmountValue = await this.getInputNumericValue(
      this.page,
      values.firstInputCustomerAmount,
    );
    const secondCustomerAmountValue = await this.getInputNumericValue(
      this.page,
      values.secondInputCustomerAmount,
    );

    console.log('Numeric Value 1:', firstCompanyAmountValue); // Örnek çıktı: 400
    console.log('Numeric Value 2:', secondCompanyAmountValue); // Örnek çıktı: 600
    console.log('Customer Value 1:', firstCustomerAmountValue);
    console.log('Customer Value 2:', secondCustomerAmountValue);

    if (
      firstCompanyAmountValue !== null &&
      secondCompanyAmountValue !== null &&
      firstCustomerAmountValue !== null &&
      secondCustomerAmountValue !== null
    ) {
      // Company için Sayısal  değerleri toplayın
      const totalCompanyAmount: number =
        firstCompanyAmountValue + secondCompanyAmountValue;
      console.log('Toplam:', totalCompanyAmount);

      //Customer için Sayısal değerleri toplayın
      const totalCustomerAmount: number =
        firstCustomerAmountValue + secondCustomerAmountValue;
      console.log('Toplam:', totalCustomerAmount);

      // values.mainCompanyAmount elementinin içindeki değeri alın
      const mainCompanyAmountValue: string | undefined =
        await this.getElementInnerText(this.page, values.mainCompanyAmount);
      console.log('mainAmount:', mainCompanyAmountValue); // Örnek çıktı: "+$1,000.00"

      // mainCompanyAmountValue değerini sayısal değere dönüştürün
      const mainCompanyAmountNumber: number | null = parseFloat(
        mainCompanyAmountValue
          ?.replace(/[^\d.-]/g, '')
          ?.match(numericRegex)?.[0] || '',
      );

      console.log('mainCompanyAmountNumber:', mainCompanyAmountNumber); // Örnek çıktı: 1000
      //------------Aynı işlemi Customer Amount için tekrarlıyoruz ------
      // values.mainCustomerAmount elementinin içindeki değeri alın
      const mainCustomerAmountValue: string | undefined =
        await this.getElementInnerText(this.page, values.mainCustomerAmount);
      console.log('mainAmount:', mainCustomerAmountValue); // Örnek çıktı: "+$1,000.00"

      // mainCompanyAmountValue değerini sayısal değere dönüştürün
      const mainCustomerAmountNumber: number | null = parseFloat(
        mainCustomerAmountValue?.match(numericRegex)?.[0] || '',
      );
      console.log('mainCustomerAmountNumber:', mainCustomerAmountNumber); // Örnek çıktı: 1000

      // totalAmount ve mainAmountNumber değerlerini karşılaştırın
      if (
        mainCompanyAmountNumber !== null &&
        mainCustomerAmountNumber !== null
      ) {
        if (totalCompanyAmount === mainCompanyAmountNumber) {
          console.log('totalAmount ve mainAmountNumber eşit.');
        } else {
          console.error('totalAmount ve mainAmountNumber eşit değil.');
          throw new Error('totalAmount ve mainAmountNumber eşit değil.'); // Hata fırlatma
        }
      } else {
        console.error('Sayısal değerlerde null veya geçersiz değerler var.');
        throw new Error('Sayısal değerlerde null veya geçersiz değerler var.'); // Hata fırlatma
      }
      await clickAndWait(this.page, values.splitAndShiftSaveButton, 2000);

      // Listede 1.sıradaki Company Amount ile en son girdiğimiz sırada girdiğimiz company değerini kıyaslıyoruz
      const companyAmountList1: string | undefined =
        await this.getElementInnerText(
          this.page,
          values.companyAmountListArea1,
        );

      //  1.sıradaki Company Amount değerini sayısal değere dönüştürün
      const companyAmauntListValue1: number | null = parseFloat(
        companyAmountList1?.replace(/[^\d.-]/g, '')?.match(numericRegex)?.[0] ||
          '',
      );

      console.log('companyAmountList1:', companyAmauntListValue1);

      expect(firstCompanyAmountValue).toEqual(companyAmauntListValue1);

      // Listede 2.sıradaki Company Amount ile ilk girdiğimiz Company Amount değerini kıyaslıyoruz
      const companyAmountList2: string | undefined =
        await this.getElementInnerText(
          this.page,
          values.companyAmountListArea2,
        );

      const companyAmountListValue2: number | null = parseFloat(
        companyAmountList2?.replace(/[^\d.-]/g, '')?.match(numericRegex)?.[0] ||
          '',
      );

      console.log('companyAmountList2:', companyAmountListValue2);

      expect(secondCompanyAmountValue).toEqual(companyAmountListValue2);

      // Listede 1.sıradaki Customer Amount ile en son girdiğimiz sırada girdiğimiz Customer değerini kıyaslıyoruz
      const customerAmountList1: string | undefined =
        await this.getElementInnerText(
          this.page,
          values.customerAmountListArea1,
        );

      //  1.sıradaki Customer Amount değerini sayısal değere dönüştürün
      const customerAmountListValue1: number | null = parseFloat(
        customerAmountList1
          ?.replace(/[^\d.-]/g, '')
          ?.match(numericRegex)?.[0] || '',
      );

      console.log('customerAmountList1:', customerAmountListValue1);
      const firstBuySellElement = await this.getElementInnerText(
        this.page,
        values.firstPopupActionArea,
      );
      const isFirstBuy = firstBuySellElement === 'Buy';
      console.log(firstBuySellElement);

      const firstActualProduct = isFirstBuy
        ? firstCustomerAmountValue * -1
        : firstCustomerAmountValue;
      console.log('firstActualProduct:', firstActualProduct);
      expect(firstActualProduct).toEqual(customerAmountListValue1);

      // Listede 2.sıradaki Customer Amount ile ilk girdiğimiz Customer Amount değerini kıyaslıyoruz
      const customerAmountList2: string | undefined =
        await this.getElementInnerText(
          this.page,
          values.customerAmountListArea2,
        );

      const customerAmountListValue2: number | null = parseFloat(
        customerAmountList2
          ?.replace(/[^\d.-]/g, '')
          ?.match(numericRegex)?.[0] || '',
      );

      console.log('customerAmountList2:', customerAmountListValue2);
      const secondBuySellElement = await this.getElementInnerText(
        this.page,
        values.secondPopupActionArea,
      );
      const isSecondBuy = firstBuySellElement === 'Buy';
      console.log(secondBuySellElement);

      const secondActualProduct = isSecondBuy
        ? secondCustomerAmountValue * -1
        : secondCustomerAmountValue;
      console.log('secondActualProduct:', secondActualProduct);

      expect(secondActualProduct).toEqual(customerAmountListValue2);

      //Id'ler kontrol edilir
      //ID numarasını kayıtlı tutarız
      const operationID = await this.getElementInnerText(
        this.page,
        values.mainOperationId,
      );
      console.log('operationID:', operationID);

      const firstSplitListID: string | undefined =
        await this.getElementInnerText(this.page, values.firstSplitIDArea);
      console.log('listId1:', firstSplitListID);

      const firstSplitID = `${operationID}_1`;
      console.log('split1Id:', firstSplitID);

      const secondSplitListID: string | undefined =
        await this.getElementInnerText(this.page, values.secondSplitIDArea);
      console.log('listId2:', secondSplitListID);

      const secondSplitID = `${operationID}_2`;
      console.log('split2Id:', firstSplitID);

      expect(firstSplitListID).toEqual(firstSplitID);
      expect(secondSplitListID).toEqual(secondSplitID);
    }
  }
  async operationsMarked() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);
    const listIDOneText = await this.page.textContent(values.listIDOneArea);
    await clickAndWait(this.page, values.operationDetailOneButton, 1000);
    await clickAndWait(this.page, values.operationDetailMarkedButton, 3000);
    await clickAndWait(this.page, values.markedOperationsButton, 3000);
    const listStatusArea = await this.page.textContent(
      values.listStatusOneArea,
    );
    expect(listStatusArea).toContain('Marked');
    const markedListIDOneText = await this.page.textContent(
      values.listIDOneArea,
    );
    expect(listIDOneText).toContain(markedListIDOneText);
    await clickAndWait(this.page, values.markedOperationsButton, 3000); // tekrardan eski haline geri dönüyor.
    await clickAndWait(this.page, values.operationDetailOneButton, 1000);
    await clickAndWait(this.page, values.operationDetailMarkedButton, 3000);
  }
  async editOperation() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);

    const listCustomerCreatedDateOneText = await this.page.textContent(
      values.listCreatedDateOneArea,
    );
    const listCustomerNameOneText = await this.page.textContent(
      values.listCustomerNameOne,
    );
    const listCompanyAmountOneText = await this.page.textContent(
      values.listCompanyAmountOne,
    );
    const listCustomerAmountOneText = await this.page.textContent(
      values.listCustomerAmountOne,
    );

    await clickAndWait(this.page, values.operationDetailOneButton, 500);
    await clickAndWait(this.page, values.operationDetailEditButton, 500);
    await clickAndWait(this.page, values.editCustomerArea, 500);
    await clickAndWait(this.page, values.editCustomerSelected, 500);
    await this.page.locator(values.exchangeRate).fill('10');
    await this.page.locator(values.editInputCompanyAmount).fill('20000');

    const editedCustomerNameOne = await this.page.$(values.editCustomerArea);
    const editedCustomerNameOneText =
      await editedCustomerNameOne?.textContent();
    const modifiedEditedCustomerNameOneText =
      editedCustomerNameOneText?.substring(2);
    await clickAndWait(this.page, values.editCustomerSaveButton, 2000);

    const editedListCustomerCreatedDateOneText = await this.page.textContent(
      values.listCreatedDateOneArea,
    );
    const editedListCustomerNameOneText = await this.page.textContent(
      values.listCustomerNameOne,
    );
    const editedListCompanyAmountOneText = await this.page.textContent(
      values.listCompanyAmountOne,
    );
    const editedListCustomerAmountOneText = await this.page.textContent(
      values.listCustomerAmountOne,
    );

    expect(listCustomerCreatedDateOneText).toContain(
      editedListCustomerCreatedDateOneText,
    );
    expect(editedListCustomerNameOneText).toContain(
      modifiedEditedCustomerNameOneText,
    );
    expect(listCustomerNameOneText).not.toContain(
      editedListCustomerNameOneText,
    );
    expect(listCompanyAmountOneText).not.toContain(
      editedListCompanyAmountOneText,
    );
    expect(listCustomerAmountOneText).not.toContain(
      editedListCustomerAmountOneText,
    );
  }
  async operationEditLoanAssetUnchangeable() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.operationDetailOneButton, 1000);
    await clickAndWait(this.page, values.operationDetailEditButton, 3000);

    const button = this.page.locator(values.assetsInput);
    expect(await button.isDisabled()).toBe(false);
  }
  async calendarDisabledDays() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.operationDetailOneButton, 1000);
    await clickAndWait(this.page, values.operationDetailEditButton, 3000);
    await clickAndWait(this.page, values.tradeOffDate, 2000);

    const dayElements = await this.page.$$(values.calendarArea);
    const disabledDays: string[] = [];

    for (const dayElement of dayElements) {
      const dayNumber = await dayElement.innerText();
      const isDisabled = await dayElement.getAttribute('data-disabled');

      if (isDisabled === 'true') {
        disabledDays.push(dayNumber);
        const isClickable = await dayElement.isEnabled();
        expect(isClickable).toBeFalsy();
      } else {
        // Bugünün öncesindeki günlerin tıklanabilir olmaması gerektiği durumunda hata fırlatılır
        const isClickable = await dayElement.isEnabled();
        expect(isClickable).toBeTruthy();
      }
    }
    for (const dayNumber of disabledDays) {
      const dayElement = await this.page.$(
        `.mantine-UnstyledButton-root.mantine-Day-day:has-text("${dayNumber}")`,
      );
      if (dayElement) {
        const isClickable = await dayElement.isEnabled();
        expect(isClickable).toBeFalsy();
      }
    }
  }
  async SelectedToday() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.operationDetailOneButton, 1000);
    await clickAndWait(this.page, values.operationDetailEditButton, 3000);
    await clickAndWait(this.page, values.tradeOffDate, 2000);

    const today = new Date();
    const todayDate = today.getDate();
    console.log(todayDate);

    const selectedTodayElement = await this.page.$(values.selectedDay);
    if (selectedTodayElement !== null) {
      const selectedDayText: string = await selectedTodayElement.innerText();
      const receivedValue: string =
        typeof todayDate === 'number' ? todayDate.toString() : todayDate;
      console.log(receivedValue);
      expect(receivedValue).toEqual(selectedDayText);
    } else {
      console.log('Seçili bir gün bulunamadı.');
    }
  }
  async customerCheckNewOperation() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);
    //operation sayfasından bilgileri çekiyor.
    const listCustomerCreatedDateOneText = await this.page.textContent(
      values.listCreatedDateOneArea,
    );
    const listCustomerIDOneText = await this.page.textContent(
      values.listIDOneArea,
    );
    const listCustomerNameOneText = await this.page.textContent(
      values.listCustomerNameOne,
    );
    const listCompanyAmountOneText = await this.page.textContent(
      values.listCompanyAmountOne,
    );
    const listCustomerAmountOneText = await this.page.textContent(
      values.listCustomerAmountOne,
    );

    //Customer Current sayfasına gider.
    await this.page.goto(`${baseURL}/loan/customer`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.customerFilter, 500);
    if (listCustomerNameOneText !== null) {
      await fillAndWait(
        this.page,
        values.customerSearchInput,
        listCustomerNameOneText,
        500,
      );
    }
    await clickAndWait(this.page, values.selectedCustomer, 500);
    await clickAndWait(this.page, values.selectedListCustomer, 500);

    //current customer sayfasından bilgileri çekiyor.
    const customerCurrentCreatedDateOneText = await this.page.textContent(
      values.customerCurrentCreatedDateOneText,
    );
    const customerCurrentIDOneText = await this.page.textContent(
      values.customerCurrentIDOneText,
    );
    const customerCurrentNameText = await this.page.textContent(
      values.customerCurrentNameText,
    );
    const trimmedCustomerCurrentNameText =
      customerCurrentNameText !== null
        ? customerCurrentNameText.replace(/^.*\/\s*/, '')
        : null;
    const customerCurrentActionOne = await this.page.textContent(
      values.customerCurrentActionOne,
    );
    const customerCurrentUSDOneAreaText = await this.page.textContent(
      values.customerCurrentUSDOneArea,
    );
    const customerCurrentTRYOneAreaText = await this.page.textContent(
      values.customerCurrentTRYOneArea,
    );

    expect(customerCurrentActionOne).toContain(values.actionAdd);
    expect(listCustomerCreatedDateOneText).toContain(
      customerCurrentCreatedDateOneText,
    );
    expect(listCustomerIDOneText).toContain(customerCurrentIDOneText);
    expect(listCustomerNameOneText).toContain(trimmedCustomerCurrentNameText);

    console.log(listCompanyAmountOneText);
    console.log(listCustomerAmountOneText);
    console.log(
      'customerCurrentUSDOneAreaText:',
      customerCurrentUSDOneAreaText,
    );
    console.log(
      'customerCurrentTRYOneAreaText:',
      customerCurrentTRYOneAreaText,
    );
    console.log(listCompanyAmountOneText);

    function compareAndLogResult(
      valueA,
      valueB,
      valueAHasMinus,
      valueAHasPlus,
      valueBHasMinus,
      valueBHasPlus,
      successMessage,
      failureMessage,
    ) {
      // Eğer valueA veya valueB null ise, karşılaştırma yapılamayacağını belirten bir hata mesajı loglanır ve fonksiyon sonlandırılır.
      if (valueA === null || valueB === null) {
        console.error('Değerler null olduğu için karşılaştırma yapılamıyor.');
        return;
      }
      // Değerleri düzenlenmiş hale getirir: Kesilen boşluklar çıkarılır ve gereksiz semboller (örneğin $ ve virgül) çıkarılır.
      const formattedValueA = valueA.trim().replace('$', '').replace(',', '');
      const formattedValueB = valueB.trim().replace('$', '').replace(',', '');
      // Değerleri sayısal hale dönüştürür.
      const numericValueA = parseFloat(formattedValueA.replace(/[^\d.-]/g, ''));
      const numericValueB = parseFloat(formattedValueB.replace(/[^\d.-]/g, ''));
      // Karşılaştırma işlemi gerçekleştirilir. Belli koşullar sağlanıyorsa başarılı bir mesaj loglanır, aksi takdirde hata mesajı loglanır.
      if (
        (valueAHasPlus &&
          valueBHasMinus &&
          Math.abs(numericValueA) === Math.abs(numericValueB)) ||
        (valueAHasMinus &&
          valueBHasPlus &&
          Math.abs(numericValueA) === Math.abs(numericValueB))
      ) {
        console.log(successMessage);
      } else {
        console.error(failureMessage);
      }
    }

    compareAndLogResult(
      listCompanyAmountOneText ? listCompanyAmountOneText : '', // 1. Değer A: Eğer listCompanyAmountOneText değeri tanımlıysa, değeri al; değilse boş bir dize al.
      customerCurrentUSDOneAreaText ? customerCurrentUSDOneAreaText : '', // 2. Değer B: Eğer customerCurrentUSDOneAreaText değeri tanımlıysa, değeri al; değilse boş bir dize al.
      listCompanyAmountOneText ? listCompanyAmountOneText.includes('-') : false, // 3. Değer A'nın eksi sembolünü içerip içermediğini kontrol et.
      listCompanyAmountOneText ? listCompanyAmountOneText.includes('+') : false, // 4. Değer A'nın artı sembolünü içerip içermediğini kontrol et.
      customerCurrentUSDOneAreaText
        ? customerCurrentUSDOneAreaText.includes('-')
        : false, // 5. Değer B'nin eksi sembolünü içerip içermediğini kontrol et.
      customerCurrentUSDOneAreaText
        ? customerCurrentUSDOneAreaText.includes('')
        : false, // 6. Değer B'nin artı içerip içermediğini kontrol et.
      'New Operation - Company Amount USD Test geçti.',
      'New Operation - Company Amount USD Test başarısız: Koşullar sağlanmıyor.',
    );

    compareAndLogResult(
      listCustomerAmountOneText ? listCustomerAmountOneText : '', // 1. Değer A: Eğer listCustomerAmountOneText değeri tanımlıysa, değeri al; değilse boş bir dize al.
      customerCurrentTRYOneAreaText ? customerCurrentTRYOneAreaText : '', // 2. Değer B: Eğer customerCurrentTRYOneAreaText değeri tanımlıysa, değeri al; değilse boş bir dize al.
      listCustomerAmountOneText
        ? listCustomerAmountOneText.includes('-')
        : false, // 3. Değer A'nın eksi sembolünü içerip içermediğini kontrol et.
      listCustomerAmountOneText
        ? listCustomerAmountOneText.includes('+')
        : false, // 4. Değer A'nın artı sembolünü içerip içermediğini kontrol et.
      customerCurrentTRYOneAreaText
        ? customerCurrentTRYOneAreaText.includes('-')
        : false, // 5. Değer B'nin eksi sembolünü içerip içermediğini kontrol et.
      customerCurrentTRYOneAreaText
        ? customerCurrentTRYOneAreaText.includes('')
        : false, // 6. Değer B'nin boşluk içerip içermediğini kontrol et.
      'New Operation - Company Amount TRY Test geçti.', // Başarılı durumda görüntülenecek mesaj.
      'New Operation - Company Amount TRY Test başarısız: Koşullar sağlanmıyor.', // Başarısız durumda görüntülenecek hata mesajı.
    );
  }
  async customerCheckShiftOperation() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);

    //Shift yapan ilk hesap bilgileri
    const listCustomerIDTwoText = await this.page.textContent(
      values.listIDTwoArea,
    );
    const listCustomerCreatedDateTwoText = await this.page.textContent(
      values.listCreatedDateTwoArea,
    );
    const listCustomerStatusTwoText = await this.page.textContent(
      values.listStatusTwoArea,
    );
    const listCustomerNameTwoText = await this.page.textContent(
      values.listCustomerNameTwo,
    );

    const listCompanyAmountOneText = await this.page.textContent(
      values.listCompanyAmountOne,
    );
    const listCustomerAmountOneText = await this.page.textContent(
      values.listCustomerAmountOne,
    );
    const listCustomerIDOneText = await this.page.textContent(
      values.listIDOneArea,
    );

    // Shift edilen hesap bilgileri
    const listCustomerCreatedDateOneText = await this.page.textContent(
      values.listCreatedDateOneArea,
    );
    const listCustomerNameOneText = await this.page.textContent(
      values.listCustomerNameOne,
    );
    const listAgreedRateOneText = await this.page.textContent(
      values.listAgreedRateOne,
    );
    expect(listCustomerStatusTwoText).toContain(values.actionShifted);

    //Shift yapan hesaba gider
    await this.page.goto(`${baseURL}/loan/customer`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.customerFilter, 500);
    if (listCustomerNameOneText !== null) {
      await fillAndWait(
        this.page,
        values.customerSearchInput,
        listCustomerNameOneText,
        500,
      );
    }
    await clickAndWait(this.page, values.selectedCustomer, 500);
    await clickAndWait(this.page, values.selectedListCustomer, 500);

    //Shift customer sayfasından bilgileri çekiyor.
    const secondRowDetailLoanDisplayIDText = await this.page.textContent(
      values.secondRowDetailLoanDisplayID,
    );
    const customerCurrentCreatedDateTwoText = await this.page.textContent(
      values.customerCurrentCreatedDateTwoText,
    );
    const customerCurrentNameText = await this.page.textContent(
      values.customerCurrentNameText,
    );
    const trimmedCustomerCurrentNameText =
      customerCurrentNameText !== null
        ? customerCurrentNameText.replace(/^.*\/\s*/, '')
        : null;

    const customerCurrentCreatedDateOneText = await this.page.textContent(
      values.customerCurrentCreatedDateOneText,
    );
    const firstRowDetailLoanDisplayIDText = await this.page.textContent(
      values.firstRowDetailLoanDisplayID,
    );
    const firstRowDetailAgreedRateText = await this.page.textContent(
      values.firstRowDetailAgreedRate,
    );
    const firstRowDetailLoanToText = await this.page.textContent(
      values.firstRowDetailLoanTo,
    );

    expect(listCustomerIDTwoText).toContain(secondRowDetailLoanDisplayIDText);
    expect(listCustomerCreatedDateTwoText).toContain(
      customerCurrentCreatedDateTwoText,
    );
    expect(listCustomerCreatedDateOneText).toContain(
      customerCurrentCreatedDateOneText,
    );
    expect(listCustomerIDTwoText).toContain(firstRowDetailLoanDisplayIDText);
    expect(listAgreedRateOneText).toContain(firstRowDetailAgreedRateText);
    expect(listCustomerNameOneText).toContain(firstRowDetailLoanToText);
    expect(listCustomerNameTwoText).toContain(trimmedCustomerCurrentNameText);

    //Shift edilen hesaba gider name7042 last name7042
    await this.page.goto(`${baseURL}/loan/customer`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.customerFilter, 500);
    if (listCustomerNameOneText !== null) {
      await fillAndWait(
        this.page,
        values.customerSearchInput,
        listCustomerNameOneText,
        500,
      );
    }
    await clickAndWait(this.page, values.selectedCustomer, 500);
    await clickAndWait(this.page, values.selectedListCustomer, 500);
    await clickAndWait(this.page, values.customerCurrentRowDetailButton, 500);

    const shiftedCustomerCurrentCreatedDateOneText =
      await this.page.textContent(values.customerCurrentCreatedDateOneText);
    const shiftedFirstRowDetailLoanDisplayIDText = await this.page.textContent(
      values.firstRowDetailLoanDisplayID,
    );
    const shiftedFirstRowDetailAgreedRateText = await this.page.textContent(
      values.firstRowDetailAgreedRate,
    );
    const customerCurrentUSDOneAreaText = await this.page.textContent(
      values.customerCurrentUSDOneArea,
    );
    const customerCurrentTRYOneAreaText = await this.page.textContent(
      values.customerCurrentTRYOneArea,
    );
    const firstRowDetailFromText = await this.page.textContent(
      values.firstRowDetailFrom,
    );
    const shiftedCustomerCurrentNameText = await this.page.textContent(
      values.customerCurrentNameText,
    );
    const trimmedShiftedCustomerCurrentNameText =
      shiftedCustomerCurrentNameText !== null
        ? shiftedCustomerCurrentNameText.replace(/^.*\/\s*/, '')
        : null;

    expect(listCustomerCreatedDateOneText).toContain(
      shiftedCustomerCurrentCreatedDateOneText,
    );
    expect(listCustomerIDOneText).toContain(
      shiftedFirstRowDetailLoanDisplayIDText,
    );
    expect(listAgreedRateOneText).toContain(
      shiftedFirstRowDetailAgreedRateText,
    );
    expect(listCustomerNameTwoText).toContain(firstRowDetailFromText);
    expect(listCustomerNameOneText).toContain(
      trimmedShiftedCustomerCurrentNameText,
    );

    function compareAndLogResult(
      valueA,
      valueB,
      valueAHasMinus,
      valueAHasPlus,
      valueBHasMinus,
      valueBHasPlus,
      successMessage,
      failureMessage,
    ) {
      // Eğer valueA veya valueB null ise, karşılaştırma yapılamayacağını belirten bir hata mesajı loglanır ve fonksiyon sonlandırılır.
      if (valueA === null || valueB === null) {
        console.error('Değerler null olduğu için karşılaştırma yapılamıyor.');
        return;
      }
      // Değerleri düzenlenmiş hale getirir: Kesilen boşluklar çıkarılır ve gereksiz semboller (örneğin $ ve virgül) çıkarılır.
      const formattedValueA = valueA.trim().replace('$', '').replace(',', '');
      const formattedValueB = valueB.trim().replace('$', '').replace(',', '');
      // Değerleri sayısal hale dönüştürür.
      const numericValueA = parseFloat(formattedValueA.replace(/[^\d.-]/g, ''));
      const numericValueB = parseFloat(formattedValueB.replace(/[^\d.-]/g, ''));
      // Karşılaştırma işlemi gerçekleştirilir. Belli koşullar sağlanıyorsa başarılı bir mesaj loglanır, aksi takdirde hata mesajı loglanır.
      if (
        (valueAHasPlus &&
          valueBHasMinus &&
          Math.abs(numericValueA) === Math.abs(numericValueB)) ||
        (valueAHasMinus &&
          valueBHasPlus &&
          Math.abs(numericValueA) === Math.abs(numericValueB))
      ) {
        console.log(successMessage);
      } else {
        console.error(failureMessage);
      }
    }

    compareAndLogResult(
      listCompanyAmountOneText ? listCompanyAmountOneText : '', // 1. Değer A: Eğer listCompanyAmountOneText değeri tanımlıysa, değeri al; değilse boş bir dize al.
      customerCurrentUSDOneAreaText ? customerCurrentUSDOneAreaText : '', // 2. Değer B: Eğer customerCurrentUSDOneAreaText değeri tanımlıysa, değeri al; değilse boş bir dize al.
      listCompanyAmountOneText ? listCompanyAmountOneText.includes('-') : false, // 3. Değer A'nın eksi sembolünü içerip içermediğini kontrol et.
      listCompanyAmountOneText ? listCompanyAmountOneText.includes('+') : false, // 4. Değer A'nın artı sembolünü içerip içermediğini kontrol et.
      customerCurrentUSDOneAreaText
        ? customerCurrentUSDOneAreaText.includes('-')
        : false, // 5. Değer B'nin eksi sembolünü içerip içermediğini kontrol et.
      customerCurrentUSDOneAreaText
        ? customerCurrentUSDOneAreaText.includes('')
        : false, // 6. Değer B'nin artı içerip içermediğini kontrol et.
      'Shift Operation Company Amount USD Test geçti.',
      'Shift Operation Company Amount USD Test başarısız: Koşullar sağlanmıyor.',
    );

    compareAndLogResult(
      listCustomerAmountOneText ? listCustomerAmountOneText : '', // 1. Değer A: Eğer listCustomerAmountOneText değeri tanımlıysa, değeri al; değilse boş bir dize al.
      customerCurrentTRYOneAreaText ? customerCurrentTRYOneAreaText : '', // 2. Değer B: Eğer customerCurrentTRYOneAreaText değeri tanımlıysa, değeri al; değilse boş bir dize al.
      listCustomerAmountOneText
        ? listCustomerAmountOneText.includes('-')
        : false, // 3. Değer A'nın eksi sembolünü içerip içermediğini kontrol et.
      listCustomerAmountOneText
        ? listCustomerAmountOneText.includes('+')
        : false, // 4. Değer A'nın artı sembolünü içerip içermediğini kontrol et.
      customerCurrentTRYOneAreaText
        ? customerCurrentTRYOneAreaText.includes('-')
        : false, // 5. Değer B'nin eksi sembolünü içerip içermediğini kontrol et.
      customerCurrentTRYOneAreaText
        ? customerCurrentTRYOneAreaText.includes('')
        : false, // 6. Değer B'nin boşluk içerip içermediğini kontrol et.
      'Shift Operation  Company Amount TRY Test geçti.', // Başarılı durumda görüntülenecek mesaj.
      'Shift Operation  Company Amount TRY Test başarısız: Koşullar sağlanmıyor.', // Başarısız durumda görüntülenecek hata mesajı.
    );
  }
  async customerCheckEditOperation() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);

    const listCustomerIDOneText = await this.page.textContent(
      values.listIDOneArea,
    );
    const listCustomerCreatedDateOneText = await this.page.textContent(
      values.listCreatedDateOneArea,
    );
    const listCustomerNameOneText = await this.page.textContent(
      values.listCustomerNameOne,
    );
    const listCompanyAmountOneText = await this.page.textContent(
      values.listCompanyAmountOne,
    );
    const listCustomerAmountOneText = await this.page.textContent(
      values.listCustomerAmountOne,
    );
    const listAgreedRateOneText = await this.page.textContent(
      values.listAgreedRateOne,
    );
    const listStatusArea = await this.page.textContent(
      values.listStatusOneArea,
    );
    expect(listStatusArea).toContain('Edited');

    await this.page.goto(`${baseURL}/loan/customer/94`); //Edit yapılan hesaba gider.
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.customerCurrentRowDetailButton, 2000);

    // name8578 last name 8578 sayfası
    const customerCurrentCreatedDateOneText = await this.page.textContent(
      values.customerCurrentCreatedDateOneText,
    );
    const customerCurrentIDOneText = await this.page.textContent(
      values.customerCurrentIDOneText,
    );
    const customerCurrentNameText = await this.page.textContent(
      values.customerCurrentNameText,
    );
    const trimmedCustomerCurrentNameText =
      customerCurrentNameText !== null
        ? customerCurrentNameText.replace(/^.*\/\s*/, '')
        : null;
    const customerCurrentUSDOneAreaText = await this.page.textContent(
      values.customerCurrentUSDOneArea,
    );
    const customerCurrentTRYOneAreaText = await this.page.textContent(
      values.customerCurrentTRYOneArea,
    );
    const firstRowDetailAgreedRateText = await this.page.textContent(
      values.firstRowDetailAgreedRate,
    );

    expect(listCustomerCreatedDateOneText).toContain(
      customerCurrentCreatedDateOneText,
    );
    expect(listCustomerNameOneText).toContain(trimmedCustomerCurrentNameText);
    expect(listAgreedRateOneText).toContain(firstRowDetailAgreedRateText);

    // Değerlerin +,- karşılaştırması ve değerlerin doğru gelemesi.
    function compareAndLogResult(
      valueA,
      valueB,
      valueAHasMinus,
      valueAHasPlus,
      valueBHasMinus,
      valueBHasPlus,
      successMessage,
      failureMessage,
    ) {
      // Eğer valueA veya valueB null ise, karşılaştırma yapılamayacağını belirten bir hata mesajı loglanır ve fonksiyon sonlandırılır.
      if (valueA === null || valueB === null) {
        console.error('Değerler null olduğu için karşılaştırma yapılamıyor.');
        return;
      }
      // Değerleri düzenlenmiş hale getirir: Kesilen boşluklar çıkarılır ve gereksiz semboller (örneğin $ ve virgül) çıkarılır.
      const formattedValueA = valueA.trim().replace('$', '').replace(',', '');
      const formattedValueB = valueB.trim().replace('$', '').replace(',', '');
      // Değerleri sayısal hale dönüştürür.
      const numericValueA = parseFloat(formattedValueA.replace(/[^\d.-]/g, ''));
      const numericValueB = parseFloat(formattedValueB.replace(/[^\d.-]/g, ''));
      // Karşılaştırma işlemi gerçekleştirilir. Belli koşullar sağlanıyorsa başarılı bir mesaj loglanır, aksi takdirde hata mesajı loglanır.
      if (
        (valueAHasPlus &&
          valueBHasMinus &&
          Math.abs(numericValueA) === Math.abs(numericValueB)) ||
        (valueAHasMinus &&
          valueBHasPlus &&
          Math.abs(numericValueA) === Math.abs(numericValueB))
      ) {
        console.log(successMessage);
      } else {
        console.error(failureMessage);
      }
    }

    compareAndLogResult(
      listCompanyAmountOneText ? listCompanyAmountOneText : '', // 1. Değer A: Eğer listCompanyAmountOneText değeri tanımlıysa, değeri al; değilse boş bir dize al.
      customerCurrentUSDOneAreaText ? customerCurrentUSDOneAreaText : '', // 2. Değer B: Eğer customerCurrentUSDOneAreaText değeri tanımlıysa, değeri al; değilse boş bir dize al.
      listCompanyAmountOneText ? listCompanyAmountOneText.includes('-') : false, // 3. Değer A'nın eksi sembolünü içerip içermediğini kontrol et.
      listCompanyAmountOneText ? listCompanyAmountOneText.includes('+') : false, // 4. Değer A'nın artı sembolünü içerip içermediğini kontrol et.
      customerCurrentUSDOneAreaText
        ? customerCurrentUSDOneAreaText.includes('-')
        : false, // 5. Değer B'nin eksi sembolünü içerip içermediğini kontrol et.
      customerCurrentUSDOneAreaText
        ? customerCurrentUSDOneAreaText.includes('')
        : false, // 6. Değer B'nin artı içerip içermediğini kontrol et.
      'Edit Operation - Company Amount USD Test geçti.',
      'Edit Operation - Company Amount USD Test başarısız: Koşullar sağlanmıyor.',
    );

    compareAndLogResult(
      listCustomerAmountOneText ? listCustomerAmountOneText : '', // 1. Değer A: Eğer listCustomerAmountOneText değeri tanımlıysa, değeri al; değilse boş bir dize al.
      customerCurrentTRYOneAreaText ? customerCurrentTRYOneAreaText : '', // 2. Değer B: Eğer customerCurrentTRYOneAreaText değeri tanımlıysa, değeri al; değilse boş bir dize al.
      listCustomerAmountOneText
        ? listCustomerAmountOneText.includes('-')
        : false, // 3. Değer A'nın eksi sembolünü içerip içermediğini kontrol et.
      listCustomerAmountOneText
        ? listCustomerAmountOneText.includes('+')
        : false, // 4. Değer A'nın artı sembolünü içerip içermediğini kontrol et.
      customerCurrentTRYOneAreaText
        ? customerCurrentTRYOneAreaText.includes('-')
        : false, // 5. Değer B'nin eksi sembolünü içerip içermediğini kontrol et.
      customerCurrentTRYOneAreaText
        ? customerCurrentTRYOneAreaText.includes('')
        : false, // 6. Değer B'nin boşluk içerip içermediğini kontrol et.
      'Edit Operation - Company Amount TRY Test geçti.', // Başarılı durumda görüntülenecek mesaj.
      'Edit Operation - Company Amount TRY Test başarısız: Koşullar sağlanmıyor.', // Başarısız durumda görüntülenecek hata mesajı.
    );

    //Yaratılan ve edit yapılan hesabın bilgileri kontrolü.
    await this.page.goto(`${baseURL}/loan/customer/92`); // name1310 lastname1310
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.customerCurrentRowDetailButton, 4000);

    const editedCustomerCurrentUSDOneAreaText = await this.page.textContent(
      values.customerCurrentUSDOneArea,
    );
    const editedCustomerCurrentTRYOneAreaText = await this.page.textContent(
      values.customerCurrentTRYOneArea,
    );
    const editedCustomerCurrentUSDTwoAreaText = await this.page.textContent(
      values.customerCurrentUSDTwoArea,
    );
    const editedCustomerCurrentTRYTwoAreaText = await this.page.textContent(
      values.customerCurrentTRYTwoArea,
    );

    //Edit Yapılan Hesap USD Değeri düştü mü
    compareAndLogResult(
      editedCustomerCurrentUSDOneAreaText
        ? editedCustomerCurrentUSDOneAreaText
        : '',
      editedCustomerCurrentUSDTwoAreaText
        ? editedCustomerCurrentUSDTwoAreaText
        : '',
      editedCustomerCurrentUSDOneAreaText
        ? editedCustomerCurrentUSDOneAreaText.includes('-')
        : false,
      editedCustomerCurrentUSDOneAreaText
        ? editedCustomerCurrentUSDOneAreaText.includes('')
        : false,
      editedCustomerCurrentUSDTwoAreaText
        ? editedCustomerCurrentUSDTwoAreaText.includes('-')
        : false,
      editedCustomerCurrentUSDTwoAreaText
        ? editedCustomerCurrentUSDTwoAreaText.includes('')
        : false,
      'Edit Operation - Company Amount Edit Yapılan USD Test geçti.',
      'Edit Operation - Company Amount Edit Yapılan USD Test başarısız: Koşullar sağlanmıyor.',
    );

    // Edit Yapılan Hesap TRY Değeri düştü mü
    compareAndLogResult(
      editedCustomerCurrentTRYOneAreaText
        ? editedCustomerCurrentTRYOneAreaText
        : '',
      editedCustomerCurrentTRYTwoAreaText
        ? editedCustomerCurrentTRYTwoAreaText
        : '',
      editedCustomerCurrentTRYTwoAreaText
        ? editedCustomerCurrentTRYTwoAreaText.includes('-')
        : false,
      editedCustomerCurrentTRYTwoAreaText
        ? editedCustomerCurrentTRYTwoAreaText.includes('')
        : false,
      editedCustomerCurrentTRYOneAreaText
        ? editedCustomerCurrentTRYOneAreaText.includes('-')
        : false,
      editedCustomerCurrentTRYOneAreaText
        ? editedCustomerCurrentTRYOneAreaText.includes('')
        : false,
      'Edit Operation - Company Amount Edit Yapılan TRY Test geçti.',
      'Edit Operation - Company Amount Edit Yapılan TRY Test başarısız: Koşullar sağlanmıyor.',
    );
  }

  async randomSelect() {
    const elements = await this.page.$$(values.dropdownList);
    const randomIndex = Math.floor(Math.random() * elements.length); // Rastgele bir indeks seçin
    const randomElement = elements[randomIndex];
    await randomElement.click();
  }
  async multipleShiftSelectedOperation() {
    await clickAndWait(this.page, values.firstOperationCheckBox, 500);
    await clickAndWait(this.page, values.secondOperationCheckBox, 500);
    await clickAndWait(this.page, values.shiftSelectedLoan, 500);

    const formFirstCustomerName = await this.page.textContent(
      values.formFirstCustomerName,
    );
    const formAssignFirstCustomerName = await this.page.textContent(
      values.assignFirstCustomerName,
    );
    const formFirstCompanyAmount = await this.page.textContent(
      values.formFirstCompanyAmount,
    );
    const formFirstAgreedRate = await this.page.textContent(
      values.formFirstAgreedRate,
    );
    const formFirstCustomerAmount = await this.page.textContent(
      values.formFirstCustomerAmount,
    );
    const formSecondCustomerName = await this.page.textContent(
      values.formSecondCustomerName,
    );
    const formAssignSecondCustomerName = await this.page.textContent(
      values.assignSecondCustomerName,
    );
    const formSecondCompanyAmount = await this.page.textContent(
      values.formSecondCompanyAmount,
    );
    const formSecondAgreedRate = await this.page.textContent(
      values.formSecondAgreedRate,
    );
    const formSecondCustomerAmount = await this.page.textContent(
      values.formSecondCustomerAmount,
    );
    await clickAndWait(this.page, values.popupShiftButton, 500);

    const listFirstCustomerName = await this.page.textContent(
      values.listFirstCustomerName,
    );
    const lisFirstCompanyAmount = await this.page.textContent(
      values.listFirstCompanyAmount,
    );
    const listFirstCustomerAmount = await this.page.textContent(
      values.listFirstCustomerAmount,
    );
    const listFirstStatus = await this.page.textContent(values.listFirstStatus);
    const listSecondCustomerName = await this.page.textContent(
      values.listSecondCustomerName,
    );
    const listSecondStatus = await this.page.textContent(
      values.listSecondStatus,
    );
    const listThirdCustomerName = await this.page.textContent(
      values.listThirdCustomerName,
    );
    const listThirdCompanyAmount = await this.page.textContent(
      values.listThirdCompanyAmount,
    );
    const listThirdCustomerAmount = await this.page.textContent(
      values.listThirdCustomerAmount,
    );
    const listThirdStatus = await this.page.textContent(values.listThirdStatus);
    const listFourthCustomerName = await this.page.textContent(
      values.listFourthCustomerName,
    );
    const listFourthStatus = await this.page.textContent(
      values.listFourthStatus,
    );
    const listFifthCustomerName = await this.page.textContent(
      values.listFifthCustomerName,
    );
    const listFifthStatus = await this.page.textContent(values.listFifthStatus);
    const listSixthCustomerName = await this.page.textContent(
      values.listSixthCustomerName,
    );
    const listSixthStatus = await this.page.textContent(values.listSixthStatus);

    expect(listSixthCustomerName).toEqual(formSecondCustomerName);
    expect(listSixthStatus).toEqual(values.splitted);
    expect(listFifthCustomerName).toEqual(formFirstCustomerName);
    expect(listFifthStatus).toEqual(values.splitted);
    expect(listFourthCustomerName).toEqual(formSecondCustomerName);
    expect(listFourthStatus).toEqual(values.shifted);
    expect(listThirdCustomerName).toEqual(formAssignSecondCustomerName);
    expect(listThirdCompanyAmount).toEqual(formSecondCompanyAmount);
    expect(listThirdCustomerAmount).toEqual(formSecondCustomerAmount);
    expect(listThirdStatus).toEqual(values.openShift);
    expect(listThirdStatus).toEqual(values.openShift);
    expect(listSecondCustomerName).toEqual(formFirstCustomerName);
    expect(listSecondStatus).toEqual(values.shifted);
    expect(listFirstCustomerName).toEqual(formAssignFirstCustomerName);
    expect(lisFirstCompanyAmount).toEqual(formFirstCompanyAmount);
    expect(listFirstCustomerAmount).toEqual(formFirstCustomerAmount);
  }
  async assertTotalAmountDifference() {
    await clickAndWait(this.page, values.firstOperationCheckBox, 500);
    await clickAndWait(this.page, values.secondOperationCheckBox, 500);
    await clickAndWait(this.page, values.shiftSelectedLoan, 500);

    await clickAndWait(this.page, values.agreedRateButton, 500);
    await fillAndWait(this.page, values.newRateInput, '3', 500);

    const newAgreedRate = await this.getInputNumericValue(
      this.page,
      values.newRateInput,
    );

    await clickAndWait(this.page, values.applyAllButton, 500);

    await clickAndWait(this.page, values.assignArea, 500);
    await clickAndWait(this.page, values.newCustomerArea, 500);
    await clickAndWait(this.page, values.selectAssignCustomer, 500);

    //burda akış hatalı kod çalışsın diye tekrar işlem yapıyorum
    await clickAndWait(this.page, values.assignArea, 500);
    const assignCustomerName = await this.page.textContent(
      values.assignCustomerArea,
    );
    const modifiedAssignCustomerName = assignCustomerName?.substring(2);
    await clickAndWait(this.page, values.applyAllButton, 500);

    //----Pop-up'daki değerler kontrol edilir

    //Assign olan Customerler kontrol edilir
    const formAssignFirstCustomerName = await this.page.textContent(
      values.assignFirstCustomerName,
    );

    const formAssignSecondCustomerName = await this.page.textContent(
      values.assignSecondCustomerName,
    );

    expect(modifiedAssignCustomerName).toEqual(formAssignFirstCustomerName);
    expect(modifiedAssignCustomerName).toEqual(formAssignSecondCustomerName);

    //Customer Amount Değerleri ile Total Amount
    const formFirstCompanyAmount = await this.page.textContent(
      values.formFirstCompanyAmount,
    );

    const formSecondCompanyAmount = await this.page.textContent(
      values.formSecondCompanyAmount,
    );

    const formFirstOldAgreedRate = await this.page.textContent(
      values.formFirstOldAgreedRateArea,
    );

    const formSecondOldAgreedRate = await this.page.textContent(
      values.formSecondOldAgreedRateArea,
    );

    const formFirstOldCustomerAmount = await this.page.textContent(
      values.formFirstOldCustomerAmountArea,
    );
    const formSecondOldCustomerAmount = await this.page.textContent(
      values.formSecondOldCustomerAmountArea,
    );
    const formTotalAmountDiffrence: string | undefined =
      await this.getElementInnerText(
        this.page,
        values.totalAmountDiffrenceArea,
      );

    const formFirstCustomerAmount: string | undefined =
      await this.getElementInnerText(
        this.page,
        values.formFirstCustomerNewAmount,
      );

    const formSecondCustomerAmount: string | undefined =
      await this.getElementInnerText(
        this.page,
        values.formSecondCustomerNewAmount,
      );
    const firstAgreedRate = await this.page.textContent(
      values.firstAgreedRateArea,
    );

    const secondAgreedRate = await this.page.textContent(
      values.secondAgreedRateArea,
    );

    //Tablodaki değerleri sayısal forma getiriyoruz
    if (
      formFirstCustomerAmount !== undefined &&
      formSecondCustomerAmount !== undefined &&
      formTotalAmountDiffrence !== undefined &&
      formFirstOldCustomerAmount !== null &&
      formSecondOldCustomerAmount !== null &&
      firstAgreedRate !== null &&
      secondAgreedRate !== null &&
      formFirstOldAgreedRate !== null &&
      formSecondOldAgreedRate !== null &&
      formSecondCompanyAmount !== null &&
      formFirstCompanyAmount !== null
    ) {
      const numericFormTotalAmountDiffrence = parseFloat(
        formTotalAmountDiffrence.replace(/[^0-9.-]+/g, ''),
      );
      const numericFirstCompanyAmount = parseFloat(
        formFirstCompanyAmount.replace(/[^0-9.-]+/g, ''),
      );

      const numericSecondCompanyAmount = parseFloat(
        formSecondCompanyAmount.replace(/[^0-9.-]+/g, ''),
      );

      const numericNewFirstAgreedRate = parseFloat(
        firstAgreedRate.replace(/[^0-9.-]+/g, ''),
      );

      const numericNewSecondAgreedRate = parseFloat(
        secondAgreedRate.replace(/[^0-9.-]+/g, ''),
      );

      const numericFirstOldAgreedRate = parseFloat(
        formFirstOldAgreedRate.replace(/[^0-9.-]+/g, ''),
      );

      const numericSecondOldAgreedRate = parseFloat(
        formSecondOldAgreedRate.replace(/[^0-9.-]+/g, ''),
      );

      const numericFormFirstOldCustomerAmount = parseFloat(
        formFirstOldCustomerAmount.replace(/[^0-9.-]+/g, ''),
      );

      const numericFormSecondOldCustomerAmount = parseFloat(
        formSecondOldCustomerAmount.replace(/[^0-9.-]+/g, ''),
      );

      const numericFormFirstCustomerAmount = parseFloat(
        formFirstCustomerAmount.replace(/[^0-9.-]+/g, ''),
      );

      const numericFormSecondCustomerAmount = parseFloat(
        formSecondCustomerAmount.replace(/[^0-9.-]+/g, ''),
      );
      //Total Amount Diffrence  doğru yansıyor mu kontrol edilir

      const newTotalAmount =
        numericFirstCompanyAmount * numericNewFirstAgreedRate +
        numericSecondCompanyAmount * numericNewSecondAgreedRate;

      const oldTotalAmount =
        numericFirstCompanyAmount * numericFirstOldAgreedRate +
        numericSecondCompanyAmount * numericSecondOldAgreedRate;

      expect(numericFormTotalAmountDiffrence).toEqual(
        newTotalAmount - oldTotalAmount,
      );
    }

    //Pop-up'da Rate ve Assigne Customer Değişmesi Sonrasındaki Listeye Doğru Yansıdığı Kontrol Edilir

    await clickAndWait(this.page, values.selectArea, 500); //TotalAmountDiffrence Yanındaki alandan Atama Yapılır
    await clickAndWait(this.page, values.selectShiftAssignCustomer, 500);
    await clickAndWait(this.page, values.popupShiftButton, 1000);

    const listFirstCustomerName = await this.page.textContent(
      values.listFirstCustomerName,
    );

    expect(listFirstCustomerName).toEqual(formAssignFirstCustomerName);

    const listFirstCompanyAmount = await this.page.textContent(
      values.listFirstCompanyAmount,
    );

    expect(listFirstCompanyAmount).toEqual(formFirstCompanyAmount);

    const listFirstCustomerAmount = await this.page.textContent(
      values.listFirstCustomerAmount,
    );

    expect(formFirstCustomerAmount).toEqual(listFirstCustomerAmount);

    const listThirdCustomerName = await this.page.textContent(
      values.listThirdCustomerName,
    );

    expect(listThirdCustomerName).toEqual(formAssignSecondCustomerName);

    const listThirdCompanyAmount = await this.page.textContent(
      values.listThirdCompanyAmount,
    );

    expect(listThirdCompanyAmount).toEqual(formSecondCompanyAmount);

    const listThirdCustomerAmount = await this.page.textContent(
      values.listThirdCustomerAmount,
    );
    console.log(listThirdCustomerAmount);
    console.log(formSecondCustomerAmount);
    expect(formSecondCustomerAmount).toEqual(listThirdCustomerAmount);
  }
  async resolve() {
    //Operations sayfasındaki operasyon bilgilerinin kayıt ederiz
    const listFirstCustomerName = await this.page.textContent(
      values.listFirstCustomerName,
    );

    const listFirstAction = await this.page.textContent(values.listFirstAction);

    const listFirstCompanyAmount = await this.page.textContent(
      values.listFirstCompanyAmount,
    );

    const listFirstCustomerAmount = await this.page.textContent(
      values.listFirstCustomerAmount,
    );

    await clickAndWait(this.page, values.detailsActionButton, 500);
    await clickAndWait(this.page, values.readyToResolve, 1000);

    const listFirstStatus = await this.page.textContent(values.listFirstStatus);
    expect(listFirstStatus).toEqual(values.ready);

    await clickAndWait(this.page, values.detailsActionButton, 500);
    await clickAndWait(this.page, values.resolve, 500);

    //Resolve Pop-up'ı içinde gelen bilgilerin listedeki operasyona ait olduğunun doğruluğunu kontrol ederiz
    const resolvePopupCustomerName = await this.getElementInnerText(
      this.page,
      values.resolvePopupCustomerNameArea,
    );
    const resolvePopupAction = await this.getElementInnerText(
      this.page,
      values.resolvePopupActionArea,
    );
    const resolvePopupCompanyAmount = await this.getElementInnerText(
      this.page,
      values.resolvePopupCompanyAmountArea,
    );
    const resolvePopupCustomerAmount = await this.getElementInnerText(
      this.page,
      values.resolvePopupCustomerAmountArea,
    );

    expect(listFirstCustomerName).toEqual(resolvePopupCustomerName);
    expect(listFirstAction).toEqual(resolvePopupAction);
    expect(listFirstCompanyAmount).toEqual(resolvePopupCompanyAmount);
    expect(listFirstCustomerAmount).toEqual(resolvePopupCustomerAmount);

    //Primary loan alanı doldurulur
    await clickAndWait(this.page, values.upCompanyAccountArea, 1000);
    await clickAndWait(this.page, values.selectAccount, 500);

    await clickAndWait(this.page, values.downCompanyAccountArea, 500);
    await clickAndWait(this.page, values.selectAccount, 500);

    await clickAndWait(this.page, values.upCustomerAccountArea, 500);
    await clickAndWait(this.page, values.selectAccount, 500);

    await clickAndWait(this.page, values.downCustomerAccountArea, 500);
    await clickAndWait(this.page, values.selectAccount, 500);

    await clickAndWait(this.page, values.resolveSaveButton, 1000);

    //işlem statusü değişimi kontrol edilir
    const listFirstStatusForResolved = await this.page.textContent(
      values.listFirstStatus,
    );
    expect(listFirstStatusForResolved).toEqual(values.resolved);

    await this.page.goto(`${baseURL}/loan/customer`);

    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.customerArea, 500);
    if (listFirstCustomerName !== null) {
      await fillAndWait(this.page, 'input', listFirstCustomerName, 500);
    }
    await clickAndWait(this.page, values.selectResolveAssignCustomer, 500);
    await clickAndWait(this.page, values.customerDetailButton, 500);
    await clickAndWait(this.page, values.goToDetailButton, 500);

    //Customer Current Sayfasında Customer Detayına Resolve işleminin doğru düştüğünü kontol ederiz
    const customerCurrentAction = await this.getElementInnerText(
      this.page,
      values.customerCurrentAction,
    );

    const customerCurrentUSD = await this.getElementInnerText(
      this.page,
      values.customerCurrentUSD,
    );

    const customerCurrentTRY = await this.getElementInnerText(
      this.page,
      values.customerCurrentTRY,
    );

    if (
      customerCurrentUSD !== undefined &&
      listFirstCompanyAmount !== null &&
      customerCurrentTRY !== undefined &&
      listFirstCustomerAmount !== null
    ) {
      const cleanedListCompanyAmount = listFirstCompanyAmount
        .replace('USD', '')
        .trim();

      if (customerCurrentUSD === cleanedListCompanyAmount) {
        console.log('Değerler eşit.');
      } else {
        console.log('Değerler eşit değil.');
      }

      const cleanedListCustomerAmount = listFirstCustomerAmount
        .replace('TRY', '')
        // .replace(/[\s,]+/g, '')
        .trim();

      if (customerCurrentTRY === cleanedListCustomerAmount) {
        console.log('Değerler eşit.');
      } else {
        throw new Error('Değerler eşit değil');
      }
    }
  }

  async removeOperation() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await clickAndWait(this.page, values.detailsActionButton, 5000);
    await clickAndWait(this.page, values.deleteActionButton, 500);
    await clickAndWait(this.page, values.deleteConfirmActionButton, 500);

    const results = await this.getElementInnerText(this.page, values.emptyPage);
    expect(results).toEqual(values.emptyPageText);
  }
  async checkCustomerCurrentListWithDetailPage() {
    const listFirstCustomerName = await this.page.textContent(
      values.listFirstCustomerName,
    );
    console.log('listFirstCustomerName:', listFirstCustomerName);
    await this.page.goto(`${baseURL}/loan/customer`);

    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.customerArea, 500);
    if (listFirstCustomerName !== null) {
      await fillAndWait(this.page, 'input', listFirstCustomerName, 500);
    }
    await clickAndWait(this.page, values.selectResolveAssignCustomer, 500);

    //Custmer Current Sayfasındaki Liste değerleri kayıt altına alınır
    const customerCurrentListName = await this.getElementInnerText(
      this.page,
      values.customerCurrentListNameArea,
    );
    console.log('customerCurrentListName:', customerCurrentListName);
    const customerCurrentListTotal = await this.getElementInnerText(
      this.page,
      values.customerCurrentListTotalArea,
    );
    console.log('customerCurrentListTotal:', customerCurrentListTotal);

    await clickAndWait(this.page, values.customerDetailButton, 500);
    await clickAndWait(this.page, values.goToDetailButton, 500);

    //Customer Current detay sayfasındaki Header alanındaki değerleri kayıt altına alırız
    const customerCurrentDetailName = await this.getElementInnerText(
      this.page,
      values.customerCurrentDetailNameArea,
    );
    console.log('customerCurrentDetailName:', customerCurrentDetailName);

    const customerCurrentDetailTotal = await this.getElementInnerText(
      this.page,
      values.customerCurrentDetailTotalArea,
    );
    console.log('customerCurrentDetailTotal:', customerCurrentDetailTotal);

    expect(customerCurrentListName).toEqual(customerCurrentDetailName);
    expect(customerCurrentListTotal).toEqual(customerCurrentDetailTotal);
  }
  async menuActivation() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(1000);

    await clickAndWait(this.page, values.operationDetailOneButton, 2000);

    const operationStatus = await this.getElementInnerText(
      this.page,
      values.firstRowStatusArea,
    );
    expect(operationStatus).toEqual(values.transform);

    const menuItems = await this.page.$$eval(values.menuList, (items) =>
      items.map((item) => item.textContent?.trim() || ''),
    );
    console.log('Dropdown Menu Items:', menuItems);

    const expectedTexts = [
      'Edit',
      'Split and Shift',
      'Ready to Resolve',
      'Resolve',
      'Mark',
      'Remove',
    ];

    for (const text of expectedTexts) {
      expect(menuItems).toContain(text);
    }
  }
  async logDetailsCheckNewOperation() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);
    //Operations Sayfasında olan bilgiler
    const listCustomerIDOneText = await this.page.textContent(
      values.listIDOneArea,
    );

    const listCustomerNameOneText = await this.page.textContent(
      values.listCustomerNameOne,
    );

    const listCustomerActionOneText = await this.page.textContent(
      values.listCustomerActionOneArea,
    );

    const listCompanyAmountOneText = await this.page.textContent(
      values.listCompanyAmountOne,
    );

    const listCustomerAmountOneText = await this.page.textContent(
      values.listCustomerAmountOne,
    );

    const listCustomerCreatedDateOneText = await this.page.textContent(
      values.listCreatedDateOneArea,
    );

    const listCustomerStatusOneText = await this.page.textContent(
      values.listStatusOneArea,
    );

    const listAgreedRateOneText = await this.page.textContent(
      values.listAgreedRateOne,
    );

    //Log Detayına gidilir
    await clickAndWait(this.page, values.operationDetailOneButton, 2000);
    await clickAndWait(this.page, values.goDetailButtonOne, 2000);
    await clickAndWait(this.page, values.customerLogDetailOneButton, 2000);

    // Sağ Taraftaki Details Kısmı
    const logDetailsLoanIDText = await this.page.textContent(
      values.logDetailsLoanIDArea,
    );

    const logDetailsCustomerNameText = await this.page.textContent(
      values.logDetailsCustomerNameArea,
    );

    const logDetailsActionText = await this.page.textContent(
      values.logDetailsActionArea,
    );

    const logDetailsStatusText = await this.page.textContent(
      values.logDetailsStatusArea,
    );

    const logDetailsCompanyAmountText = await this.page.textContent(
      values.logDetailsCompanyAmountArea,
    );

    const logDetailsCustomerAmountText = await this.page.textContent(
      values.logDetailsCustomerAmountArea,
    );

    const logDetailsAgreedRateAreaText = await this.page.textContent(
      values.logDetailsAgreedRateArea,
    );

    // Tablodaki Değerler 1. Satır
    const firstRowActionText = await this.page.textContent(
      values.firstRowAction,
    );
    const firstRowIDText = await this.page.textContent(values.firstRowID);

    // 1.Satır Detay Değerleri
    const firstRowDetailIDAreaText = await this.page.textContent(
      values.firstRowDetailIDArea,
    );
    const firstRowDetailCustomerAreaText = await this.page.textContent(
      values.firstRowDetailCustomerArea,
    );
    const modifiedFirstRowDetailCustomerAreaText =
      firstRowDetailCustomerAreaText?.substring(2);
    const firstRowDetailCompanyAmountAreaText = await this.page.textContent(
      values.firstRowDetailCompanyAmountArea,
    );
    const firstRowDetailCustomerAmountAreaText = await this.page.textContent(
      values.firstRowDetailCustomerAmountArea,
    );
    const firstRowDetailAgreedRateAreaText = await this.page.textContent(
      values.firstRowDetailAgreedRateArea,
    );
    // Assertion Kısmı
    expect(listCustomerIDOneText).toEqual(logDetailsLoanIDText); //ID Ler
    expect(listCustomerIDOneText).toEqual(firstRowDetailIDAreaText);
    expect(listCustomerIDOneText).toEqual(firstRowIDText);
    expect(logDetailsLoanIDText).toEqual(firstRowDetailIDAreaText);

    expect(listCustomerNameOneText).toEqual(logDetailsCustomerNameText); // Nameler
    expect(listCustomerNameOneText).toEqual(
      modifiedFirstRowDetailCustomerAreaText,
    );
    expect(logDetailsCustomerNameText).toEqual(
      modifiedFirstRowDetailCustomerAreaText,
    );

    expect(listCompanyAmountOneText).toEqual(logDetailsCompanyAmountText); // Company Amount
    expect(listCompanyAmountOneText).toEqual(
      firstRowDetailCompanyAmountAreaText,
    );
    expect(logDetailsCompanyAmountText).toEqual(
      firstRowDetailCompanyAmountAreaText,
    );

    expect(listCustomerAmountOneText).toEqual(logDetailsCustomerAmountText); // Customer Amount
    expect(listCustomerAmountOneText).toEqual(
      firstRowDetailCustomerAmountAreaText,
    );
    expect(logDetailsCustomerAmountText).toEqual(
      firstRowDetailCustomerAmountAreaText,
    );

    //decimaller tekrar düzenlenir
    if (
      listAgreedRateOneText !== null &&
      logDetailsAgreedRateAreaText !== null
    ) {
      const numericListAgreedRate = parseFloat(listAgreedRateOneText);
      const formattedListAgreedRate = numericListAgreedRate.toFixed(8);

      const numericLogDetailsAgreedRate = parseFloat(
        logDetailsAgreedRateAreaText,
      );
      const formattedLogDetailsAgreedRate =
        numericLogDetailsAgreedRate.toFixed(8);

      const numericRowDetailAgreedRate = parseFloat(listAgreedRateOneText);
      const formattedRowDetailAgreedRate =
        numericRowDetailAgreedRate.toFixed(8);

      expect(formattedListAgreedRate).toEqual(formattedLogDetailsAgreedRate); // Agreed Rate
      expect(formattedListAgreedRate).toEqual(formattedRowDetailAgreedRate);
      expect(formattedRowDetailAgreedRate).toEqual(
        formattedLogDetailsAgreedRate,
      );
    }
    expect(listCustomerStatusOneText).toEqual(logDetailsStatusText); //Status
    expect(listCustomerStatusOneText).toEqual(values.statusOpen);
    expect(logDetailsStatusText).toEqual(values.statusOpen);
    expect(firstRowActionText).toEqual(values.actionCreate); // Action alanında Create yazıyor mu
  }

  async logDetailsCheckShiftOperation() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);
    // Operations Sayfasında olan bilgiler 1.satır
    const listCustomerIDOneText = await this.page.textContent(
      values.listIDOneArea,
    );
    const listCustomerNameOneText = await this.page.textContent(
      values.listCustomerNameOne,
    );
    const listCompanyAmountOneText = await this.page.textContent(
      values.listCompanyAmountOne,
    );
    const listCustomerAmountOneText = await this.page.textContent(
      values.listCustomerAmountOne,
    );
    const listAgreedRateOneText = await this.page.textContent(
      values.listAgreedRateOne,
    );
    //Operations Sayfasında olan bilgiler 2.satır
    const listIDTwoAreaText = await this.page.textContent(values.listIDTwoArea);
    const listCustomerNameTwoText = await this.page.textContent(
      values.listCustomerNameTwo,
    );
    const listCompanyAmountTwoText = await this.page.textContent(
      values.listCompanyAmountTwo,
    );
    const listCustomerAmountTwoText = await this.page.textContent(
      values.listCustomerAmountTwo,
    );
    //const listCustomerCreatedDateTwoText = await this.page.textContent(values.listCreatedDateTwoArea);
    const listCustomerStatusTwoText = await this.page.textContent(
      values.listStatusTwoArea,
    );
    const listAgreedRateTwoText = await this.page.textContent(
      values.listAgreedRateTwo,
    );

    await clickAndWait(this.page, values.goDetailButtonTwo, 2000);
    await clickAndWait(this.page, values.customerTwoLogDetailButton, 2000); // Shifted olan
    await clickAndWait(this.page, values.customerLogDetailOneButton, 2000);
    // Sağ Taraftaki Details Kısmı
    const logDetailsLoanIDText = await this.page.textContent(
      values.logDetailsLoanIDArea,
    );
    const logDetailsCustomerNameText = await this.page.textContent(
      values.logDetailsCustomerNameArea,
    );
    const logDetailsStatusText = await this.page.textContent(
      values.logDetailsStatusArea,
    );
    const logDetailsCompanyAmountText = await this.page.textContent(
      values.logDetailsCompanyAmountArea,
    );
    const logDetailsCustomerAmountText = await this.page.textContent(
      values.logDetailsCustomerAmountArea,
    );
    const logDetailsAgreedRateAreaText = await this.page.textContent(
      values.logDetailsAgreedRateArea,
    );
    // Tablodaki Değerler 1. Satır
    const firstRowActionText = await this.page.textContent(
      values.firstRowAction,
    );
    // 1.Satır Detay Değerleri
    const firstRowDetailCustomerAreaText = await this.page.textContent(
      values.firstRowDetailCustomerArea,
    );
    const modifiedFirstRowDetailCustomerAreaText =
      firstRowDetailCustomerAreaText?.substring(2);
    const firstRowDetailCompanyAmountAreaText = await this.page.textContent(
      values.firstRowDetailCompanyAmountArea,
    );
    const firstRowDetailCustomerAmountAreaText = await this.page.textContent(
      values.firstRowDetailCustomerAmountArea,
    );
    const firstRowDetailAgreedRateAreaText = await this.page.textContent(
      values.firstRowDetailAgreedRateArea,
    );
    //assertion kısımı
    expect(listIDTwoAreaText).toEqual(logDetailsLoanIDText); //ID Ler

    expect(listCustomerNameOneText).toEqual(
      modifiedFirstRowDetailCustomerAreaText,
    ); // Name'ler
    expect(listCustomerNameTwoText).toEqual(logDetailsCustomerNameText);

    expect(listCompanyAmountOneText).toEqual(
      firstRowDetailCompanyAmountAreaText,
    ); // Company Amount
    expect(listCompanyAmountTwoText).toEqual(logDetailsCompanyAmountText);

    expect(listCustomerAmountOneText).toEqual(
      firstRowDetailCustomerAmountAreaText,
    ); // Customer Amount
    expect(listCustomerAmountTwoText).toEqual(logDetailsCustomerAmountText);

    //decimaller tekrar düzenlenir
    if (
      listAgreedRateOneText !== null &&
      logDetailsAgreedRateAreaText !== null &&
      firstRowDetailAgreedRateAreaText !== null
    ) {
      const numericListAgreedRate = parseFloat(listAgreedRateOneText);
      const formattedListAgreedRate = numericListAgreedRate.toFixed(8);

      const numericLogDetailsAgreedRate = parseFloat(
        logDetailsAgreedRateAreaText,
      );
      const formattedLogDetailsAgreedRate =
        numericLogDetailsAgreedRate.toFixed(8);

      const numericRowDetailAgreedRate = parseFloat(
        firstRowDetailAgreedRateAreaText,
      );
      const formattedRowDetailAgreedRate =
        numericRowDetailAgreedRate.toFixed(8);

      expect(formattedListAgreedRate).toEqual(formattedLogDetailsAgreedRate); // Agreed Rate
      expect(formattedListAgreedRate).toEqual(formattedRowDetailAgreedRate);
      expect(formattedRowDetailAgreedRate).toEqual(
        formattedLogDetailsAgreedRate,
      );
    }

    expect(listCustomerStatusTwoText).toEqual(values.actionShifted); // Actions
    expect(logDetailsStatusText).toEqual(values.actionShifted);
    expect(firstRowActionText).toEqual(values.actionShift);

    await this.page.goto(`${baseURL}/loan/operations`);
    await clickAndWait(this.page, values.operationDetailOneButton, 2000);
    await clickAndWait(this.page, values.goDetailButtonOne, 2000); // Shift olan hesap - name7042 lastname7042

    const shiftLogDetailsLoanIDText = await this.page.textContent(
      values.logDetailsLoanIDArea,
    );
    const shiftLogDetailsCustomerNameText = await this.page.textContent(
      values.logDetailsCustomerNameArea,
    );
    const shiftLogDetailsCompanyAmountText = await this.page.textContent(
      values.logDetailsCompanyAmountArea,
    );
    const shiftLogDetailsCustomerAmountText = await this.page.textContent(
      values.logDetailsCustomerAmountArea,
    );
    const shiftLogDetailsAgreedRateAreaText = await this.page.textContent(
      values.logDetailsAgreedRateArea,
    );

    expect(listCustomerIDOneText).toEqual(shiftLogDetailsLoanIDText); //ID Ler
    expect(listCustomerNameOneText).toEqual(shiftLogDetailsCustomerNameText); // Nameler
    expect(listCompanyAmountOneText).toEqual(shiftLogDetailsCompanyAmountText); // Company Amount
    expect(listCustomerAmountOneText).toEqual(
      shiftLogDetailsCustomerAmountText,
    ); // Customer Amount
    expect(listAgreedRateOneText).toEqual(shiftLogDetailsAgreedRateAreaText); // Agreed Rate
  }
  async logDetailsCheckSplitOperation() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.operationDetailOneButton, 500);
    await clickAndWait(this.page, values.splitAndShiftButtonFirstRow, 500);
    await clickAndWait(this.page, values.addFieldButton, 500);
    await fillAndWait(this.page, values.firstInputCompanyAmount, '400', 2000);
    await clickAndWait(this.page, values.splitAndShiftSaveButton, 2000);
    // Operation sayfasından bilgileri çekiyor.
    const listCustomerIDOneText = await this.page.textContent(
      values.listIDOneArea,
    );
    const listCustomerNameOneText = await this.page.textContent(
      values.listCustomerNameOne,
    );
    const listCompanyAmountOneText = await this.page.textContent(
      values.listCompanyAmountOne,
    );
    const listCustomerAmountOneText = await this.page.textContent(
      values.listCustomerAmountOne,
    );
    const listAgreedRateOneText = await this.page.textContent(
      values.listAgreedRateOne,
    );
    //Operations Sayfasında olan bilgiler 2.satır
    const listIDTwoAreaText = await this.page.textContent(values.listIDTwoArea);
    const listCustomerNameTwoText = await this.page.textContent(
      values.listCustomerNameTwo,
    );
    const listCompanyAmountTwoText = await this.page.textContent(
      values.listCompanyAmountTwo,
    );
    const listCustomerAmountTwoText = await this.page.textContent(
      values.listCustomerAmountTwo,
    );
    const listAgreedRateTwoText = await this.page.textContent(
      values.listAgreedRateTwo,
    );

    //Operations Sayfasında olan bilgiler 3.satır
    await clickAndWait(this.page, values.operationDetailOneButton, 2000);
    await clickAndWait(this.page, values.goDetailButtonOne, 2000); // Split olan ilk sıra

    const splitFirstLogDetailsLoanIDText = await this.page.textContent(
      values.logDetailsLoanIDArea,
    );
    const splitFirstLogDetailsCustomerNameText = await this.page.textContent(
      values.logDetailsCustomerNameArea,
    );
    const splitFirstLogDetailsCompanyAmountText = await this.page.textContent(
      values.logDetailsCompanyAmountArea,
    );
    const splitFirstLogDetailsCustomerAmountText = await this.page.textContent(
      values.logDetailsCustomerAmountArea,
    );
    const splitFirstLogDetailsAgreedRateAreaText = await this.page.textContent(
      values.logDetailsAgreedRateArea,
    );

    expect(listCustomerIDOneText).toEqual(splitFirstLogDetailsLoanIDText); //ID Ler
    expect(listCustomerNameOneText).toEqual(
      splitFirstLogDetailsCustomerNameText,
    ); // Name'ler
    expect(listCompanyAmountOneText).toEqual(
      splitFirstLogDetailsCompanyAmountText,
    ); // Company Amount
    expect(listCustomerAmountOneText).toEqual(
      splitFirstLogDetailsCustomerAmountText,
    ); // Customer Amount
    expect(listAgreedRateOneText).toEqual(
      splitFirstLogDetailsAgreedRateAreaText,
    ); // Agreed Rate
    await this.page.goto(`${baseURL}/loan/operations`);
    await clickAndWait(this.page, values.goDetailButtonTwo, 2000);
    await clickAndWait(this.page, values.customerTwoLogDetailButton, 2000); // Shifted olan

    const logDetailsLoanIDText = await this.page.textContent(
      values.logDetailsLoanIDArea,
    );
    const logDetailsCustomerNameText = await this.page.textContent(
      values.logDetailsCustomerNameArea,
    );
    const logDetailsCompanyAmountText = await this.page.textContent(
      values.logDetailsCompanyAmountArea,
    );
    const logDetailsCustomerAmountText = await this.page.textContent(
      values.logDetailsCustomerAmountArea,
    );
    const logDetailsAgreedRateAreaText = await this.page.textContent(
      values.logDetailsAgreedRateArea,
    );

    expect(listIDTwoAreaText).toEqual(logDetailsLoanIDText); //ID Ler
    expect(listCustomerNameTwoText).toEqual(logDetailsCustomerNameText); // Nameler
    expect(listCompanyAmountTwoText).toEqual(logDetailsCompanyAmountText); // Company Amount
    expect(listCustomerAmountTwoText).toEqual(logDetailsCustomerAmountText); // Customer Amount
    expect(listAgreedRateTwoText).toEqual(logDetailsAgreedRateAreaText); // Agreed Rate
  }
  async logDetailsCheckEditOperation() {
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(5000);
    // Operation sayfasından bilgileri çekiyor.
    const listCustomerIDOneText = await this.page.textContent(
      values.listIDOneArea,
    );
    const listCustomerNameOneText = await this.page.textContent(
      values.listCustomerNameOne,
    );

    const listCompanyAmountOneText = await this.page.textContent(
      values.listCompanyAmountOne,
    );
    const listCustomerAmountOneText = await this.page.textContent(
      values.listCustomerAmountOne,
    );
    const listAgreedRateOneText = await this.page.textContent(
      values.listAgreedRateOne,
    );

    await clickAndWait(this.page, values.operationDetailOneButton, 2000);
    await clickAndWait(this.page, values.goDetailButtonOne, 2000);
    await clickAndWait(this.page, values.secondRowDetailButton, 2000);
    //Sağ taraftaki detay
    const logDetailsLoanIDText = await this.page.textContent(
      values.logDetailsLoanIDArea,
    );
    const logDetailsCustomerNameText = await this.page.textContent(
      values.logDetailsCustomerNameArea,
    );
    const logDetailsStatusText = await this.page.textContent(
      values.logDetailsStatusArea,
    );
    const logDetailsCompanyAmountText = await this.page.textContent(
      values.logDetailsCompanyAmountArea,
    );
    const logDetailsCustomerAmountText = await this.page.textContent(
      values.logDetailsCustomerAmountArea,
    );
    const logDetailsAgreedRateAreaText = await this.page.textContent(
      values.logDetailsAgreedRateArea,
    );
    //Değişen bilgiler
    const secondRowDetailIDText = await this.page.textContent(
      values.secondRowDetailIDArea,
    );
    const secondRowDetailCustomerNameText = await this.page.textContent(
      values.secondRowDetailCustomerArea,
    );
    const modifiedSecondRowDetailCustomerNameText =
      secondRowDetailCustomerNameText?.substring(2);
    const secondRowDetailCompanyAmountAreaText = await this.page.textContent(
      values.secondRowDetailCompanyAmountArea,
    );
    const secondRowDetailCustomerAmountAreaText = await this.page.textContent(
      values.secondRowDetailCustomerAmountArea,
    );
    const secondRowDetailAgreedRateLogAreaText = await this.page.textContent(
      values.secondRowDetailAgreedRateLogArea,
    );

    expect(listCustomerIDOneText).toEqual(logDetailsLoanIDText); //ID Ler
    expect(listCustomerIDOneText).toEqual(secondRowDetailIDText);
    expect(logDetailsLoanIDText).toEqual(secondRowDetailIDText);

    expect(listCustomerNameOneText).toEqual(logDetailsCustomerNameText); // Nameler
    expect(listCustomerNameOneText).toEqual(
      modifiedSecondRowDetailCustomerNameText,
    );
    expect(logDetailsCustomerNameText).toEqual(
      modifiedSecondRowDetailCustomerNameText,
    );

    expect(listCompanyAmountOneText).toEqual(logDetailsCompanyAmountText); // Company Amount
    expect(listCompanyAmountOneText).toEqual(
      secondRowDetailCompanyAmountAreaText,
    );
    expect(logDetailsCompanyAmountText).toEqual(
      secondRowDetailCompanyAmountAreaText,
    );

    expect(listCustomerAmountOneText).toEqual(logDetailsCustomerAmountText); // Customer Amount
    expect(listCustomerAmountOneText).toEqual(
      secondRowDetailCustomerAmountAreaText,
    );
    expect(logDetailsCustomerAmountText).toEqual(
      secondRowDetailCustomerAmountAreaText,
    );
    if (
      listAgreedRateOneText !== null &&
      logDetailsAgreedRateAreaText !== null &&
      secondRowDetailAgreedRateLogAreaText !== null
    ) {
      const numericListAgreedRate = parseFloat(listAgreedRateOneText);
      const formattedListAgreedRate = numericListAgreedRate.toFixed(8);

      const numericLogDetailsAgreedRate = parseFloat(
        logDetailsAgreedRateAreaText,
      );
      const formattedLogDetailsAgreedRate =
        numericLogDetailsAgreedRate.toFixed(8);

      const numericSecondRowDetailAgreedRate = parseFloat(
        secondRowDetailAgreedRateLogAreaText,
      );
      const formattedSecondRowDetailAgreedRate =
        numericSecondRowDetailAgreedRate.toFixed(8);

      expect(formattedListAgreedRate).toEqual(formattedLogDetailsAgreedRate); // Agreed Rate
      expect(formattedListAgreedRate).toEqual(
        formattedSecondRowDetailAgreedRate,
      );
      expect(formattedSecondRowDetailAgreedRate).toEqual(
        formattedLogDetailsAgreedRate,
      );
    }
  }
}
