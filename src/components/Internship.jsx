import React from 'react';
import { Building2, Calendar, Clock, ClipboardList, Wrench, Star, CheckCircle2 } from 'lucide-react';
import './Internship.css';

const responsibilities = [
  'Android Application Development',
  'UI/UX Design',
  'IoT Device Testing',
  'Firmware-related tasks',
  'Technical documentation'
];

const toolsList = [
  'Flutter', 'Dart', 'Android Studio', 'VS Code',
  'GitHub', 'Microsoft Word', 'Microsoft Excel', 'Arduino IDE'
];

export default function Internship() {
  return (
    <section id="internship" className="section-padding internship-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Building2 size={15} />
            <span>Professional Experience</span>
          </div>
          <h2 className="section-title">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Real-world professional training in application development, UI/UX design, IoT device testing, firmware work, and technical documentation.
          </p>
        </div>

        {/* Main Internship Card */}
        <div className="glass-card internship-main-card">

          {/* Card Top: Company name + period */}
          <div className="internship-card-header">
            <div className="company-block">
              <div className="company-logo-badge">
                <Building2 size={28} />
              </div>
              <div>
                <h3 className="company-name">TEQARD LABS PRIVATE LIMITED</h3>
                <p className="company-role-note">Internship — Application Development & IoT</p>
              </div>
            </div>

            <div className="internship-meta-badges">
              <div className="meta-badge">
                <Calendar size={14} />
                <span>06 April 2026 – 29 May 2026</span>
              </div>
              <div className="meta-badge">
                <Clock size={14} />
                <span>240 Hours · Mon–Fri · 10:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="internship-divider"></div>

          {/* Content grid: responsibilities + tools + special project */}
          <div className="internship-content-grid">

            {/* Responsibilities */}
            <div className="internship-col">
              <h4 className="col-heading">
                <ClipboardList size={16} className="col-icon" />
                <span>Responsibilities</span>
              </h4>
              <ul className="responsibility-list">
                {responsibilities.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={14} className="resp-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="internship-col">
              <h4 className="col-heading">
                <Wrench size={16} className="col-icon" />
                <span>Tools & Technologies</span>
              </h4>
              <div className="internship-tools-grid">
                {toolsList.map((tool, idx) => (
                  <span key={idx} className="internship-tool-badge">{tool}</span>
                ))}
              </div>
            </div>

            {/* Special Project */}
            <div className="internship-col">
              <h4 className="col-heading">
                <Star size={16} className="col-icon col-icon-amber" />
                <span>Special Project</span>
              </h4>
              <div className="special-project-card">
                <div className="sp-top-tag">Internship Deliverable</div>
                <div className="sp-title">To-Do App</div>
                <div className="sp-stack">Flutter & Dart</div>
                <p className="sp-desc">
                  Developed a fully functional mobile task management application using Flutter and Dart as the key project deliverable during the internship at Teqard Labs. See the complete project card in the <span className="sp-link-hint">Projects</span> section.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
