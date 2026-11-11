import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Award, Sparkles, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { useTilt3D } from '../hooks/useTilt3D';
import './Certificates.css';




function CertCard({ cert }) {
  const tiltRef = useTilt3D({ max: 6 });
  return (
    <div ref={tiltRef} className="cert-card">
      <div className="cert-notch-tl"></div>
      <div className="cert-notch-br"></div>
      <div className="cert-top-row">
        <div className="cert-badge-category">
          <Sparkles size={12} className="text-red" />
          <span>{cert.category}</span>
        </div>
        <div className="cert-status-tag">
          <CheckCircle2 size={13} />
          <span>{cert.achievement}</span>
        </div>
      </div>
      <h3 className="cert-card-title">{cert.title}</h3>
      <div className="cert-meta-row">
        <span className="cert-issuer">{cert.issuer}</span>
        <span className="cert-year-tag">{cert.period}</span>
      </div>
      {cert.duration && (
        <div className="cert-duration-row">
          <Clock size={13} className="text-red" />
          <span className="cert-duration-label">{cert.duration}</span>
        </div>
      )}
      <p className="cert-highlights-text">{cert.highlights}</p>
      <div className="cert-footer-line">
        <ShieldCheck size={16} className="text-red" />
        <span>{cert.footerLabel}</span>
      </div>
      <div className="cert-card-glow-bar"></div>
    </div>
  );
}

const certificateList = [
  {
    title: 'Crash Course on Python',
    issuer: 'Coursera (Google Professional Track)',
    period: '2025',
    duration: null,
    achievement: 'Verified Credential',
    category: 'PYTHON ARCHITECTURE',
    highlights: 'Mastered Python syntax, core data structures, modular function design, object modeling, and algorithmic problem-solving.',
    footerLabel: 'OFFICIAL RESUME ACCREDITATION'
  },
  {
    title: 'Using Python to Interact with the Operating System',
    issuer: 'Coursera (Google Professional Track)',
    period: '2026',
    duration: null,
    achievement: 'Verified Credential',
    category: 'SYSTEM AUTOMATION',
    highlights: 'Engineered automation scripts for file system manipulation, shell subprocess orchestration, regular expression processing, and error handling.',
    footerLabel: 'OFFICIAL RESUME ACCREDITATION'
  },
  {
    title: 'Use of Generative AI for Software Development',
    issuer: 'IBM SkillsBuild',
    period: '2026',
    duration: null,
    achievement: 'Verified Credential',
    category: 'GENERATIVE AI & TECH',
    highlights: 'Practical exploration of generative foundation models, developer prompt engineering, AI code generation assistants, and automated engineering workflows.',
    footerLabel: 'OFFICIAL RESUME ACCREDITATION'
  },
  {
    title: 'AI in the Creative Era',
    issuer: 'Specialized Certificate Program',
    period: '2026',
    duration: null,
    achievement: 'Verified Credential',
    category: 'ARTIFICIAL INTELLIGENCE',
    highlights: 'In-depth certificate training evaluating real-world artificial intelligence applications, neural frameworks, and creative tech automation systems.',
    footerLabel: 'OFFICIAL RESUME ACCREDITATION'
  },
  {
    title: 'NPTEL Online Certification – Cloud Computing',
    issuer: 'NPTEL, IIT Kharagpur',
    period: 'July – October 2026',
    duration: '12 Weeks',
    achievement: 'Elite Certification',
    category: 'CLOUD COMPUTING',
    highlights: 'Successfully completed a 12-week rigorous online course on Cloud Computing by NPTEL (IIT Kharagpur), earning Elite Certification for outstanding performance.',
    footerLabel: 'NPTEL ELITE CERTIFIED'
  },
  {
    title: 'Industry Immersion Program on Power BI',
    issuer: 'NeST Digital Academy',
    period: 'August 2026',
    duration: '5 Days',
    achievement: 'Program Completion',
    category: 'DATA ANALYTICS & BI',
    highlights: 'Successfully completed a 5 Days Training on Industry Immersion Program on Power BI under NeST Digital Academy. Gained practical experience in dashboard design, DAX, and business intelligence workflows.',
    footerLabel: 'INDUSTRY PROGRAM CERTIFIED'
  }
];

export default function Certificates() {
  const headerRef = useScrollReveal();
  const gridRef   = useScrollReveal({ threshold: 0.06 });

  return (
    <section id="certificates" className="section-padding certificates-section">
      <div className="container">

        {/* Section Header */}
        <div ref={headerRef} className="section-header reveal-up">
          <div className="section-badge">
            <Award size={14} className="text-red" />
            <span>/// 05. CERTIFICATIONS & ACCREDITATIONS</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Courses</span>
          </h2>
          <p className="section-subtitle">
            Professional certifications and accredited technical coursework verified through globally recognized organizations including Coursera, IBM SkillsBuild, NPTEL, and NeST Digital Academy.
          </p>
        </div>

        {/* Unified Certificate Cards Grid */}
        <div ref={gridRef} className="certificates-grid stagger-children">
          {certificateList.map((cert, index) => (
            <CertCard cert={cert} key={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
