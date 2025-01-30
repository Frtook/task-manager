"use client";
export function getTasksFromLocalStorage() {
  if (typeof window !== "undefined") {
    if (window.localStorage.getItem("tasks") === null) return [];
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  }
}
