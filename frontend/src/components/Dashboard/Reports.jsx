import React from 'react'
import { useState } from "react";
import { Search, Eye, Download } from "lucide-react";

const reportsData = [
  {
    title: "Monthly Risk Assessment — February 2026",
    type: "Risk",
    date: "Feb 24, 2026",
    pages: 12,
    status: "Ready",
  },
  {
    title: "Health Forecast Report (30-Day Horizon)",
    type: "Forecast",
    date: "Feb 20, 2026",
    pages: 8,
    status: "Ready",
  },
  {
    title: "Intervention Effectiveness Analysis",
    type: "Intervention",
    date: "Feb 15, 2026",
    pages: 15,
    status: "Ready",
  },
  {
    title: "Quarterly Health Summary — Q4 2025",
    type: "Risk",
    date: "Jan 5, 2026",
    pages: 22,
    status: "Ready",
  },
  {
    title: "Sleep Pattern Deep-Dive",
    type: "Forecast",
    date: "Jan 2, 2026",
    pages: 6,
    status: "Ready",
  },
  {
    title: "Cardiac Risk Stratification Update",
    type: "Risk",
    date: "Dec 18, 2025",
    pages: 10,
    status: "Ready",
  },
  {
    title: "Twin Model Calibration Report",
    type: "Intervention",
    date: "Dec 10, 2025",
    pages: "-",
    status: "Processing",
  },
];

const filters = ["All", "Risk", "Forecast", "Intervention"];

export default function Reports() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredReports = reportsData.filter((report) => {
    const matchSearch = report.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      activeFilter === "All" || report.type === activeFilter;

    return matchSearch && matchFilter;
  });

  const getTypeStyle = (type) => {
    switch (type) {
      case "Risk":
        return "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300";
      case "Forecast":
        return "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300";
      case "Intervention":
        return "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300";
      default:
        return "";
    }
  };

  const getStatusStyle = (status) => {
    return status === "Ready"
      ? "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300"
      : "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-300";
  };

  return (
    <div className="space-y-6 text-slate-800 dark:text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Reports</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Generated reports, assessments, and analyses
          </p>
        </div>

        <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
          Generate Report
        </button>
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">

        {/* SEARCH */}
        <div className="flex items-center bg-white dark:bg-slate-800 border border-gray-200/50 dark:border-slate-700/50 rounded-lg px-3 py-2 w-full md:w-80 shadow-sm">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search reports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-2 w-full bg-transparent outline-none text-sm"
          />
        </div>

        {/* FILTERS */}
        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1 rounded-full text-sm ${
                activeFilter === f
                  ? "bg-teal-200 dark:bg-teal-700"
                  : "text-teal-500 dark:text-teal-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200/50 dark:border-slate-700/50 overflow-hidden shadow-sm">

        {/* HEADER */}
        <div className="grid grid-cols-6 text-sm text-slate-500 dark:text-gray-400 px-6 py-3 border-b border-gray-200/50 dark:border-slate-700/50 font-medium">
          <p>REPORT</p>
          <p>TYPE</p>
          <p>DATE</p>
          <p>PAGES</p>
          <p>STATUS</p>
          <p className="text-right">ACTIONS</p>
        </div>

        {/* ROWS */}
        {filteredReports.map((report, i) => (
          <div
            key={i}
            className="grid grid-cols-6 items-center px-6 py-4 border-b border-gray-200/50 dark:border-slate-700/50 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition"
          >
            <p className="font-medium">{report.title}</p>

            <span
              className={`px-2 py-1 mr-3 text-xs rounded ${getTypeStyle(
                report.type
              )}`}
            >
              {report.type}
            </span>

            <p>{report.date}</p>
            <p>{report.pages}</p>

            <span
              className={`px-2 py-1 text-xs rounded ${getStatusStyle(
                report.status
              )}`}
            >
              {report.status}
            </span>

            {/* ACTIONS */}
            <div className="flex justify-end gap-4">
              <Eye
                size={18}
                className="cursor-pointer text-gray-500 hover:text-teal-500"
              />
              <Download
                size={18}
                className="cursor-pointer text-gray-500 hover:text-teal-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}