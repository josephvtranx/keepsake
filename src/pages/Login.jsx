import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate(); // Initialize navigate function
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for handling errors

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      navigate("/home2"); // Navigate to the Home2 page after successful login
    } catch (err) {
      console.error("Error signing in:", err.message);
      setError(err.message); // Set the error message to display
    }
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
            value={email} // Bind input to state
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password} // Bind input to state
            onChange={(e) => setPassword(e.target.value)} // Update state on change
            required
          />

          <button type="submit" className="btn">
            Login
          </button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message if login fails */}

        <p>
          Don't have an account? <Link to="/signup" className="signup-link">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}