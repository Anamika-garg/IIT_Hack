import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Quiz from './pages/Quiz';
import Roadmap from './pages/Roadmap';
import Jobs from './components/Jobs';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/roadmap" element={<Roadmap />} />
          {/* <Route path="/jobs" element={<Jobs />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;