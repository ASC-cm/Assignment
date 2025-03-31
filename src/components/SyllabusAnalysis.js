"use client";

export default function SyllabusAnalysis() {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Syllabus Wise Analysis</h2>

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
  );
}
