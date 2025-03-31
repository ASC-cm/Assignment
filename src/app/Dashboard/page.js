"use client";
import React, { useState } from "react";
import { Chart, registerables } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SkillTestSection from "@/components/SkillTestSection";
import QuickStatistics from "@/components/QuickStatistics";
import SyllabusAnalysis from "@/components/SyllabusAnalysis";
import QuestionAnalysis from "@/components/QuestionAnalysis";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    labels: ["Progress", "Remaining"],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["#007bff", "#e6f0ff"],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    cutout: "65%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <div className="flex flex-1">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <main className="flex-1 p-4 flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 p-4 order-1">
              <h2 className="text-lg font-semibold mb-4">Skill Test</h2>
              <SkillTestSection
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
              <QuickStatistics lineData={lineData} lineOptions={lineOptions} />
            </div>
            <div className="w-full lg:w-1/3 p-4 order-2 lg:order-3">
              <SyllabusAnalysis />
              <QuestionAnalysis
                doughnutData={doughnutData}
                doughnutOptions={doughnutOptions}
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
