import React from "react";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";

export default function Memories() {
    {/*example data for timeline*/}
    const timelineData = [
      { id: 1, time: "2024-01-01", imgSrc: "/dummy-img/ally.JPG", alt: "Memory 1" },
      { id: 2, time: "2024-02-14", imgSrc: "/dummy-img/Bananna.JPG", alt: "Memory 2" },
      { id: 3, time: "2024-03-10", imgSrc: "/dummy-img/beach.jpg", alt: "Memory 3" },
      { id: 4, time: "2024-04-05", imgSrc: "/dummy-img/Clothsline.jpg", alt: "Memory 4" },
      { id: 5, time: "2024-05-20", imgSrc: "/dummy-img/hill.JPG", alt: "Memory 5" },
      { id: 6, time: "2024-06-25", imgSrc: "/dummy-img/Jeju.JPG", alt: "Memory 6" },
      { id: 7, time: "2024-07-30", imgSrc: "/dummy-img/jesshiking.JPG", alt: "Memory 7" },
      { id: 8, time: "2024-08-15", imgSrc: "/dummy-img/JRbirthday.JPG", alt: "Memory 8" },
      { id: 9, time: "2024-09-10", imgSrc: "/dummy-img/SF.JPG", alt: "Memory 9" },
      { id: 10, time: "2024-10-05", imgSrc: "/dummy-img/SF2.JPG", alt: "Memory 10" },
      { id: 11, time: "2024-11-01", imgSrc: "/dummy-img/soundboard.JPG", alt: "Memory 11" },
    ];

  return (
    <>
      <Navbar />
      <main>
        <h1>Memory Timeline</h1>
        <Timeline data={timelineData} />
      </main>
    </>
  );
}