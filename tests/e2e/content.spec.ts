import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';

test.describe('Content Feed', () => {
  test.describe('Initial Page', () => {
    test('Should load initial page and the posts', async ({
      page,
    }) => {
      await page.goto('/');
      await expect(page.getByText('Content')).toBeVisible();
      await expect(page.getByText('Feed')).toBeVisible();

      
    });
  });
});
