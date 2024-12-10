import React from "react";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import { db } from "../firebase";

export default function Memories() {
  // Example data for timeline
  const timelineData = [
    {
      id: 1,
      time: "2024-01-01",
      imgSrc: "/dummy-img/ally.JPG",
      alt: "Memory 1",
      description: "Celebrated the New Year with family and friends!",
    },
    {
      id: 2,
      time: "2024-02-14",
      imgSrc: "/dummy-img/Bananna.JPG",
      alt: "Memory 2",
      description: "Valentine's Day surprise at the countryside.",
    },
    {
      id: 3,
      time: "2024-03-10",
      imgSrc: "/dummy-img/beach.jpg",
      alt: "Memory 3",
      description: "Relaxing day at the beach with amazing sunset views.",
    },
    {
      id: 4,
      time: "2024-04-05",
      imgSrc: "/dummy-img/Clothsline.jpg",
      alt: "Memory 4",
      description: "Spring cleaning and organizing memories on a clothesline.",
    },
    {
      id: 5,
      time: "2024-05-20",
      imgSrc: "/dummy-img/hill.JPG",
      alt: "Memory 5",
      description: "A memorable hike up the hill with breathtaking views.",
    },
    {
      id: 6,
      time: "2024-06-25",
      imgSrc: "/dummy-img/Jeju.JPG",
      alt: "Memory 6",
      description: "Vacation to Jeju Island filled with beautiful scenery.",
    },
    {
      id: 7,
      time: "2024-07-30",
      imgSrc: "/dummy-img/jesshiking.JPG",
      alt: "Memory 7",
      description: "Adventure in the mountains during a group hiking trip.",
    },
    {
      id: 8,
      time: "2024-08-15",
      imgSrc: "/dummy-img/JRbirthday.JPG",
      alt: "Memory 8",
      description: "Celebrated JR's birthday with a surprise party and cake.",
    },
    {
      id: 9,
      time: "2024-09-10",
      imgSrc: "/dummy-img/SF.JPG",
      alt: "Memory 9",
      description: "Explored San Francisco's iconic landmarks and culture.",
    },
    {
      id: 10,
      time: "2024-10-05",
      imgSrc: "/dummy-img/SF2.JPG",
      alt: "Memory 10",
      description: "Another trip to SF, capturing moments at the Golden Gate Bridge.",
    },
    {
      id: 11,
      time: "2024-11-01",
      imgSrc: "/dummy-img/soundboard.JPG",
      alt: "Memory 11",
      description: "Testing out the new soundboard for a live event.",
    },
  ];

  return (
    <>
      <Navbar />
      <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        {/* Memory Timeline Title */}
        <h1
          style={{
            textAlign: "left",
            marginBottom: "20px",
            color: "#333",
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: "2.5rem",
            fontWeight: "bold",
            paddingLeft: "20px",
          }}
        >
          Memory Timeline
        </h1>

        {/* Timeline Component */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <Timeline data={timelineData} />
        </div>
      </main>
    </>
  );
}
