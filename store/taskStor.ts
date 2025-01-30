import { TaskType } from "@/app/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
interface TaskStorType {
  tasks: TaskType[];
  addTask: (title: string) => void;
  checkTask: (id: number) => void;
  deleteTask: (id: number) => void;
  getCountTasks: () => number;
  getCompleteTasks: () => number;
  filterTasks: (type: string) => TaskType[];
  editTask: (id: number, newTitle: string) => void;
}

export const useTaskStor = create<TaskStorType>()(
  persist(
    (set, get) => ({
      tasks: [],
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
            return task.id === id
              ? { ...task, complete: !task.complete }
              : task;
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

      getCompleteTasks: () =>
        get().tasks.filter((task) => task.complete).length,

      filterTasks: (type: string) => {
        const tasks = get().tasks;
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

      editTask: (id: number, newTitle: string) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, title: newTitle } : task
          ),
        }));
      },
    }),
    {
      name: "tasks",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
