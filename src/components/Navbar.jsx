import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2, User, Wrench, Briefcase, Award, Trophy, Mail, Building2 } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { id: 'home', label: 'Home', icon: Code2 },
  { id: 'about', label: 'About', icon: User },
  { id: 'internship', label: 'Internship', icon: Building2 },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section highlighting
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-brand" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          <div className="brand-icon">AF</div>
          <div className="brand-text">
            <span className="brand-name">Ashora Francis</span>
            <span className="brand-tag">BCA Developer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <a
            href="/Ashora_Francis_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume-btn"
          >
            <FileText size={16} />
            <span>Resume</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    >
                      <IconComponent size={20} className="mobile-icon" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
