import './Achievements.css'

const achievements = [
  {
    icon: '🏆',
    title: '2300+ Problems on CodeChef',
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
    title: '80+ Day Coding Streak',
    desc: 'Maintained an 80+ day continuous coding streak on CodeChef, earning the Gold Streak Badge.',
    badge: 'Gold Badge',
  },
  {
    icon: '🧩',
    title: '120+ Problems on LeetCode',
    desc: 'Actively solving DSA problems on LeetCode to sharpen algorithmic thinking and interview prep.',
    badge: 'LeetCode',
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
