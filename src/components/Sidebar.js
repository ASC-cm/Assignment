"use client";
import { FaChartLine, FaCode, FaTable } from "react-icons/fa";

export default function Sidebar({ isSidebarOpen }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 bg-gray-100 p-4 w-64 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 md:relative md:translate-x-0 md:w-64`}
    >
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
  );
}
