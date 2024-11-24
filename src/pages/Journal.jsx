import React from "react";
import Navbar from "../components/Navbar";

export default function Journal() {
  // Get today's date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <>
      <Navbar />
      <main>
        <h1 className="journal-heading">{formattedDate} Keepsake</h1>

        <div className="journal-entry">
          <form action="Journal_page.html" method="get">
            <div className="journal-base">
              <textarea
                className="inner-box-journal"
                name="journalEntry"
                placeholder="Your text goes here..."
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
                  defaultValue="1"
                  className="slider"
                  id="moodSlider"
                  name="moodRating"
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
