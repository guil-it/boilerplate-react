import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Features from './pages/Dashboard/Features';
import SEO from './components/SEO';

function App() {
  return (
    <Router>
      <SEO 
        title="CLI guil Features"
        description="Explore the upcoming features of CLI guil, designed to enhance your development workflow."
        keywords="CLI guil, features, development tools, workflow enhancement"
      />
      <div className="h-screen bg-gradient-radial from-[#02046c] via-[#01012e] to-[#020024] text-white flex flex-col overflow-hidden">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;