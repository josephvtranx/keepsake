import React, { useState } from "react";
import Navbar from "../components/Navbar";
import './style.css'; // Assuming the same CSS files are used

export default function Login() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle form submission, such as authentication
        window.location.href = 'clothesline.html'; // Redirect after successful login
    };

    return (
        <>
            <Navbar />
            <header>
                <div className="navbar">
                    <div className="dropdown">
                        <span className="hamburger-menu" onClick={toggleMenu}>
                            &#9776;
                        </span>
                        <div id="dropdown-content" className={`dropdown-content ${isMenuOpen ? 'show' : ''}`}>
                            <a href="home.html">Home</a>
                            <a href="journal.html">Today's Journal</a>
                            <a href="clothesline.html">Memory Timeline</a>
                            <a href="about.html">About</a>
                            <a href="contact.html">Contact</a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="login-container">
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                    />

                    <button type="submit" className="btn">
                        Login
                    </button>
                </form>

                <p>Don't have an account? <a href="signup.html">Sign up here</a></p>
            </div>
        </>
    );
}