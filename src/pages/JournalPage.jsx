import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function JournalPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve input data passed from Journal.jsx
  const { journalEntry, moodRating, image, formattedDate } = location.state || {
    journalEntry: "No journal entry provided.",
    moodRating: 0,
    image: null,
    formattedDate: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
  };

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
          gap: "20px",
          minHeight: "170vh", // Use full viewport height
          boxSizing: "border-box",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <h1 style={{ fontSize: "2.5rem", margin: "0" }}>Your Keepsake</h1>
          <p style={{ fontSize: "1.2rem", color: "#555", margin: "10px 0" }}>
            {formattedDate}
          </p>
        </div>

        {/* Journal Entry */}
        <div
          style={{
            width: "90%",
            maxWidth: "800px",
            border: "1px solid black",
            padding: "20px",
            borderRadius: "10px",
            background: "#d5cabd",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
            Journal Entry
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#333", lineHeight: "1.6" }}>
            {journalEntry}
          </p>
        </div>

        {/* Mood Rating */}
        <div
          style={{
            width: "90%",
            maxWidth: "800px",
            border: "1px solid black",
            padding: "20px",
            borderRadius: "10px",
            background: "#ffffff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
            Your Mood Rating
          </h3>
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

        {/* Uploaded Image */}
        {image && (
          <div
            style={{
              width: "90%",
              maxWidth: "800px",
              border: "1px solid black",
              padding: "20px",
              borderRadius: "10px",
              background: "#f9f9f9",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
              Your Keepsake Image
            </h3>
            <img
              src={image} // Use the Firebase Storage URL directly
              alt="Uploaded Memory"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </div>
        )}

        {/* Go to Keepsakes Button */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "1.2rem",
              borderRadius: "5px",
              border: "1px solid black",
              backgroundColor: "#d5cabd",
              color: "#333",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => navigate("/memories")}
          >
            Go to Your Keepsakes
          </button>
        </div>
      </main>
    </>
  );
}
