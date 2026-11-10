import React from 'react';
import { FileText, Eye, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './ResumeSection.css';

export default function ResumeSection() {
  const resumeUrl = '/Ashora_Francis_New_Resume.pdf';

  return (
    <section id="resume" className="section-padding resume-section">
      <div className="container">
        
        <div className="resume-cockpit-card">
          {/* Tech Corner Notches */}
          <div className="hud-corner hud-corner-tl"></div>
          <div className="hud-corner hud-corner-tr"></div>
          <div className="hud-corner hud-corner-bl"></div>
          <div className="hud-corner hud-corner-br"></div>

          <div className="resume-content-grid">
            
            {/* Left Content */}
            <div className="resume-info-col">
              <div className="section-badge">
                <FileText size={14} className="text-red" />
                <span>/// 07. OFFICIAL CURRICULUM VITAE</span>
              </div>

              <h2 className="resume-main-title">
                My <span className="gradient-text">Official Resume</span>
              </h2>

              <p className="resume-description">
                Interested in reviewing my full academic and technical portfolio? View or download my verified resume detailing my BCA coursework, GPA performance, software project implementations, industry internship at Teqard Labs, and certifications.
              </p>

              <div className="resume-highlights-grid">
                <div className="resume-point">
                  <CheckCircle2 size={16} className="text-red" />
                  <span>BCA Degree Program • 8.36 CGPA</span>
                </div>
                <div className="resume-point">
                  <CheckCircle2 size={16} className="text-red" />
                  <span>Flutter, Dart, Python, Node.js & Power BI</span>
                </div>
                <div className="resume-point">
                  <CheckCircle2 size={16} className="text-red" />
                  <span>4 Global Technical Certifications</span>
                </div>
                <div className="resume-point">
                  <CheckCircle2 size={16} className="text-red" />
                  <span>Software Development Internship Experience</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="resume-actions-group">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-hero-primary"
                >
                  <Eye size={17} />
                  <span>VIEW FULL RESUME</span>
                </a>

                <a
                  href={resumeUrl}
                  download="Ashora_Francis_New_Resume.pdf"
                  className="btn btn-hero-secondary"
                >
                  <Download size={16} />
                  <span>DOWNLOAD PDF DOCUMENT</span>
                </a>
              </div>
            </div>

            {/* Right Preview Sheet */}
            <div className="resume-preview-col">
              <div className="resume-doc-sheet">
                
                <div className="sheet-header">
                  <div className="sheet-top-row">
                    <span className="sheet-badge-verified">OFFICIAL CV RECORD</span>
                    <span className="sheet-format">PDF / A4</span>
                  </div>
                  <div className="sheet-name">ASHORA FRANCIS</div>
                  <div className="sheet-subtitle">BCA Student & Software Developer</div>
                  <div className="sheet-contact">ashorafrancis@gmail.com | Ernakulam, Kerala</div>
                </div>

                <div className="sheet-section">
                  <div className="sheet-sec-title">EDUCATION</div>
                  <div className="sheet-line">Bachelor of Computer Applications (BCA) - Expected 2027</div>
                  <div className="sheet-subline">De Paul Institute of Science & Technology (MG University) — CGPA: 8.36</div>
                </div>

                <div className="sheet-section">
                  <div className="sheet-sec-title">EXPERIENCE</div>
                  <div className="sheet-line">Software Development Intern — Teqard Labs Pvt Ltd</div>
                  <div className="sheet-subline">Android Studio, Flutter, Dart, Device & Software Testing</div>
                </div>

                <div className="sheet-section">
                  <div className="sheet-sec-title">CORE SKILLS</div>
                  <div className="sheet-line">Python, Dart, Flutter, Node.js, Express, MongoDB, Power BI</div>
                </div>

                <div className="sheet-watermark">
                  <ShieldCheck size={28} className="text-red" />
                  <span>VERIFIED PDF CURRICULUM VITAE</span>
                </div>

                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sheet-overlay-link"
                >
                  <span>Click to open in new tab ➔</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
