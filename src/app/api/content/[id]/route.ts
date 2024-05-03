import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import type { ContentWithComments } from "@/interfaces/content";
import { fetchDataFromContentAPI } from "../content.api";
import { normalizeContent } from "../content.normalize";
import { NextResponse } from "next/server";

// GET the content card by ID
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
