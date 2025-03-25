import React, { useState } from "react";
import { FaHtml5 } from "react-icons/fa";

const SkillTest = ({ showModal, setShowModal }) => {
  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("");
  const [score, setScore] = useState("");

  const handleUpdate = () => {
    console.log("Updated:", { rank, percentile, score });
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-transparent bg-opacity-10">
      {/* ✅ Fully transparent background with blur effect */}

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Update scores</h2>
          <FaHtml5 className="w-8 h-8 text-orange-500" />
        </div>

        <div className="mb-4">
          <label
            htmlFor="rank"
            className="block text-sm font-medium text-gray-700"
          >
            1 Update your Rank
          </label>
          <input
            type="number"
            id="rank"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter Rank"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="percentile"
            className="block text-sm font-medium text-gray-700"
          >
            2 Update your Percentile
          </label>
          <input
            type="number"
            id="percentile"
            value={percentile}
            onChange={(e) => setPercentile(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter Percentile"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="score"
            className="block text-sm font-medium text-gray-700"
          >
            3 Update your Current Score (out of 15)
          </label>
          <input
            type="number"
            id="score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter Score"
          />
        </div>

        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
            onClick={() => setShowModal(false)}
          >
            cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handleUpdate}
          >
            save →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillTest;
