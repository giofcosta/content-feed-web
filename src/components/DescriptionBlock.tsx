"use client";

import { useState } from "react";

const DescriptionBlock = ({ text }: { text: string }) => {
  const [showReadMore, setShowReadMore] = useState(true)

  return <>
    <p
      className={`font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75 break-words ${
        showReadMore && "line-clamp-3"
      }`}
    >
      {text}
    </p>
    { showReadMore && <a className="font-sans text-xs antialiased font-bold leading-normal text-blue-400 cursor-pointer" onClick={() => setShowReadMore(false)}>Read more...</a> }
  </>;
};

export default DescriptionBlock;
