"use client";
import React from "react";
import { Title } from "./Title";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  const handleClick = () => {
    const pass = prompt("Enter your password");
    if (pass === "1234") {
      router.push("/dashboard");
    }
  };
  return (
    <div className="flex justify-center items-center space-y-5 flex-col">
      <Title>This is home page</Title>
      <button
        className="p-4 bg-blue-700 hover:bg-green-700 rounded-2xl hover:scale-102"
        onClick={handleClick}
      >
        Share Story
      </button>
    </div>
  );
};

export default Banner;
