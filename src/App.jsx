import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";

// Import from pages
import Home from './pages/Home';
import Journal from './pages/Journal';
import Memories from "./pages/Memories";
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './pages/Error';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home2 from './pages/Home2';
import JournalPage from "./pages/JournalPage";

function App() {
  return (
    <div>
      {/* Your Navbar - Ensure you have links to Login and Signup here */}
      <Navbar />
      <Routes>
        {/* Routes for different pages */}
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/Home2" element={<Home2/>} />
        <Route path="*" element={<Error />} />
        
        
        
        {/* Add login and signup routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        {/* Other routes */}
        <Route path="/" element={<Journal />} /> {/* Main journal form */}
        <Route path="/journal-page" element={<JournalPage />} /> {/* Journal Page */}
      </Routes>
    </div>
  );
}

export default App;
