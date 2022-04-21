import { expect, test } from '@playwright/test';

const BASE_PATH = '/svelte-simple-blog';

test('index page to article page transition', async ({ page }) => {
	await page.goto(BASE_PATH);
	expect(await page.textContent('h1')).toBe('My Profile');

	await page.click('text=Articles');

	await expect(page.locator('text=次へ').first()).toBeVisible();
});
