import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Keith Rosson. All rights reserved.
        </p>
        <ul className="footer__links">
          <li><Link to="/books" className="footer__link">Books</Link></li>
          <li><Link to="/stories" className="footer__link">Stories</Link></li>
          <li><Link to="/press" className="footer__link">Press</Link></li>
          <li><Link to="/about" className="footer__link">About</Link></li>
          <li><Link to="/contact" className="footer__link">Contact</Link></li>
        </ul>
      </div>
    </footer>
  )
}
