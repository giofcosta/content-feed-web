"use client";

import { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

const Like = () => {
  const [like, setLike] = useState(false);
  const toggleLike = () => setLike(!like);

  return (
    <span className="cursor-pointer" onClick={toggleLike}>
      {like ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
    </span>
  );
};

export default Like;
