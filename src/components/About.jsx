import { useEffect, useRef } from 'react'
import profileImg from '../assets/image.png'
import './About.css'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible') },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid fade-in" ref={ref}>
          <div className="about-avatar">
            <div className="avatar-ring">
              <div className="avatar-inner">
                <img src={profileImg} alt="Vaishnavi" className="avatar-photo" />
              </div>
            </div>
          </div>
          <div className="about-text">
            <h2>Hey, I'm <span>Vaishnavi</span> 👋</h2>
            <p>
              I'm a first-year B.Tech student in Computer Science (AI &amp; ML) at
              <strong> Polaris School of Technology</strong>. I'm someone who genuinely
              loves to learn and is always trying to pick up something new.
            </p>
            <p>
              Whether it's building web apps, exploring data with Python, or grinding
              through DSA problems — I enjoy the process of figuring things out and
              getting better every day.
            </p>
            <p>
              Right now I'm focused on strengthening my foundations in web development
              and data science while working on real projects that challenge me.
            </p>
            <div className="about-tags">
              <span className="about-tag">🎓 Polaris School of Technology</span>
              <span className="about-tag">🤖 AI &amp; ML</span>
              <span className="about-tag">💡 Problem Solver</span>
              <span className="about-tag">📊 Data Enthusiast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
