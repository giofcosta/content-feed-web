import type { Content, ContentCard, ContentResponse } from "@/interfaces/content";
import { NextRequest, NextResponse } from "next/server";


// To handle a GET request to /api
export async function GET(request: NextRequest) {
  try {
    const {contentCards} = await fetchDataFromContentAPI();
    const normalizedData = normalizeData(contentCards);
    return NextResponse.json(normalizedData, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

// Utility to fetch data from the mock Content API
async function fetchDataFromContentAPI() : Promise<ContentResponse> {
  const response = await fetch(
    "https://stoplight.io/mocks/engine/fullstack-spec/52502230/content",
    {
      headers: {
        "Content-type": "application/json",
        Prefer: "code=200, dynamic=true",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

function normalizeData(data: ContentCard[]) : Content[] {
  return data.sort((a, b) => a.metadata.priority - b.metadata.priority).map((content: ContentCard) => ({
    id: content.id, 
    image: content.imageUri,
    title: content.textData?.title,
    description: content.textData?.subTitle,
    comments: content.comments?.length,
    priority: content.metadata.priority
  }));
}
