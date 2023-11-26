import { expect, Page } from '@playwright/test';
import { clickAndWait } from '../../component/constant';
import values from '../../pageobjects/exchange/customer-currents.utils';
import { baseURL } from '../../pageobjects/loginPage';

export default class CustomerCurrentsPage {
  constructor(public page: Page) {}

  async newTransform() {
    await this.page.goto(`${baseURL}/loan/customer`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.customerSelectArea, 500);
    await clickAndWait(this.page, values.customerCurrentSelect, 500);

    await clickAndWait(this.page, values.detailButton, 500);
    await clickAndWait(this.page, values.goToDetail, 500);

    await clickAndWait(this.page, values.newTransformButton, 500);

    await clickAndWait(this.page, values.loanAssetInput, 500);
    await clickAndWait(this.page, values.usdTry, 500);
    await this.page.locator(values.companyAmountArea).fill('1000');
    await this.page.locator(values.rateArea).fill('10');

    // *****Buy işleminde Company ve Customer Amount değerleri alın******
    const companyAmountValue = await this.getInputNumericValue(
      this.page,
      values.companyAmountArea,
    );
    const customerAmountValue = await this.getInputNumericValue(
      this.page,
      values.customerAmountArea,
    );

    await clickAndWait(this.page, values.saveButton, 1000);

    //USD tab'ındaki transform işlemi içindeki değeri alın
    const companyAmountListValue: string | undefined =
      await this.getElementInnerText(this.page, values.usdTabValue);

    //TRY tab'ındaki transform işlemi içindeki değeri alın
    const customerAmountListValue: string | undefined =
      await this.getElementInnerText(this.page, values.tryTabValue);

    // companyAmount ve customerAmount değerlerini listedeki gösterim biçimine uygun hale getir
    if (companyAmountValue !== null) {
      const formattedCompanyAmountValue = companyAmountValue.toLocaleString(
        undefined,
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      );

      const targetCompanyAmountListValue = `-$${formattedCompanyAmountValue}`;

      if (customerAmountValue !== null) {
        const formattedCustomerAmountValue = customerAmountValue.toLocaleString(
          undefined,
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          },
        );

        const targetCustomerAmountListValue = `+₺${formattedCustomerAmountValue}`;

        // totalAmount ve mainAmountNumber değerlerini karşılaştırın

        if (
          targetCompanyAmountListValue === companyAmountListValue &&
          targetCustomerAmountListValue === customerAmountListValue
        ) {
          console.log(
            'companyAmountValue ve companyAmountListValue & customerAmountValue ve customerAmountListValue eşit.',
          );
        } else {
          console.error(
            'companyAmountValue ve companyAmountListValue veya customerAmountValue ve customerAmountListValue eşit değil.',
          );
          throw new Error('totalAmount ve mainAmountNumber eşit değil.');
        }
      } else {
        console.error('Sayısal değerlerde null veya geçersiz değerler var.');
        throw new Error('Sayısal değerlerde null veya geçersiz değerler var.');
      }
    }

    const actionNameList: string | undefined = await this.getElementInnerText(
      this.page,
      values.actionTab,
    ); //Action ismi

    expect(values.transformActionName).toEqual(actionNameList);
    console.log(actionNameList);
  }
  async newEntry() {
    await this.page.goto(`${baseURL}/loan/customer`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.customerSelectArea, 500);
    await clickAndWait(this.page, values.customerCurrentSelect, 500);

    await clickAndWait(this.page, values.detailButton, 500);
    await clickAndWait(this.page, values.goToDetail, 500);

    await clickAndWait(this.page, values.newEntryButton, 500);
    await clickAndWait(this.page, values.balanceGroup, 500);
    await clickAndWait(this.page, values.selectUsd, 500);
    await this.page.locator(values.balanceInput).fill('800');
    await clickAndWait(this.page, values.companyAccountGroup, 500);
    await this.randomSelect();
    await clickAndWait(this.page, values.customerAccountGroup, 500);
    await this.randomSelect();

    const balanceInput = await this.getInputNumericValue(
      this.page,
      values.balanceInput,
    );

    await clickAndWait(this.page, values.newEntrySaveButton, 1000); //save button

    const actionNameList: string | undefined = await this.getElementInnerText(
      this.page,
      values.actionTab,
    ); //Action ismi

    console.log(actionNameList);
    expect(values.entryActionName).toEqual(actionNameList);

    //USD tab'ındaki transform işlemi içindeki değeri alın
    const companyAmountListValue: string | undefined =
      await this.getElementInnerText(this.page, values.usdTabValue);

    // companyAmount ve customerAmount değerlerini listedeki gösterim biçimine uygun hale getir
    if (balanceInput !== null) {
      const formattedbalanceInput = balanceInput.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      const targetbalanceInput = `+$${formattedbalanceInput}`;

      expect(companyAmountListValue).toEqual(targetbalanceInput);
    }
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
  async randomSelect() {
    const elements = await this.page.$$(values.dropdownList);
    const randomIndex = Math.floor(Math.random() * elements.length); // Rastgele bir indeks seçin
    const randomElement = elements[randomIndex];
    await randomElement.click();
  }
  async customerCurrentCurrencyChange() {
    await this.page.goto(`${baseURL}/loan/customer`);

    await clickAndWait(this.page, values.firstCustomer, 1000); // ilk customer seçilir
    await clickAndWait(this.page, values.boxElement, 500);
    await this.randomSelect();
    await this.page.waitForTimeout(500);

    const currencyType = await this.page.$eval(
      values.boxElement,
      (elem: HTMLElement) => elem.textContent || 'Varsayılan Değer',
    );

    const results = await this.getElementInnerText(
      this.page,
      values.totalCostArea,
    );

    const expectedCurrencySymbols: { [key: string]: string } = {
      'US Dollar': 'USD',
      'Australian Dollar': 'AUD',
      'Chinese Yuan': 'CNY',
      'Turkish Lira': 'TRY',
      Euro: 'EUR',
      'Japanese Yen': 'JPY',
      'British Pound Sterling': 'GBP',
      'Canadian Dollar': 'CAD',
      'Swiss Franc': 'CHF',
      'Hong Kong Dollar': 'HKD',
      'South Korean Won': 'KRW',
      'Singapore Dollar': 'SGD',
      'United Arab Emirates Dirham': 'AED',
      'Afghan Afghani': 'AFN',
      'Albanian Lek': 'ALL',
      'Armenian Dram': 'AMD',
      'Argentine Peso': 'ARS',
      'Azerbaijani Manat': 'AZN',
      'Bosnia-Herzegovina Convertible Mark': 'BAM',
      'Bangladeshi Taka': 'BDT',
      'Bulgarian Lev': 'BGN',
      'Bahraini Dinar': 'BHD',
      'Burundian Franc': 'BIF',
      'Brunei Dollar': 'BND',
      'Bolivian Boliviano': 'BOB',
      'Brazilian Real': 'BRL',
      'Botswanan Pula': 'BWP',
      'Belarusian Ruble': 'BYN',
      'Belize Dollar': 'BZD',
      'Congolese Franc': 'CDF',
      'Chilean Peso': 'CLP',
      'Colombian Peso': 'COP',
      'Costa Rican Colón': 'CRC',
      'Cape Verdean Escudo': 'CVE',
      'Czech Republic Koruna': 'CZK',
      'Djiboutian Franc': 'DJF',
      'Danish Krone': 'DKK',
      'Dominican Peso': 'DOP',
      'Algerian Dinar': 'DZD',
      'Estonian Kroon': 'EEK',
      'Egyptian Pound': 'EGP',
      'Eritrean Nakfa': 'ERN',
      'Ethiopian Birr': 'ETB',
      'Georgian Lari': 'GEL',
      'Ghanaian Cedi': 'GTS',
      'Guinean Franc': 'GNF',
      'Guatemalan Quetzal': 'GTQ',
      'Honduran Lempira': 'HNL',
      'Croatian Kuna': 'HRK',
      'Hungarian Forint': 'HUF',
      'Indonesian Rupiah': 'IDR',
      'Israeli New Sheqel': 'ILS',
      'Indian Rupee': 'INR',
      'Iraqi Dinar': 'IQD',
      'Iranian Rial': 'IRR',
      'Icelandic Króna': 'ISK',
      'Jamaican Dollar': 'JMD',
      'Jordanian Dinar': 'JOD',
      'Kenyan Shilling': 'KES',
      'Cambodian Riel': 'KHR',
      'Comorian Franc': 'KMF',
      'Kuwaiti Dinar': 'KWD',
      'Kazakhstani Tenge': 'KZT',
      'Lebanese Pound': 'LBP',
      'Sri Lankan Rupee': 'LKR',
      'Lithuanian Litas': 'LTL',
      'Latvian Lats': 'LVL',
      'Libyan Dinar': 'LYD',
      'Moroccan Dirham': 'MAD',
      'Moldovan Leu': 'MDL',
      'Malagasy Ariary': 'MGA',
      'Macedonian Denar': 'MKD',
      'Myanma Kyat': 'MMK',
      'Macanese Pataca': 'MOP',
      'Mauritian Rupee': 'MUR',
      'Mexican Peso': 'MXN',
      'Malaysian Ringgit': 'MYR',
      'Mozambican Metical': 'MZN',
      'Namibian Dollar': 'NAD',
      'Nigerian Naira': 'NGN',
      'Nicaraguan Córdoba': 'NIO',
      'Norwegian Krone': 'NOK',
      'Nepalese Rupee': 'NPR',
      'New Zealand Dollar': 'NZD',
      'Omani Rial': 'OMR',
      'Panamanian Balboa': 'PAB',
      'Peruvian Nuevo Sol': 'PEN',
      'Philippine Peso': 'PHP',
      'Pakistani Rupee': 'PKR',
      'Polish Zloty': 'PLN',
      'Paraguayan Guarani': 'PYG',
      'Qatari Rial': 'QAR',
      'Romanian Leu': 'RON',
      'Serbian Dinar': 'RSD',
      'Russian Ruble': 'RUB',
      'Rwandan Franc': 'RWF',
      'Saudi Riyal': 'SAR',
      'Sudanese Pound': 'SDG',
      'Swedish Krona': 'SEK',
      'Somali Shilling': 'SOS',
      'Syrian Pound': 'SYP',
      'Thai Baht': 'THB',
      'Tunisian Dinar': 'TND',
      'Tongan Paʻanga': 'TOP',
      'Trinidad and Tobago Dollar': 'TTD',
      'New Taiwan Dollar': 'TWD',
      'Tanzanian Shilling': 'TZS',
      'Ukrainian Hryvnia': 'UAH',
      'Ugandan Shilling': 'UGX',
      'Uruguayan Peso': 'UYU',
      'Uzbekistan Som': 'UZS',
      'Venezuelan Bolívar': 'VEF',
      'Vietnamese Dong': 'VND',
      'CFA Franc BEAC': 'XAF',
      'CFA Franc BCEAO': 'XOF',
      'Yemeni Rial': 'YER',
      'South African Rand': 'ZAR',
      'Zambian Kwacha': 'ZMK',
      'Zimbabwean Dollar': 'ZWL',
    };

    const expectedText = expectedCurrencySymbols[currencyType];
    console.log('expectedText:', expectedText);

    if (!expectedText) {
      console.error('Beklenen sembol bulunamadı.');
      return;
    }

    expect(results).toContain(expectedText);
  }
}
