import { test, expect } from '@playwright/test';
test('test01: Home page', async ({ page }) => {
    await test.step('step 1: Truy cập trang chủ', async () => {
        await page.goto("https://material.playwrightvn.com");
        await page.getByRole("link", { name: "Bài học 1: Register Page (có đủ các element)" }).click();
        await page.getByLabel("Username").fill("Thuy ly");
        await page.getByLabel("Email").fill("thuylt@gmail.com");
        await page.getByLabel("Female").check();
        await page.getByLabel("Traveling").check();
        await page.getByLabel("Interests").selectOption("Technology");
        await page.getByLabel("country").selectOption("Canada");
        await page.getByLabel("Date of Birth:").fill("1992-12-06");
        await page.getByLabel("Profile picture:").setInputFiles("/Users/devmetrohn/Downloads/IMG_1642 copy.jpg");
        await page.getByLabel("Biography").fill("Tôi là QA chuyên về manual testing")
        await page.getByLabel("Rate us").fill("8");
        await page.locator("input[type='color']").fill("#00ff00");
        //await page.locator('#newsletter').check();
        await page.getByLabel('Subscribe').check();

        await page.locator('label.switch').click();

        // await expect(page.locator('#toggleOption')).toBeChecked();

       // await page.getByLabel('Enable Feature:').check();

      //  await page.locator('#toggleOption').click({force:true});
      //await page.getByLabel("Star Rating:").nth(2).click();
// await page.getByText('Star Rating:')
//   .locator('..')             // Đi lên div cha (.form-group)
//   .locator('#starRating i')  // Đi vào phần tử chứa các ngôi sao
//   .nth(3)                    // Chọn sao thứ 4 (đếm từ 0)
//   .click();

await page.locator('#starRating').click({
  position: { x: 80, y: 10 } // x là số pixel hoặc % tính từ mép trái
});
//await page.getByLabel('Custom Date:').fill("2026-09-04");
await page.getByRole('button', {name:'Register'}).click();
    })
})