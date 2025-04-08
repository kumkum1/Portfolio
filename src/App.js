import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/HomeScreen';
import ExperienceDetail from './Pages/Home/components/ExperienceDetail';
// import Experience from './Pages/Home/components/Experience';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/experience/:id" element={<ExperienceDetail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
