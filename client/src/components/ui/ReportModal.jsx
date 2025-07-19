// components/ui/ReportModal.jsx
import React from "react";

const ReportModal = ({ reportReason, setReportReason, onCancel, onSubmit }) => (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl w-80 shadow-xl">
      <h3 className="text-lg font-bold text-gray-800 mb-3">
        Why are you reporting this post?
      </h3>

      <select
        value={reportReason}
        onChange={(e) => setReportReason(e.target.value)}
        className="w-full mb-4 border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="">Select a reason</option>
        <option value="spam">Spam</option>
        <option value="offensive">Offensive Content</option>
        <option value="false">False Information</option>
        <option value="other">Other</option>
      </select>

      <div className="flex justify-end gap-2">
        <button
          onClick={onCancel}
          className="text-sm px-4 py-1 rounded-lg border border-gray-300 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          disabled={!reportReason}
          onClick={onSubmit}
          className={`text-sm px-4 py-1 rounded-lg text-white ${
            reportReason
              ? "bg-red-500 hover:bg-red-600"
              : "bg-red-300 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  </div>
);

export default ReportModal;
