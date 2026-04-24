import './Journey.css'

const items = [
  {
    date: '2025 — Present',
    title: '🎓 Started B.Tech in CS (AI & ML)',
    desc: 'Joined Polaris School of Technology. Began learning programming fundamentals, web development, and data science from scratch.',
  },
  {
    date: '2025 — Present',
    title: '🌐 Web Development Journey',
    desc: 'Learning HTML, CSS, JavaScript and React. Building projects to strengthen frontend skills and understand how the web works.',
  },
  {
    date: '2025 — Present',
    title: '🐍 Python & Data Science',
    desc: 'Exploring Python for data analysis using Pandas, NumPy, Matplotlib, Seaborn, and Streamlit. Built a Retail Return Behaviour Analysis project.',
  },
  {
    date: '2025 — Present',
    title: '🗂️ File System Snapshot Difference',
    desc: 'College project that compares file system snapshots to detect changes — additions, deletions, and modifications.',
  },
  {
    date: '2025 — Present',
    title: '🧩 DSA Practice',
    desc: 'Actively solving problems on LeetCode and CodeChef to build problem-solving skills and prepare for technical interviews.',
    links: [
      { label: 'LeetCode', url: 'https://leetcode.com/u/eiSoooTxAk/' },
      { label: 'CodeChef', url: 'https://www.codechef.com/users/vaishnavip25' },
    ],
  },
]

export default function Journey() {
  return (
    <section className="journey" id="journey">
      <div className="container">
        <h2 className="section-title">Learning Journey</h2>
        <div className="timeline">
          {items.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-title">{item.title}</div>
                <p className="timeline-desc">{item.desc}</p>
                {item.links && (
                  <div className="timeline-links">
                    {item.links.map(l => (
                      <a
                        key={l.label}
                        className="timeline-link"
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
