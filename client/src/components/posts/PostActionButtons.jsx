import React from "react";

const PostActionButtons = ({
  helpfulCount,
  setHelpfulCount,
  handleReport,
}) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => setHelpfulCount(helpfulCount + 1)}
        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200"
      >
        Helpful ({helpfulCount})
      </button>

      <button
        onClick={handleReport}
        className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm hover:bg-red-200"
      >
        Report
      </button>
    </div>
  );
};

export default PostActionButtons;
