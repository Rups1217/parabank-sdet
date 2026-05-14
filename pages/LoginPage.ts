import {Page, Locator} from '@playwright/test';

export class LoginPage{
    private page: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('input[value="Log In"]');
        this.errorMessage = page.locator('#rightPanel.error');
    }

    async goto(){
        await this.page.goto('/');
    }

    async fillUsername(username: string){
        await this.usernameInput.fill(username);
    }
    async fillPassword(password: string){
        await this.passwordInput.fill(password);
    }
    async clickLogin(){
        await this.loginButton.click();
    }
    async login(username: string, password: string){
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLogin();
    }
}