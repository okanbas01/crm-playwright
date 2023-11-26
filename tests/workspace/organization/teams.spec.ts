// import { test, expect, type Page } from '@playwright/test';
// import { baseURL } from '../../pageobjects/loginPage';
// import LoginPage from '../../pageobjects/loginPage';
// import TeamsPage from '../../pages/company-management/teams';
// import {
//   invalidSearch,
//   MODULE_NAMES,
//   validSearch,
// } from '../../component/search';
// import { paginations } from '../../component/paginations';

// test.beforeEach(async ({ page }) => {
//   // const login = new LoginPage(page);
//   // await login.validLogin();

//   await page.goto(`${baseURL}/v2/settings/teams`);
//   await page.waitForTimeout(2000);
// });
// test('Team Page Check', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.teamsPageCheck();
// });
// test('Create New Team Cancel Button Control', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.AddNewTeamCancelButtonControl();
// });
// test('Create New Team Invalid Cases', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.addTeamInvalidCases();
// });
// test('Create New Team ', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.newTeamCreate();
// });
// test('Teams Checkbox Control ', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.columnOpenClose();
// });
// test('Edit Team Cancel Button Control', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.editTeamCancelButtonControl();
// });
// test('Edit Team Invalid Cases', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.editTeamInvalidCases();
//   // description kısmı doldurulduktan sonra enabled gelmesini kontrol ederken hata veriyor.
// });
// test('Edit Team ', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.editTeam();
//   // Description alanı assertion yapılmadı.
// });
// test('Shortcut Edit Leader Cancel Button ', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.shortcutEditLeaderCancelButton();
// });
// test('Shortcut Edit Leader', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.shortcutEditLeader();
//   // Manager alanı ve search alanı id leri aynı olduğu için direkt bir ismin üzerine tıklıyor.
//   // Manager alanı ve search alanına yeni id verilmesi gerekiyor.
// });
// test('Shortcut Remove Leader', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.shortcutRemoveLeaderButton();
// });
// test('Shortcut Add Leader', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.shortcutAddLeader();
//   // Manager alanı ve search alanı id leri aynı olduğu için direkt bir ismin üzerine tıklıyor.
//   // Manager alanı ve search alanına yeni id verilmesi gerekiyor.
// });
// test('Add Team Member', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.addTeamMember();
//   // Manager alanı ve search alanı id leri aynı olduğu için direkt bir ismin üzerine tıklıyor.
//   // Manager alanı ve search alanına yeni id verilmesi gerekiyor.
// });
// test('Team Member Table Column Check', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.addTeamMember();
//   await teams.teamMemberTableColumn();
// });
// test('Delete Team Cancel Button Control', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.deleteTeamCancelButtonControl();
// });
// test('Delete Team', async ({ page }) => {
//   const teams = new TeamsPage(page);
//   await teams.newTeamCreate();
//   await teams.deleteTeam();
// });
// // test('valid search text', async ({ page }) => {
// //     await validSearch(MODULE_NAMES.TEAMS, page);
// // listeye id verilmediği için çalışmıyor.
// // });

// // test('Invalid search text', async ({ page }) => {
// //     await invalidSearch(MODULE_NAMES.TEAMS, page);
// // listeye id verilmediği için çalışmıyor.
// // });
// // test('Teams Detail Members - Invalid search text', async ({ page }) => {
// //     await invalidSearch(MODULE_NAMES.DEPARTMENTS_TEAMS, page);
// // Team içinde ki member search alanı çalışmıyor.
// // });
// test('Pagination kontrol', async ({ page }) => {
//   await paginations(MODULE_NAMES.WORKSPACES, page);
//   await paginations(MODULE_NAMES.WORKSPACES, page);
// });
