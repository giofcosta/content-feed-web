import type { ContentResponse } from "@/interfaces/content";

// Fetch data from the mock Content API
export async function fetchDataFromContentAPI(): Promise<ContentResponse> {
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