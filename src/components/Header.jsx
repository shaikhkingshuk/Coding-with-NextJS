import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="p-5 border-b-2 flex flex-row justify-between">
      <Link href={"/"}>DevTell</Link>
      <nav className="space-x-5">
        <Link href={"/about"}>About</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/stories"}>Stories</Link>
        <Link href={"/about/teams/members"}>Nested</Link>
      </nav>
    </header>
  );
};
