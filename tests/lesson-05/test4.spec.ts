import{test,expect} from '@playwright/test';
test('test04: Bài tập lesson4',async({page})=>{
await page.goto('https://material.playwrightvn.com/');
await page.getByRole('link', {name:'Bài học 4: Personal notes'}).click();
await page.getByLabel('title').fill('click');
await page.getByLabel('Content').fill('Hàm click dùng để thực hiện click vào các phần tử trên trang web');
await page.getByRole('button', {name:'Add Note'}).click();

await page.getByLabel('title').fill('fill');
await page.getByLabel('Content').fill('Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web');
await page.getByRole('button', {name:'Add Note'}).click();

await page.getByLabel('title').fill('type');
await page.getByLabel('Content').fill('Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng');
await page.getByRole('button', {name:'Add Note'}).click();

await page.getByLabel('title').fill('hover');
await page.getByLabel('Content').fill('Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover');
await page.getByRole('button', {name:'Add Note'}).click();

await page.getByLabel('title').fill('check');
await page.getByLabel('Content').fill('Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked');
await page.getByRole('button', {name:'Add Note'}).click();

await page.getByLabel('title').fill('uncheck');
await page.getByLabel('Content').fill('Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked');
await page.getByRole('button', {name:'Add Note'}).click();

await page.getByLabel('title').fill('selectOption');
await page.getByLabel('Content').fill('Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown');
await page.getByRole('button', {name:'Add Note'}).click();

await page.getByLabel('title').fill('press');
await page.getByLabel('Content').fill('Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác');
await page.getByRole('button', {name:'Add Note'}).click();

await page.getByLabel('title').fill('dblclick');
await page.getByLabel('Content').fill('Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web');
await page.getByRole('button', {name:'Add Note'}).click();

await page.getByLabel('title').fill('dragAndDrop');
await page.getByLabel('Content').fill('Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web');
await page.getByRole('button', {name: 'Add Note'}).click();


await page.getByLabel('Search Notes:').fill('một hoặc nhiều');
})

