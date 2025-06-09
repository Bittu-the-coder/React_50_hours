import React from "react";
import { data } from "../utils/data";
import { FaFilter, FaSort } from "react-icons/fa";

const Table = () => {
  const [filteredData, setFilteredData] = React.useState(data);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortOrder, setSortOrder] = React.useState("asc");

  const handleFilterClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortClick = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
  };

  // Add these constants for pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="overflow-x-auto">
      {/* Filter section */}
      <div className="flex item-center mb-5">
        <button
          className="flex items-center bg-[#242424] text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-md"
          onClick={handleFilterClick}
        >
          <FaFilter className="text-gray-400 hover:text-white transition-colors mr-2" />
          <span className="hidden md:inline text-gray-400 hover:text-white transition-colors">
            Filter
          </span>
        </button>
        <button
          onClick={handleSortClick}
          className="flex items-center bg-[#242424] text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-md ml-2"
        >
          <span className="hidden md:inline">Sort</span>
          <FaSort className="text-gray-400 hover:text-white transition-colors ml-2" />
        </button>
      </div>
      {isSortDropdownOpen && (
        <div className="absolute bg-[#1a1a1a] border border-gray-800 rounded-md shadow-lg p-4 z-10">
          <div className="flex flex-col space-y-2">
            <button
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => {
                const sortedData = [...filteredData].sort((a, b) =>
                  a.client.localeCompare(b.client)
                );
                setFilteredData(sortedData);
                setIsSortDropdownOpen(false);
              }}
            >
              Sort by Client
            </button>

            <button
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors flex items-center justify-between w-full"
              onClick={() => {
                const sortedData = [...filteredData].sort((a, b) => {
                  // Parse dates with a specific format
                  const dateA = new Date(a.date.split("/").reverse().join("-"));
                  const dateB = new Date(b.date.split("/").reverse().join("-"));

                  // Handle invalid dates
                  if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
                    return 0;
                  }

                  // Sort based on current order
                  const diff =
                    sortOrder === "asc"
                      ? dateA.getTime() - dateB.getTime()
                      : dateB.getTime() - dateA.getTime();

                  // If dates are equal, sort by client name as secondary criteria
                  return diff === 0 ? a.client.localeCompare(b.client) : diff;
                });

                setFilteredData(sortedData);
                setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                setIsSortDropdownOpen(false);
              }}
            >
              <span>
                Sort by Date{" "}
                {sortOrder === "asc" ? "(Oldest First)" : "(Newest First)"}
              </span>
            </button>
            <button
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => {
                const sortedData = [...filteredData].sort((a, b) =>
                  a.country.localeCompare(b.country)
                );
                setFilteredData(sortedData);
                setIsSortDropdownOpen(false);
              }}
            >
              Sort by Country
            </button>
          </div>
        </div>
      )}

      {isDropdownOpen && (
        <div className="absolute bg-[#1a1a1a] border border-gray-800 rounded-md shadow-lg p-4 z-10">
          <div className="flex flex-col space-y-2">
            <button
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => {
                setFilteredData(
                  data.filter((item) => item.status === "Completed")
                );
                setIsDropdownOpen(false);
              }}
            >
              Completed Projects
            </button>
            <button
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => {
                setFilteredData(
                  data.filter((item) => item.status === "In Progress")
                );
                setIsDropdownOpen(false);
              }}
            >
              In Progress Projects
            </button>
            <label htmlFor="client-search" className="text-gray-400">
              Search for a client
            </label>
            <input
              type="text"
              id="client-search"
              placeholder="Search for a client"
              className="px-4 py-2 bg-[#242424] text-gray-400 rounded-md"
              onChange={(e) => {
                const searchTerm = e.target.value.toLowerCase();
                setFilteredData(
                  data.filter((item) =>
                    item.client.toLowerCase().includes(searchTerm)
                  )
                );
              }}
            />
          </div>
        </div>
      )}
      <table className="min-w-full bg-[#1a1a1a] text-gray-200">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="px-6 py-4 text-left">Client</th>
            <th className="px-6 py-4 text-left">Country</th>
            <th className="px-6 py-4 text-left">Email</th>
            <th className="px-6 py-4 text-left">Project</th>
            <th className="px-6 py-4 text-left">Progress</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-800 hover:bg-[#242424] transition-colors"
            >
              <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.client}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{item.client}</span>
                </div>
              </td>
              <td className="px-6 py-4">{item.country}</td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{item.project}</td>
              <td className="px-6 py-4">
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: item.progress }}
                  ></div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    item.status === "Completed"
                      ? "bg-green-900 text-green-300"
                      : "bg-yellow-900 text-yellow-300"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination section */}
      <div className="flex justify-between items-center mt-5">
        <span className="text-gray-400">
          Showing {indexOfFirstItem + 1}-
          {Math.min(indexOfLastItem, filteredData.length)} of{" "}
          {filteredData.length}
        </span>
        <div className="flex space-x-2">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-[#242424] rounded-md transition-colors ${
              currentPage === 1
                ? "text-gray-600 cursor-not-allowed"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Previous
          </button>
          <div className="flex items-center px-4 text-gray-400">
            Page {currentPage} of {totalPages}
          </div>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-[#242424] rounded-md transition-colors ${
              currentPage === totalPages
                ? "text-gray-600 cursor-not-allowed"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
