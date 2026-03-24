import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <div className="page-header">
        <div className="page-header__bg" />
        <div className="page-header__content">
          <p className="page-header__label">404</p>
          <h1 className="page-header__title">Page Not Found</h1>
          <p className="page-header__subtitle">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <Link to="/" className="cta-btn">
              Back Home <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
