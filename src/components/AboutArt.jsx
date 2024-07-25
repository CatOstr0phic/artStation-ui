import React, { useState } from "react";

export default function AboutArt({ text }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div
        className={`py-4 text-sm text-ellipsis tracking-wide ${
          !showMore && "truncate"
        }`}
      >
        {text}
      </div>

      <div
        onClick={() => setShowMore(!showMore)}
        className="my-1 text-sm text-neutral-400 cursor-pointer"
      >
        {showMore ? "Show Less" : "Show More"}
      </div>
    </>
  );
}
