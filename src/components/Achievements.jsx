import React from 'react';
import { Trophy, FileText, Code2, HeartHandshake, Star, CheckCircle } from 'lucide-react';
import './Achievements.css';

const achievementsList = [
  {
    id: 1,
    title: 'Paper Presentation at International Conference',
    subtitle: 'International Conference on Inclusive Imagination (Jan 2026)',
    desc: 'Authored and presented a technical research paper titled "Artificial Intelligence in Autonomous Vehicles: A Case Study", exploring AI computer vision and decision systems in self-driving automation.',
    category: 'Research & Academic',
    icon: FileText,
    highlight: true
  },
  {
    id: 2,
    title: 'Inter-College Coding Competitions',
    subtitle: '3 Inter-College Tech Events',
    desc: 'Actively participated in 3 inter-college competitive programming contests, solving algorithmic challenges and testing problem-solving capabilities under time constraints.',
    category: 'Competitions',
    icon: Code2,
    highlight: false
  },
  {
    id: 3,
    title: 'NSS Volunteer & Library Digitalization',
    subtitle: 'National Service Scheme (NSS)',
    desc: 'Contributed to community service programs, including key technology initiatives such as digitalizing the CSA college library catalog.',
    category: 'Community Service',
    icon: HeartHandshake,
    highlight: false
  },
  {
    id: 4,
    title: '"Each One Teach One" Educational Initiative',
    subtitle: 'School of Professional Development',
    desc: 'Taught and mentored school students in foundational computer literacy and mathematics as part of the SPD community teaching drive.',
    category: 'Mentorship',
    icon: Star,
    highlight: false
  },
  {
    id: 5,
    title: 'Generative AI Specialization (IBM SkillsBuild)',
    subtitle: 'IBM SkillsBuild',
    desc: 'Completed training on the practical application of Generative AI tools and workflow enhancement for modern software engineering.',
    category: 'Tech Certification',
    icon: Trophy,
    highlight: false
  },
  {
    id: 6,
    title: '"AI in the Creative Era" Program',
    subtitle: 'Specialized Certificate Training',
    desc: 'Participated in certificate program exploring generative models, AI creation tools, and ethical artificial intelligence applications.',
    category: 'AI Training',
    icon: CheckCircle,
    highlight: false
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding achievements-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Trophy size={15} />
            <span>Honors & Extracurriculars</span>
          </div>
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Activities</span>
          </h2>
          <p className="section-subtitle">
            A track record of academic presentations, competitive programming, community service, and extracurricular achievements.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="achievements-grid">
          {achievementsList.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.id} className={`glass-card achievement-card ${item.highlight ? 'featured-achievement' : ''}`}>
                <div className="achievement-header">
                  <div className="achievement-icon-wrap">
                    <IconComp size={20} />
                  </div>
                  <span className="achievement-category">{item.category}</span>
                </div>

                <h3 className="achievement-title">{item.title}</h3>
                <div className="achievement-subtitle">{item.subtitle}</div>
                <p className="achievement-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
