"use client";
import { useTaskStor } from "@/store/taskStor";
import { useState } from "react";

export default function FormTask() {
  const [newTask, setNewTask] = useState("");
  const { addTask } = useTaskStor();

  const addTaskHandle = (newTask: string) => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="flex gap-5 flex-wrap">
      <input
        type="text"
        value={newTask}
        className="border-2 dark:bg-[#1e293b] dark:border-none dark:ring-0 dark:ring-white  rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:border-none focus:ring-blue-500"
        placeholder="Add a new task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        className="p-4 hover:bg-blue-700 duration-300 transition-colors bg-blue-500 text-white rounded-xl"
        onClick={() => addTaskHandle(newTask)}
      >
        Add Task
      </button>
    </div>
  );
}
