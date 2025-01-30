"use client";
import { useTaskStor } from "@/store/taskStor";
import { useEffect, useState } from "react";

export default function FormTask() {
  const [newTask, setNewTask] = useState("");
  const { addTask, tasks } = useTaskStor();

  const addTaskHandle = (newTask: string) => {
    addTask(newTask);
    setNewTask("");
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="flex gap-5 flex-wrap">
      <input
        type="text"
        value={newTask}
        className="border-2 rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:border-none focus:ring-blue-500"
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
