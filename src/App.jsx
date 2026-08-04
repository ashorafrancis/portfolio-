import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Internship from './components/Internship';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Background ambient lighting mesh */}
      <div className="bg-mesh"></div>
      <div className="bg-grid-pattern"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Internship />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
