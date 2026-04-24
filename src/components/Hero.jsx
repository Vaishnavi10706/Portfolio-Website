import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-badge">✨ Open to learning &amp; collaborating</div>
        <h1 className="hero-name">Vaishnavi</h1>
        <p className="hero-title">First Year B.Tech · Computer Science (AI &amp; ML)</p>
        <p className="hero-tagline">
          A curious learner who loves <span>building things</span>,
          exploring <span>data</span>, and solving problems one line of code at a time.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            View Projects
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('contact')}>
            Get In Touch
          </button>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        scroll
      </div>
    </section>
  )
}
