import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ref as dbRef, push } from "firebase/database"; // Import Firebase Database functions
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Firebase Storage functions
import { db, storage } from "../firebase"; // Import Firebase instances

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
      console.log("Selected image:", file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = null;

      if (selectedImage) {
        console.log("Uploading image...");
        const imagePath = `images/${Date.now()}_${selectedImage.name}`;
        const storageReference = storageRef(storage, imagePath);

        // Upload the image to Firebase Storage
        const snapshot = await uploadBytes(storageReference, selectedImage);
        console.log("Image uploaded successfully:", snapshot);

        // Get the image's public URL
        imageUrl = await getDownloadURL(storageReference);
        console.log("Image URL:", imageUrl);
      }

      // Prepare data for Firebase Realtime Database
      const journalData = {
        date: formattedDate,
        entry: journalEntry,
        mood: moodRating,
        image: imageUrl, // Save the image URL (or null if no image uploaded)
      };

      console.log("Saving journal entry to Realtime Database...");
      await push(dbRef(db, "journalEntries"), journalData);

      // Success feedback
      alert("Journal entry added successfully!");

      // Navigate to the journal page
      navigate("/journal-page", {
        state: {
          journalEntry,
          moodRating,
          image: imageUrl,
          formattedDate,
        },
      });

      // Reset form values
      setJournalEntry("");
      setMoodRating(5);
      setSelectedImage(null);
    } catch (error) {
      console.error("Error submitting journal entry:", error);
      alert("An error occurred while submitting your journal entry. Please try again.");
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
