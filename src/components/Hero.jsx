import React from 'react';
import { ArrowRight, Download, Mail, Terminal, Code2, Database, Brain, GraduationCap, Building, ShieldCheck, Activity } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Volumetric ambient glow background */}
      <div className="hero-ambient-glow"></div>
      <div className="hero-orange-core"></div>

      {/* Sci-Fi Diagonal Laser Streak (recreates the beam from reference) */}
      <div className="hero-laser-beam"></div>
      <div className="hero-laser-flare"></div>

      {/* Main HUD Frame Container (Beveled Cockpit Frame from Reference) */}
      <div className="container hero-container">

        {/* Outer HUD Corner Accents */}
        <div className="hud-corner hud-corner-tl"></div>
        <div className="hud-corner hud-corner-tr"></div>
        <div className="hud-corner hud-corner-bl"></div>
        <div className="hud-corner hud-corner-br"></div>

        {/* HUD Top Status Bar */}
        <div className="hero-hud-topbar">
          <div className="hud-status-chip">
            <span className="hud-pulse-node"></span>
            <span className="hud-chip-text">SYSTEM STATUS: FULLY OPERATIONAL</span>
          </div>
          <div className="hud-meta-coords">
            <span>LOC: 9.9816° N, 76.2999° E // ERNAKULAM</span>
            <span className="hud-divider">|</span>
            <span>INDEX: BCA.DEV.2026</span>
          </div>
        </div>

        <div className="hero-inner-grid">

          {/* ==================================================== */}
          {/* LEFT: HERO TYPOGRAPHY & ACTIONS                      */}
          {/* ==================================================== */}
          <div className="hero-left-content">

            {/* Small Red Uppercase Introduction Label */}
            <div className="hero-pretitle-wrap">
              <span className="hero-tag-prefix">///</span>
              <span className="hero-pretitle">COMPUTER APPLICATIONS SCHOLAR & DEVELOPER</span>
            </div>

            {/* Massive Bold Headline Name */}
            <h1 className="hero-main-name">
              ASHORA FRANCIS
            </h1>

            {/* Role Headline with Red Accent Separator */}
            <div className="hero-role-badge-row">
              <span className="role-highlight">BCA STUDENT &amp; DEVELOPER</span>
              <br />
              <span className="role-secondary">MOBILE APP DEVELOPMENT &amp; DATA ANALYTICS</span>
            </div>

            {/* Professional Description */}
            <p className="hero-summary-text">
              Motivated Bachelor of Computer Applications (BCA) student with a strong foundation in programming, software development, database management, and data visualization. Proven hands-on experience in cross-platform mobile development with Flutter, Python scripting, Power BI dashboards, and industry software testing.
            </p>

            {/* Core Competency Badges */}
            <div className="hero-focus-tags">
              <div className="hud-tag-pill">
                <Code2 size={13} className="text-red" />
                <span>Flutter & Dart</span>
              </div>
              <div className="hud-tag-pill">
                <Terminal size={13} className="text-red" />
                <span>Python</span>
              </div>
              <div className="hud-tag-pill">
                <Brain size={13} className="text-red" />
                <span>Power BI & Analytics</span>
              </div>
              <div className="hud-tag-pill">
                <Database size={13} className="text-red" />
                <span>Node.js & MongoDB</span>
              </div>
              <div className="hud-tag-pill">
                <ShieldCheck size={13} className="text-red" />
                <span>Software Testing</span>
              </div>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="hero-button-group">
              {/* Primary Glowing Red Pill Button (Matches reference exactly) */}
              <button
                onClick={() => handleScrollTo('projects')}
                className="btn btn-hero-primary"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight size={17} />
              </button>

              {/* Secondary Translucent Dark Glass Pill */}
              <a
                href="/Ashora_Francis_New_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-hero-secondary"
              >
                <Download size={16} />
                <span>DOWNLOAD RESUME</span>
              </a>

              {/* Direct Contact Button */}
              <button
                onClick={() => handleScrollTo('contact')}
                className="btn btn-hero-outline"
              >
                <Mail size={16} />
                <span>CONTACT</span>
              </button>
            </div>

          </div>

          {/* ==================================================== */}
          {/* RIGHT: IMAGE-FREE ABSTRACT FUTURISTIC COMPOSITION     */}
          {/* ==================================================== */}
          <div className="hero-right-visual" aria-hidden="true">

            <div className="abstract-core-container">

              {/* Central Glowing Energy Halo */}
              <div className="core-energy-orb"></div>
              <div className="core-flare-ring"></div>

              {/* Concentric Rotating Cyber Radar Rings */}
              <div className="radar-orbital ring-outer">
                <div className="radar-blip blip-1"></div>
                <div className="radar-blip blip-2"></div>
                <div className="radar-blip blip-3"></div>
              </div>
              <div className="radar-orbital ring-mid"></div>
              <div className="radar-orbital ring-inner"></div>

              {/* Crosshair & Coordinate Grid SVG */}
              <svg className="cyber-crosshair-svg" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="190" stroke="rgba(255, 30, 56, 0.25)" strokeWidth="1" strokeDasharray="4 8" fill="none" />
                <circle cx="200" cy="200" r="140" stroke="rgba(255, 30, 56, 0.4)" strokeWidth="1.2" strokeDasharray="8 6" fill="none" />
                <circle cx="200" cy="200" r="80" stroke="rgba(255, 75, 43, 0.6)" strokeWidth="1.5" fill="none" />
                <line x1="200" y1="0" x2="200" y2="400" stroke="rgba(255, 30, 56, 0.2)" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(255, 30, 56, 0.2)" strokeWidth="1" strokeDasharray="5 5" />
                <circle cx="200" cy="200" r="4" fill="#ff1e38" />
              </svg>

              {/* FLOATING HOLOGRAPHIC TELEMETRY CARDS (Authentic Metrics) */}

              {/* Card 1: Academic Metric Node */}
              <div className="hologram-card holo-card-top animate-float">
                <div className="holo-header">
                  <GraduationCap size={16} className="text-red" />
                  <span className="holo-category">ACADEMIC TELEMETRY</span>
                  <span className="holo-live-dot"></span>
                </div>
                <div className="holo-metric-val">8.36 <span className="holo-unit">CGPA</span></div>
                <div className="holo-desc">BCA Scholar • De Paul Institute (MG Univ)</div>
                <div className="holo-progress-bar">
                  <div className="holo-progress-fill" style={{ width: '83.6%' }}></div>
                </div>
              </div>

              {/* Card 2: Technical Focus Stack */}
              <div className="hologram-card holo-card-bottom animate-float" >
                <div className="holo-header">
                  <Activity size={16} className="text-red" />
                  <span className="holo-category">CORE STACK STATUS</span>
                </div>
                <div className="holo-stack-row">
                  <span className="holo-tech-badge">Flutter</span>
                  <span className="holo-tech-badge">Python</span>
                  <span className="holo-tech-badge">Power BI</span>
                  <span className="holo-tech-badge">Node.js</span>
                </div>
                <div className="holo-meta-line">
                  <span>ACTIVE REPO WORK: 3+ PROJECTS</span>
                </div>
              </div>

              {/* Card 3: Industry Experience Node */}
              <div className="hologram-card holo-card-side animate-float" >
                <div className="holo-header">
                  <Building size={16} className="text-red" />
                  <span className="holo-category">INDUSTRY TRACK</span>
                </div>
                <div className="holo-company">TEQARD LABS PVT LTD</div>
                <div className="holo-role">Software Development Intern</div>
                <div className="holo-status-verified">
                  <ShieldCheck size={14} className="text-red" />
                  <span>VERIFIED INTERNSHIP</span>
                </div>
              </div>

              {/* Abstract Corner Telemetry Badges */}
              <div className="cyber-coordinate-chip coord-br">
                <span>SECTOR: 01 // DEV_ONLINE</span>
              </div>

            </div>

          </div>

        </div>

        {/* HUD Bottom Bar with Metrics & Scroll Cue */}
        <div className="hero-hud-bottombar">
          <div className="hud-bottom-metric">
            <span className="hud-num">01</span>
            <span className="hud-lbl">INTERNSHIP</span>
          </div>
          <div className="hud-bottom-metric">
            <span className="hud-num">04</span>
            <span className="hud-lbl">CERTIFICATIONS</span>
          </div>
          <div className="hud-bottom-metric">
            <span className="hud-num">03+</span>
            <span className="hud-lbl">ACTIVE PROJECTS</span>
          </div>
          <button
            onClick={() => handleScrollTo('about')}
            className="hud-scroll-cue"
            aria-label="Scroll to About Section"
          >
            <span>SCROLL DOWN</span>
            <span className="scroll-chevron">▼</span>
          </button>
        </div>

      </div>
    </section>
  );
}
