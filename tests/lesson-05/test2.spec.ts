//import{test,expect} from '@playwright/test';
import { test, expect } from '@playwright/test';
test('test01:Home page', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();



    await page.getByRole('button', { name: 'add to cart' }).first().click();
    await page.getByRole('button', { name: 'add to cart' }).first().click();
    await page.getByRole('button', { name: 'add to cart' }).nth(1).click({ clickCount: 3 });
    await page.getByRole('button', { name: 'add to cart' }).last().click();

})
