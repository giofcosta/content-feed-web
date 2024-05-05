import { expect, test } from '@playwright/test';

test.describe('Content', () => {
  test.describe('Get all', () => {
    test('should get a list of content cards', async ({
      request,
    }) => {
      const create = await request.get('/api/V1/content');
      const createJson = await create.json();

      expect(create.status()).toBe(200);
      expect(createJson).toBeDefined();
    });
  });
});
