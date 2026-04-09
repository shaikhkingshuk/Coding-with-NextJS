import { Title } from "@/components/Title";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      <Title>This is about page</Title>
      <nav className="space-x-5">
        <Link href={"/about/contact"}>Contact</Link>
        <Link href={"/about/teams"}>Teams</Link>
      </nav>
    </div>
  );
};

export default AboutPage;
