"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12">
      <div className="text-6xl col-span-12 flex  justify-center items-center h-screen ">
        <Fade cascade damping={0.1}>
          <p>
            Hi I am <span className="  text-bold text-teal-500">"Name"</span>
          </p>
        </Fade>
      </div>
    </section>
  );
}
