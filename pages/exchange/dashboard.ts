import { Page, expect } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../component/constant';
import values from '../../pageobjects/exchange/dashboard.utils';
import { baseURL } from '../../pageobjects/loginPage';

export default class DashboardPage {
  constructor(public page: Page) {}

  async profitLoss() {
    await this.page.goto(`${baseURL}/loan/dashboard`);
    await this.page.waitForTimeout(3000);

    const activePnl = await this.page.$$eval(
      values.activePnlArea,
      (elements) => elements[0].textContent!,
    );
    const realizedPnl = await this.page.$$eval(
      values.realizedPnlArea,
      (elements) => elements[0].textContent!,
    );

    const active = parseFloat(activePnl.replace(/\$|,/g, ''));
    const realized = parseFloat(realizedPnl.replace(/\$|,/g, ''));

    const profitLoss = +active + +realized;
    console.log(profitLoss);
    console.log(+active);
    console.log(+realized);

    expect(profitLoss).toEqual(+active + +realized);
    console.log('Success');

    if (profitLoss < 0) {
      const element = (await this.page.$$(values.profitLossArea))[0];
      expect(
        await this.page.evaluate(
          (el) => window.getComputedStyle(el).color,
          element,
        ),
      ).toEqual(values.negativeColor);
    } else {
      const element = (await this.page.$$(values.profitLossArea))[0];
      expect(
        await this.page.evaluate(
          (el) => window.getComputedStyle(el).color,
          element,
        ),
      ).toEqual(values.positiveColor);
    }
  }
  async randomSelect() {
    const elements = await this.page.$$(values.dropdownList);
    const randomIndex = Math.floor(Math.random() * elements.length); // Rastgele bir indeks seçin
    const randomElement = elements[randomIndex];
    await randomElement.click();
  }

  async realizedDetail() {
    //hangi currency ile işlem yaptığımızı edit pop-up'ı açarak öğreniriz

    await clickAndWait(this.page, values.operationDetailOneButton, 500);
    await clickAndWait(this.page, values.operationDetailEditButton, 500);

    const customerAmountCurrency = await this.page.textContent(
      values.customerAmountCurrency,
    );
    console.log('customerAmountCurrency:', customerAmountCurrency);

    await this.page.goto(`${baseURL}/loan/dashboard`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.currencyBox, 500);

    if (customerAmountCurrency !== null) {
      await fillAndWait(
        this.page,
        values.currencySearchArea,
        customerAmountCurrency,
        500,
      );
    }
    await clickAndWait(this.page, values.currencyBox, 1000);
    await clickAndWait(this.page, values.currencySelect, 500);
    await clickAndWait(this.page, values.currencyBox, 500);
    await clickAndWait(this.page, values.currencyBox, 500);

    const realizedProfitLoss = await this.page.textContent(
      values.realizedProfitLoss,
    );
    console.log('realizedProfitLoss:', realizedProfitLoss);

    await clickAndWait(this.page, values.realizedDetailButton, 500);

    const currencyName = `[data-test-id="realized-profit-table-body-row-0-column-${customerAmountCurrency}"]`;
    const realizedProfitList = await this.page.textContent(currencyName);
    console.log('realizedProfitList:', realizedProfitList);

    expect(realizedProfitLoss).toEqual(realizedProfitList);
  }
}
