import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import { ref, onValue } from "firebase/database"; // Firebase Realtime Database functions
import { db } from "../firebase"; // Import your initialized Realtime Database instance

export default function Memories() {
  const [timelineData, setTimelineData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchMemories = () => {
      const memoriesRef = ref(db, "journalEntries"); // Reference to your database node
      onValue(memoriesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Transform the data into an array
          const formattedData = Object.keys(data).map((key) => ({
            id: key,
            time: data[key].date, // Assuming the date is stored as 'date'
            imgSrc: data[key].image || "/dummy-img/default.jpg", // Use a default image if none provided
            alt: `Memory from ${data[key].date}`, // Auto-generate alt text
            description: data[key].entry, // Use the journal entry for the description
          }));
          setTimelineData(formattedData);
        } else {
          setTimelineData([]); // No data case
        }
        setLoading(false); // Data fetched, stop loading
      });
    };

    fetchMemories();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <h1>Memory Timeline</h1>
        <h2>*use arrow keys to navigate</h2>
        {loading ? (
          <p>Loading memories...</p>
        ) : timelineData.length > 0 ? (
          <Timeline data={timelineData} />
        ) : (
          <p>No memories to display. Add some to get started!</p>
        )}
      </main>
    </>
  );
}

