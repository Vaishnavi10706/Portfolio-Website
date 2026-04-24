import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Skills', 'Projects', 'Journey', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <span className="nav-logo">&lt;Vaishnavi /&gt;</span>

      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={e => handleNav(e, link)}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
