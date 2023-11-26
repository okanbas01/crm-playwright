import { expect, Page } from '@playwright/test';
import { randomBytes } from 'crypto';
import { clickAndWait, fillAndWait } from '../../component/constant';
import values from '../../pageobjects/customers/all_customers.utils';

export default class AllCustomersPage {
  constructor(public page: Page) {}

  async customersPageCheck() {
    await this.page.waitForSelector(values.pageTitle);
    const title = this.page.locator(values.pageTitle);

    expect(title).toHaveText(values.customersText);
  }

  async createCustomer() {
    await clickAndWait(this.page, values.customerButton, 1000);

    await this.page.locator(values.firstNameArea).fill(values.nameText);
    await this.page.locator(values.lastNameArea).fill(values.lastNameText);
    await this.page.locator(values.phoneArea).fill(values.phoneNumber);
    await clickAndWait(this.page, values.languageArea, 500);

    await this.page.locator(values.selectLanguage).click();
    await clickAndWait(this.page, values.saveButton, 1000);
    await clickAndWait(this.page, values.firstCustomer, 1000);

    const detailFirstName = await this.page.textContent(
      values.detailFirstNameArea,
    );

    const detailLastName = await this.page.textContent(
      values.detailLastNameArea,
    );

    const detailPhone = await this.page.textContent(values.detailPhoneArea);

    expect(detailFirstName).toEqual(values.nameText);
    expect(detailLastName).toEqual(values.lastNameText);
    expect(detailPhone).toEqual(`+1 ${values.phoneNumber}`);
  }
  async isCommentInNotesArea(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    page: any,
    selector: string,
    comment: string,
  ): Promise<boolean> {
    const notesElement = await page.locator(selector);
    const notesText = await notesElement.textContent();

    return notesText.includes(comment);
  }

  async writeComment() {
    await clickAndWait(this.page, values.firstCustomer, 500);
    await clickAndWait(this.page, values.notesTab, 500);

    // Random yorum oluşturma
    function generateRandomComment(): string {
      const commentLength = 10; // Yorum uzunluğu
      const randomBytesBuffer = randomBytes(commentLength / 2);
      const randomComment = randomBytesBuffer.toString('hex');
      return randomComment;
    }
    const randomComment = generateRandomComment();

    await fillAndWait(this.page, values.commentArea, randomComment, 500);
    await clickAndWait(this.page, values.sendButton, 1000);

    const commentCount = await this.page.locator(values.notesArea).count();

    const newCommentIndex = commentCount; // Yeni yorumun indeksi son elemanın indeksi olacaktır

    const newComment = await this.page
      .locator(
        `body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(${newCommentIndex}) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)`,
      )
      .textContent();

    expect(newComment).toEqual(randomComment);
  }

  async assigneeToMe() {
    await clickAndWait(this.page, values.assigneeToMeButton, 500); //assigneeToMeButton

    const assigneeFilterName = await this.page.textContent(
      values.assigneeFilterName,
    );
    const elements = await this.page.$$(values.tableAssignees);
    let foundMatch = false;
    // Her bir öğe üzerinde dön ve metinleri al
    const texts = await Promise.all(
      elements.map(async (element) => {
        const text = await this.page.evaluate((el) => el.textContent, element);
        return text ? text.trim() : null;
      }),
    );

    // Her bir metni kontrol et ve assigneeFilterName ile eşit mi diye bak
    for (const text of texts) {
      if (text && text === assigneeFilterName) {
        // Burada gerekli işlemleri yapabilirsiniz
        foundMatch = true;
        break; // Gerekirse döngüden çıkabilirsiniz
      }
    }

    // Eğer döngü biterse ve eşleşen bir öğe bulunamazsa
    if (!foundMatch) {
      throw new Error('Eşleşen bir öğe bulunamadı.');
    }
  }
  async allCheckBoxesSelected() {
    //Tüm checkboxs'lar seçilir ve seçildiği kontrol edilir
    await clickAndWait(this.page, values.toggleBox, 1000);
    const selectedContainer = await this.page.textContent(values.isRowSelected);
    expect(selectedContainer).toContain(values.selectedText);
  }
  async selectedCheckBoxesClearing() {
    await clickAndWait(this.page, values.clearButton, 1000);
    const selectedContainer = await this.page.textContent(values.isRowSelected);

    if (selectedContainer !== null) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const elementCount = await this.page
        .locator(`[class="${selectedContainer}"]`)
        .count();
      // Diğer işlemler
    } else {
      throw new Error('Seçili alan bulunamadı.');
      // Gerekli hata işleme veya alternatif işlemler
    }
  }
  async customersAssignee() {
    await clickAndWait(this.page, values.assignButton, 500);
    const assignToText = await this.page.textContent(values.assignTo);

    await clickAndWait(this.page, values.assignTo, 5000);

    const assignText = await this.page.textContent(values.assignName);

    expect(assignToText).toContain(assignText);
    console.log(assignToText);
    console.log(assignText);
  }
  async validSearch() {
    const searchCustomerName = await this.page.textContent(
      values.firstCustomerName,
    );
    console.log(searchCustomerName);
    if (searchCustomerName !== null) {
      await fillAndWait(this.page, values.searchInput, searchCustomerName, 500);
    }
    const firstCustomerNameArea = await this.page.textContent(
      values.firstCustomerNameArea,
    );
    expect(firstCustomerNameArea).toContain(searchCustomerName);
  }
  async invalidSearch() {
    await fillAndWait(this.page, values.searchInput, values.invalidName, 500);

    const emptyPageTextArea = await this.page.textContent(
      values.emptyPageTextArea,
    );
    expect(emptyPageTextArea).toContain(values.emptyPageText);
  }
  async customersUnassigned() {
    await clickAndWait(this.page, values.toggleBox, 1000);
    await clickAndWait(this.page, values.unAssignButton, 500);
    await clickAndWait(this.page, values.confirmUnassignedButton, 500);

    // Elementin bulunduğundan emin olun
    const elementExists = await this.page.waitForSelector(values.assigneeArea);

    if (elementExists) {
      // Elementin içindeki metni al
      const elementTextContent = await elementExists.textContent();

      // Elementin içinde metin olup olmadığını kontrol et
      expect(elementTextContent).toBeFalsy(); // Eğer elementin içinde metin yoksa test başarılı olacaktır
    } else {
      throw new Error('Element bulunamadı.');
    }
  }
}
