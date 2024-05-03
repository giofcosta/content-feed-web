import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import type { ContentWithComments } from "@/types/content";
import { fetchDataFromContentAPI } from "../content.api";
import { normalizeContent } from "../content.normalize";
import { NextResponse } from "next/server";

// GET /api/content/[id]
/**
 * @swagger
 * /api/v1/content/{id}:
 *   get:
 *     summary: Retrieve a content card by ID
 *     description: Retrieve a content card by ID from the Content API, normalize it, and return it.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The content card's unique identifier
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A content card.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContentWithComments'  
 *       404:
 *         description: Content card not found
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               description: Error message
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
export async function GET(request: Request, { params }: { params: Params }) {
  try {
    const { contentCards } = await fetchDataFromContentAPI();
    const contentCard = contentCards.find((content) => content.id == params.id);

    if (contentCard) {
      const normalized = {
        ...normalizeContent(contentCard),
        comments: contentCard.comments,
      } as ContentWithComments;
      return NextResponse.json(normalized, { status: 200 });
    } else {
      return NextResponse.json("Content Card not found", { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(JSON.stringify(error), { status: 500 });
  }
}
