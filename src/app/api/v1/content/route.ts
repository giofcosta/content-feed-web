import { NextResponse } from "next/server";
import { fetchDataFromContentAPI } from "./content.api";
import { normalizeContent } from "./content.normalize";
import type { Content } from "@/types/content";

// GET /api/content
/**
 * @swagger
 * /api/v1/content:
 *   get:
 *     summary: Retrieve a list of content
 *     description: Retrieve a list of content from the Content API, normalize them, and return them in order of priority.
 *     responses:
 *       200:
 *         description: A list of content.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Content'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 */
export async function GET() {
  try {
    const { contentCards } = await fetchDataFromContentAPI();
    // Normalize and return all the cards
    const normalizedData = contentCards
      .sort((a, b) => a.metadata.priority - b.metadata.priority)
      .reverse()
      .map<Content>(contentCard => normalizeContent(contentCard));
      
    return NextResponse.json(normalizedData, { status: 200 });
  } catch (error) {
    return NextResponse.json(JSON.stringify(error), { status: 500 });
  }
}
