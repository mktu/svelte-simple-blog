import type { PlaywrightTestConfig } from '@playwright/test';

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build:test && npm run preview',
		port: 4173
	}
};

export default config;
