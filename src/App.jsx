import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Internship from './components/Internship';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Background Volumetric Nebula & Subtle Grid */}
      <div className="bg-mesh"></div>
      <div className="bg-grid-pattern"></div>

      {/* Lightweight Floating Red Embers & Particle Canvas */}
      <ParticleBackground />

      {/* Futuristic Cockpit HUD Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Stats />
        <About />
        <Internship />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <ResumeSection />
        <Contact />
      </main>

      {/* Terminal Footer */}
      <Footer />
    </div>
  );
}
