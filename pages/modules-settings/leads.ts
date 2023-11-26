import { ElementHandle, expect, Page } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../../component/constant';
import { baseURL } from '../../pageobjects/loginPage';
import values from '../../pageobjects/modules-settings/leads.utils';

export default class leadsSettingsPage {
  constructor(public page: Page) {}

  async createNewLeadStatus() {
    await this.page.goto(`${baseURL}/settings/modules/leads`);
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
  async statusNameControlInFilter(statusNameToCheck) {
    //Oluşturulan bu statünün customer sayfasına yansıdığı kontrol edilir
    await this.page.goto(`${baseURL}/leads`);
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
    await this.page.goto(`${baseURL}/leads`);
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
  async editStatus() {
    await this.page.goto(`${baseURL}/settings/modules/leads`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.detailButton, 500);

    await clickAndWait(this.page, values.editButton, 500);
    await fillAndWait(this.page, values.nameInput, values.editNameText, 2000);
    await clickAndWait(this.page, values.saveButton, 1000);
  }
  async removeStatus() {
    await this.page.goto(`${baseURL}/settings/modules/leads`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.detailButton, 500);

    await clickAndWait(this.page, values.removeButton, 500);
    await clickAndWait(this.page, values.removeConfirmButton, 1000);

    console.log('nameText:', values.nameText);
    //İlk satırdaki statü Name'i buluyoruz.
    const listParity = await this.page.textContent(values.listStatusArea);
    console.log('listParity:', listParity);

    expect(values.nameText).not.toEqual(listParity);
  }
  async searchLeadStatuses() {
    await this.page.goto(`${baseURL}/settings/modules/leads`);
    await this.page.waitForTimeout(2000);

    await clickAndWait(this.page, values.searchInput, 500);
    await fillAndWait(this.page, values.searchInput, values.nameText, 500);

    const listParity = await this.page.textContent(values.listStatusArea);
    console.log('listParity:', listParity);

    expect(values.nameText).toEqual(listParity);
  }
}
