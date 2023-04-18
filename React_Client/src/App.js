import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';

import MainPage from './pages/MainPage';

import "./App.css"

function App() {
  return (
    <div className="App" style={{
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
    }}>
      <Router>
        <div>
          <NavBar />
          <Routes>

            <Route path="/" caseSensitive={false} element={<MainPage />} />
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
