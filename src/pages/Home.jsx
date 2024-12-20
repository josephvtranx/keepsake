import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; // Import navigation hook

export default function Home() {
    const navigate = useNavigate(); // Initialize navigation

    return (
        <>
            <Navbar />
            <div className="center-header">
                <h1 className="home-heading">Keepsake</h1>
                <h2>Where Memories Become Reality</h2>
                <div className="button-container">
                    <button className="btn btn-login" onClick={() => navigate("/login")}>Login</button>
                    <button className="btn btn-signup" onClick={() => navigate("/signup")}>Sign Up</button>
                </div>
            </div>
        </>
    );
}