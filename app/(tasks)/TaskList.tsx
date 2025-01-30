"use client";
import { useState } from "react";
import { useTaskStor } from "@/store/taskStor";

export default function TaskList({ filter }: { filter: string }) {
  const { checkTask, filterTasks, deleteTask, editTask } = useTaskStor();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState("");

  const handleSave = (taskId: number) => {
    editTask(taskId, editedTitle);
    setEditingId(null);
  };

  if (filterTasks(filter).length === 0) {
    return <p className="text-center text-gray-500">No task found</p>;
  }

  return filterTasks(filter).map((task) => {
    return (
      <div
        key={task.id}
        className="flex dark:bg-[#1e293b] dark:border-none dark:ring-0 dark:ring-white bg-gray-100 p-4 gap-5 rounded-xl justify-between"
      >
        <input
          type="checkbox"
          checked={task.complete}
          onChange={() => checkTask(task.id)}
        />

        {editingId === task.id ? (
          <input
            type="text"
            value={editedTitle}
            autoFocus
            onChange={(e) => setEditedTitle(e.target.value)}
            className="flex-1 bg-transparent focus:outline-none border border-black dark:border-white  p-2 "
          />
        ) : (
          <p
            className={`flex-1 ${
              task.complete && "line-through text-gray-500"
            }`}
          >
            {task.title}
          </p>
        )}

        <div className="flex gap-4">
          <button
            className="text-blue-500"
            onClick={() => {
              if (editingId === task.id) {
                handleSave(task.id);
              } else {
                setEditingId(task.id);
                setEditedTitle(task.title);
              }
            }}
          >
            {editingId === task.id ? "Save" : "Edit"}
          </button>
          <button className="text-red-500" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  });
}
