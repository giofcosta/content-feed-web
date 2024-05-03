import type {
  Content,
  ContentCard,
  ContentResponse,
} from "@/interfaces/content";
import { NextResponse, type NextRequest } from "next/server";

// To handle a GET request to /api
export async function GET(request: NextRequest) {
  try {
    const { contentCards } = await fetchDataFromContentAPI();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const comments = searchParams.get("comments") === "true";

    // Verify the id to get one by id
    if (id) {
      const contentCard = contentCards.find((content) => content.id == id);

      // Return if id is not found
      if (!contentCard)
        return NextResponse.json("Content Card not found", { status: 404 });

      // Return only the comments
      if (comments)
        return NextResponse.json(contentCard?.comments, { status: 200 });

      // Normalize and return only the card information
      const normalizedCard = normalizeData([contentCard])[0];
      return NextResponse.json(normalizedCard, { status: 200 });
    }

    // Normalize and return all the cards
    const normalizedData = normalizeData(contentCards);
    return NextResponse.json(normalizedData, { status: 200 });
  } catch (error) {
    return NextResponse.json(JSON.stringify(error), { status: 500 });
  }
}

// Utility to fetch data from the mock Content API
async function fetchDataFromContentAPI(): Promise<ContentResponse> {
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

// Normalize the data before returning to the front-end
function normalizeData(data: ContentCard[]): Content[] {
  return data
    .sort((a, b) => a.metadata.priority - b.metadata.priority).reverse()
    .map<Content>((content: ContentCard) => ({
      id: content.id,
      image: content.imageUri,
      title: content.textData?.title,
      description: content.textData?.body,
      author: `${content.textData?.author?.first} ${content.textData?.author?.last}`,
      subTitle: content.textData?.subTitle,
      comments: content.comments?.length,
      priority: content.metadata.priority,
    }));
}
