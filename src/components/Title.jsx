import React from "react";

export const Title = ({ children }) => {
  return (
    <div className="p-4 bg-zinc-400 text-blue-800 text-4xl font-bold">
      {children}
    </div>
  );
};
