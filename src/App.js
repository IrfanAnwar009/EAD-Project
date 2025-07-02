import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
//import AdminDashboard from './pages/AdminDashboard';
import Faculty from './pages/Faculty';
import Classes from './pages/Classes';
import Gallery from './pages/Gallery';
import Calendar from './pages/Calendar';
import Admission from './pages/Admission';
import About from './pages/About';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <main className="container">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/about" element={<About />} />
            

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
//<Route path="/admindashboard" element={<AdminDashboard />} />