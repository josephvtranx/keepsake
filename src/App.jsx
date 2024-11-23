import React from "react";

import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

{/*import from pages*/}
import Home from './pages/Home';
import Journal from './pages/Journal';
import Memories from "./pages/Memories";
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './pages/Error';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/journal" element={<Journal/>} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
    </div>
  );
}

export default App;
