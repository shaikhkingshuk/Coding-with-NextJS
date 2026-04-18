import Link from "next/link";
import React from "react";

const DashBoardlayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 border-r-2">
        <h2 className="p-2 gap-5">Navigation</h2>
        <div className="flex flex-col gap-5">
          <Link
            className="p-2 w-full bg-zinc-800 rounded-full"
            href={"/dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="p-2 w-full bg-zinc-800 rounded-full"
            href={"/dashboard/my-profile"}
          >
            My Profile
          </Link>
          <Link
            className="p-2 w-full bg-zinc-800 rounded-full"
            href={"/setting"}
          >
            Setting
          </Link>
        </div>
      </div>
      <div className="col-span-9 ">{children}</div>
    </div>
  );
};

export default DashBoardlayout;
