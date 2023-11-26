import { ElementHandle, expect, Page } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../component/constant';
import { baseURL } from '../../pageobjects/loginPage';
import values from '../../pageobjects/modules-settings/customers.utils';

export default class customersSettingsPage {
  constructor(public page: Page) {}

  async createNewCustomerStatus() {
    await this.page.goto(`${baseURL}/settings/modules/customers`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.createButton, 1000);

    await fillAndWait(this.page, values.nameInput, values.nameText, 2000);

    const popupStatusNameText = await this.page.inputValue(values.nameInput);

    console.log('popupStatusNameText:', popupStatusNameText);
    await clickAndWait(this.page, values.saveButton, 1000);

    //Oluşturulan statünün Statuses tab'inde listeye yansıdığı kontrol edilir

    const listStatusName = await this.page.textContent(values.listStatusArea);
    console.log('listStatusName:', listStatusName);

    expect(popupStatusNameText).toEqual(listStatusName);
  }
  async editStatus() {
    await this.page.goto(`${baseURL}/settings/modules/customers`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.detailButton, 500);

    await clickAndWait(this.page, values.editButton, 500);
    await fillAndWait(this.page, values.nameInput, values.editNameText, 2000);
    await clickAndWait(this.page, values.saveButton, 1000);
  }
  async removeStatus() {
    await this.page.goto(`${baseURL}/settings/modules/customers`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.detailButton, 500);

    await clickAndWait(this.page, values.removeButton, 500);
    await clickAndWait(this.page, values.removeConfirmButton, 1000);

    console.log('nameText:', values.nameText);
    //İlk satırdaki statü Name'i buluyoruz.
    const listParity = await this.getElementInnerText(
      this.page,
      values.listFirstStatusName,
    );
    console.log('listParity:', listParity);

    expect(values.nameText).not.toEqual(listParity);
  }
  async getElementInnerText(
    page: Page,
    selector: string,
  ): Promise<string | undefined> {
    const element = await page.locator(selector);
    const innerText: string | undefined = await element.innerText();
    return innerText;
  }
  async statusNameControlInFilter(statusNameToCheck) {
    //Oluşturulan bu statünün customer sayfasına yansıdığı kontrol edilir
    await this.page.goto(`${baseURL}/customers`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.statusFilter, 500);

    // popupStatusNameText ile eşleşen tüm elementleri alın
    const options: ElementHandle[] = await this.page.$$(values.statusOptions);

    // Bu elementler içinde popupStatusNameText adında bir metin bulunanı kontrol edin
    let isPopupStatusNameTextFound = false;
    for (const option of options) {
      const innerText = (await option.innerText()).trim();
      console.log('innerText:', innerText);
      if (innerText === statusNameToCheck) {
        isPopupStatusNameTextFound = true;
        break;
      }
    }
    if (isPopupStatusNameTextFound) {
      console.log('Yeni oluşturulan statü bulundu.');
      // Testinizi burada devam ettirin
    } else {
      throw new Error('Yeni oluşturulan statü bulunamadı.');
      // İstenilen metni bulamazsanız testinizi başarısız sayabilirsiniz
    }
  }
  async removedStatusControlInFilter(statusNameToCheck) {
    //Oluşturulan bu statünün customer sayfasına yansıdığı kontrol edilir
    await this.page.goto(`${baseURL}/customers`);
    await this.page.waitForTimeout(5000);

    await clickAndWait(this.page, values.statusFilter, 500);

    // popupStatusNameText ile eşleşen tüm elementleri alın
    const options: ElementHandle[] = await this.page.$$(values.statusOptions);

    // Bu elementler içinde popupStatusNameText adında bir metin bulunanı kontrol edin
    let isPopupStatusNameTextFound = false;
    for (const option of options) {
      const innerText = (await option.innerText()).trim();
      console.log('innerText:', innerText);
      if (innerText === statusNameToCheck) {
        isPopupStatusNameTextFound = true;
        break;
      }
    }
    if (isPopupStatusNameTextFound) {
      throw new Error('Beklenen metin bulundu.');
    } else {
      console.log('Beklenen metin bulunamadı, bu beklenen sonuç.');
    }
  }

  async searchCustomerStatuses() {
    await this.page.goto(`${baseURL}/settings/modules/customers`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.searchInput, 500);
    await fillAndWait(this.page, values.searchInput, values.nameText, 500);

    const listParity = await this.getElementInnerText(
      this.page,
      values.listFirstStatusName,
    );
    console.log('listParity:', listParity);

    expect(values.nameText).toEqual(listParity);
  }
  async createNewCustomFields() {
    await this.page.goto(`${baseURL}/settings/modules/customers/custom-fields`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.createButton, 1000);

    await fillAndWait(
      this.page,
      values.customFieldNameArea,
      values.nameText,
      2000,
    );

    const popupCustomFieldNameText = await this.page.inputValue(
      values.customFieldNameArea,
    );
    console.log('popupCustomFieldNameText:', popupCustomFieldNameText);

    await clickAndWait(this.page, values.typeContainer, 500);
    //random Type Seçilir
    const types = await this.page.$$(values.types);
    const typeIndex = Math.floor(Math.random() * types.length); // Rastgele bir indeks seçin
    const randomType = types[typeIndex];
    if (randomType) {
      await randomType.click();
    } else {
      // Handle the case where randomType is undefined
      console.error('randomType is undefined');
    }

    const typeName = await this.getElementInnerText(
      this.page,
      values.typeContainer,
    );
    console.log('typeName:', typeName);

    await clickAndWait(this.page, values.typeContainer, 1000);

    const parameterName = await this.getElementInnerText(
      this.page,
      values.parameterText,
    );
    console.log('parameterName:', parameterName);
    await clickAndWait(this.page, values.parameterText, 1000); //Text parameter select

    await clickAndWait(this.page, values.customFieldSaveButton, 1000);

    //Oluşturulan custom field'in Custom Fields tab'inde listeye yansıdığı kontrol edilir

    const listKeyName = await this.page.textContent(values.listKeyArea);
    console.log('listKeyName:', listKeyName);

    const listCustomerType = await this.page.textContent(
      values.listCustomerTypeArea,
    );
    console.log('listCustomerType:', listCustomerType);

    const listParameterType = await this.page.textContent(
      values.listParameterTypeArea,
    );
    console.log('listParameterType:', listParameterType);

    expect(popupCustomFieldNameText).toEqual(listKeyName);
    expect(typeName).toEqual(listCustomerType);
    expect(parameterName).toEqual(listParameterType);
  }
  async editCustomFields() {
    await this.page.goto(`${baseURL}/settings/modules/customers/custom-fields`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.customFieldDetailButton, 500);

    await clickAndWait(this.page, values.customFieldEditButton, 500);

    await fillAndWait(
      this.page,
      values.customFieldNameArea,
      values.editNameText,
      2000,
    );

    const popupCustomFieldNameText = await this.page.inputValue(
      values.customFieldNameArea,
    );
    console.log('popupCustomFieldNameText:', popupCustomFieldNameText);

    await clickAndWait(this.page, values.typeContainer, 500);
    //random Type Seçilir
    const types = await this.page.$$(values.types);
    const typeIndex = Math.floor(Math.random() * types.length); // Rastgele bir indeks seçin
    const randomType = types[typeIndex];
    if (randomType) {
      await randomType.click();
    } else {
      // Handle the case where randomType is undefined
      console.error('randomType is undefined');
    }

    const typeName = await this.getElementInnerText(
      this.page,
      values.typeContainer,
    );
    console.log('typeName:', typeName);

    await clickAndWait(this.page, values.typeContainer, 1000);

    const parameterName = await this.getElementInnerText(
      this.page,
      values.parameterTextArea,
    );
    console.log('parameterTextArea:', parameterName);
    await clickAndWait(this.page, values.parameterTextArea, 1000); //Text parameter select

    await clickAndWait(this.page, values.customFieldSaveButton, 1000);

    //Oluşturulan custom field'in Custom Fields tab'inde listeye yansıdığı kontrol edilir

    const listKeyName = await this.page.textContent(values.listKeyArea);
    console.log('listKeyName:', listKeyName);

    const listCustomerType = await this.page.textContent(
      values.listCustomerTypeArea,
    );
    console.log('listCustomerType:', listCustomerType);

    const listParameterType = await this.page.textContent(
      values.listParameterTypeArea,
    );
    console.log('listParameterType:', listParameterType);

    expect(popupCustomFieldNameText).toEqual(listKeyName);
    expect(typeName).toEqual(listCustomerType);
    expect(parameterName).toEqual(listParameterType);
  }
  async removeCustomFields() {
    await this.page.goto(`${baseURL}/settings/modules/customers/custom-fields`);
    await this.page.waitForTimeout(2000);
    await clickAndWait(this.page, values.customFieldDetailButton, 500);

    await clickAndWait(this.page, values.removeCustomFieldButton, 500);
    await clickAndWait(this.page, values.removeConfirmButton, 500);

    const listKeyName = await this.page.textContent(values.listKeyArea);
    console.log('listKeyName:', listKeyName);

    expect(values.nameText).not.toEqual(listKeyName);
  }
  async searchCustomField() {
    await this.page.goto(`${baseURL}/settings/modules/customers/custom-fields`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.searchInput, 500);
    await fillAndWait(this.page, values.searchInput, values.nameText, 500);

    const listKeyName = await this.page.textContent(values.listKeyArea);
    console.log('listKeyName:', listKeyName);

    expect(values.nameText).toEqual(listKeyName);
  }
}
