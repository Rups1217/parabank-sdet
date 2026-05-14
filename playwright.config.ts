import {defineConfig} from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    use: {
        baseURL: 'https://parabank.parasoft.com/parabank',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },
    reporter: [['list'], ['html', {open: 'never'}]]
});