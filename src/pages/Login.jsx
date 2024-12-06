import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

export default function Login() {
    const navigate = useNavigate(); // Initialize navigate function

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle form submission, such as authentication
        navigate('/home2'); // Redirect to Home2 page after successful login
    };

    return (
        <div className="login-screen">
            <div className="login-container">
                <h1>Login</h1>
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

                <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
            </div>
        </div>
    );
}