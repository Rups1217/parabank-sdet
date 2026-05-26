import {Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{

    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;
    private registerLink: Locator;
    private forgotLoginLink: Locator;

    constructor(page: Page){
        super(page);
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('input[value="Log In"]');
        this.errorMessage = page.locator('#rightPanel');
        this.registerLink = page.getByRole('link', {name: 'Register'});
        this.forgotLoginLink = page.locator('a[href*="lookup"]');
    }

    async goto(): Promise<void> {
        await this.navigate('/parabank/index.htm');
        console.log('Resolved URL:', this.page.url());
    }

    async fillUsername(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }
    async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }
    async clickLogin(): Promise<void> {
        await this.loginButton.click();
    }
    async login(username: string, password: string): Promise<void> {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLogin();
    }
    async getErrorMessage(): Promise<string> {
        return await this.errorMessage.textContent() ?? '';
    }
    async isErrorVisible(): Promise<boolean> {
        return await this.errorMessage.isVisible();
    }
    async isLoginButtonVisible(): Promise<boolean> {
        return await this.loginButton.isVisible();
    }
    async clickRegister(): Promise<void> {
        await this.registerLink.click();
    }
    async clickForgotLogin(): Promise<void> {
        await this.forgotLoginLink.click();
    }
}