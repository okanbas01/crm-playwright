import { Page } from '@playwright/test';
import { clickAndWait } from '../../../component/constant';
import { baseURL } from '../../../pageobjects/loginPage';
import values from '../../../pageobjects/workspace/definitions/definitions.utils';

export default class definitionsPage {
  constructor(public page: Page) {}

  async checkCurrencyStatus(page, baseUrl, pageUrls, currencyName, action) {
    await page.goto(`${baseUrl}/settings/workspace/definitions`);

    const targetCurrencyName = await page.textContent(currencyName);
    console.log(
      `${targetCurrencyName}: ${action} işlemi öncesi kontrol ediliyor.`,
    );

    if (action === 'enable') {
      await clickAndWait(page, values.enableButton, 500);
    } else if (action === 'disable') {
      await clickAndWait(page, values.detailActiveCurrencyActionButton, 500);
      await clickAndWait(page, values.disableButton, 500);
    }

    for (const pageUrl of pageUrls) {
      await page.goto(`${baseUrl}/${pageUrl}`);
      await page.waitForTimeout(2000);
      await clickAndWait(page, values.currencyBox, 500);

      // Dropdown içindeki tüm değerleri alın
      const dropdownValues = await page.$$eval(values.currencyList, (options) =>
        options.map((option) => option.textContent),
      );
      console.log('dropdownValues:', dropdownValues);

      // Kontrol etmek istediğiniz isim
      const isNameFound = dropdownValues.includes(targetCurrencyName);
      console.log('isNameFound:', isNameFound);
      console.log('action:', action);

      if (
        (isNameFound && action === 'enable') ||
        (!isNameFound && action === 'disable')
      ) {
        console.log(
          `${targetCurrencyName} dropdown içinde ${
            action === 'enable'
              ? 'bulunuyor. Başarılı!'
              : 'bulunmuyor. Başarılı!'
          }`,
        );
      } else {
        console.log(
          `${targetCurrencyName} dropdown içinde ${
            action === 'enable' ? 'bulunuyor. Hata!' : 'bulunmuyor. Hata!'
          }`,
        );
      }
    }
  }

  async manageCurrency(action) {
    const baseUrl = `${baseURL}`;
    const page = this.page;
    const pageUrls = [
      'loan/dashboard',
      'loan/customer',
      'loan/capital',
      'accounting/capital',
    ]; // Kontrol etmek istediğiniz sayfalar

    // Enable veya disable işlemini tek seferde yapın
    await this.checkCurrencyStatus(
      page,
      baseUrl,
      pageUrls,
      values.passiveCurrencyName,
      action,
    );
  }
  async checkCurrencyFilter(page, baseUrl, pageUrls, currencyName, action) {
    await page.goto(`${baseUrl}/settings/workspace/definitions`);

    const targetCurrencyName = await page.textContent(currencyName);
    console.log(
      `${targetCurrencyName}: ${action} işlemi öncesi kontrol ediliyor.`,
    );

    if (action === 'enable') {
      await clickAndWait(page, values.enableButton, 500);
    } else if (action === 'disable') {
      await clickAndWait(page, values.detailActiveCurrencyActionButton, 500);
      await clickAndWait(page, values.disableButton, 500);
    }

    for (const pageUrl of pageUrls) {
      await page.goto(`${baseUrl}/${pageUrl}`);
      await page.waitForTimeout(3000);
      await clickAndWait(page, values.currencyFilterBox, 500);

      // Dropdown içindeki tüm değerleri alın
      const dropdownValues = await page.$$eval(
        values.currencyFilterList,
        (options) => options.map((option) => option.textContent),
      );
      console.log('dropdownValues:', dropdownValues);

      // Kontrol etmek istediğiniz isim
      const isNameFound = dropdownValues.includes(targetCurrencyName);
      console.log('isNameFound:', isNameFound);
      console.log('action:', action);

      if (
        (isNameFound && action === 'enable') ||
        (!isNameFound && action === 'disable')
      ) {
        console.log(
          `${targetCurrencyName} dropdown içinde ${
            action === 'enable'
              ? 'bulunuyor. Başarılı!'
              : 'bulunmuyor. Başarılı!'
          }`,
        );
      } else {
        console.log(
          `${targetCurrencyName} dropdown içinde ${
            action === 'enable' ? 'bulunuyor. Hata!' : 'bulunmuyor. Hata!'
          }`,
        );
      }
    }
  }

  async manageFilterCurrency(action) {
    const baseUrl = `${baseURL}`;
    const page = this.page;
    const pageUrls = [
      'accounting/accounts/workspace',
      'accounting/accounts/customer-accounts',
      'accounting/accounts/employees',
      'accounting/accounts/externals',
    ]; // Kontrol etmek istediğiniz sayfalar

    // Enable veya disable işlemini tek seferde yapın
    await this.checkCurrencyFilter(
      page,
      baseUrl,
      pageUrls,
      values.passiveCurrencyShortName,
      action,
    );
  }
}
