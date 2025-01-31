"use client";
import logo from "@/public/vercel.svg";
import { useThemeStore } from "@/store/theme.store";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
export default function Navbar() {
  const { setTheme, theme } = useThemeStore();
  const handelClick = () => {
    setTheme();
  };

  return (
    <div className="flex gap-5 justify-between px-8 py-4 border-b border-b-black dark:border-gray-600">
      <Image src={logo} width={30} className="bg-[#0f172a]" alt="logo"></Image>
      <h1 className="text-4xl flex-1 font-bold">Task Manager App</h1>
      {theme === "dark" ? (
        <Sun onClick={handelClick} />
      ) : (
        <Moon onClick={handelClick} />
      )}
    </div>
  );
}
