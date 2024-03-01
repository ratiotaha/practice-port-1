import Image from "next/image";
import Nav from "../app/components/Nav";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <div className="text-center">
        <Nav />
        <Hero />
      </div>
    </main>
  );
}
