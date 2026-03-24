import { Mail } from 'lucide-react'
import useFadeIn from '../hooks/useFadeIn'

function FadeSection({ children }) {
  const [ref, visible] = useFadeIn()
  return (
    <div ref={ref} className={`fade-in ${visible ? 'fade-in--visible' : ''}`}>
      {children}
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <div className="page-header">
        <div className="page-header__bg" />
        <div className="page-header__content">
          <p className="page-header__label">Get in Touch</p>
          <h1 className="page-header__title">Contact</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeSection>
            <div className="contact-content">
              <p>
                For press inquiries, event bookings, rights and permissions, or general correspondence, please reach out using the link below.
              </p>
              <p>
                Keith Rosson is published by Del Rey, an imprint of Penguin Random House, and by Meerkat Press. For rights inquiries, please contact his publisher directly.
              </p>
              <div className="divider" />
              <div style={{ marginTop: 'var(--space-xl)' }}>
                <a
                  href="mailto:contact@keithrosson.com"
                  className="contact-link"
                >
                  <Mail size={16} />
                  Email Keith
                </a>
              </div>

              <div style={{ marginTop: 'var(--space-2xl)' }}>
                <h4 style={{ marginBottom: 'var(--space-md)' }}>Publishers</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  <strong>Del Rey / Penguin Random House</strong><br />
                  Coffin Moon, The Devil by Name, Fever House
                </p>
                <p style={{ fontSize: '0.95rem' }}>
                  <strong>Meerkat Press</strong><br />
                  Folk Songs for Trauma Surgeons, Road Seven, Smoke City, The Mercy of the Tide
                </p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>
    </>
  )
}
