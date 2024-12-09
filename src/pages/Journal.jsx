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
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Store the selected image file in state
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can include the image in the submission logic
    const formData = new FormData();
    formData.append("journalEntry", journalEntry);
    formData.append("moodRating", moodRating);
    if (selectedImage) {
      formData.append("image", selectedImage); // Add image to the submission
    }

    // Mock navigation with the data
    navigate("/journal-page", { state: { journalEntry, moodRating, image: selectedImage } });
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

            <div class="file-upload-container">
              <label>Add an image (optional):</label>
              <input type="file" class="file-upload" />
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
