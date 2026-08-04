import React, { useState } from 'react';
import { Briefcase, Star, Layers, ShieldCheck, CheckCircle2, Cpu, BarChart3, Database, Server, Smartphone, Calendar, Bell, ChevronRight } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'architecture' | 'features'

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

          <div className="featured-grid">
            
            {/* Left Content */}
            <div className="featured-info">
              <h3 className="featured-title">Smart Expense Tracker</h3>
              
              <p className="featured-description">
                A full-stack expense management application designed to help users record, organize, analyze, and manage their personal finances, recurring expenses, and dues in one place.
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
                        <Smartphone size={18} className="text-cyan" />
                        <span className="arch-box-title">Frontend</span>
                        <span className="arch-box-desc">Flutter & Dart UI</span>
                      </div>
                      <div className="arch-arrow">➔</div>
                      <div className="arch-box">
                        <Server size={18} className="text-indigo" />
                        <span className="arch-box-title">Backend API</span>
                        <span className="arch-box-desc">Node.js & Express</span>
                      </div>
                      <div className="arch-arrow">➔</div>
                      <div className="arch-box">
                        <Database size={18} className="text-emerald" />
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

            {/* Right Preview Card */}
            <div className="featured-preview-area">
              <div className="mockup-container">
                <div className="mockup-header">
                  <span className="mockup-dot red"></span>
                  <span className="mockup-dot yellow"></span>
                  <span className="mockup-dot green"></span>
                  <span className="mockup-title">Expense Tracker Dashboard</span>
                </div>
                <div className="mockup-screen">
                  
                  {/* Visual Dashboard Mock */}
                  <div className="app-mock-body">
                    <div className="mock-card mock-balance">
                      <span className="mock-lbl">Total Monthly Expense</span>
                      <span className="mock-val">₹ 14,250.00</span>
                      <div className="mock-trend">↓ 12% vs last month</div>
                    </div>

                    <div className="mock-stats-row">
                      <div className="mock-mini-card">
                        <span className="mock-lbl">Active Dues</span>
                        <span className="mock-val-sm text-amber">2 Pending</span>
                      </div>
                      <div className="mock-mini-card">
                        <span className="mock-lbl">Categories</span>
                        <span className="mock-val-sm text-cyan">6 Active</span>
                      </div>
                    </div>

                    <div className="mock-chart-box">
                      <div className="mock-lbl">Analytics Preview</div>
                      <div className="chart-bars">
                        <div className="bar bar-1" style={{ height: '60%' }}></div>
                        <div className="bar bar-2" style={{ height: '85%' }}></div>
                        <div className="bar bar-3" style={{ height: '40%' }}></div>
                        <div className="bar bar-4" style={{ height: '70%' }}></div>
                        <div className="bar bar-5" style={{ height: '90%' }}></div>
                      </div>
                    </div>

                    <div className="mock-recent-list">
                      <div className="mock-item">
                        <span className="mock-item-title">Course Registration</span>
                        <span className="mock-item-amt">- ₹ 2,500</span>
                      </div>
                      <div className="mock-item">
                        <span className="mock-item-title">Books & Stationery</span>
                        <span className="mock-item-amt">- ₹ 850</span>
                      </div>
                    </div>

                  </div>
                </div>
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
            <div className="card-top-icon icon-cyan">
              <Smartphone size={24} />
            </div>

            <div className="card-content">
              <span className="project-category-tag">Mobile Application</span>
              <h3 className="project-card-title">To-Do App</h3>
              
              <p className="project-card-desc">
                A mobile task management application developed using Flutter and Dart to help users organize, schedule, and complete their daily tasks efficiently.
              </p>

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

              {/* Visual Tech Representation */}
              <div className="card-visual-preview">
                <div className="todo-mock-list">
                  <div className="todo-mock-item checked">
                    <span className="todo-checkbox">✓</span>
                    <span>Complete Data Analytics Assignment</span>
                  </div>
                  <div className="todo-mock-item">
                    <span className="todo-checkbox"></span>
                    <span>Review Linear Regression notebook</span>
                  </div>
                  <div className="todo-mock-item">
                    <span className="todo-checkbox"></span>
                    <span>Update Flutter app UI widgets</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* PROJECT 3: HOUSE PRICE PREDICTION */}
          <div className="glass-card project-card">
            <div className="card-top-icon icon-amber">
              <Cpu size={24} />
            </div>

            <div className="card-content">
              <span className="project-category-tag">Machine Learning</span>
              <h3 className="project-card-title">House Price Prediction using Linear Regression</h3>
              
              <p className="project-card-desc">
                A machine learning project built in Python that predicts housing prices using supervised Linear Regression algorithms and data analytics pipelines.
              </p>

              <div className="tech-badge-list">
                <span className="tech-pill pill-python">Python</span>
                <span className="tech-pill">Pandas</span>
                <span className="tech-pill">NumPy</span>
                <span className="tech-pill">Matplotlib</span>
                <span className="tech-pill pill-sklearn">scikit-learn</span>
              </div>

              <div className="project-features-box">
                <h4 className="box-heading">Technical Implementation:</h4>
                <ul className="card-feature-list">
                  <li><CheckCircle2 size={14} className="check-icon" /> Cleaned, transformed, and analyzed dataset features using Pandas & NumPy</li>
                  <li><CheckCircle2 size={14} className="check-icon" /> Trained Linear Regression model via scikit-learn to generate price predictions</li>
                  <li><CheckCircle2 size={14} className="check-icon" /> Visualized actual vs predicted price distributions using Matplotlib scatter plots</li>
                </ul>
              </div>

              {/* Visual ML Chart Mockup */}
              <div className="card-visual-preview">
                <div className="ml-visual-box">
                  <div className="ml-header">
                    <BarChart3 size={14} className="text-amber" />
                    <span>Linear Regression Model Plot</span>
                  </div>
                  <div className="scatter-plot-mock">
                    <div className="dot dot-1" style={{ bottom: '20%', left: '15%' }}></div>
                    <div className="dot dot-2" style={{ bottom: '35%', left: '30%' }}></div>
                    <div className="dot dot-3" style={{ bottom: '50%', left: '48%' }}></div>
                    <div className="dot dot-4" style={{ bottom: '70%', left: '65%' }}></div>
                    <div className="dot dot-5" style={{ bottom: '85%', left: '80%' }}></div>
                    <div className="regression-line"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
