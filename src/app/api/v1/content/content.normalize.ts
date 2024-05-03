import type { ContentCard, Content } from "@/types/content";

// Normalize the data before returning to the front-end
export function normalizeContent(data: ContentCard): Content {
  return {
    id: data.id,
    image: data.imageUri,
    title: data.textData?.title,
    description: data.textData?.body,
    author: `${data.textData?.author?.first} ${data.textData?.author?.last}`,
    subTitle: data.textData?.subTitle,
    commentsCount: data.comments?.length,
  };
}
