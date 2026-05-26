import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Parabank Login', () => {

    test('should login with valid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        const validUsername = 'john';
        const validPassword = 'demo';
        await loginPage.login(validUsername, validPassword);

        await expect(page).toHaveURL(/overview/);
        await expect(page).toHaveTitle(/ParaBank/);
        await expect(page.locator('#leftPanel')).toContainText('Welcome');
        await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
        
    });
    test('should not login with invalid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('invalidUser', 'invalidPassword');
        const isError = await loginPage.isErrorVisible();
        expect(isError).toBe(true);
        const errorText = await loginPage.getErrorMessage();
        expect(errorText).toContain('The username and password could not be verified.')
        await expect(page.getByText('Error!')).toBeVisible();
    });

    test('should navigate to Register Page', async({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        await loginPage.clickRegister();
        await expect(page).toHaveURL(/register/);

    })
});