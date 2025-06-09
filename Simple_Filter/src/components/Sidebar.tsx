import React from "react";
import { FaHome, FaFile, FaUser, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-16 fixed h-screen border-r border-gray-800 bg-[#1a1a1a] p-4 flex flex-col items-center space-y-8">
      <div className="w-full h-12 bg-blue-600 rounded-md flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
        <FaHome className="text-white text-xl" />
      </div>
      <div className="w-full h-12 bg-[#242424] rounded-md flex items-center justify-center cursor-pointer hover:bg-[#2a2a2a] transition-colors">
        <FaFile className="text-gray-400 text-xl" />
      </div>
      <div className="w-full h-12 bg-[#242424] rounded-md flex items-center justify-center cursor-pointer hover:bg-[#2a2a2a] transition-colors">
        <FaUser className="text-gray-400 text-xl" />
      </div>
      <div className="w-full h-12 bg-[#242424] rounded-md flex items-center justify-center cursor-pointer hover:bg-[#2a2a2a] transition-colors">
        <FaCog className="text-gray-400 text-xl" />
      </div>
    </div>
  );
};

export default Sidebar;
