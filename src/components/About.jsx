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
              <strong> Polaris School of Technology</strong>, passionate about building
              technology that solves real-world problems.
            </p>
            <p>
              My interests span across full-stack development, data analytics, and
              problem solving. I enjoy creating web applications with React, exploring
              data using Python, and continuously improving my DSA skills through
              coding challenges.
            </p>
            <p>
              Along the way, I've worked on projects such as Retail Return Behavior
              Analysis, Collaborative Project Management System, and File System Snapshot
              Difference. I'm also an open-source enthusiast and a selected contributor
              for GSSoC 2026.
            </p>
          <div className="about-tags">
            <span className="about-tag">🎓 First-Year Student</span>
            <span className="about-tag">⚛️ React</span>
            <span className="about-tag">📊 Data Analytics</span>
            <span className="about-tag">🚀 GSSoC 2026</span>
            <span className="about-tag">🧩 DSA</span>
          </div>
        </div>        
      </div>
    </div>
  </section>
  )
}
