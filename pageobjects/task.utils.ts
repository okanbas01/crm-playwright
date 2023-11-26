// Tasks page check
const tasksHeader =
  'body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)';
const taskText = 'Tasks';

// AddTask buttons check

const addTaskButton =
  'div[data-test-id="top-filter-actions-desktop"] div button';
const addTaskCrossMark =
  '.mantine-ActionIcon-root.mantine-CloseButton-root.mantine-Modal-close.mantine-UnstyledButton-root.mantine-mokcbc > svg';
const addTaskCancelButton = '[data-test-id="task-form-footer-cancel"]';

const addTaskCreateButton = '[data-test-id="task-form-footer-action"]';

// Add Task

const titleArea = '[data-test-id="field-title"]';
const descriptionArea = '[data-test-id="field-description"]';
const assigneeTypeArea = '[class] [class="mb-3"]:nth-of-type(3) [tabindex]';
const assigneeTypeSelected = 'ul > li:nth-of-type(1)';
const assigneeArea = '[data-test-id="undefined-field-assignee"]';
const assigneeAreaSearch =
  '[class="mantine-InputWrapper-root mantine-TextInput-root pl-3.5 py-0 border-0 bg-transparent mantine-1ryrb3t"] [type]';
const assigneeAreaSearchText = 'Ayşe Maden';
const assigneeSelected = 'ul[role="group"] > li[role="option"]';
const dueDateArea = '[data-test-id="field-dueDate"]';
const dueDateSelected =
  'tr:nth-of-type(4) > td:nth-of-type(4) > .mantine-DatePickerInput-day.mantine-Day-day.mantine-UnstyledButton-root.mantine-hbm8x3';
const priorityArea = '[data-test-id="undefined-field-priority"]';
const prioritySelected = 'ul[role="group"] > li:nth-of-type(4)';
const linkTypeArea = '[class] [class="mb-3"]:nth-child(8) [tabindex]';
const linkTypeSelected = 'ul[role="group"] > li:nth-of-type(2)';
const customerArea = '[data-test-id="undefined-field-customer"]';
const customerSearchArea = '[id="mantine-1i19tltmk"]';
const customerSearchText = 'Okan Baş';

const uuid = () => Math.floor(Math.random() * 1000000);
const id = uuid();
const titleText = `name${id}`;
const descriptionText = `name${id}`;

// Detay
const firstTaskArea =
  'div:nth-of-type(1) > .flex-grow.flex-wrap.font-medium.line-clamp-1.ml-2 > .block.cursor-pointer.py-2.w-full';
const detailTitleArea = '[xpath]';
const detailAssigneeArea =
  "[class='flex items-center rounded col-span-2'] [data-test-id='undefined-title']";
const detailDescriptionArea =
  '[class="text-base font-normal !text-sm !font-normal mb-0 text-text normal-case col-span-2"]';

// Task yorum ekleme

const commentArea = '[data-test-id="undefined-field-undefined"]';
const commentText = `name${id}`;
//const commentDetailArea = '.leading-6.text-gray-500.text-sm'
const saveButton = '.rounded-lg button';
const commentDetailArea = '[class="w-full pb-4"] > div:nth-child(1)';

const values = {
  tasksHeader,
  taskText,
  addTaskButton,
  addTaskCrossMark,
  addTaskCancelButton,
  addTaskCreateButton,
  //
  titleArea,
  descriptionArea,
  assigneeTypeArea,
  assigneeTypeSelected,
  assigneeArea,
  assigneeAreaSearch,
  assigneeAreaSearchText,
  assigneeSelected,
  dueDateArea,
  dueDateSelected,
  priorityArea,
  prioritySelected,
  linkTypeArea,
  linkTypeSelected,
  customerArea,
  customerSearchArea,
  customerSearchText,
  titleText,
  descriptionText,
  //
  firstTaskArea,
  detailTitleArea,
  detailAssigneeArea,
  detailDescriptionArea,
  //
  commentArea,
  commentText,
  commentDetailArea,
  saveButton,
};
export default values;
