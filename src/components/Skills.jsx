import React, { useEffect, useRef } from 'react';
import { Code, Globe, Database, Wrench, Sparkles, Cpu } from 'lucide-react';
import { useTilt3D } from '../hooks/useTilt3D';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const skillCategories = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: Code,
    tagline: 'Core syntax & systems',
    skills: [
      { name: 'Python', tag: 'Core / Scripting' },
      { name: 'Dart', tag: 'Mobile Engine' },
      { name: 'C', tag: 'Low-Level / Core' },
      { name: 'Java', tag: 'OOP Principles' },
      { name: 'SQL', tag: 'Querying' }
    ]
  },
  {
    id: 'mobile-backend',
    title: 'Mobile & Backend Development',
    icon: Globe,
    tagline: 'Cross-platform & APIs',
    skills: [
      { name: 'Flutter', tag: 'Cross-Platform UI' },
      { name: 'Node.js', tag: 'Server Runtime' },
      { name: 'Express.js', tag: 'REST Framework' }
    ]
  },
  {
    id: 'database',
    title: 'Databases & Analytics',
    icon: Database,
    tagline: 'Storage & Business Intelligence',
    skills: [
      { name: 'Power BI', tag: 'Data Visuals & KPIs' },
      { name: 'MongoDB', tag: 'NoSQL Document Store' },
      { name: 'MySQL', tag: 'Relational Database' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Environments',
    icon: Wrench,
    tagline: 'DevOps & IDE ecosystems',
    skills: [
      { name: 'Android Studio', tag: 'Mobile IDE' },
      { name: 'VS Code', tag: 'Primary IDE' },
      { name: 'Git', tag: 'Version Control' },
      { name: 'GitHub', tag: 'Cloud Repositories' }
    ]
  },
  {
    id: 'concepts',
    title: 'Core Computing Concepts',
    icon: Sparkles,
    tagline: 'Foundations & Architecture',
    skills: [
      { name: 'Object-Oriented Programming', tag: 'OOP' },
      { name: 'Data Structures', tag: 'DSA' },
      { name: 'Database Management', tag: 'DBMS' },
      { name: 'Software Dev Lifecycle', tag: 'SDLC' },
      { name: 'RESTful Architecture', tag: 'Web Services' },
      { name: 'Data Analysis & Cleaning', tag: 'Analytics' }
    ]
  }
];

function SkillCard({ category, idx }) {
  const tiltRef = useTilt3D({ max: 7 });
  const IconComponent = category.icon;
  return (
    <div ref={tiltRef} className="skill-cat-card tilt-card">
      <div className="skill-notch-tl"></div>
      <div className="skill-notch-br"></div>

      <div className="category-header">
        <div className="category-icon-box">
          <IconComponent size={20} />
        </div>
        <div className="category-title-wrap">
          <span className="cat-index">MODULE_{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
          <h3 className="category-title">{category.title}</h3>
          <span className="category-tagline">{category.tagline}</span>
        </div>
      </div>

      <div className="skill-divider-line"></div>

      <div className="skill-badges-container">
        {category.skills.map((skill, sIdx) => (
          <div key={sIdx} className="skill-badge-item" style={{ animationDelay: `${sIdx * 0.06}s` }}>
            <span className="skill-name">{skill.name}</span>
            <span className="skill-tag">{skill.tag}</span>
          </div>
        ))}
      </div>

      <div className="skill-card-glow-bar"></div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        
        <div ref={headerRef} className="section-header reveal-up">
          <div className="section-badge">
            <Cpu size={14} className="text-red" />
            <span>/// 03. TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subtitle">
            A transparent showcase of technical languages, frameworks, development tools, and computer science foundations built through BCA coursework and hands-on projects.
          </p>
        </div>

        <div ref={gridRef} className="skills-grid stagger-children">
          {skillCategories.map((category, idx) => (
            <SkillCard key={category.id} category={category} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
