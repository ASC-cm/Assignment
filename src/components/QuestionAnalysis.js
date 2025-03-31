"use client";

import { Doughnut } from "react-chartjs-2";
import Image from "next/image";

export default function QuestionAnalysis({ doughnutData, doughnutOptions }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Question Analysis</h2>
        <span className="text-sm">10/15</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        You scored 10 question correct out of 15. However it still needs some
        improvements
      </p>
      <div className="flex justify-center">
        <div className="relative h-40 w-40 flex items-center justify-center mx-auto">
          <Doughnut data={doughnutData} options={doughnutOptions} />

          {/* Center Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src="/assets/target.png" alt="Target" className="w-9 h-9" />
          </div>
        </div>
      </div>
    </div>
  );
}
