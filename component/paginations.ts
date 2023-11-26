import { Page } from '@playwright/test';

export const MODULE_NAMES = {
  WORKSPACES: 'WORKSPACES',
};

export const tableModules = {
  [MODULE_NAMES.WORKSPACES]: {
    components: {
      paginations: {
        sizeArea: "button[role='combobox']",
        selectSize: '#radix-0 > div > div:nth-child',
        tableRow: 'tbody > tr',
      },
    },
  },
};

export async function paginations(
  moduleName: string,
  page: Page,
): Promise<void> {
  const sizeArea = tableModules[moduleName].components.paginations.sizeArea;
  const selectSize = tableModules[moduleName].components.paginations.selectSize;
  const tableRow = tableModules[moduleName].components.paginations.tableRow;

  const expectedRowCounts = [1, 2, 3, 4];

  for (let expectedRowsPerPage of expectedRowCounts) {
    // click on the button to change number of rows per page
    await page.locator(sizeArea).click();
    await page.waitForTimeout(1000);

    const button = await page.$(`${selectSize}(${expectedRowsPerPage})`);
    await button?.click();

    // wait for page to update
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // check the number of rows
    const rows = await page.$$(tableRow);
    const actualRowsPerPage = rows.length;
    console.log(`Expected rows per page: ${expectedRowsPerPage}`);
    console.log(`Actual rows per page: ${actualRowsPerPage}`);
    // Add this line
    if (expectedRowsPerPage === 1 && actualRowsPerPage > 10) {
      throw new Error(
        'Row count should be less than or equal to 10 when selecting 1',
      );
    } else if (expectedRowsPerPage === 2 && actualRowsPerPage > 25) {
      throw new Error(
        'Row count should be less than or equal to 25 when selecting 2',
      );
    } else if (expectedRowsPerPage === 3 && actualRowsPerPage > 50) {
      throw new Error(
        'Row count should be less than or equal to 50 when selecting 3',
      );
    } else if (expectedRowsPerPage === 4 && actualRowsPerPage > 100) {
      throw new Error(
        'Row count should be less than or equal to 100 when selecting 4',
      );
    }
  }
}
