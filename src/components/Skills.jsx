import './Skills.css'

const categories = [
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'React', icon: '⚛️' },
    ],
  },
  {
    title: 'Python & Data',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'Pandas', icon: '🐼' },
      { name: 'NumPy', icon: '🔢' },
      { name: 'Matplotlib', icon: '📈' },
      { name: 'Seaborn', icon: '📊' },
      { name: 'Streamlit', icon: '🚀' },
      { name: 'Power BI', icon: '📉' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: '🌿' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'DSA', icon: '🧩' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        {categories.map(cat => (
          <div className="skills-category" key={cat.title}>
            <p className="skills-category-title">{cat.title}</p>
            <div className="skills-grid">
              {cat.skills.map(skill => (
                <div className="skill-card" key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
