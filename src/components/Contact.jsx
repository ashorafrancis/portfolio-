import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Terminal } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct mailto link with pre-filled subject and body
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Trigger user mail client
    window.location.href = `mailto:ashorafrancis@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 6000);
  };

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
            Open to technical software internships, full-stack collaborations, and developer opportunities. Connect directly via email, phone, or send a transmission below.
          </p>
        </div>

        {/* Main Grid */}
        <div className="contact-cockpit-grid">
          
          {/* Left: Contact Info Cards */}
          <div className="contact-cards-col">
            
            {/* Email Card */}
            <a href="mailto:ashorafrancis@gmail.com" className="contact-channel-card">
              <div className="channel-icon-box">
                <Mail size={20} />
              </div>
              <div className="channel-info">
                <span className="channel-label">ELECTRONIC MAIL</span>
                <span className="channel-value">ashorafrancis@gmail.com</span>
                <span className="channel-sub">Click to initiate direct email ➔</span>
              </div>
            </a>

            {/* Phone Card */}
            <a href="tel:9539748329" className="contact-channel-card">
              <div className="channel-icon-box">
                <Phone size={20} />
              </div>
              <div className="channel-info">
                <span className="channel-label">VOICE & WHATSAPP</span>
                <span className="channel-value">+91 9539748329</span>
                <span className="channel-sub">Click to place direct call ➔</span>
              </div>
            </a>

            {/* Location Card */}
            <div className="contact-channel-card">
              <div className="channel-icon-box">
                <MapPin size={20} />
              </div>
              <div className="channel-info">
                <span className="channel-label">GEOGRAPHIC BASE</span>
                <span className="channel-value">Ernakulam, Kerala, India</span>
                <span className="channel-sub">Available for Remote & On-Site Roles</span>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/ashora-francis"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
            >
              <div className="channel-icon-box">
                <LinkedinIcon size={20} />
              </div>
              <div className="channel-info">
                <span className="channel-label">PROFESSIONAL NETWORK</span>
                <span className="channel-value">linkedin.com/in/ashora-francis</span>
                <span className="channel-sub">Connect on LinkedIn ➔</span>
              </div>
            </a>

          </div>

          {/* Right: Functional Transmission Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              {/* Tech corner notches */}
              <div className="hud-corner hud-corner-tl"></div>
              <div className="hud-corner hud-corner-tr"></div>
              <div className="hud-corner hud-corner-bl"></div>
              <div className="hud-corner hud-corner-br"></div>

              <div className="form-top-bar">
                <div className="form-header-title">
                  <Terminal size={16} className="text-red" />
                  <span>DIRECT MESSAGE DISPATCH</span>
                </div>
                <span className="form-status-tag">STATUS: READY</span>
              </div>

              {submitted && (
                <div className="form-success-banner animate-fade-in">
                  <CheckCircle2 size={18} className="text-red" />
                  <span>Transmission generated! Opening your mail client...</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="hud-contact-form">
                
                <div className="form-row-dual">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">YOUR FULL NAME *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={handleChange}
                      className="hud-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">YOUR EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="hud-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">TRANSMISSION SUBJECT</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. Internship Inquiry / Software Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    className="hud-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">MESSAGE CONTENTS *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your inquiry or proposal details here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="hud-input hud-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-dispatch-message">
                  <span>DISPATCH TRANSMISSION</span>
                  <Send size={16} />
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
