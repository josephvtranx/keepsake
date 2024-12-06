import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

export default function SignUp() {
    const handleSignUp = (e) => {
        e.preventDefault();
        // Handle form submission, such as user registration
        window.location.href = '/login'; // Redirect after successful sign up
    };

    return (
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

                <button type="submit" className="btn">Sign Up</button>
            </form>

            <p>Already have an account? <Link to="/login" className="login-link">Login here</Link></p>
        </div>
    );
}