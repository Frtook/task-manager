import { getTasksFromLocalStorage } from "@/app/helper/helper";
import { TaskType } from "@/app/types";
import { create } from "zustand";

interface TaskStorType {
  tasks: TaskType[];
  addTask: (title: string) => void;
  checkTask: (id: number) => void;
  deleteTask: (id: number) => void;
  getCountTasks: () => number;
  getCompleteTasks: () => number;
  filterTasks: (type: string) => TaskType[];
}

export const useTaskStor = create<TaskStorType>()((set, get) => ({
  tasks: getTasksFromLocalStorage(),
  addTask: (title) => {
    set((state) => {
      return {
        tasks: [...state.tasks, { id: Date.now(), title, complete: false }],
      };
    });
  },
  checkTask: (id) => {
    set((state) => {
      const updateTask = state.tasks.map((task) => {
        return task.id === id ? { ...task, complete: !task.complete } : task;
      });
      return { tasks: updateTask };
    });
  },
  deleteTask: (id) => {
    set((state) => {
      return { tasks: state.tasks.filter((task) => task.id !== id) };
    });
  },

  getCountTasks: () => get().tasks.length,

  getCompleteTasks: () => get().tasks.filter((task) => task.complete).length,

  filterTasks: (type: string) => {
    const tasks = get().tasks; // Use `get()` to access the current state
    switch (type) {
      case "all":
        return tasks;
      case "active":
        return tasks.filter((task) => !task.complete);
      case "complete":
        return tasks.filter((task) => task.complete);
      default:
        return tasks;
    }
  },
}));
