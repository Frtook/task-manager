"use client";
import { useTaskStor } from "@/store/taskStor";

export default function TaskList({ filter }: { filter: string }) {
  const { checkTask, filterTasks, deleteTask } = useTaskStor();

  if (filterTasks(filter).length === 0) {
    return <p className="text-center text-gray-500">No task found</p>;
  }
  return filterTasks(filter).map((task) => {
    return (
      <div
        key={task.id}
        className="flex bg-gray-100 p-4 gap-5 rounded-xl justify-between"
      >
        <input
          type="checkbox"
          checked={task.complete}
          onChange={() => checkTask(task.id)}
        />
        <p
          className={`flex-1 ${task.complete && "line-through text-gray-500"}`}
        >
          {task.title}
        </p>
        <div className="flex gap-4">
          <button className="text-blue-500">Edit</button>
          <button className="text-red-500" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  });
}
