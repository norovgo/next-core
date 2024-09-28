import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('название').click();
  await page.getByPlaceholder('название').fill('test course');
  await page.getByPlaceholder('описание').click();
  await page.getByPlaceholder('описание').fill('test description');
  await expect(page.getByRole('button', { name: 'Добавить' })).toBeVisible();
  await page.getByRole('button', { name: 'Добавить' }).click();
  await expect(page.getByRole('button', { name: 'Удалить' })).toBeVisible();
  await page.getByRole('button', { name: 'Удалить' }).click();
});