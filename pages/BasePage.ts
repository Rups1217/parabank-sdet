import {Page, Locator} from '@playwright/test'

export class BasePage{
    protected page: Page;

    constructor(page: Page){
        this.page = page;
    }

    // Navigate to a full URL or a path relative to baseURL in config
    async navigate(path: string): Promise<void> {
        await this.page.goto(path);
    }

    // Get the current page title
    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    // Wait for a selector to appear in the DOM before proceeding
    async waitForElement(selector: string): Promise<void> {
        await this.page.waitForSelector(selector);
    }

    // Get visible text content of an element
    async getText(selector: string): Promise<string> {
        return await this.page.locator(selector).textContent() ?? '';
    }

    // Check if an element is visible right now (no waiting)
    async isVisible(selector: string): Promise<boolean> {
        return await this.page.locator(selector).isVisible();
    }
}