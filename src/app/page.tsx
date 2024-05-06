import ContentFeed from "@/components/ContentFeed";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24">
      <h1 className="text-2xl font-extrabold leading-none tracking-tight text-blue-600 md:text-5xl lg:text-6xl dark:text-white mb-10 md:mb-16">
        Content{" "}
        <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
          Feed
        </mark>
      </h1>
      <ContentFeed />
    </main>
  );
}
