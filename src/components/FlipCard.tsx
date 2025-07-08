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
    <div className="flip-card">
      <div className={`flip-card-inner ${flipped ? "is-flipped" : ""}`}>
        <div 
            className="flip-card-front cursor-pointer flex justify-center items-center" 
            onClick={() => setFlipped(true)}>
                {front}
        </div>
        <div 
            className="flip-card-back cursor-pointer flex justify-center items-center" 
            onClick={() => setFlipped(false)}>
                {back}
        </div>
      </div>
    </div>
  );
}
