"use client";

import React, { useEffect, useState } from "react";
import "./cursor.css"; // Import the CSS file for styling

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateDotPosition = () => {
      setDotPosition((prevDotPosition) => ({
        x: prevDotPosition.x + (position.x - prevDotPosition.x) * 0.1,
        y: prevDotPosition.y + (position.y - prevDotPosition.y) * 0.1,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    const interval = setInterval(updateDotPosition, 10);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [position]);

  if (window.innerWidth <= 768) {
    return null;
  }

  return (
    <div>
      <div
        className="cursor"
        style={{ left: position.x, top: position.y }}
      ></div>
      <div
        className="dot"
        style={{ left: dotPosition.x, top: dotPosition.y }}
      ></div>
    </div>
  );
};

export default Cursor;
