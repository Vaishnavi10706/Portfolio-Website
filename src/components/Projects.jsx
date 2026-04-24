import './Projects.css'

const projects = [
  {
    icon: '🗂️',
    name: 'File System Snapshot Difference',
    desc: 'A tool that captures file system snapshots and compares them to detect changes — additions, deletions, and modifications — between two points in time.',
    topics: ['Python', 'File System', 'CLI'],
    link: 'https://github.com/Vaishnavi10706/File-System-Snapshot-Difference',
  },
  {
    icon: '🤝',
    name: 'Collaborative Project Management System',
    desc: 'A system designed to help teams manage projects collaboratively — track tasks, assign roles, and monitor progress efficiently.',
    topics: ['Python', 'Project Management', 'Collaboration'],
    link: 'https://github.com/Vaishnavi10706/Collaborative-Project-Management-System',
  },
  {
    icon: '📊',
    name: 'Retail Return Behaviour Analysis',
    desc: 'Data analysis project exploring customer return patterns in retail using Python. Visualised trends with Matplotlib and Seaborn to derive actionable insights.',
    topics: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
    link: 'https://github.com/Vaishnavi10706',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.name}>
              <div className="project-header">
                <span className="project-icon">{project.icon}</span>
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  ↗
                </a>
              </div>
              <div className="project-name">{project.name}</div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-topics">
                {project.topics.map(t => (
                  <span className="project-topic" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="projects-note">
          See all projects on{' '}
          <a href="https://github.com/Vaishnavi10706" target="_blank" rel="noreferrer">
            GitHub →
          </a>
        </p>
      </div>
    </section>
  )
}
