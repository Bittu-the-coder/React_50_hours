import React from "react";
import Table from "./Table";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#121212]">
      <Sidebar />
      <div className="flex-1 ml-16 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-100">Dashboard</h1>
          <p className="text-gray-400">Welcome to your project dashboard</p>
        </div>
        <div className="bg-[#1a1a1a] rounded-lg shadow-xl overflow-hidden">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
