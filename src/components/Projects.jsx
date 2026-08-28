import React, { useState } from 'react';
import { Briefcase, Star, Layers, ShieldCheck, CheckCircle2, Cpu, BarChart3, Database, Server, Smartphone, Calendar, Bell, ChevronRight, Play, X, Maximize } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'architecture' | 'features'
  const [modal, setModal] = useState({ isOpen: false, type: '', src: '' });

  const openVideo = (src) => setModal({ isOpen: true, type: 'video', src });
  const openImage = (src) => setModal({ isOpen: true, type: 'image', src });
  const closeModal = () => setModal({ isOpen: false, type: '', src: '' });

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={15} />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Practical software applications, mobile systems, and machine learning models developed through hands-on coding and technical problem solving.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* FEATURED PROJECT: SMART EXPENSE TRACKER */}
        {/* ---------------------------------------------------- */}
        <div className="featured-project-container glass-card">
          <div className="featured-badge-top">
            <Star size={14} className="star-icon" />
            <span>Featured Project — Full Stack Mobile App</span>
          </div>

          <div className="featured-grid" style={{ gridTemplateColumns: '1fr' }}>
            
            {/* Left Content */}
            <div className="featured-info">
              <h3 className="featured-title">Smart Expense Tracker</h3>
              
              <p className="featured-description">
                A full-stack expense management application designed to help users record, organize, analyze, and manage their personal finances, recurring expenses, and dues in one place.
              </p>

              <button className="btn-watch-demo" onClick={() => openVideo('/expense-tracker.mp4')}>
                <Play size={18} fill="currentColor" /> Watch Demo
              </button>

              {/* Technologies Badges */}
              <div className="tech-badge-list">
                <span className="tech-pill pill-flutter">Flutter</span>
                <span className="tech-pill pill-dart">Dart</span>
                <span className="tech-pill pill-node">Node.js</span>
                <span className="tech-pill pill-express">Express.js</span>
                <span className="tech-pill pill-mongo">MongoDB</span>
                <span className="tech-pill pill-api">REST API</span>
                <span className="tech-pill pill-jwt">JWT Auth</span>
                <span className="tech-pill pill-storage">SharedPreferences</span>
              </div>

              {/* Tab Navigation for Featured Details */}
              <div className="featured-tabs">
                <button
                  className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Key Highlights
                </button>
                <button
                  className={`tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
                  onClick={() => setActiveTab('architecture')}
                >
                  Technical Architecture
                </button>
                <button
                  className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                  onClick={() => setActiveTab('features')}
                >
                  Complete Features
                </button>
              </div>

              {/* Dynamic Tab Panel */}
              <div className="tab-panel-content">
                {activeTab === 'overview' && (
                  <div className="overview-panel animate-fade-in">
                    <ul className="feature-check-list">
                      <li><CheckCircle2 size={16} className="check-icon" /> Secure user registration, JWT login, and local session persistence via SharedPreferences.</li>
                      <li><CheckCircle2 size={16} className="check-icon" /> Comprehensive expense categorization, editing, deleting, and due payment tracking.</li>
                      <li><CheckCircle2 size={16} className="check-icon" /> Interactive analytical charts for spending insights and calendar-based transaction tracking.</li>
                      <li><CheckCircle2 size={16} className="check-icon" /> Built-in reminders & notification functionality for pending due payments.</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="architecture-panel animate-fade-in">
                    <div className="arch-flow-grid">
                      <div className="arch-box">
                        <Smartphone size={18} className="text-skyblue" />
                        <span className="arch-box-title">Frontend</span>
                        <span className="arch-box-desc">Flutter & Dart UI</span>
                      </div>
                      <div className="arch-arrow">➔</div>
                      <div className="arch-box">
                        <Server size={18} className="text-deepblue" />
                        <span className="arch-box-title">Backend API</span>
                        <span className="arch-box-desc">Node.js & Express</span>
                      </div>
                      <div className="arch-arrow">➔</div>
                      <div className="arch-box">
                        <Database size={18} className="text-darkgrey" />
                        <span className="arch-box-title">Database</span>
                        <span className="arch-box-desc">MongoDB Storage</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="features-grid-panel animate-fade-in">
                    <div className="feature-mini-tag"><CheckCircle2 size={13} /> User Auth & Registration</div>
                    <div className="feature-mini-tag"><CheckCircle2 size={13} /> Add/Edit/Delete Expenses</div>
                    <div className="feature-mini-tag"><CheckCircle2 size={13} /> Expense Analytics & Visuals</div>
                    <div className="feature-mini-tag"><CheckCircle2 size={13} /> Due Management & Tracking</div>
                    <div className="feature-mini-tag"><CheckCircle2 size={13} /> Calendar-Based Tracking</div>
                    <div className="feature-mini-tag"><CheckCircle2 size={13} /> Notifications & Reminders</div>
                    <div className="feature-mini-tag"><CheckCircle2 size={13} /> User Profile & Settings</div>
                    <div className="feature-mini-tag"><CheckCircle2 size={13} /> Persistent Local Sessions</div>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* SECONDARY PROJECTS GRID: TO-DO APP & ML HOUSE PREDICTION */}
        {/* ---------------------------------------------------- */}
        <div className="projects-cards-grid">
          
          {/* PROJECT 2: TO-DO APP */}
          <div className="glass-card project-card">
            <div className="card-top-icon icon-skyblue">
              <Smartphone size={24} />
            </div>

            <div className="card-content">
              <span className="project-category-tag">Mobile Application</span>
              <h3 className="project-card-title">To-Do App</h3>
              
              <p className="project-card-desc">
                A mobile task management application developed using Flutter and Dart to help users organize, schedule, and complete their daily tasks efficiently.
              </p>

              <button className="btn-watch-demo secondary" onClick={() => openVideo('/todo-app.mp4')}>
                <Play size={16} fill="currentColor" /> Watch Demo
              </button>

              <div className="tech-badge-list">
                <span className="tech-pill pill-flutter">Flutter</span>
                <span className="tech-pill pill-dart">Dart</span>
                <span className="tech-pill">Android Studio</span>
                <span className="tech-pill">VS Code</span>
                <span className="tech-pill">Git / GitHub</span>
              </div>

              <div className="project-features-box">
                <h4 className="box-heading">Key Features:</h4>
                <ul className="card-feature-list">
                  <li><CheckCircle2 size={14} className="check-icon" /> Task creation, editing, deletion & status tracking</li>
                  <li><CheckCircle2 size={14} className="check-icon" /> Clean, responsive mobile user interface</li>
                  <li><CheckCircle2 size={14} className="check-icon" /> Efficient Flutter state management for app performance</li>
                  <li><CheckCircle2 size={14} className="check-icon" /> Organized task categorization & status updates</li>
                </ul>
              </div>

            </div>
          </div>

          {/* PROJECT 4: FORBES DASHBOARD */}
          <div className="glass-card project-card">
            <div className="card-top-icon icon-darkgrey">
              <BarChart3 size={24} />
            </div>

            <div className="card-content">
              <span className="project-category-tag">Data Visualization</span>
              <h3 className="project-card-title">Forbes Data Visualization Dashboard</h3>
              
              <p className="project-card-desc">
                Created an interactive data visualization dashboard using Power BI to analyze the Forbes dataset. The dashboard provides insights into billionaire data, industries, countries, wealth distribution, and other important trends using interactive charts, KPIs, and filters.
              </p>

              <div className="tech-badge-list">
                <span className="tech-pill">Power BI</span>
                <span className="tech-pill">Data Visualization</span>
                <span className="tech-pill">Data Analysis</span>
                <span className="tech-pill">Data Cleaning</span>
              </div>

              <div className="project-features-box">
                <h4 className="box-heading">Key Features:</h4>
                <ul className="card-feature-list">
                  <li><CheckCircle2 size={14} className="check-icon" /> Interactive data visualization dashboard for Forbes dataset</li>
                  <li><CheckCircle2 size={14} className="check-icon" /> Dynamic KPIs and filters for in-depth analysis</li>
                  <li><CheckCircle2 size={14} className="check-icon" /> Analyzed wealth distribution, industries, and countries</li>
                </ul>
              </div>

              {/* Visual Preview */}
              <div className="card-visual-preview no-padding clickable" onClick={() => openImage('/forbes-dashboard-preview.png')}>
                <img src="/forbes-dashboard-preview.png" alt="Forbes Data Visualization Dashboard" className="project-screenshot" />
                <div className="preview-overlay">
                  <Maximize size={32} />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Media Modal */}
        {modal.isOpen && (
          <div className="media-modal-overlay" onClick={closeModal}>
            <div className="media-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeModal}>
                <X size={20} />
              </button>
              
              {modal.type === 'video' ? (
                <video 
                  src={modal.src} 
                  controls 
                  className="modal-video"
                  controlsList="nodownload"
                />
              ) : (
                <img src={modal.src} alt="Preview Modal" className="modal-image" />
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
