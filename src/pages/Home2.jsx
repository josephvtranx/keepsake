import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./Home.css"; // Import the CSS file

export default function Home() {
    const navigate = useNavigate(); // Initialize navigation

    return (
        <>
            <Navbar />
            <div className="center-header">
                <h1 className="home-heading">Keepsake</h1>
                <h2>Where Memories Become Reality</h2>
                <div className="button-container">
                    {/* Button to navigate to the Journal page */}
                    <button
                        className="navigate-button"
                        onClick={() => navigate("/journal")}
                    >
                        Start Your Journal
                    </button>
                </div>
            </div>
        </>
    );
}