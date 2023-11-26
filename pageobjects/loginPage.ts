import { Page } from '@playwright/test';

export default class LoginPage {
  constructor(public page: Page) {}

  async validLogin() {
    await this.page.goto(`${baseURL}`);

    const emailAddress = 'super@birdefter.dev';
    const password = 'xAL5O32xnwKS5laNnCh6wpPaOgVny1ac';
    await this.page
      .locator('[data-test-id="sign-in-page-field-email"]')
      .fill(emailAddress);
    await this.page
      .locator('[data-test-id="sign-in-page-field-password"]')
      .fill(password);
    await this.page
      .locator('[data-test-id="sign-in-page-submit-button"]')
      .click();
    await this.page
      .locator('[data-test-id="company-action-select-13"]')
      .click();

    await this.page.waitForTimeout(2000);
  }

  async checkPermissions(permissions, requiredPermissions) {
    return requiredPermissions.some((requiredPermission) =>
      permissions.some(
        ({ permissionName }) => permissionName === requiredPermission,
      ),
    );
  }
}
export const baseURL = 'https://birdefter.dev';
