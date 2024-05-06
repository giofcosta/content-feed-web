import type { Content } from "@/types/content";
import Image from "next/image";
import DescriptionBlock from "./DescriptionBlock";
import CommentList from "./CommentList";

const ContentCard = ({ content, priority }: { content: Content, priority: boolean }) => {
  return (
    <div data-testid="content-card" className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl mb-5">
      <div className="relative mx-2 md:mx-4 mt-2 md:mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-48 md:h-96">
        <Image
          src={content.image}
          alt={content.title}
          width={500}
          height={500}
          key={content.id}
          placeholder="empty"
          priority={priority}
          className="object-contain w-full h-full bg-black"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 w-1/2 truncate">
            {content.title}
          </p>
          <p className="block font-sans text-xs text-right antialiased font-normal leading-relaxed text-blue-gray-600 w-1/2 truncate hover:text-clip">
            {content.author}
          </p>
        </div>
        <p className="block font-sans text-sm antialiased font-medium leading-medium text-gray-700 opacity-75 truncate mb-2">
          {content.subTitle}
        </p>
        <DescriptionBlock text={content.description} />
      </div>
      <div className="p-6 pt-0">
        <CommentList contentId={content.id} count={content.commentsCount} />
      </div>
    </div>
  );
};

export default ContentCard;
