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
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Update Scores</h2>
          <FaHtml5 className="w-8 h-8 text-orange-500" />
        </div>

        {/* ✅ Aligned Labels & Inputs - Numbers and Labels now perfectly aligned */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center bg-blue-900 text-white rounded-full text-xs font-bold">
                1
              </span>
              <label
                htmlFor="rank"
                className="text-sm font-bold text-gray-700 whitespace-nowrap"
              >
                Update your Rank
              </label>
            </div>
            <input
              type="number"
              id="rank"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              className="w-24 p-2 border rounded-md text-right"
              placeholder="Enter Rank"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center bg-blue-900 text-white rounded-full text-xs font-bold">
                2
              </span>
              <label
                htmlFor="percentile"
                className="text-sm font-bold text-gray-700 whitespace-nowrap"
              >
                Update your Percentile
              </label>
            </div>
            <input
              type="number"
              id="percentile"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
              className="w-24 p-2 border rounded-md text-right"
              placeholder="Enter Percentile"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center bg-blue-900 text-white rounded-full text-xs font-bold">
                3
              </span>
              <label
                htmlFor="score"
                className="text-sm font-bold text-gray-700 whitespace-nowrap"
              >
                Update your Current Score (out of 15)
              </label>
            </div>
            <input
              type="number"
              id="score"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="w-24 p-2 border rounded-md text-right"
              placeholder="Enter Score"
            />
          </div>
        </div>

        {/* ✅ Buttons Section */}
        <div className="flex justify-end mt-4">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md font-bold"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-900 border border-black hover:bg-blue-700 hover:border-black text-white py-1 px-3 rounded-md text-sm mx-5 font-bold"
            onClick={handleUpdate}
          >
            Save →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillTest;
