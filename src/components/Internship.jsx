import React from 'react';
import { Building2, Calendar, ClipboardList, Wrench, Star, CheckCircle2, ArrowRight, ShieldCheck, Terminal, BarChart2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTilt3D } from '../hooks/useTilt3D';
import './Internship.css';

const responsibilities = [
  'Assisted in the design and development of Android application features, contributing to core functionality and user interface improvements.',
  'Performed systematic debugging and testing of application code to identify and resolve issues, enhancing overall software reliability.',
  'Participated in software and hardware device testing cycles to ensure functional deliverables met quality standards.',
  'Contributed to comprehensive technical documentation and supported ongoing sprint activities within a collaborative team environment.',
  'Worked with industry-standard development tools, Git version-control workflows, and structured repositories in a professional setting.',
  'Strengthened problem-solving, communication, analytical, and teamwork competencies through real-world deployment involvement.'
];

const toolsList = [
  'Android Studio', 'VS Code', 'Flutter / Dart', 'Git', 'GitHub', 'Android Development'
];

export default function Internship() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const headerRef  = useScrollReveal();
  const card1Ref   = useScrollReveal({ threshold: 0.08 });
  const card2Ref   = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="internship" className="section-padding internship-section">
      <div className="container">

        {/* Section Header */}
        <div ref={headerRef} className="section-header reveal-up">
          <div className="section-badge">
            <Building2 size={14} className="text-red" />
            <span>/// 02. INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="section-title">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Real-world professional training in mobile application engineering, software debugging, technical documentation, and collaborative development.
          </p>
        </div>

        {/* Main Cockpit Internship Card — Teqard Labs */}
        <div ref={card1Ref} className="internship-main-card reveal-up">
          {/* Tech Corner Brackets */}
          <div className="hud-corner hud-corner-tl"></div>
          <div className="hud-corner hud-corner-tr"></div>
          <div className="hud-corner hud-corner-bl"></div>
          <div className="hud-corner hud-corner-br"></div>

          {/* Card Top: Company name + period */}
          <div className="internship-card-header">
            <div className="company-block">
              <div className="company-logo-badge">
                <Building2 size={28} />
              </div>
              <div className="company-title-wrap">
                <span className="corp-label">TECH INTERNSHIP</span>
                <h3 className="company-name">TEQARD LABS PRIVATE LIMITED</h3>
                <p className="company-role-note">Software Development Intern</p>
              </div>
            </div>

            <div className="internship-meta-badges">
              <div className="meta-badge-date">
                <Calendar size={14} className="text-red" />
                <span>Apr 2026 – May 2026</span>
              </div>
              <div className="meta-badge-verified">
                <ShieldCheck size={14} className="text-red" />
                <span>OFFICIAL INTERNSHIP</span>
              </div>
            </div>
          </div>

          {/* Divider with red glow */}
          <div className="internship-divider"></div>

          {/* Content grid: responsibilities + tools + special project */}
          <div className="internship-content-grid">

            {/* Responsibilities Column */}
            <div className="internship-col resp-col">
              <h4 className="col-heading">
                <ClipboardList size={17} className="col-icon" />
                <span>Key Responsibilities & Contributions</span>
              </h4>
              <ul className="responsibility-list">
                {responsibilities.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={15} className="resp-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar Column: Tools & Special Project */}
            <div className="internship-sidebar-col">
              
              {/* Tools Box */}
              <div className="sidebar-box tools-box">
                <h4 className="col-heading">
                  <Wrench size={16} className="col-icon" />
                  <span>Tools & Environment</span>
                </h4>
                <div className="internship-tools-grid">
                  {toolsList.map((tool, idx) => (
                    <span key={idx} className="internship-tool-badge">
                      <Terminal size={12} className="text-red" />
                      <span>{tool}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Special Project Deliverable */}
              <div className="sidebar-box deliverable-box">
                <div className="sp-top-tag">
                  <Star size={13} />
                  <span>KEY INTERNSHIP DELIVERABLE</span>
                </div>
                <h4 className="sp-title">To-Do Mobile Application</h4>
                <div className="sp-stack-pill">Flutter & Dart Engine</div>
                <p className="sp-desc">
                  Engineered and deployed a mobile task management application with clean state architecture, responsive UI components, and complete task persistence.
                </p>
                <button
                  onClick={() => handleScrollTo('projects')}
                  className="sp-view-btn"
                >
                  <span>Inspect in Projects</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* ================================================== */}
        {/* SECOND INTERNSHIP: NeST DIGITAL ACADEMY            */}
        {/* ================================================== */}
        <div ref={card2Ref} className="internship-secondary-card reveal-up">
          {/* Tech Corner Brackets */}
          <div className="hud-corner hud-corner-tl"></div>
          <div className="hud-corner hud-corner-tr"></div>
          <div className="hud-corner hud-corner-bl"></div>
          <div className="hud-corner hud-corner-br"></div>

          <div className="internship-card-header">
            <div className="company-block">
              <div className="company-logo-badge">
                <BarChart2 size={28} />
              </div>
              <div className="company-title-wrap">
                <span className="corp-label">DATA ANALYTICS INTERNSHIP</span>
                <h3 className="company-name">NeST DIGITAL ACADEMY</h3>
                <p className="company-role-note">Power BI Intern</p>
              </div>
            </div>

            <div className="internship-meta-badges">
              <div className="meta-badge-date">
                <Calendar size={14} className="text-red" />
                <span>15 Aug 2026 – 14 Sep 2026</span>
              </div>
              <div className="meta-badge-verified">
                <ShieldCheck size={14} className="text-red" />
                <span>OFFICIAL INTERNSHIP</span>
              </div>
            </div>
          </div>

          <div className="internship-divider"></div>

          <div className="nest-internship-body">
            <div className="nest-desc-block">
              <h4 className="col-heading">
                <ClipboardList size={17} className="col-icon" />
                <span>Internship Summary</span>
              </h4>
              <p className="nest-desc-text">
                Successfully completed an internship in Power BI under NeST Digital Academy. Gained hands-on experience in data analytics, dashboard design, and business intelligence reporting using Microsoft Power BI.
              </p>
            </div>
            <div className="nest-tools-block">
              <h4 className="col-heading">
                <Wrench size={16} className="col-icon" />
                <span>Tools & Domain</span>
              </h4>
              <div className="internship-tools-grid">
                {['Microsoft Power BI', 'Data Visualization', 'DAX', 'Data Modeling', 'Business Intelligence'].map((tool, idx) => (
                  <span key={idx} className="internship-tool-badge">
                    <Terminal size={12} className="text-red" />
                    <span>{tool}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
