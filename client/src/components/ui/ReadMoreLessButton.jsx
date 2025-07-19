import React from "react";

const ReadMoreLessButton = ({ expanded, setExpanded }) => {
  return (
    <button
      className="text-sm text-indigo-600 hover:underline mb-3"
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? "Show Less" : "Read More"}
    </button>
  );
};

export default ReadMoreLessButton;
