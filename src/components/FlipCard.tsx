"use client";

import "@/styles/flipcard.css";
import { useState } from "react";
export default function FlipCard({
  front="",
  back="",
}: {
  front: string;
  back: string;
}) {
    const [flipped, setFlipped] = useState(false);
  return (
    <div className="flip-card w-[300px] md:w-[500px] xl:w-[1000px] aspect-3/2 mx-auto">
      <div className={`flip-card-inner ${flipped ? "is-flipped" : ""}`}>
        <div 
            className="flip-card-front cursor-pointer flex justify-center items-center text-2xl md:text-4xl xl:text-7xl" 
            onClick={() => setFlipped(true)}>
                {front}
        </div>
        <div 
            className="flip-card-back cursor-pointer flex justify-center items-center text-lg md:text-2xl xl:text-5xl overflow-auto" 
            onClick={() => setFlipped(false)}>
                {back}
        </div>
      </div>
    </div>
  );
}
