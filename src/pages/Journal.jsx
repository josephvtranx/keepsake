import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ref, push } from "firebase/database"; // Import Firebase Database functions
import { db } from "../firebase"; // Import the initialized Realtime Database instance

export default function Journal() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [journalEntry, setJournalEntry] = useState("");
  const [moodRating, setMoodRating] = useState(5);
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Store the selected image file in state
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be written to Firebase
    const journalData = {
      date: formattedDate, // Current date
      entry: journalEntry, // User's journal text
      mood: moodRating, // Mood rating slider value
      image: selectedImage ? selectedImage.name : null, // Save image name (for now)
    };

    try {
      // Push data to the "journalEntries" node in Realtime Database
      await push(ref(db, "journalEntries"), journalData);

      // Show a success message
      alert("Journal entry added successfully!");

      // Navigate to another page and pass the data via state
      navigate("/journal-page", {
        state: {
          journalEntry: journalEntry,
          moodRating: moodRating,
          image: selectedImage,
          formattedDate: formattedDate,
        },
      });

      // Reset form values
      setJournalEntry("");
      setMoodRating(5);
      setSelectedImage(null);
    } catch (error) {
      // Handle errors
      console.error("Error writing journal entry:", error);
      alert("Error adding journal entry. Please try again.");
    }
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

            <div className="file-upload-container">
              <label>Add an image (optional):</label>
              <input
                type="file"
                className="file-upload"
                onChange={handleImageChange} // Handle image upload
              />
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
