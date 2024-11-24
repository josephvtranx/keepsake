import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function JournalPage() {
  const location = useLocation();
  const { journalEntry, moodRating } = location.state || { journalEntry: "", moodRating: 0 };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const moodColors = [
    "#ff0000",
    "#ff4500",
    "#ff8c00", 
    "#ffa500", 
    "#ffd700", 
    "#adff2f", 
    "#7fff00", 
    "#32cd32",
    "#00fa9a", 
    "#00ff00", 
  ];

  const moodColor = moodColors[moodRating - 1] || "#ccc"; 

  return (
    <>
      <Navbar />
      <main
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: "2.5rem", margin: "0" }}>Your Keepsake</h1>
          <p style={{ fontSize: "1.2rem", color: "#555", margin: "10px 0" }}>{formattedDate}</p>
        </div>

        {/* Journal Entry */}
        <div
          style={{
            width: "80%",
            border: "2px solid #ccc",
            padding: "30px",
            borderRadius: "15px",
            background: "#fefae0",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            marginBottom: "30px",
            minHeight: "200px",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>Journal Entry</h2>
          <p style={{ fontSize: "1.2rem", color: "#333", lineHeight: "1.6" }}>{journalEntry || "No journal entry provided."}</p>
        </div>

        {/* Mood Rating */}
        <div
          style={{
            width: "80%",
            border: "2px solid #ccc",
            padding: "30px",
            borderRadius: "15px",
            background: "#ffffff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            minHeight: "150px",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>Your Mood Rating</h3>
          <p
            style={{
              fontSize: "1.2rem",
              color: moodColor,
              fontWeight: "bold",
            }}
          >
            {moodRating}/10
          </p>
          <div
            style={{
              width: "100%",
              height: "20px",
              borderRadius: "5px",
              backgroundColor: moodColor,
              marginTop: "10px",
            }}
          ></div>
        </div>
      </main>
    </>
  );
}
