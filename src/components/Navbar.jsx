import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2, User, Wrench, Briefcase, Award, Trophy, Mail, Building2, BarChart2 } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { id: 'home', label: 'Home', icon: Code2 },
  { id: 'about', label: 'About', icon: User },
  { id: 'stats', label: 'Metrics', icon: BarChart2 },
  { id: 'internship', label: 'Experience', icon: Building2 },
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
      const scrollPosition = window.scrollY + 140;

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
        
        {/* Brand Logo with Glowing Red Accent */}
        <a href="#home" className="navbar-brand" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          <div className="brand-icon-box">
            <span className="brand-initials">AF</span>
            <div className="brand-glow-corner"></div>
          </div>
          <div className="brand-text-col">
            <span className="brand-name">ASHORA FRANCIS</span>
            <span className="brand-tag">
              <span className="brand-status-dot"></span>
              BCA SCHOLAR & DEVELOPER
            </span>
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
                  <span className="nav-link-text">{item.label}</span>
                  {activeSection === item.id && <span className="nav-active-pip"></span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button: Glowing Red Pill Button (matches reference) */}
        <div className="navbar-actions">
          <button
            onClick={() => handleNavClick('contact')}
            className="navbar-cta-btn"
          >
            <span>GET IN TOUCH</span>
          </button>

          <a
            href="/Ashora_Francis_New_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume-btn"
            title="Download Official Resume"
          >
            <FileText size={15} />
            <span>RESUME</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-drawer-header">
            <span className="drawer-title">SYSTEM NAVIGATION</span>
            <span className="drawer-sub">SELECT DESTINATION</span>
          </div>
          <ul className="mobile-nav-list">
            {navItems.map((item) => {
              const IconComp = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    <IconComp size={18} className="mobile-icon" />
                    <span>{item.label}</span>
                    <span className="mobile-arrow">➔</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <a
              href="/Ashora_Francis_New_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mobile-resume-full"
            >
              <FileText size={16} />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
