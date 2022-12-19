import React from 'react';
import './App.css';
// For react-router-dom v6 above, Switch is changed to Routes, and Redirect is changed to Navigate
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Read from "./pages/Read";
import Update from "./pages/Update";
// import ColorSequence from "./pages/ColorSequence";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} /> {/* Default Path */}
          <Route path="/works" element={<Works/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/update" element={<Update/>} />
          {/* <Route path="/colorsequence" element={<ColorSequence/>} /> */}
        </Routes>
      </BrowserRouter>
      </header>
      </div>
  );
}