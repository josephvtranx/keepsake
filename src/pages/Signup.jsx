import React, { useState } from "react";
import './style.css'; // Assuming the same CSS files are used

export default function SignUp() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        // Handle form submission, such as user registration
        window.location.href = 'login.html'; // Redirect after successful sign up
    };

    return (
        <>
            <header>
                <div className="navbar">
                    <a href="home.html" className="btn">Home</a>
                </div>
            </header>

            <header>
                <div className="navbar">
                    <div className="dropdown">
                        <span className="hamburger-menu" onClick={toggleMenu}>
                            &#9776;
                        </span>
                        <div id="dropdown-content" className={`dropdown-content ${isMenuOpen ? 'show' : ''}`}>
                            <a href="home.html">Home</a>
                            <a href="journal.html">Today's Journal</a>
                            <a href="about.html">About</a>
                            <a href="contact.html">Contact</a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="signup-container">
                <form onSubmit={handleSignUp}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        required
                    />

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
                        placeholder="Create a password"
                        required
                    />

                    <button type="submit" className="btn">Sign Up Here</button>
                </form>

                <p>Already have an account? <a href="login.html">Login here</a></p>
            </div>
        </>
    );
}