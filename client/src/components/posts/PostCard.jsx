import React, { useState } from "react";
import ReportModal from "../ui/ReportModal";
import PostActionButtons from "./PostActionButtons";
import ReadMoreLessButton from "../ui/ReadMoreLessButton";
import PostTimestamp from "./PostTimestamp";
import PostTags from "./PostTags";
import PostContent from "./PostContent";

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [reportReason, setReportReason] = useState("");

  const handleReport = () => setShowModal(true);
  const handleSubmitReport = () => setShowModal(false);

  return (
    <div className="bg-white rounded-2xl mt-12 shadow-md p-6 mb-4 border hover:shadow-lg transition-all duration-300 relative">
      <PostTimestamp post={post} />
      <h4 className="text-xl font-bold text-indigo-700 mb-2">{post.title}</h4>
      <PostContent expanded={expanded} text={post.content} />

      <ReadMoreLessButton setExpanded={setExpanded} expanded={expanded} />

      <PostTags tags={post.tags} />

      <PostActionButtons
        helpfulCount={helpfulCount}
        setHelpfulCount={setHelpfulCount}
        handleReport={handleReport}
      />

      {showModal && (
        <ReportModal
          reportReason={reportReason}
          setReportReason={setReportReason}
          onCancel={() => setShowModal(false)}
          onSubmit={handleSubmitReport}
        />
      )}
    </div>
  );
};

export default PostCard;
