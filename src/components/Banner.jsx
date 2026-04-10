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
    <Title>
      <div className="flex justify-center items-center space-y-5 flex-col">
        <h1>This is home page</h1>
        <button
          className="text-sm p-3 text-black bg-blue-700 hover:bg-green-700 rounded-2xl hover:scale-102"
          onClick={handleClick}
        >
          Share Story
        </button>
      </div>
    </Title>
  );
};

export default Banner;
