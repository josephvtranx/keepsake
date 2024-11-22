import React from "react";
import Navbar from "./components/Navbar"; // Correct import for Navbar
import Timeline from "./components/Timeline";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const timelineData = [
  { time: "1934", imgSrc: "dummy-img/soundboard.JPG", alt: "Memory 1" },
  { time: "1934", imgSrc: "dummy-img/beach.jpg", alt: "Memory 2" },
  { time: "1934", imgSrc: "dummy-img/jesshiking.JPG", alt: "Memory 3" },
  { time: "1934", imgSrc: "dummy-img/ally.JPG", alt: "Memory 4" },
  { time: "1934", imgSrc: "dummy-img/Bananna.JPG", alt: "Memory 5" },
  { time: "1934", imgSrc: "dummy-img/hill.JPG", alt: "Memory 6" },
  { time: "1934", imgSrc: "dummy-img/Jeju.JPG", alt: "Memory 7" },
  { time: "1934", imgSrc: "dummy-img/JRbirthday.JPG", alt: "Memory 8" },
  { time: "1934", imgSrc: "dummy-img/SF.JPG", alt: "Memory 9" },
  { time: "1934", imgSrc: "dummy-img/SF2.JPG", alt: "Memory 10" },
];

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
