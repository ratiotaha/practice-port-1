"use client";
import Image from "next/image";
import Nav from "../app/components/Nav";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Exp from "./components/exp";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Nav />
        <Hero />
        {/* <Aboutme /> */}
        <Exp />
      </div>
    </main>
  );
}
