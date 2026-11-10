import React, { useState } from 'react';
import { Briefcase, Star, CheckCircle2, Server, Database, Smartphone, Play, X, Maximize } from 'lucide-react';
import { useTilt3D } from '../hooks/useTilt3D';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

function ProjectCard({ children }) {
  const tiltRef = useTilt3D({ max: 6 });
  return (
    <div ref={tiltRef} className="project-card tilt-card">
      {children}
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'architecture' | 'features'
  const [modal, setModal] = useState({ isOpen: false, type: '', src: '' });
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.08 });

  const openVideo = (src) => setModal({ isOpen: true, type: 'video', src });
  const openImage = (src) => setModal({ isOpen: true, type: 'image', src });
  const closeModal = () => setModal({ isOpen: false, type: '', src: '' });

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div ref={headerRef} className="section-header reveal-up">
          <div className="section-badge">
            <Briefcase size={14} className="text-red" />
            <span>/// 04. FEATURED PROJECTS</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Software Projects</span>
          </h2>
          <p className="section-subtitle">
            Engineered cross-platform mobile systems, full-stack REST API backends, and interactive business intelligence dashboards developed through rigorous hands-on problem solving.
          </p>
        </div>

        {/* ==================================================== */}
        {/* 1. MASTER FEATURED PROJECT: SMART EXPENSE TRACKER     */}
        {/* ==================================================== */}
        <div className="featured-project-container">
          {/* Tech Corner Accents */}
          <div className="hud-corner hud-corner-tl"></div>
          <div className="hud-corner hud-corner-tr"></div>
          <div className="hud-corner hud-corner-bl"></div>
          <div className="hud-corner hud-corner-br"></div>

          <div className="featured-badge-top">
            <Star size={13} className="star-icon" />
            <span>FLAGSHIP PROJECT // FULL-STACK MOBILE ARCHITECTURE</span>
          </div>

          <div className="featured-layout-grid">
            
            {/* Info Column */}
            <div className="featured-info-col">
              <div className="project-category-row">
                <span className="cat-chip">CROSS-PLATFORM MOBILE</span>
                <span className="cat-chip-alt">REST API BACKEND</span>
              </div>

              <h3 className="featured-title">Smart Expense Tracker</h3>
              
              <p className="featured-description">
                A full-stack mobile personal finance application engineered to empower users to record, categorize, visualize, and budget expenditures, recurring dues, and calendar timelines with real-time analytics.
              </p>

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

              {/* Action Buttons: Watch Demo */}
              <div className="project-action-row">
                <button
                  className="btn-watch-demo"
                  onClick={() => openVideo('/expense-tracker.mp4')}
                >
                  <Play size={16} fill="currentColor" />
                  <span>WATCH DEMO VIDEO</span>
                </button>

                <button
                  className="btn-preview-screen"
                  onClick={() => openImage('/expense-tracker-preview.jpeg')}
                >
                  <Maximize size={15} />
                  <span>INSPECT UI PREVIEW</span>
                </button>
              </div>

              {/* Dynamic Interactive Tabs */}
              <div className="featured-tabs-container">
                <div className="featured-tabs-bar">
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
                    System Architecture
                  </button>
                  <button
                    className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                    onClick={() => setActiveTab('features')}
                  >
                    Complete Features
                  </button>
                </div>

                <div className="tab-panel-box">
                  {activeTab === 'overview' && (
                    <div className="tab-pane animate-fade-in">
                      <ul className="feature-check-list">
                        <li>
                          <CheckCircle2 size={15} className="check-icon" />
                          <span>Secure user registration with bcrypt password hashing and token-based JWT session security.</span>
                        </li>
                        <li>
                          <CheckCircle2 size={15} className="check-icon" />
                          <span>Dynamic expense breakdown by category with interactive analytical spending charts and graphs.</span>
                        </li>
                        <li>
                          <CheckCircle2 size={15} className="check-icon" />
                          <span>Due-payment manager with scheduled notifications and overdue balance alerts.</span>
                        </li>
                        <li>
                          <CheckCircle2 size={15} className="check-icon" />
                          <span>Persistent offline session state with local cache caching via SharedPreferences.</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'architecture' && (
                    <div className="tab-pane animate-fade-in">
                      <div className="arch-flow-grid">
                        <div className="arch-box">
                          <Smartphone size={18} className="text-red" />
                          <span className="arch-box-title">Client Layer</span>
                          <span className="arch-box-desc">Flutter & Dart UI</span>
                        </div>
                        <div className="arch-arrow">➔</div>
                        <div className="arch-box">
                          <Server size={18} className="text-red" />
                          <span className="arch-box-title">API Gateway</span>
                          <span className="arch-box-desc">Node.js & Express</span>
                        </div>
                        <div className="arch-arrow">➔</div>
                        <div className="arch-box">
                          <Database size={18} className="text-red" />
                          <span className="arch-box-title">Database</span>
                          <span className="arch-box-desc">MongoDB Cluster</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'features' && (
                    <div className="tab-pane animate-fade-in">
                      <div className="features-grid-panel">
                        <div className="feature-mini-tag"><CheckCircle2 size={13} className="text-red" /> Secure Auth & JWT</div>
                        <div className="feature-mini-tag"><CheckCircle2 size={13} className="text-red" /> Expense Add / Edit / Delete</div>
                        <div className="feature-mini-tag"><CheckCircle2 size={13} className="text-red" /> Category Spending Analytics</div>
                        <div className="feature-mini-tag"><CheckCircle2 size={13} className="text-red" /> Due Payment Tracker</div>
                        <div className="feature-mini-tag"><CheckCircle2 size={13} className="text-red" /> Calendar Timeline View</div>
                        <div className="feature-mini-tag"><CheckCircle2 size={13} className="text-red" /> Notification Reminders</div>
                        <div className="feature-mini-tag"><CheckCircle2 size={13} className="text-red" /> User Profile Management</div>
                        <div className="feature-mini-tag"><CheckCircle2 size={13} className="text-red" /> Local Session Cache</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Preview Banner Column */}
            <div className="featured-preview-col">
              <div 
                className="featured-media-card"
                onClick={() => openVideo('/expense-tracker.mp4')}
              >
                <img
                  src="/expense-tracker-preview.jpeg"
                  alt="Smart Expense Tracker Preview"
                  className="preview-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="media-play-overlay">
                  <div className="play-button-glow">
                    <Play size={24} fill="#ffffff" />
                  </div>
                  <span className="play-overlay-text">CLICK TO PLAY APP DEMO</span>
                </div>
                <div className="media-status-pill">
                  <span className="dot-red"></span>
                  <span>VIDEO WALKTHROUGH</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ==================================================== */}
        {/* 2. SECONDARY PROJECTS GRID: TO-DO APP & FORBES BI    */}
        {/* ==================================================== */}
        <div ref={gridRef} className="secondary-projects-grid stagger-children">
          
          {/* PROJECT 2: TO-DO APP */}
          <ProjectCard>
            <div className="hud-corner hud-corner-tl"></div>
            <div className="hud-corner hud-corner-br"></div>

            <div className="card-top-icon">
              <Smartphone size={22} />
            </div>

            <div className="card-body">
              <span className="project-category-tag">MOBILE APPLICATION</span>
              <h3 className="project-card-title">To-Do Task Management App</h3>
              
              <p className="project-card-desc">
                A clean, responsive mobile task scheduling application developed using Flutter and Dart. Engineered as a core deliverable during the software internship at Teqard Labs.
              </p>

              <div className="project-action-row-sm">
                <button
                  className="btn-watch-demo sm"
                  onClick={() => openVideo('/todo-app.mp4')}
                >
                  <Play size={14} fill="currentColor" />
                  <span>WATCH DEMO</span>
                </button>

                <button
                  className="btn-preview-screen sm"
                  onClick={() => openImage('/todo-app-preview.jpeg')}
                >
                  <Maximize size={13} />
                  <span>PREVIEW</span>
                </button>
              </div>

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
                  <li><CheckCircle2 size={14} className="check-icon" /> Dynamic task creation, editing, status tracking, and deletion.</li>
                  <li><CheckCircle2 size={14} className="check-icon" /> Intuitive responsive UI components with clean theme styling.</li>
                  <li><CheckCircle2 size={14} className="check-icon" /> Optimized Flutter state management for swift rendering.</li>
                  <li><CheckCircle2 size={14} className="check-icon" /> Real-time categorization and priority classification.</li>
                </ul>
              </div>

              {/* Project Demonstration Video Preview (Fills empty area with high-end presentation) */}
              <div 
                className="todo-video-preview-card"
                onClick={() => openVideo('/videos/todo-app-demo.mp4')}
              >
                <img
                  src="/todo-app-preview.jpeg"
                  alt="To-Do App Video Demonstration Preview"
                  className="todo-preview-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="media-play-overlay">
                  <div className="play-button-glow">
                    <Play size={22} fill="#ffffff" />
                  </div>
                  <span className="play-overlay-text">CLICK TO PLAY TO-DO DEMO</span>
                </div>
                <div className="media-status-pill">
                  <span className="dot-red"></span>
                  <span>VIDEO DEMONSTRATION</span>
                </div>
              </div>
            </div>
          </ProjectCard>

          {/* PROJECT 3: FORBES DASHBOARD */}
          <ProjectCard>
            <div className="hud-corner hud-corner-tl"></div>
            <div className="hud-corner hud-corner-br"></div>

            <div className="card-top-icon">
              <Database size={22} />
            </div>

            <div className="card-body">
              <span className="project-category-tag">BUSINESS INTELLIGENCE & ANALYTICS</span>
              <h3 className="project-card-title">Forbes Data Visualization Dashboard</h3>
              
              <p className="project-card-desc">
                An interactive business intelligence dashboard created in Power BI to analyze the Forbes global wealth dataset, revealing trends across billionaire industries, countries, and wealth distributions.
              </p>

              <div className="project-action-row-sm">
                <button
                  className="btn-watch-demo sm"
                  onClick={() => openImage('/forbes-dashboard-preview.png')}
                >
                  <Maximize size={14} />
                  <span>VIEW FULL DASHBOARD</span>
                </button>
              </div>

              <div className="tech-badge-list">
                <span className="tech-pill pill-flutter">Power BI</span>
                <span className="tech-pill">Data Cleaning</span>
                <span className="tech-pill">Data Modeling</span>
                <span className="tech-pill">Interactive KPIs</span>
                <span className="tech-pill">Filters & DAX</span>
              </div>

              <div className="project-features-box">
                <h4 className="box-heading">Key Features:</h4>
                <ul className="card-feature-list">
                  <li><CheckCircle2 size={14} className="check-icon" /> Interactive Power BI charts, slicers, and drill-through cards.</li>
                  <li><CheckCircle2 size={14} className="check-icon" /> Wealth distribution analysis across global geographic regions.</li>
                  <li><CheckCircle2 size={14} className="check-icon" /> Industry sector breakdown and billionaire net worth metrics.</li>
                </ul>
              </div>

              {/* Visual Preview Screenshot */}
              <div 
                className="dashboard-preview-container"
                onClick={() => openImage('/forbes-dashboard-preview.png')}
              >
                <img
                  src="/forbes-dashboard-preview.png"
                  alt="Forbes Dashboard Preview"
                  className="dashboard-img"
                />
                <div className="dash-overlay">
                  <Maximize size={24} />
                  <span>CLICK TO EXPAND DASHBOARD</span>
                </div>
              </div>

            </div>
          </ProjectCard>

        </div>

        {/* ==================================================== */}
        {/* MEDIA MODAL (Video / Image Lightbox)                 */}
        {/* ==================================================== */}
        {modal.isOpen && (
          <div className="media-modal-overlay" onClick={closeModal}>
            <div className="media-modal-container" onClick={(e) => e.stopPropagation()}>
              
              <div className="modal-top-bar">
                <span className="modal-title-tag">
                  {modal.type === 'video' ? 'DEMO VIDEO PLAYBACK' : 'SYSTEM ASSET PREVIEW'}
                </span>
                <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body-content">
                {modal.type === 'video' ? (
                  <video
                    src={modal.src}
                    controls
                    autoPlay
                    className="modal-video-elem"
                    controlsList="nodownload"
                  />
                ) : (
                  <img src={modal.src} alt="Modal Preview" className="modal-image-elem" />
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
