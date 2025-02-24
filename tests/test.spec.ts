import { expect, test } from '@playwright/test';

test.describe('Tour of Heroes pages', () => {
  test('should load default route', async ({page}) => {
    await page.goto('http://localhost:4200');

    await expect(page).toHaveTitle('Cost Evidence');
    expect(await page.isVisible("text='Cost Evidence'")).toBeTruthy();
  });
});