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
      { name: 'Python', tag: 'Primary Focus' },
      { name: 'Java', tag: 'OOP Core' },
      { name: 'C', tag: 'Fundamentals' },
      { name: 'C++', tag: 'Concepts' },
      { name: 'JavaScript', tag: 'Web Logic' }
    ]
  },
  {
    id: 'web',
    title: 'Web Technologies',
    icon: Globe,
    color: 'indigo',
    skills: [
      { name: 'HTML5', tag: 'Structure' },
      { name: 'CSS3', tag: 'Styling & Flexbox' },
      { name: 'JavaScript', tag: 'ES6+' }
    ]
  },
  {
    id: 'database',
    title: 'Database Management',
    icon: Database,
    color: 'emerald',
    skills: [
      { name: 'MySQL', tag: 'Relational DB' },
      { name: 'MongoDB', tag: 'NoSQL / App Project' }
    ]
  },
  {
    id: 'datascience',
    title: 'Python / Data Science Libraries',
    icon: LineChart,
    color: 'amber',
    badge: 'Coursework & Learning Awareness',
    disclaimer: 'Basic awareness & practical exercises gained through BCA coursework and NPTEL training.',
    skills: [
      { name: 'NumPy', tag: 'Array Operations' },
      { name: 'Pandas', tag: 'Dataframes' },
      { name: 'Matplotlib', tag: 'Data Visuals' },
      { name: 'Seaborn', tag: 'Statistical Plots' },
      { name: 'NLTK', tag: 'Text Intro' },
      { name: 'scikit-learn', tag: 'Linear Regression' }
    ]
  },
  {
    id: 'tools',
    title: 'Development & Tools',
    icon: Wrench,
    color: 'purple',
    skills: [
      { name: 'VS Code', tag: 'Primary IDE' },
      { name: 'PyCharm', tag: 'Python IDE' },
      { name: 'NetBeans', tag: 'Java IDE' },
      { name: 'Android Studio', tag: 'Flutter Environment' },
      { name: 'MS Word', tag: 'Docs' },
      { name: 'MS Excel', tag: 'Spreadsheets' },
      { name: 'PowerPoint', tag: 'Presentations' }
    ]
  },
  {
    id: 'softskills',
    title: 'Professional Soft Skills',
    icon: Users,
    color: 'cyan',
    skills: [
      { name: 'Communication', tag: 'Presentation & Paper' },
      { name: 'Willingness to Learn', tag: 'Continuous Growth' },
      { name: 'Time Management', tag: 'Task Prioritization' },
      { name: 'Adaptability', tag: 'Fast Learner' },
      { name: 'Teamwork', tag: 'NSS & Group Work' },
      { name: 'Leadership', tag: 'Coding & NSS Events' }
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
