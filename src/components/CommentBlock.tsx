import type { Comment } from "@/types/content";
import Image from "next/image";
import Like from "./Like";

const CommentBlock = ({ comment }: { comment: Comment }) => {
  return (
    <div data-testid="comment-block" className="flex items-center w-full p-3 leading-tight transition-all outline-none text-start">
      <div className="flex-none mr-4 place-items-center">
        <Image
          alt="profile pic"
          src={comment.profilePic}
          height={12}
          width={12}
          loading="lazy"
          className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
        />
      </div>
      <div className="flex-initial w-full">
        <p className="block font-sans text-sm antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          {comment.author}
        </p>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          {comment.text}
        </p>
        <p className="block font-sans text-xs antialiased font-semibold leading-relaxed tracking-normal text-gray-400">
          {comment.likes.toLocaleString()} likes
        </p>
      </div>
      <div className="flex-none ml-4 place-items-center">
        <Like />
      </div>
    </div>
  );
};

export default CommentBlock;
