import React from "react";

const Stats = ({ total }: { total: string }) => {
  return (
    <div className="flex flex-row m-auto p-2 gap-8 rounded-lg border bg-white bg-opacity-20">
      <div className="my-auto">
        <div className="text-lg text-gray-400">Total Project</div>
        <div className="text-4xl text-gray-400">{total}</div>
      </div>
      <div className="text-gray-400 my-auto bg-gray-500 bg-opacity-20 rounded-full p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
        </svg>
      </div>
    </div>
  );
};

export default Stats;
