import { expect, Page } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../component/constant';
import values from '../../pageobjects/exchange/capital.utils';
import { baseURL } from '../../pageobjects/loginPage';

export default class CapitalPage {
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
  async addNewCapital() {
    await this.page.goto(`${baseURL}/loan/capital`);
    await this.page.waitForTimeout(1000);

    await clickAndWait(this.page, values.addNewCapitalButton, 1000);
    await fillAndWait(this.page, values.newCapitalBalanceArea, '20000', 1000);
    await clickAndWait(this.page, values.newCapitalCurrencySelect, 1000);
    await this.randomSelect();
    const newCapitalCurrencyText = await this.page.textContent(
      values.newCapitalCurrencySelect,
    );

    await clickAndWait(this.page, values.newCapitalSaveButton, 500);

    const tableCurrencyNameText = await this.page.textContent(
      values.tableCurrencyFirstNameArea,
    );

    expect(tableCurrencyNameText).toContain(newCapitalCurrencyText);
  }
  async capitalDeleteCurrency() {
    await this.page.goto(`${baseURL}/loan/capital`);
    await this.page.waitForTimeout(1000);
    const tableCurrencyNameDelete = await this.page.textContent(
      values.tableCurrencyFirstNameArea,
    );
    await clickAndWait(this.page, values.tableFirstCurrencyDetailButton, 500);
    await clickAndWait(this.page, values.tableCurrencyDeleteButton, 500);
    await clickAndWait(this.page, values.tableCurrencyDeleteConfirmButton, 500);
    const tableCurrencyNameAfter = await this.page.textContent(
      values.tableCurrencyFirstNameArea,
    );

    expect(tableCurrencyNameDelete).not.toEqual(tableCurrencyNameAfter);
  }
  async totalCapitalCheck() {
    await this.page.goto(`${baseURL}/loan/capital`);
    await this.page.waitForTimeout(1000);

    const currencyBox =
      '[class="items-center gap-2 hidden md:flex"] [tabindex]';
    await clickAndWait(this.page, currencyBox, 500);
    this.randomSelect();
    await this.page.waitForTimeout(500);

    // CSS selektörü ile belirtilen tüm elementleri seç
    const allCurrencyAmount =
      '.bg-gray-100.border.border-frame.dark\\:bg-zinc-800.p-4.rounded-md > .mt-1.text-right';
    const values = await this.page.$$eval(allCurrencyAmount, (elements) => {
      const pattern = /[^\d.]/g; // Sayı dışındaki karakterleri temizle

      return elements.map((element) => {
        const text = element.textContent || '';
        const value = parseFloat(text.replace(pattern, '') || '0');
        return value;
      });
    });
    console.log('Total values:', values);

    // Toplamı hesapla
    const total = values.reduce((sum, value) => sum + value, 0);

    // Total Capital değerini al
    const totalCapitalText = await this.page.textContent(
      '[data-test-id="exchange-capital-total-capitals-price-text"]',
    );
    const totalCapital = parseFloat(
      totalCapitalText?.replace(/[^\d.]/g, '') || '0',
    );

    // Tolerans ve fark kontrolü
    const tolerance = 0.02; // Tolerans değeri
    const difference = Math.abs(totalCapital - total);

    // Farkın toleransa eşit veya küçük olup olmadığını kontrol et
    expect(difference).toBeLessThanOrEqual(tolerance);
    expect(total).toEqual(totalCapital);
    console.log('Toplam Değerlerin Toplamı:', total);
    console.log('Total Capital:', totalCapital);
  }

  async editCapitalCurrent() {
    await this.page.goto(`${baseURL}/loan/capital`);
    await this.page.waitForTimeout(1000);
    await clickAndWait(this.page, values.tableFirstCurrencyDetailButton, 500);
    await clickAndWait(this.page, values.tableFirstCurrencyEditSelect, 500);
    await fillAndWait(this.page, values.newCapitalBalanceArea, '120000', 500);

    const newCapitalBalanceText = await this.getInputNumericValue(
      this.page,
      values.newCapitalBalanceArea,
    );

    await clickAndWait(this.page, values.newCapitalSaveButton, 500);
    const tableFirstCurrencyArea = await this.page.textContent(
      values.tableFirstCurrencyArea,
    );
    if (tableFirstCurrencyArea !== null) {
      const cleanedTableFirstCurrencyArea = parseFloat(
        tableFirstCurrencyArea.replace(/[^0-9.-]+/g, ''),
      );

      expect(cleanedTableFirstCurrencyArea).toEqual(newCapitalBalanceText);
    }
  }
}
