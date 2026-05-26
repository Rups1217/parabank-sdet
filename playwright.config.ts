import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1: 0,
    workers: 2,
    use: {
        baseURL: 'http://localhost:8080/parabank/',
        headless: true,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },
    reporter: [['list'], ['html', {open: 'never'}]],
    projects: [
        {
            name: 'chromium', use: {...devices['Desktop Chrome']}
        }
    ]
});