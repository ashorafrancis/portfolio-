import React, { useState, useEffect, useRef } from 'react';
import { Award, GraduationCap, Briefcase, FileCode2, BookOpen, Building2 } from 'lucide-react';
import './Stats.css';

const statsData = [
  {
    id: 'cgpa',
    label: 'Academic CGPA',
    sublabel: 'BCA Coursework • MG University',
    target: 8.36,
    decimals: 2,
    suffix: '',
    prefix: '',
    icon: GraduationCap,
  },
  {
    id: 'score12th',
    label: 'Higher Secondary',
    sublabel: 'Science & Mathematics Track',
    target: 86,
    decimals: 0,
    suffix: '%',
    prefix: '',
    icon: BookOpen,
  },
  {
    id: 'internship',
    label: 'Industry Internship',
    sublabel: 'Teqard Labs Private Limited',
    target: 1,
    decimals: 0,
    suffix: 'x',
    prefix: '',
    icon: Building2,
  },
  {
    id: 'certifications',
    label: 'Verified Certifications',
    sublabel: 'Coursera & IBM SkillsBuild',
    target: 4,
    decimals: 0,
    suffix: '',
    prefix: '',
    icon: Award,
  },
  {
    id: 'projects',
    label: 'Software & Data Projects',
    sublabel: 'Mobile, Full-Stack & Power BI',
    target: 3,
    decimals: 0,
    suffix: '+',
    prefix: '',
    icon: FileCode2,
  },
  {
    id: 'research',
    label: 'Conference Research Paper',
    sublabel: 'AI in Autonomous Vehicles Case Study',
    target: 1,
    decimals: 0,
    suffix: '',
    prefix: '',
    icon: Briefcase,
  },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800; // 1.8 seconds
    const startTime = performance.now();

    const updateCounts = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const nextCounts = statsData.map((stat) => {
        const val = stat.target * easeOut;
        return stat.decimals > 0
          ? parseFloat(val.toFixed(stat.decimals))
          : Math.floor(val);
      });

      setCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      } else {
        setCounts(statsData.map((s) => s.target));
      }
    };

    requestAnimationFrame(updateCounts);
  }, [isVisible]);

  return (
    <section className="stats-section" ref={sectionRef} id="stats">
      <div className="container">
        
        {/* Futuristic HUD Section Header */}
        <div className="stats-header-bar">
          <div className="stats-header-left">
            <span className="stats-hud-tag">/// VERIFIED TELEMETRY</span>
            <h2 className="stats-main-heading">Academic & Technical Metrics</h2>
          </div>
          <div className="stats-header-right">
            <span className="status-indicator-dot"></span>
            <span className="status-text">OFFICIAL DATA AUDIT</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            const currentVal = counts[idx] !== undefined ? counts[idx] : 0;
            const formattedVal =
              stat.decimals > 0
                ? currentVal.toFixed(stat.decimals)
                : currentVal;

            return (
              <div key={stat.id} className="stat-card">
                {/* Tech corner notches */}
                <div className="stat-corner-tl"></div>
                <div className="stat-corner-br"></div>

                <div className="stat-card-inner">
                  <div className="stat-top-row">
                    <div className="stat-icon-wrap">
                      <Icon size={18} />
                    </div>
                    <span className="stat-id-label">METRIC_{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  </div>

                  <div className="stat-value-wrap">
                    <span className="stat-prefix">{stat.prefix}</span>
                    <span className="stat-number">{formattedVal}</span>
                    <span className="stat-suffix">{stat.suffix}</span>
                  </div>

                  <div className="stat-label-wrap">
                    <h3 className="stat-title">{stat.label}</h3>
                    <p className="stat-sublabel">{stat.sublabel}</p>
                  </div>
                </div>

                {/* Bottom glowing line on card */}
                <div className="stat-card-glow-bar"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

