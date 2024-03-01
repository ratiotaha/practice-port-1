"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useRef } from 'react';


export default function Aboutme() {
  return (
    <div className="text-left max-w-md mx-auto ">
      <h4 className="text-3xl text-center text-teal-500 font-bold">About me</h4>
      <p className=" bg-yellow-500 whitespace-pre-line border p-10 rounded-[20px]">
        {
          "  I am the architect of dreams, the weaver of tales, and the curator of experiences. My name is [Your Name], and I am fueled by a relentless passion for exploration and creation. With a curious mind and a heart full of ambition, I traverse the landscapes of imagination, seeking inspiration in every corner and weaving it into the fabric of reality.\n\nDriven by a desire to make a difference, I immerse myself in the art of [Your Project Field], where innovation meets purpose and imagination knows no bounds. From the depths of coding to the heights of design, I thrive in the diverse tapestry of disciplines that shape our digital landscape.\n\nBeyond the pixels and lines of code, I am a storyteller at heart, weaving narratives that captivate, inspire, and resonate with audiences far and wide. With every project, I strive to imbue a piece of myself, infusing it with authenticity, integrity, and a touch of magic.\n\nJoin me on this journey of discovery and creation, where together, we dare to dream, push boundaries, and redefine what is possible. Welcome to my world, where the journey is just as important as the destination, and every step forward is a testament to the power of imagination."
        }
      </p>
    </div>
  );
}
