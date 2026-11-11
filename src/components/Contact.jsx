import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} className="text-red" />
            <span>/// 08. COMMUNICATION LINK</span>
          </div>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Open to technical software internships, full‑stack collaborations, and developer opportunities.
          </p>
        </div>

        {/* New two‑column layout */}
        <div className="contact-grid">
          {/* Left column – invitation */}
          <div className="contact-intro">
            <h3 className="connect-heading">LET'S CONNECT</h3>
            <p className="connect-sub">
              I'm always interested in new challenges, collaborations, and opportunities. Feel free to reach out through any of the channels below.
            </p>
          </div>

          {/* Right column – 2×2 grid of cards */}
          <div className="contact-cards-grid">
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ashorafrancis@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
            >
              <div className="channel-icon-box"><Mail size={20} /></div>
              <div className="channel-info">
                <span className="channel-label">ELECTRONIC MAIL</span>
                <span className="channel-value">ashorafrancis@gmail.com</span>
                <span className="channel-sub">Click to initiate direct email ➔</span>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:9539748329" className="contact-channel-card">
              <div className="channel-icon-box"><Phone size={20} /></div>
              <div className="channel-info">
                <span className="channel-label">VOICE &amp; WHATSAPP</span>
                <span className="channel-value">+91 9539748329</span>
                <span className="channel-sub">Click to place direct call ➔</span>
              </div>
            </a>

            {/* Location */}
            <div className="contact-channel-card">
              <div className="channel-icon-box"><MapPin size={20} /></div>
              <div className="channel-info">
                <span className="channel-label">GEOGRAPHIC BASE</span>
                <span className="channel-value">Ernakulam, Kerala, India</span>
                <span className="channel-sub">Available for Remote &amp; On‑Site Roles</span>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ashora-francis"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
            >
              <div className="channel-icon-box"><LinkedinIcon size={20} /></div>
              <div className="channel-info">
                <span className="channel-label">PROFESSIONAL NETWORK</span>
                <span className="channel-value">linkedin.com/in/ashora-francis</span>
                <span className="channel-sub">Connect on LinkedIn ➔</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
