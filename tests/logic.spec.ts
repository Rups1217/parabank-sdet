import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Parabank Login', () => {

    test('Login with valid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        const validUsername = 'john';
        const validPassword = 'password123';
        await loginPage.login(validUsername, validPassword);

        await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
        
    });
    test('Login with invalid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('invalidUser', 'invalidPassword');
        //await expect(page.getByText('Error')).toBeVisible();
    });
});