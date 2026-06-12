import './Achievements.css'

const achievements = [
  {
    icon: '🏆',
    title: '2500+ Problems on CodeChef',
    desc: 'Consistently solved problems across difficulty levels, building strong problem-solving fundamentals.',
    badge: 'CodeChef',
  },
  {
    icon: '💎',
    title: 'Diamond Badge — Problem Solver',
    desc: 'Earned the CodeChef Problem Solver Diamond Badge by solving 1000+ problems on the platform.',
    badge: '1000+ Problems',
  },
  {
    icon: '🔥',
    title: '100+ Day Coding Streak',
    desc: 'Maintained an 80+ day continuous coding streak on CodeChef, earning the Gold Streak Badge.',
    badge: 'Diamond Badge',
  },
  {
    icon: '🧩',
    title: '120+ Problems on LeetCode',
    desc: 'Actively solving DSA problems on LeetCode to sharpen algorithmic thinking and interview prep.',
    badge: 'LeetCode',
  },
  {
  icon: '🚀',
  title: 'Selected for GSSoC 2026',
  desc: 'Selected as a contributor for GirlScript Summer of Code 2026, collaborating on open-source projects and contributing to real-world software development.',
  badge: 'GSSoC 2026',
},
]

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((a) => (
            <div className="achievement-card" key={a.title}>
              <span className="achievement-icon">{a.icon}</span>
              <div className="achievement-body">
                <div className="achievement-title">{a.title}</div>
                <p className="achievement-desc">{a.desc}</p>
                <span className="achievement-badge">{a.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
