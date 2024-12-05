"use client";

import React, { useState } from "react";
const UpdateScoresModal = ({ closeModal }) => {
    const [newPercentile, setNewPercentile] = useState("");

    const handleSave = () => {
      // Update the percentile in the parent component
      closeModal();
    };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-4">Update scores</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="text-blue-600 font-bold text-lg">1</div>
            <label className="flex-1">
              <span className="block text-sm font-medium text-gray-700">
                Update your Rank
              </span>
              <input
                type="number"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="4"
              />
            </label>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-blue-600 font-bold text-lg">2</div>
            <label className="flex-1">
              <span className="block text-sm font-medium text-gray-700">
                Update your Percentile
              </span>
              <input
              type="number"
              value={newPercentile}
              onChange={(e) => setNewPercentile(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Enter new percentile"
            />
            </label>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-blue-600 font-bold text-lg">3</div>
            <label className="flex-1">
              <span className="block text-sm font-medium text-gray-700">
                Update your Current Score (out of 15)
              </span>
              <input
                type="number"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="10"
              />
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={closeModal}
            className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save →
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateScoresModal;
