import { test, expect } from '@playwright/test';
test('test03: Bài tập 3', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();
    for (let i=1; i <= 100; i++) {
        await page.getByPlaceholder("Enter a new task").fill(`Todo ${i}`);

    await page.getByRole('button', { name: 'add Task' }).click();
    };
    for(let j=1; j<=100; j+=2){
       
        await page.getByRole('button',{name: 'Delete'}).nth(j).click();
    }

})