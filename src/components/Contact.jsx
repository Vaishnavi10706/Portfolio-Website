import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const { name, email, message } = form
    window.location.href = `mailto:vaishnavii10706@gmail.com?subject=Portfolio Contact from ${name}&body=${message}%0A%0AFrom: ${email}`
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let's connect!</h3>
            <p>
              I'm always open to learning opportunities, collaborations, or just a
              friendly chat about tech. Feel free to reach out!
            </p>
            <div className="contact-links">
              <a className="contact-link-item" href="mailto:vaishnavii10706@gmail.com">
                <span className="contact-link-icon">📧</span>
                vaishnavii10706@gmail.com
              </a>
              <a
                className="contact-link-item"
                href="https://github.com/Vaishnavi10706"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon">🐙</span>
                github.com/Vaishnavi10706
              </a>
              <a
                className="contact-link-item"
                href="https://linkedin.com/in/vaishnavi-b1280b359"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon">💼</span>
                linkedin.com/in/vaishnavi-b1280b359
              </a>
              <a
                className="contact-link-item"
                href="https://leetcode.com/u/eiSoooTxAk/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon">🧩</span>
                LeetCode Profile
              </a>
              <a
                className="contact-link-item"
                href="https://www.codechef.com/users/vaishnavip25"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon">👨‍🍳</span>
                CodeChef Profile
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="What's on your mind?"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="form-submit">Send Message →</button>
          </form>
        </div>
      </div>
    </section>
  )
}
