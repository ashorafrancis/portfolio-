import React from 'react';
import { Trophy, FileText, Code2, HeartHandshake, Star, CheckCircle, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Achievements.css';



const achievementsList = [
  {
    id: 1,
    title: 'Research Paper Presentation at International Conference',
    subtitle: 'International Conference on Inclusive Imagination (Jan 2026)',
    desc: 'Authored and presented a peer-evaluated technical research paper titled "Artificial Intelligence in Autonomous Vehicles: A Case Study", examining computer vision, sensory neural models, and decision pipelines in self-driving automation.',
    category: 'RESEARCH & ACADEMIC',
    icon: FileText,
    featured: true
  },
  {
    id: 2,
    title: 'Inter-College Competitive Coding Contests',
    subtitle: '3 Inter-College Tech Hackathons & Coding Events',
    desc: 'Actively competed in 3 collegiate coding tournaments, solving algorithmic data structure problems and testing analytical thinking under strict time limitations.',
    category: 'COMPETITIVE PROGRAMMING',
    icon: Code2,
    featured: false
  },
  {
    id: 3,
    title: 'NSS Volunteer & Library Digitalization Drive',
    subtitle: 'National Service Scheme (NSS) Technical Cell',
    desc: 'Contributed to civic service initiatives, including leading technology tasks such as digitalizing the CSA college library catalog and automating records.',
    category: 'COMMUNITY & TECH LEADERSHIP',
    icon: HeartHandshake,
    featured: false
  },
  {
    id: 4,
    title: '"Each One Teach One" Educational Initiative',
    subtitle: 'School of Professional Development (SPD)',
    desc: 'Taught and mentored school students in foundational computer literacy, basic programming concepts, and mathematics as part of the SPD community teaching drive.',
    category: 'COMMUNITY MENTORSHIP',
    icon: Star,
    featured: false
  },
  {
    id: 5,
    title: 'Generative AI Specialization (IBM SkillsBuild)',
    subtitle: 'IBM Technical Certification Program',
    desc: 'Completed rigorous training on prompt engineering, foundational model fine-tuning concepts, and AI-assisted development pipelines for modern software engineers.',
    category: 'ADVANCED TECH CERTIFICATION',
    icon: Trophy,
    featured: false
  },
  {
    id: 6,
    title: '"AI in the Creative Era" Program',
    subtitle: 'Specialized Artificial Intelligence Symposium',
    desc: 'Participated in technical curriculum evaluating modern generative models, deep learning architectures, and ethical AI applications in contemporary computing.',
    category: 'AI SYMPOSIUM & WORKSHOP',
    icon: CheckCircle,
    featured: false
  }
];

export default function Achievements() {
  const headerRef = useScrollReveal();
  const gridRef   = useScrollReveal({ threshold: 0.06 });

  return (
    <section id="achievements" className="section-padding achievements-section">
      <div className="container">
        
        {/* Section Header */}
        <div ref={headerRef} className="section-header reveal-up">
          <div className="section-badge">
            <Trophy size={14} className="text-red" />
            <span>/// 06. HONORS & EXTRACURRICULARS</span>
          </div>
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Activities</span>
          </h2>
          <p className="section-subtitle">
            A proven track record of international conference research presentations, competitive programming, civic tech leadership, and community education initiatives.
          </p>
        </div>

        {/* Grid Layout */}
        <div ref={gridRef} className="achievements-grid stagger-children">
          {achievementsList.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className={`achievement-card ${item.featured ? 'achievement-card-featured' : ''}`}
              >
                {/* Tech Corner Notches */}
                <div className="ach-notch-tl"></div>
                <div className="ach-notch-br"></div>

                {item.featured && (
                  <div className="ach-featured-tag">
                    <Award size={13} />
                    <span>FEATURED CONFERENCE RESEARCH</span>
                  </div>
                )}

                <div className="achievement-header">
                  <div className="achievement-icon-wrap">
                    <IconComp size={20} />
                  </div>
                  <span className="achievement-category">{item.category}</span>
                </div>

                <h3 className="achievement-title">{item.title}</h3>
                <div className="achievement-subtitle">{item.subtitle}</div>
                <p className="achievement-desc">{item.desc}</p>

                <div className="ach-card-glow-bar"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
