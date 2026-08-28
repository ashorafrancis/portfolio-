import React from 'react';
import { FileText, Eye, Download, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import './ResumeSection.css';

export default function ResumeSection() {
  const resumeUrl = '/Ashora_Francis_New_Resume.pdf';

  return (
    <section id="resume" className="section-padding resume-section">
      <div className="container">
        
        <div className="glass-card resume-card">
          <div className="resume-glow-bg"></div>

          <div className="resume-content-grid">
            
            {/* Left Content */}
            <div className="resume-info">
              <div className="section-badge">
                <FileText size={15} />
                <span>Verified Curriculum Vitae</span>
              </div>

              <h2 className="resume-main-title">
                My <span className="gradient-text">Resume</span>
              </h2>

              <p className="resume-description">
                Interested in learning more about my background? Download or view my full official resume detailing my BCA academic coursework, technical skill set, certifications, software projects, research paper presentation, and leadership activities.
              </p>

              <div className="resume-highlights-grid">
                <div className="resume-point">
                  <CheckCircle2 size={16} className="text-skyblue" />
                  <span>BCA Degree Track (Expected 2027)</span>
                </div>
                <div className="resume-point">
                  <CheckCircle2 size={16} className="text-skyblue" />
                  <span>Python, Dart, Flutter & Node.js</span>
                </div>
                <div className="resume-point">
                  <CheckCircle2 size={16} className="text-skyblue" />
                  <span>4 Industry Certifications</span>
                </div>
                <div className="resume-point">
                  <CheckCircle2 size={16} className="text-skyblue" />
                  <span>3 Practical Software Projects</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="resume-actions-group">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Eye size={18} />
                  <span>View Resume</span>
                </a>

                <a
                  href={resumeUrl}
                  download="Ashora_Francis_New_Resume.pdf"
                  className="btn btn-secondary"
                >
                  <Download size={18} />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right Preview Widget */}
            <div className="resume-preview-box">
              <div className="resume-doc-sheet">
                <div className="sheet-header">
                  <div className="sheet-name">ASHORA FRANCIS</div>
                  <div className="sheet-subtitle">BCA Student & Developer</div>
                  <div className="sheet-contact">ashorafrancis@gmail.com | Ernakulam, Kerala</div>
                </div>

                <div className="sheet-section">
                  <div className="sheet-sec-title">EDUCATION</div>
                  <div className="sheet-line">Bachelor of Computer Applications (BCA) - Expected 2027</div>
                  <div className="sheet-subline">De Paul Institute of Science & Technology</div>
                </div>

                <div className="sheet-section">
                  <div className="sheet-sec-title">TECHNICAL SKILLS</div>
                  <div className="sheet-line">Python, Dart, Flutter, Node.js, MongoDB, Power BI</div>
                </div>

                <div className="sheet-watermark">
                  <ShieldCheck size={28} className="text-skyblue" />
                  <span>Verified PDF Document</span>
                </div>

                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sheet-overlay-btn"
                >
                  <ExternalLink size={16} />
                  <span>Open Full PDF</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
