"use client";
import { FaHtml5 } from "react-icons/fa";
import SkillTest from "./SkillTest";

export default function SkillTestSection({ isModalOpen, setIsModalOpen }) {
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="flex flex-col sm:flex-row items-start">
        {/* Icon Section */}
        <div className="mr-0 sm:mr-4 flex flex-col items-center mb-4 sm:mb-0">
          <p className="text-xs font-bold mb-1">HTML</p>
          <FaHtml5 className="w-12 h-12 text-orange-500" />
        </div>

        {/* Text and Button Section */}
        <div className="flex-1">
          <h3 className="text-base font-semibold">
            Hyper Text Markup Language
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
            <button
              className="bg-blue-900 border border-black hover:bg-blue-700 hover:border-black text-white py-1 px-3 rounded-md text-sm mt-3 sm:mt-0"
              onClick={handleOpenModal}
            >
              Update
            </button>
            <SkillTest showModal={isModalOpen} setShowModal={setIsModalOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}
