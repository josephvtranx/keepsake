import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";

export default function Journal() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [journalEntry, setJournalEntry] = useState("");
  const [moodRating, setMoodRating] = useState(5);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/journal-page", { state: { journalEntry, moodRating } }); 
  };

  return (
    <>
      <Navbar />
      <main>
        <h1 className="journal-heading">{formattedDate} Keepsake</h1>

        <div className="journal-entry">
          <form onSubmit={handleSubmit}>
            <div className="journal-base">
              <textarea
                className="inner-box-journal"
                name="journalEntry"
                placeholder="Your text goes here..."
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mood-base">
              <div className="mood-heading">How are you feeling today?</div>
              <div className="slider-container">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={moodRating}
                  className="slider"
                  name="moodRating"
                  onChange={(e) => setMoodRating(e.target.value)}
                />
              </div>
              <button type="submit" className="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
