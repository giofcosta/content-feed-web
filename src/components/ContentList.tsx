import type { Content } from "@/interfaces/content";
import ContentCard from "./ContentCard";

async function getData(): Promise<Content[]> {
  const res = await fetch(`${process.env.URL}/api/content`, {
    next: { revalidate: 120 }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ContentList() {
  const data = await getData();
  return (
    <main>
      {data.map((content, index) => (
        <ContentCard key={index} content={content} priority={index < 3} />
      ))}
    </main>
  );
}
