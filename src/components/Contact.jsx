import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
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
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Trigger user mail client
    window.location.href = `mailto:ashorafrancis@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={15} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Seeking technical internships, project collaborations, or entry-level opportunities? Feel free to reach out directly via email, phone, or LinkedIn!
          </p>
        </div>

        {/* Main Grid */}
        <div className="contact-grid">
          
          {/* Left: Contact Info Cards */}
          <div className="contact-info-col">
            
            {/* Email Card */}
            <a href="mailto:ashorafrancis@gmail.com" className="glass-card contact-info-card">
              <div className="info-icon-box icon-cyan">
                <Mail size={22} />
              </div>
              <div className="info-text-wrap">
                <span className="info-label">Email Address</span>
                <span className="info-value">ashorafrancis@gmail.com</span>
                <span className="info-action">Click to send email ➔</span>
              </div>
            </a>

            {/* Phone Card */}
            <a href="tel:9539748329" className="glass-card contact-info-card">
              <div className="info-icon-box icon-emerald">
                <Phone size={22} />
              </div>
              <div className="info-text-wrap">
                <span className="info-label">Phone / WhatsApp</span>
                <span className="info-value">+91 9539748329</span>
                <span className="info-action">Click to call ➔</span>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card contact-info-card">
              <div className="info-icon-box icon-amber">
                <MapPin size={22} />
              </div>
              <div className="info-text-wrap">
                <span className="info-label">Location</span>
                <span className="info-value">Ernakulam, Kerala, India</span>
                <span className="info-subtext">Open to remote & on-site technical roles</span>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/ashora-francis"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card contact-info-card linkedin-card"
            >
              <div className="info-icon-box icon-indigo">
                <LinkedinIcon size={22} />
              </div>
              <div className="info-text-wrap">
                <span className="info-label">LinkedIn Profile</span>
                <span className="info-value">linkedin.com/in/ashora-francis</span>
                <span className="info-action">Connect on LinkedIn <ExternalLink size={13} /></span>
              </div>
            </a>

          </div>

          {/* Right: Contact Form */}
          <div className="glass-card contact-form-card">
            <h3 className="form-card-title">
              <MessageSquare size={20} className="text-cyan" />
              <span>Send Me a Message</span>
            </h3>

            {submitted && (
              <div className="form-toast-success animate-fade-in">
                <CheckCircle2 size={20} className="text-emerald" />
                <div>
                  <strong>Opening your default email client...</strong>
                  <p>Your message parameters have been prepared. You can review and hit send in your mail client.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Opportunity / Collaboration"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="form-input form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn">
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
