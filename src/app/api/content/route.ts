import { NextResponse } from "next/server";
import { fetchDataFromContentAPI } from "./content.api";
import { normalizeContent } from "./content.normalize";
import type { Content } from "@/interfaces/content";

// To handle a GET request to /api
export async function GET() {
  try {
    const { contentCards } = await fetchDataFromContentAPI();
    // Normalize and return all the cards
    const normalizedData = contentCards
      .sort((a, b) => a.metadata.priority - b.metadata.priority)
      .reverse()
      .map<Content>((contentCard) => normalizeContent(contentCard));
      
    return NextResponse.json(normalizedData, { status: 200 });
  } catch (error) {
    return NextResponse.json(JSON.stringify(error), { status: 500 });
  }
}
