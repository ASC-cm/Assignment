"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import SkillTest from "./SkillTest";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  FaTrophy,
  FaPercent,
  FaCheckCircle,
  FaHtml5,
  FaChartLine,
  FaUser,
  FaBullseye,
  FaLocationArrow,
  FaCode,
  FaTable,
} from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
Chart.register(...registerables);

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const barData = {
    labels: [
      "HTML Tools",
      "Tags & References in HTML",
      "Tables & References in HTML",
    ],
    datasets: [
      {
        label: "Scores",
        data: [80, 60, 24],
        backgroundColor: ["#4299E1", "#ED8936", "#E53E3E"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const lineData = {
    labels: ["0", "25", "50", "75", "100"],
    datasets: [
      {
        label: "Percentile",
        data: [10, 20, 35, 40, 30],
        fill: false,
        backgroundColor: "rgb(156, 39, 176)",
        borderColor: "rgb(156, 39, 176)",
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { display: false },
    },
    elements: { point: { radius: 3 } },
  };

  const doughnutData = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [10, 5],
        backgroundColor: ["rgb(59, 130, 246)", "rgb(170, 164, 164)"],
        hoverBackgroundColor: ["rgb(37, 99, 235)", "rgb(140, 132, 132)"],
      },
    ],
  };

  const doughnutOptions = {
    plugins: { legend: { display: false } },
    cutout: "80%",
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Header (Full Width) */}
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">WhatBytes</h1>
          <div>
            <FaUser className="inline-block align-middle mr-2" />
            <span className="font-medium inline-block align-middle">
              Rahil Siddique
            </span>
          </div>
        </header>

        <div className="flex flex-1 flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="w-full md:w-64 bg-gray-100 p-4">
            <nav>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200 transition-colors duration-200"
                  >
                    <FaChartLine className="h-5 w-5" />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200 transition-colors duration-200 text-blue-600 font-semibold"
                  >
                    <FaCode className="h-5 w-5" />
                    <span>Skill Test</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200 transition-colors duration-200"
                  >
                    <FaTable className="h-5 w-5" />
                    <span>Internship</span>
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content (Flex Columns) */}
          <main className="flex-1 p-4 flex flex-col lg:flex-row">
            {/* Skill Test & Quick Statistics Column (Wider Width) */}
            <div className="w-full lg:w-2/3 p-4 order-1">
              {/* Skill Test Section */}
              <h2 className="text-lg font-semibold mb-4">Skill Test</h2>
              <div className="bg-white p-4 rounded-lg shadow mb-6">
                <div className="flex items-start">
                  <div className="mr-4 flex flex-col items-center">
                    <p className="text-xs font-bold mb-1">HTML</p>
                    <FaHtml5 className="w-12 h-12 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">
                      Hyper Text Markup Language
                    </h3>
                    <div className="flex items-center justify-between flex-wrap">
                      <p className="text-sm text-gray-600">
                        Questions: 08 | Duration: 15 mins | Submitted on 5 June
                        2021
                      </p>
                      <button
                        className="bg-blue-900 border border-black hover:bg-blue-700 hover:border-black text-white py-1 px-3 rounded-md text-sm mx-5"
                        onClick={handleOpenModal}
                      >
                        Update
                      </button>
                      <SkillTest
                        showModal={isModalOpen}
                        setShowModal={setIsModalOpen}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Quick Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xl font-bold">4</p>
                    <div className="flex items-center justify-center space-x-2">
                      <FaTrophy className="text-yellow-500" />
                      <p className="font-semibold">Your Rank</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-bold">90%</p>
                    <div className="flex items-center justify-center space-x-2">
                      <FaPercent className="text-green-500" />
                      <p className="font-semibold">Percentile</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-bold">12/15</p>
                    <div className="flex items-center justify-center space-x-2">
                      <FaCheckCircle className="text-blue-500" />
                      <p className="font-semibold">Correct Answers</p>
                    </div>
                  </div>
                  {/* Comparison Graph */}
                  <div className="bg-white rounded-lg shadow p-6 col-span-1 md:col-span-3">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">
                        Comparison Graph
                      </h2>
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      You scored 30% percentile which is lower than the average
                      percentile 72% of all the engineers who took this
                      assessment.
                    </p>
                    <div className="relative h-60">
                      <Line data={lineData} options={lineOptions} />
                      <div className="absolute top-1/4 right-1/4 bg-white p-2 rounded-lg shadow-md">
                        <div className="text-center">
                          <span className="text-sm font-semibold">90</span>
                          <p className="text-xs text-gray-600">
                            numberOfStudent : 4
                          </p>
                        </div>
                      </div>
                      <div className="absolute top-1/2 left-1/4 text-xs text-gray-600">
                        your percentile
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Syllabus Wise Analysis & Question Analysis Column (Smaller Width) */}
            <div className="w-full lg:w-1/3 p-4 order-2 lg:order-3">
              {/* Syllabus Wise Analysis */}
              <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="text-lg font-semibold mb-4">
                  Syllabus Wise Analysis
                </h2>

                {/* Progress Bars */}
                <div className="space-y-6 md:space-y-8 lg:space-y-10">
                  <div>
                    <div className="flex justify-between text-sm font-semibold mb-2">
                      <span>HTML Tools, Forms, History</span>
                      <span className="text-blue-600">80%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-3 bg-blue-500 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-semibold mb-2">
                      <span>Tags & References in HTML</span>
                      <span className="text-orange-600">60%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-3 bg-orange-500 rounded-full w-3/5"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-semibold mb-1">
                      <span>Tables & References in HTML</span>
                      <span className="text-red-600">24%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-red-500 rounded-full w-1/4"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-semibold mb-1">
                      <span>Tables & CSS Basics</span>
                      <span className="text-green-600">96%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full w-[96%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question Analysis */}
              <div className="bg-white rounded-lg shadow p-6 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Question Analysis</h2>
                  <span className="text-sm">10/15</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  You scored 10 question correct out of 15. However it still
                  needs some improvements
                </p>
                <div className="relative h-40">
                  <Doughnut data={doughnutData} options={doughnutOptions} />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
