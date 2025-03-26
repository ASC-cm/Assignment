import React, { useState } from "react";
import { FaHtml5 } from "react-icons/fa";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SkillTest = ({ showModal, setShowModal }) => {
  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("");
  const [score, setScore] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://your-backend-url.com/api/update-scores",
        {
          rank,
          percentile,
          score,
        }
      );

      toast.success("Scores updated successfully!");
      setShowModal(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update scores.");
    } finally {
      setLoading(false);
    }
  };

  if (!showModal) return null;

  return (
    <>
      <ToastContainer />
      <div className="fixed inset-0 flex justify-center items-center bg-transparent bg-opacity-1">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Update Scores</h2>
            <FaHtml5 className="w-8 h-8 text-orange-500" />
          </div>

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

          <div className="flex justify-end mt-4">
            <button
              className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md font-bold"
              onClick={() => setShowModal(false)}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              className="bg-blue-900 border border-black hover:bg-blue-700 hover:border-black text-white py-1 px-3 rounded-md text-sm mx-5 font-bold flex items-center"
              onClick={handleUpdate}
              disabled={loading}
            >
              {loading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                ></motion.div>
              ) : (
                "Save →"
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SkillTest;
