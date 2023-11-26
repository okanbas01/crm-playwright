import { expect, Page } from '@playwright/test';

export const MODULE_NAMES = {
  LEADS: 'Lead',
  LOAN: 'Loan',
  BRANCHES: 'BRANCHES',
  DEPARTMENTS: 'DEPARTMENTS',
  DEPARTMENTS_TEAMS: 'DEPARTMENTS TEAMS',
  TEAMS: 'TEAMS',
  WORKSPACES: 'WORKSPACES',
  TEAMS_MEMBERS: 'TEAMS MEMBERS',
  CUSTOMERS: 'CUSTOMERS',
};

export const searchModules = {
  [MODULE_NAMES.BRANCHES]: {
    components: {
      search: {
        id: '[data-test-id="branches-search-input"]',
        validText: 'Valid Name',
        invalidText: 'Invalid Text',
        searchList: 'div#branches-table-name > .block.w-full > span',
        invalidArea:
          '.font-medium.font-sans.mb-1.normal-case.text-inherit.text-sm',
        invalidResult: 'not-found',
      },
    },
  },

  [MODULE_NAMES.DEPARTMENTS]: {
    components: {
      search: {
        id: '[data-test-id="departments-search-input"]',
        validText: 'Valid Name',
        invalidText: 'Invalid Text',
        invalidResult: 'not-found',
        searchList: "[data-test-id='company-management-departments-name-0']",
        invalidArea:
          '.font-medium.font-sans.mb-1.normal-case.text-inherit.text-sm',
      },
    },
  },

  [MODULE_NAMES.DEPARTMENTS_TEAMS]: {
    components: {
      search: {
        id: '.mantine-1o35mvh.mantine-Input-input.mantine-Input-withIcon.mantine-TextInput-input.mantine-TextInput-withIcon',
        validText: 'Valid Name',
        invalidText: 'Invalid Text',
        invalidResult: 'not-found',
        searchList:
          "[data-test-id='company-management-department-detail-overview-teams-team-0-title']",
        invalidArea:
          '.font-medium.font-sans.mb-1.normal-case.text-inherit.text-sm',
      },
    },
  },

  [MODULE_NAMES.TEAMS]: {
    components: {
      search: {
        id: "[data-test-id='teams-search-input']",
        validText: 'Valid Name',
        invalidText: 'Invalid Text',
        invalidResult: 'not-found',
        searchList:
          "[data-test-id='company-management-department-detail-overview-teams-team-0-title']",
        invalidArea:
          '.font-medium.font-sans.mb-1.normal-case.text-inherit.text-sm',
      },
    },
  },
  [MODULE_NAMES.TEAMS_MEMBERS]: {
    components: {
      search: {
        id: '.mantine-1o35mvh.mantine-Input-input.mantine-Input-withIcon.mantine-TextInput-input.mantine-TextInput-withIcon',
        validText: 'Valid Name',
        invalidText: 'Invalid Text',
        invalidResult: 'not-found',
        searchList: "tbody > tr[role='row'] > td:nth-of-type(2)",
        invalidArea:
          '.font-medium.font-sans.mb-1.normal-case.text-inherit.text-sm',
      },
    },
  },
  [MODULE_NAMES.CUSTOMERS]: {
    components: {
      search: {
        id: '[data-test-id="customers.search-input"]',
        validText: 'valid name',
        invalidText: 'Invalid Text',
        invalidResult: 'not-found',
        searchList:
          "[data-test-id='customerTable-table-body-row-0'] [data-test-id='undefined-title']",
        invalidArea:
          '.font-medium.font-sans.mb-1.normal-case.text-inherit.text-sm',
      },
    },
  },
};

export async function validSearch(
  moduleName: string,

  page: Page,
): Promise<void> {
  const searchArea = searchModules[moduleName].components.search.id;
  const validText = searchModules[moduleName].components.search.validText;
  const searchList = searchModules[moduleName].components.search.searchList;

  //valid Search
  await page.fill(searchArea, validText);
  await page.waitForTimeout(1000);
  await page.press(searchArea, 'Enter');
  await page.waitForTimeout(1000);
  const searchListText = await page.$(searchList);
  const listText = await searchListText?.textContent();
  const listTextTrim = listText?.trim();
  expect(validText).toEqual(listTextTrim);
}

export async function invalidSearch(
  moduleName: string,

  page: Page,
): Promise<void> {
  const searchArea = searchModules[moduleName].components.search.id;
  const invalidText = searchModules[moduleName].components.search.invalidText;
  const invalidArea = searchModules[moduleName].components.search.invalidArea;
  const invalidResult =
    searchModules[moduleName].components.search.invalidResult;
  await page.fill(searchArea, invalidText);
  await page.waitForTimeout(4000);
  await page.press(searchArea, 'Enter');
  await page.waitForTimeout(4000);
  const invalid = await page.$(invalidArea);
  const invalidAreaText = await invalid?.textContent();
  console.log(invalidResult);
  expect(invalidResult).toEqual(invalidAreaText);
}
