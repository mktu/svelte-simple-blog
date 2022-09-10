import { expect, test } from '@playwright/test';


test('index page to article page transition', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('My Profile');

	await page.click('text=Articles');

	await expect(page.locator('text=次へ').first()).toBeVisible();
});
