import type { Content } from "@/types/content";
import ContentCard from "./ContentCard";

async function getData(): Promise<Content[]> {
  const res = await fetch(`${process.env.URL}/api/v1/content`, {
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ContentList() {
  const data = await getData();
  return (
    <div className="w-[20rem] md:w-[42rem]">
      {data.map((content, index) => (
        <ContentCard key={index} content={content} priority={index < 3} />
      ))}
    </div>
  );
}
