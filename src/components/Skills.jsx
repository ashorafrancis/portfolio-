import React from 'react';
import { Code, Globe, Database, LineChart, Wrench, Users, Info, Sparkles } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: Code,
    color: 'cyan',
    skills: [
      { name: 'Python', tag: 'Scripting' },
      { name: 'Dart', tag: 'Mobile' },
      { name: 'C', tag: 'Core' },
      { name: 'Java', tag: 'OOP' },
      { name: 'SQL', tag: 'Queries' }
    ]
  },
  {
    id: 'mobile-backend',
    title: 'Mobile & Backend Dev',
    icon: Globe,
    color: 'indigo',
    skills: [
      { name: 'Flutter', tag: 'Cross-Platform' },
      { name: 'Node.js', tag: 'Runtime' },
      { name: 'Express.js', tag: 'Framework' }
    ]
  },
  {
    id: 'database',
    title: 'Databases & Data',
    icon: Database,
    color: 'emerald',
    skills: [
      { name: 'MongoDB', tag: 'NoSQL' },
      { name: 'MySQL', tag: 'Relational' },
      { name: 'Power BI', tag: 'Visualization' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'purple',
    skills: [
      { name: 'Android Studio', tag: 'IDE' },
      { name: 'VS Code', tag: 'IDE' },
      { name: 'Git', tag: 'Version Control' },
      { name: 'GitHub', tag: 'Repository' }
    ]
  },
  {
    id: 'concepts',
    title: 'Core Concepts',
    icon: Sparkles,
    color: 'amber',
    skills: [
      { name: 'Object-Oriented Programming', tag: 'OOP' },
      { name: 'Data Structures', tag: 'DSA' },
      { name: 'Database Management', tag: 'DBMS' },
      { name: 'Software Dev Lifecycle', tag: 'SDLC' },
      { name: 'REST APIs', tag: 'Web' },
      { name: 'Data Analysis', tag: 'Analytics' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={15} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subtitle">
            A transparent showcase of technical languages, tools, frameworks, and professional competencies built through BCA coursework, self-learning, and project development.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="skills-grid">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="glass-card skill-category-card">
                
                <div className="category-header">
                  <div className={`category-icon-box icon-${category.color}`}>
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3 className="category-title">{category.title}</h3>
                    {category.badge && (
                      <span className="category-badge">{category.badge}</span>
                    )}
                  </div>
                </div>

                {category.disclaimer && (
                  <div className="skill-disclaimer">
                    <Info size={14} className="disclaimer-icon" />
                    <span>{category.disclaimer}</span>
                  </div>
                )}

                <div className="skill-badges-container">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-badge-item">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-tag">{skill.tag}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
