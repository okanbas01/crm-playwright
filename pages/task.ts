import { expect, Page } from '@playwright/test';
import { clickAndWait, fillAndWait } from '../component/constant';
import values from '../pageobjects/task.utils';

export default class TasksPage {
  constructor(public page: Page) {}

  async tasksPageCheck() {
    const header = this.page.locator(values.tasksHeader);
    await expect(header).toContainText(values.taskText);
  }

  async addNewTaskCancelButtonControl() {
    await this.page.locator(values.addTaskButton).click();
    await this.page.locator(values.addTaskCrossMark).click();
    await this.page.locator(values.addTaskButton).click();
    await this.page.locator(values.addTaskCancelButton).click();
  }
  async addNewTaskInvalidCases() {
    await this.page.locator(values.addTaskButton).click();
    await this.page
      .locator(values.descriptionArea)
      .fill(values.descriptionText);
    await expect(this.page.locator(values.addTaskCreateButton)).toBeDisabled();
    await clickAndWait(this.page, values.assigneeTypeArea, 1000);
    await clickAndWait(this.page, values.assigneeTypeSelected, 1000);
    await expect(this.page.locator(values.addTaskCreateButton)).toBeDisabled();
    await clickAndWait(this.page, values.assigneeArea, 1000);
    await fillAndWait(
      this.page,
      values.assigneeAreaSearch,
      values.assigneeAreaSearchText,
      1000,
    );
    await clickAndWait(this.page, values.assigneeSelected, 1000);
    await expect(this.page.locator(values.addTaskCreateButton)).toBeDisabled();
    await clickAndWait(this.page, values.dueDateArea, 1000);
    await clickAndWait(this.page, values.dueDateSelected, 1000);
    await expect(this.page.locator(values.addTaskCreateButton)).toBeDisabled();
    await clickAndWait(this.page, values.priorityArea, 1000);
    await clickAndWait(this.page, values.prioritySelected, 1000);
    await expect(this.page.locator(values.addTaskCreateButton)).toBeDisabled();
    await clickAndWait(this.page, values.linkTypeArea, 1000);
    await clickAndWait(this.page, values.linkTypeSelected, 2000);
    await expect(this.page.locator(values.addTaskCreateButton)).toBeDisabled();
  }
  async addNewTask() {
    await this.page.locator(values.addTaskButton).click();

    await fillAndWait(this.page, values.titleArea, values.titleText, 1000);

    await this.page
      .locator(values.descriptionArea)
      .fill(values.descriptionText);
    await clickAndWait(this.page, values.assigneeTypeArea, 1000);
    await clickAndWait(this.page, values.assigneeTypeSelected, 1000);
    await clickAndWait(this.page, values.assigneeArea, 1000);
    await fillAndWait(
      this.page,
      values.assigneeAreaSearch,
      values.assigneeAreaSearchText,
      1000,
    );
    await clickAndWait(this.page, values.assigneeSelected, 1000);
    await clickAndWait(this.page, values.dueDateArea, 1000);
    await clickAndWait(this.page, values.dueDateSelected, 1000);
    await clickAndWait(this.page, values.priorityArea, 1000);
    await clickAndWait(this.page, values.prioritySelected, 1000);
    await clickAndWait(this.page, values.linkTypeArea, 1000);
    await clickAndWait(this.page, values.linkTypeSelected, 2000);
    // await clickAndWait(this.page, values.customerArea, 1000);
    // await fillAndWait(this.page, values.customerSearchArea, values.customerSearchText, 1000);

    await this.page.waitForTimeout(1000);

    const titleNameValue = await this.page
      .locator(values.titleArea)
      .inputValue();
    console.log(titleNameValue);
    await this.page.waitForTimeout(1000);

    const assigneeAreaElement = await this.page.$(values.assigneeArea);
    const assigneeAreaValue = await assigneeAreaElement?.textContent();
    const assigneeAreaValueTrim = assigneeAreaValue?.trim();
    console.log(assigneeAreaValueTrim);

    await this.page.waitForTimeout(1000);

    const descriptionElement = await this.page.$(values.descriptionArea);
    const descriptionValue = await descriptionElement?.textContent();
    const descriptionValueTrim = descriptionValue?.trim();
    console.log(descriptionValueTrim);

    await this.page.waitForTimeout(1000);

    await clickAndWait(this.page, values.addTaskCreateButton, 5000);

    //Detay kontrol

    const firstTaskElement = await this.page.$(values.firstTaskArea);
    const firstTaskValue = await firstTaskElement?.textContent();
    const firstTaskValueTrim = firstTaskValue?.trim();
    console.log(firstTaskValueTrim);

    expect(titleNameValue).toEqual(firstTaskValueTrim);

    await clickAndWait(this.page, values.firstTaskArea, 5000);

    // const detailTitleElement = await this.page.$(values.detailTitleArea);
    // const detailTitleValue = await detailTitleElement?.textContent();
    // const detailTitleValueTrim = detailTitleValue?.trim();
    // console.log(detailTitleValueTrim);

    //expect(titleNameValue).toEqual(detailTitleValueTrim);

    const detailAssigneeElement = await this.page.$(values.detailAssigneeArea);
    const detailAssigneeValue = await detailAssigneeElement?.textContent();
    const detailAssigneeValueTrim = detailAssigneeValue?.trim();
    console.log(detailAssigneeValueTrim);

    expect(assigneeAreaValueTrim).toEqual(detailAssigneeValueTrim);

    const detailDescriptionElement = await this.page.$(
      values.detailDescriptionArea,
    );
    const detailDescriptionValue =
      await detailDescriptionElement?.textContent();
    const detailDescriptionValueTrim = detailDescriptionValue?.trim();
    console.log(detailDescriptionValueTrim);

    expect(descriptionValueTrim).toEqual(detailDescriptionValueTrim);
  }
  async addComment() {
    const locator = '[class="w-full pb-4"] > div:nth-child(1)';

    await clickAndWait(this.page, values.firstTaskArea, 5000);
    await this.page.locator(values.commentArea).fill(values.commentText);
    const commentTextElement = await this.page.$(values.commentArea);
    const commentTextValue = await commentTextElement?.textContent();
    const commentTextValueTrim = commentTextValue?.trim();
    console.log(commentTextValueTrim);

    await clickAndWait(this.page, values.saveButton, 2000);

    await expect(locator).toContain('Name');
  }
}
