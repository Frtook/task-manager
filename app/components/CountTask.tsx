"use client";
import { useTaskStor } from "@/store/taskStor";
import React from "react";

export default function CountTask() {
  const { getCountTasks, getCompleteTasks } = useTaskStor();
  return (
    <div className="text-center mt-5 text-gray-500">
      {getCountTasks()} Active task remaingin • {getCompleteTasks()} completed
    </div>
  );
}
