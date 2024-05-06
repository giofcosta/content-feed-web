import { expect, test } from '@playwright/test';


test.describe('Content API', () => {
  test.describe('GET method', () => {
    test('should resturn content list', async ({
      request,
    }) => {
      const create = await request.get('/api/v1/content');
      const contents = await create.json();

      expect(create.status()).toBe(200);
      expect(contents).toBeInstanceOf(Array);
    });
  });

  test.describe('GET by ID method', () => {
    test('should resturn 404 when wrong id', async ({
      request,
    }) => {
      const create = await request.get('/api/v1/content/wrong-id');
      const contents = await create.json();

      expect(create.status()).toBe(404);
    });
  });
});
