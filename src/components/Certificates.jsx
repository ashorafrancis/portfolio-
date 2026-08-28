import React from 'react';
import { Award, CheckCircle2, Clock, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import './Certificates.css';

const certificateList = [
  {
    title: 'Crash Course on Python',
    issuer: 'Coursera',
    year: '2025',
    status: 'Completed',
    category: 'Python Programming',
    highlights: 'Covered Python fundamentals, data structures, loops, functions, and algorithmic thinking.'
  },
  {
    title: 'Using Python to Interact with the Operating System',
    issuer: 'Coursera',
    year: '2026',
    status: 'Completed',
    category: 'System Automation',
    highlights: 'Practiced OS file manipulation, shell automation, regex processing, and managing system processes.'
  },

  {
    title: 'Use of Generative AI for Software Development',
    issuer: 'IBM SkillsBuild',
    year: '2026',
    status: 'Completed',
    category: 'Generative AI & Tech',
    highlights: 'Explored prompt engineering, code generation assistants, and AI-driven software workflows.'
  },
  {
    title: 'AI in the Creative Era',
    issuer: 'Certificate Program',
    year: '2026',
    status: 'Completed',
    category: 'Artificial Intelligence',
    highlights: 'Participated in certificate training exploring AI applications in modern technology and creative systems.'
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding certificates-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={15} />
            <span>Learning & Validation</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Courses</span>
          </h2>
          <p className="section-subtitle">
            Professional certifications and coursework completed through recognized global platforms, university initiatives, and technical organizations.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="certificates-grid">
          {certificateList.map((cert, index) => (
            <div key={index} className={`glass-card certificate-card ${cert.status === 'Ongoing' ? 'ongoing-card' : ''}`}>
              
              <div className="cert-top-row">
                <div className="cert-badge-category">
                  <Sparkles size={13} />
                  <span>{cert.category}</span>
                </div>

                <div className={`cert-status-tag ${cert.status === 'Ongoing' ? 'status-ongoing' : 'status-completed'}`}>
                  {cert.status === 'Ongoing' ? <Clock size={13} /> : <CheckCircle2 size={13} />}
                  <span>{cert.status}</span>
                </div>
              </div>

              <h3 className="cert-card-title">{cert.title}</h3>

              <div className="cert-meta-row">
                <span className="cert-issuer">{cert.issuer}</span>
                {cert.year && <span className="cert-year">{cert.year}</span>}
              </div>

              <p className="cert-highlights-text">
                {cert.highlights}
              </p>

              <div className="cert-footer-line">
                <ShieldCheck size={16} className="text-skyblue" />
                <span>Verified Resume Coursework</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
