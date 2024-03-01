import React from "react";

export default function Nav() {
  return (
    <div className="fixed   w-screen border   flex flex-row justify-between items-center p-[10px]">
      <img src="logo.png" alt="Logo" className="h-8 " />
      <ul className="flex">
        <li className="mx-4 ">About Me</li>
        <li className="mx-4">Experience</li>
        <li className="mx-4">Projects</li>
      </ul>
      <button className="rounded px-4 py-2 bg-teal-400 hover:bg-teal-00 mr-2">
        Contact Me
      </button>
    </div>
  );
}
