import React from 'react';
import { Mail, ArrowUp, Code2 } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Internship', href: '#internship' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer-container">
      <div className="container">
        
        <div className="footer-top-row">
          {/* Brand & Tagline */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="brand-icon">AF</div>
              <span className="brand-name">Ashora Francis</span>
            </div>
            <p className="footer-tagline">
              BCA Student | Developer | Tech Enthusiast
            </p>
            <p className="footer-location">
              Ernakulam, Kerala, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-grid">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Back to top */}
          <div className="footer-connect-col">
            <h4 className="footer-heading">Connect With Me</h4>
            <div className="footer-social-row">
              <a
                href="mailto:ashorafrancis@gmail.com"
                aria-label="Email Ashora Francis"
                className="footer-social-icon"
              >
                <Mail size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/ashora-francis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashora Francis LinkedIn Profile"
                className="footer-social-icon"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>

            <button onClick={scrollToTop} className="back-to-top-btn">
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© 2026 Ashora Francis. All rights reserved.</p>
          <p className="footer-build-tag">
            Built with React & Modern CSS • Hosted for BCA Technical Portfolio
          </p>
        </div>

      </div>
    </footer>
  );
}
