import { generateMockContent, generateMockContentWithComments, generateMockContents } from "@/mocks/content.mock";
import { expect, test } from "@playwright/test";

test.describe("Content Feed", () => {
  test.describe("Initial Page", () => {
    test("Should load initial page title and the posts", async ({ page }) => {
      await page.goto("/");

      // Check if content feed is visible
      const contentFeed = await page.getByTestId("content-feed");
      await expect(contentFeed).toBeVisible();

      // Check if content card is visible and get the first one
      const contentCard = await page.getByTestId("content-card").first();
      await expect(contentCard).toBeVisible();

      // click in the comment button for the content card
      await contentCard.getByTestId("load-comments").click();

      // Check if the comment block is visible
      await expect(
        contentCard.getByTestId("comment-block").first()
      ).toBeVisible();
    });
  });
});
