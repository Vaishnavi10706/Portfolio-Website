import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Designed &amp; built by <span>Vaishnavi</span> · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
