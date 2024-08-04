import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SpotifyLogin from "./pages/SpotifyLogin";
import Index from "./pages/Index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
        </Route>
        <Route path="/SpotifyLogin" element={<SpotifyLogin />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;