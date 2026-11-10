import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Metrics', href: '#stats' },
    { name: 'Internship', href: '#internship' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer-hud-container">
      <div className="container">
        
        {/* Top Glowing Laser Accent */}
        <div className="footer-glow-line"></div>

        <div className="footer-top-grid">
          
          {/* Brand & Meta */}
          <div className="footer-brand-col">
            <div className="footer-brand-head">
              <div className="footer-logo-badge">
                <span>AF</span>
              </div>
              <div className="footer-brand-title">
                <span className="brand-name-text">ASHORA FRANCIS</span>
                <span className="brand-hud-sub">BCA SCHOLAR & DEVELOPER</span>
              </div>
            </div>
            
            <p className="footer-bio-summary">
              Committed to building clean, maintainable software systems across mobile engineering, Python data modeling, and modern cloud database architectures.
            </p>

            <div className="footer-location-tag">
              <span className="dot-red"></span>
              <span>Based in Ernakulam, Kerala, India</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-col">
            <h4 className="footer-hud-heading">SYSTEM NAVIGATION</h4>
            <ul className="footer-links-grid">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-nav-anchor">
                    <span className="nav-arrow-prefix">/</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Back to Top */}
          <div className="footer-connect-col">
            <h4 className="footer-hud-heading">COMMUNICATION HUBS</h4>
            <div className="footer-social-row">
              <a
                href="mailto:ashorafrancis@gmail.com"
                aria-label="Email Ashora Francis"
                className="footer-social-btn"
                title="Send Direct Email"
              >
                <Mail size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/ashora-francis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashora Francis LinkedIn Profile"
                className="footer-social-btn"
                title="Connect on LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>

            <button onClick={scrollToTop} className="hud-back-to-top-btn">
              <span>RETURN TO TOP</span>
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-terminal">
          <p>© {new Date().getFullYear()} Ashora Francis. All rights reserved.</p>
          <div className="footer-build-signature">
            <span className="dot-green"></span>
            <span>PORTFOLIO SYSTEM OPERATIONAL • VITE & REACT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
