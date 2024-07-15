import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.qsi.io/qsi-lab/dashboard');
  await page.getByTestId('LoginForm-email').click();
  await page.getByTestId('LoginForm-email').fill('ansamshaik@gmail.com');
  await page.getByTestId('LoginForm-password').click();
  await page.getByTestId('LoginForm-password').fill('Qu@ntumSi2024');
  await page.getByTestId('LoginForm-password').press('Enter');
  await expect(page.url()).toEqual('https://staging.qsi.io/qsi-lab/dashboard');
  await page.waitForSelector('.TenantSidePanelItem__header.TenantSidePanelItem__active');
  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
  await page.getByTestId('DashboardMainPage-Analyses-viewAll').click();
  await expect(page).toHaveURL('https://staging.qsi.io/qsi-lab/search?entityType=analyses');
  await page.getByTestId('TenantSidePanelItem-dashboardNav').click();
  await page.getByTestId('DashboardMainPage-Runs-viewAll').click();
  await expect(page).toHaveURL('https://staging.qsi.io/qsi-lab/search?entityType=runs');
  await page.getByTestId('TenantSidePanelItem-dashboardNav').click();
  await page.getByTestId('DashboardMainPage-Instruments-viewAll').click();
  await expect(page).toHaveURL('https://staging.qsi.io/qsi-lab/devices');
  await page.getByTestId('TenantSidePanelItem-dashboardNav').click();
  await page.getByTestId('Toggle-checkboxJustMyItems').click();
  await page.getByTestId('Toggle-checkboxJustMyItems').click();
  await page.getByTestId('HeaderUserMenu-userMenu').click();
  await page.getByTestId('HeaderUserMenu-logout').click();

});