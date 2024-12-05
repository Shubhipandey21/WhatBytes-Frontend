"use client";
import Image from "next/image";
import React, { useState } from "react";

import UpdateScoresModal from "./UpdateScoresModal";

const SkillTestCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Skill Test</h2>
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center">
          <Image
            src="/html.png"
            alt="HTML5 Logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold">Hyper Text Markup Language</h3>
            <p className="text-sm text-gray-600">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
        </div>
        <button
          onClick={openModal}
          className="bg-blue-900 text-white px-4 py-2 rounded-lg"
        >
          Update
        </button>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Quick Statistics</h3>
        <div className="flex justify-between mt-2">
          <div className="text-center">
            <div className="text-2xl font-bold">1</div>
            <div className="text-gray-500 text-sm">Your Rank</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">30%</div>
            <div className="text-gray-500 text-sm">Percentile</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">10 / 15</div>
            <div className="text-gray-500 text-sm">Correct Answers</div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && <UpdateScoresModal closeModal={closeModal} />}
    </div>
  );
};

export default SkillTestCard;
