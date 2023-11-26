import { expect, Page } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../component/constant';
import values from '../../pageobjects/exchange/definitions.utils';
import { baseURL } from '../../pageobjects/loginPage';

export default class DefinitionsPage {
  constructor(public page: Page) {}

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
  async getElementInnerText(
    page: Page,
    selector: string,
  ): Promise<string | undefined> {
    const element = await page.locator(selector);
    const innerText: string | undefined = await element.innerText();
    return innerText;
  }
  async addAsset() {
    await this.page.goto(`${baseURL}/settings/modules/exchange-office`);
    await clickAndWait(this.page, values.addButton, 1000);
    await fillAndWait(this.page, values.displayName, values.nameText, 500);

    //Rasgele Parite seçilir
    await clickAndWait(this.page, values.parityArea, 500);

    const parityElements = await this.page.$$(values.parityDropdown);
    const parityRandomIndex = Math.floor(Math.random() * parityElements.length); // Rastgele bir indeks seçin
    const parityRandomElement = parityElements[parityRandomIndex];
    await parityRandomElement.click();

    const selectedParity = await this.getElementInnerText(
      this.page,
      values.selectedParity,
    );

    //Rasgele Base Currency seçilir
    await clickAndWait(this.page, values.baseCurrencyArea, 500);

    const baseCurrencyElements = await this.page.$$(
      values.baseCurrencyDropdown,
    );
    const baseCurrencyRandomIndex = Math.floor(
      Math.random() * baseCurrencyElements.length,
    ); // Rastgele bir indeks seçin
    const baseCurrencyRandomElement =
      baseCurrencyElements[baseCurrencyRandomIndex];

    await baseCurrencyRandomElement.click();

    const selectedBaseCurrency = await this.getElementInnerText(
      this.page,
      values.selectedBaseCurrency,
    );

    console.log('selectedBaseCurrency:', selectedBaseCurrency);

    //Rasgele Quote Currency seçilir
    await clickAndWait(this.page, values.quoteCurrencyArea, 500);

    const quoteCurrencyElements = await this.page.$$(
      values.quoteCurrencyDropdown,
    );
    const quoteCurrencyRandomIndex = Math.floor(
      Math.random() * quoteCurrencyElements.length,
    ); // Rastgele bir indeks seçin
    const quoteCurrencyRandomElement =
      quoteCurrencyElements[quoteCurrencyRandomIndex];

    await quoteCurrencyRandomElement.click();

    const selectedQuoteCurrency = await this.getElementInnerText(
      this.page,
      values.selectedQuoteCurrency,
    );

    console.log('selectedQuoteCurrency:', selectedQuoteCurrency);

    await fillAndWait(this.page, values.askDifferenceInput, '4', 500);
    await fillAndWait(this.page, values.bidDifferenceInput, '3', 500);
    await fillAndWait(this.page, values.rateDigistsInput, '2', 500);
    await fillAndWait(this.page, values.rateSmallDigistsInput, '1', 500);
    await clickAndWait(this.page, values.newAssetSaveButton, 1000);

    //-- Değerler listeye doğru düşüyor mu kontrol edelim---

    const listParity = await this.getElementInnerText(
      this.page,
      values.listParity,
    );
    console.log('listParity:', listParity);
    expect(listParity).toEqual(selectedParity);

    const listDisplayName = await this.getElementInnerText(
      this.page,
      values.listDisplayName,
    );
    console.log('listDisplayName:', listDisplayName);
    expect(listDisplayName).toEqual(values.nameText);

    const listBaseCurrency = await this.getElementInnerText(
      this.page,
      values.listBaseCurrency,
    );
    console.log('listBaseCurrency:', listBaseCurrency);
    // expect(listBaseCurrency).toEqual(selectedBaseCurrency);

    const listPairCurrency = await this.getElementInnerText(
      this.page,
      values.listPairCurrency,
    );
    console.log('listPairCurrency:', listPairCurrency);
    // expect(listPairCurrency).toEqual(selectedQuoteCurrency);

    const listAskDifference = await this.getElementInnerText(
      this.page,
      values.listAskDifference,
    );
    console.log('listAskDifference:', listAskDifference);
    expect(listAskDifference).toEqual('4');

    const listBidDifference = await this.getElementInnerText(
      this.page,
      values.listBidDifference,
    );
    console.log('listBidDifference:', listBidDifference);
    expect(listBidDifference).toEqual('3');
  }
  async removeAsset() {
    await this.page.goto(`${baseURL}/settings/modules/exchange-office`);
    await clickAndWait(this.page, values.assetDetailButton, 500);
    await clickAndWait(this.page, values.removeAssetButton, 500);
    await clickAndWait(this.page, values.removeConfirmAssetButton, 500);

    const listParity = await this.getElementInnerText(
      this.page,
      values.listParity,
    );
    expect(values.listParity).not.toContain(listParity);
  }
  async editAsset() {
    await this.page.goto(`${baseURL}/settings/modules/exchange-office`);
    await clickAndWait(this.page, values.assetDetailButton, 500);
    await clickAndWait(this.page, values.assetEditButton, 500); //assetEditButton

    await fillAndWait(this.page, values.displayName, 'EditedAssetName', 1000);

    //Rasgele Parite seçilir
    await clickAndWait(this.page, values.parityArea, 2000);

    const parityElements = await this.page.$$(values.parityDropdown);
    const parityRandomIndex = Math.floor(Math.random() * parityElements.length); // Rastgele bir indeks seçin
    const parityRandomElement = parityElements[parityRandomIndex];
    await parityRandomElement.click();

    const selectedParity = await this.getElementInnerText(
      this.page,
      values.selectedParity,
    );
    console.log('selectedParity:', selectedParity);

    //Rasgele Base Currency seçilir
    await clickAndWait(this.page, values.baseCurrencyArea, 3000);

    const baseCurrencyElements = await this.page.$$(
      values.baseCurrencyDropdown,
    );
    const baseCurrencyRandomIndex = Math.floor(
      Math.random() * baseCurrencyElements.length,
    ); // Rastgele bir indeks seçin
    const baseCurrencyRandomElement =
      baseCurrencyElements[baseCurrencyRandomIndex];

    await baseCurrencyRandomElement.click();

    const selectedBaseCurrency = await this.getElementInnerText(
      this.page,
      values.selectedBaseCurrency,
    );

    console.log('selectedBaseCurrency:', selectedBaseCurrency);

    //Rasgele Quote Currency seçilir
    await clickAndWait(this.page, values.quoteCurrencyArea, 1000);

    const quoteCurrencyElements = await this.page.$$(
      values.quoteCurrencyDropdown,
    );
    const quoteCurrencyRandomIndex = Math.floor(
      Math.random() * quoteCurrencyElements.length,
    ); // Rastgele bir indeks seçin
    const quoteCurrencyRandomElement =
      quoteCurrencyElements[quoteCurrencyRandomIndex];

    await quoteCurrencyRandomElement.click();

    const selectedQuoteCurrency = await this.getElementInnerText(
      this.page,
      values.selectedQuoteCurrency,
    );

    console.log('selectedQuoteCurrency:', selectedQuoteCurrency);

    await fillAndWait(this.page, values.askDifferenceInput, '8', 500);
    await fillAndWait(this.page, values.bidDifferenceInput, '7', 500);
    await fillAndWait(this.page, values.rateDigistsInput, '6', 500);
    await fillAndWait(this.page, values.rateSmallDigistsInput, '5', 500);
    await clickAndWait(this.page, values.newAssetSaveButton, 500);

    //-- Değerler listeye doğru düşüyor mu kontrol edelim---

    const listParity = await this.getElementInnerText(
      this.page,
      values.listParity,
    );
    console.log('listParity:', listParity);
    expect(listParity).toEqual(selectedParity);

    const listDisplayName = await this.getElementInnerText(
      this.page,
      values.listDisplayName,
    );
    console.log('listDisplayName:', listDisplayName);
    expect(listDisplayName).toEqual('EditedAssetName');

    const listBaseCurrency = await this.getElementInnerText(
      this.page,
      values.listBaseCurrency,
    );
    console.log('listBaseCurrency:', listBaseCurrency);
    // expect(listBaseCurrency).toEqual(selectedBaseCurrency);

    const listPairCurrency = await this.getElementInnerText(
      this.page,
      values.listPairCurrency,
    );
    console.log('listPairCurrency:', listPairCurrency);
    // expect(listPairCurrency).toEqual(selectedQuoteCurrency);

    const listAskDifference = await this.getElementInnerText(
      this.page,
      values.listAskDifference,
    );
    console.log('listAskDifference:', listAskDifference);
    expect(listAskDifference).toEqual('8');

    const listBidDifference = await this.getElementInnerText(
      this.page,
      values.listBidDifference,
    );
    console.log('listBidDifference:', listBidDifference);
    expect(listBidDifference).toEqual('7');
  }
  async isCurrencyEditingDisabled(
    customerSelectIndex: number,
    companyAmount: string,
    exchangeRate: string,
  ) {
    //new assetin içerdiği para birimleriyle operasyon yaratılır
    await this.page.goto(`${baseURL}/loan/operations`);
    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.newOperationButton, 1000);

    // Operasyon Değerleri girilir
    await this.page.click(values.customerInput);
    await this.page.waitForTimeout(1000);

    await this.page.click(`ul > li:nth-of-type(${customerSelectIndex})`);
    await this.page.click(values.assetsInput);
    await fillAndWait(
      this.page,
      values.loanAssetSearchInput,
      values.nameText,
      1000,
    );
    await this.page.click(values.selectDisplayName);

    // Değerleri parametre olarak geçirilen değerlerle doldur
    await this.page.locator(values.exchangeRate).fill(exchangeRate);

    await clickAndWait(this.page, values.companyAmountInput, 1000);
    await this.page.locator(values.companyAmountInput).fill(companyAmount);

    await this.page.click(values.operationCreateButton);
    await this.page.waitForTimeout(1000);

    //Settiğing Exchange Office sayfasında editlenemeyeceği kontrol edilir
    await this.page.goto(`${baseURL}/settings/modules/exchange-office`);
    await clickAndWait(this.page, values.assetDetailButton, 500);
    await clickAndWait(this.page, values.assetEditButton, 500);

    const inputSelectors = [
      values.displayName,
      // values.selectedParity,
      // values.selectedBaseCurrency,
      // values.selectedQuoteCurrency,
    ];

    for (const inputSelector of inputSelectors) {
      await this.page.waitForSelector(inputSelector); // Input alanını bekleyin ve seçin

      const input = await this.page.$(inputSelector); // Input alanını seçin

      if (input) {
        const isDisabled = await input.isDisabled(); // Input alanının etkisiz olup olmadığını kontrol edin

        expect(isDisabled).toBeTruthy(); // Input alanının etkisiz olması bekleniyor
      } else {
        throw new Error('Input element not found');
      }
    }
  }
}
