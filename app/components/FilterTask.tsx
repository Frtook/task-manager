"use client";
import { useState } from "react";
import TaskList from "./TaskList";

export default function FilterTask() {
  const [filter, setFilter] = useState("all");
  const filterList = ["all", "active", "complete"];

  return (
    <div className="mt-5">
      <div className="flex gap-3 mb-5">
        {filterList.map((item) => (
          <button
            key={item}
            className={`px-4 py-2 duration-300 transition-colors rounded-xl ${
              filter === item
                ? "bg-blue-500 text-white hover:bg-blue-700"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <TaskList filter={filter} />
      </div>
    </div>
  );
}
