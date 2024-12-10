import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const navigate = useNavigate(); // Initialize navigation function
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", userCredential.user);
      navigate("/login"); // Navigate to Login page after successful sign up
    } catch (err) {
      console.error("Error signing up:", err.message);
      setError(err.message); // Set error message to display
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignUp}>
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
          placeholder="Create a password"
          value={password} // Bind input to state
          onChange={(e) => setPassword(e.target.value)} // Update state on change
          required
        />

        <button type="submit" className="btn">Sign Up</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message if signup fails */}

      <p>
        Already have an account? <Link to="/login" className="login-link">Login here</Link>
      </p>
    </div>
  );
}