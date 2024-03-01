import React from "react";

export default function Nav() {
  return (
    <div className="fixed   border border-gray-200 flex flex-row justify-between items-center p-2">
      <img src="logo.png" alt="Logo" className="h-8 ml-2" />
      <ul className="flex">
        <li className="mx-4">About Me</li>
        <li className="mx-4">Experience</li>
        <li className="mx-4">Projects</li>
      </ul>
      <button className="rounded px-4 py-2 bg-blue-400 hover:bg-blue-200 mr-2">
        Contact Me
      </button>
    </div>
  );
}
