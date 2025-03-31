"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrophy, FaPercent, FaCheckCircle } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function QuickStatistics() {
  const [rank, setRank] = useState(4);
  const [percentile, setPercentile] = useState(90);
  const [score, setScore] = useState(12);
  const [percentileData, setPercentileData] = useState([
    1, 2, 5, 12, 30, 50, 40, 20, 10, 5, 2,
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/statistics/")
      .then((response) => {
        setRank(response.data.rank);
        setPercentile(response.data.percentile);
        setScore(response.data.score);
        setPercentileData(response.data.percentile_data);
        toast.success("Statistics loaded successfully!");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        toast.error("Failed to load statistics!");
      });
  }, []);

  const lineData = {
    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    datasets: [
      {
        label: "Percentile Distribution",
        data: percentileData,
        borderColor: "#7E57C2",
        backgroundColor: "rgba(126, 87, 194, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#7E57C2",
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        type: "linear",
        grid: { display: false },
        title: { display: false },
      },
      y: {
        grid: { display: true },
        title: { display: false },
        ticks: { display: false },
      },
    },
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-white p-4 rounded-lg shadow w-full">
        <h2 className="text-lg font-semibold mb-4 text-center sm:text-left">
          Quick Statistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {/* Rank */}
          <div>
            <p className="text-xl font-bold">{rank}</p>
            <div className="flex items-center justify-center space-x-2">
              <FaTrophy className="text-yellow-500 text-lg" />
              <p className="font-semibold">Your Rank</p>
            </div>
          </div>

          {/* Percentile */}
          <div>
            <p className="text-xl font-bold">{percentile}%</p>
            <div className="flex items-center justify-center space-x-2">
              <FaPercent className="text-green-500 text-lg" />
              <p className="font-semibold">Percentile</p>
            </div>
          </div>

          {/* Correct Answers */}
          <div>
            <p className="text-xl font-bold">{score}/15</p>
            <div className="flex items-center justify-center space-x-2">
              <FaCheckCircle className="text-blue-500 text-lg" />
              <p className="font-semibold">Correct Answers</p>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-lg shadow p-6 col-span-1 sm:col-span-2 md:col-span-3 w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Comparison Graph</h2>
              <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              You scored{" "}
              <span className="font-semibold">{percentile}% percentile</span>{" "}
              which is lower than the average percentile{" "}
              <span className="font-semibold">72%</span> of all the engineers
              who took this assessment.
            </p>
            <div className="relative h-60 w-full">
              <Line
                data={lineData}
                options={lineOptions}
                className="w-full h-full"
              />
              <div className="absolute top-[25%] right-[10%] bg-white p-2 rounded-lg shadow-md w-24 sm:w-28">
                <div className="text-center">
                  <span className="text-sm font-semibold">90</span>
                  <p className="text-xs text-gray-600">
                    numberOfStudent: {rank}
                  </p>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/4 text-xs text-gray-600 text-center">
                your percentile
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
