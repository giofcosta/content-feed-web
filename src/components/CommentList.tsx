"use client";

import { useState } from "react";
import CommentBlock from "./CommentBlock";
import type { Comment, ContentWithComments } from "@/interfaces/content";

async function getComments(contentId: string): Promise<ContentWithComments> {
  const res = await fetch(`/api/content/${contentId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CommentsBlock = ({
  contentId,
  count,
}: {
  contentId: string;
  count: number;
}) => {
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const loadComments = async () => {
    setLoading(true);
    const { comments } = await getComments(contentId);
    setComments(comments);
    setShowComments(true);
    setLoading(false);
  };

  return showComments ? (
    <div className="relative flex flex-col w-full text-gray-700 border-t border-slate-200">
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        {comments.map((comment, index) => (
          <CommentBlock key={index} comment={comment} />
        ))}
      </nav>
    </div>
  ) : (
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      type="button"
      onClick={loadComments}
    >
      {loading ? (
        <span className="text-gray-400 font-normal">loading...</span>
      ) : (
        `Show all ${count} comments`
      )}
    </button>
  );
};

export default CommentsBlock;
