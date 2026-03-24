import { ExternalLink } from 'lucide-react'
import { pressItems, miscItems } from '../data/siteData'
import useFadeIn from '../hooks/useFadeIn'

function FadeSection({ children }) {
  const [ref, visible] = useFadeIn()
  return (
    <div ref={ref} className={`fade-in ${visible ? 'fade-in--visible' : ''}`}>
      {children}
    </div>
  )
}

export default function Press() {
  return (
    <>
      <div className="page-header">
        <div className="page-header__bg" />
        <div className="page-header__content">
          <p className="page-header__label">Media</p>
          <h1 className="page-header__title">Press & Interviews</h1>
          <p className="page-header__subtitle">
            Coverage in the Wall Street Journal, NPR, Esquire, LA Times, San Francisco Chronicle, HuffPost, and more.
          </p>
        </div>
      </div>

      {/* FEATURED ENDORSEMENTS */}
      <section className="section--charcoal">
        <div className="container">
          <FadeSection>
            <div className="section-header">
              <p className="section-header__label">What They're Saying</p>
              <h2 className="section-header__title">Critical Acclaim</h2>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-xl)',
              marginBottom: 'var(--space-2xl)',
            }}>
              {[
                {
                  text: "Exciting, suspenseful, horrifying, and written at a flurry-of-punches pace. Read them now and you can thank me later.",
                  author: "Stephen King"
                },
                {
                  text: "Fever House is an extraordinary novel, a wild but seamless hybrid of hoodlum noir, government agency skullduggery, punk nostalgia, and the apocalypse foretold. Keith Rosson is a master.",
                  author: "Richard Price, screenwriter of The Wire"
                },
                {
                  text: "One of the most unnerving and commanding voices in modern horror fiction.",
                  author: "Joe Hill"
                },
                {
                  text: "Fever House is awesome... Great writing... also scary as Hell! A really excellent book that should not be missed.",
                  author: "Robert R. McCammon"
                },
                {
                  text: "Keith Rosson is slowly, surely, unstoppably carving his claim on modern horror. Do NOT miss this one.",
                  author: "Patton Oswalt"
                },
                {
                  text: "An absolute skull-cracker of a novel.",
                  author: "Chuck Wendig"
                },
              ].map((q, i) => (
                <div className="review" key={i}>
                  <p className="review__text">{q.text}</p>
                  <p className="review__author">{q.author}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* PRESS GRID */}
      <section className="section">
        <div className="container">
          <FadeSection>
            <div className="section-header">
              <p className="section-header__label">Interviews, Essays & Reviews</p>
              <h2 className="section-header__title">In the Press</h2>
            </div>
          </FadeSection>

          <FadeSection>
            <div className="press-grid">
              {pressItems.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  className="press-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="press-card__outlet">{item.outlet}</p>
                  <h3 className="press-card__title">{item.title}</h3>
                  <p className="press-card__date">
                    {item.date}
                    {' / '}
                    <span style={{ textTransform: 'capitalize' }}>{item.type}</span>
                  </p>
                </a>
              ))}
            </div>
          </FadeSection>

          {/* MISC */}
          <FadeSection>
            <div style={{ marginTop: 'var(--space-3xl)' }}>
              <h3 style={{ marginBottom: 'var(--space-lg)' }}>Miscellaneous</h3>
              <div className="stories-list">
                {miscItems.map((item, i) => (
                  <div className="misc-item" key={i}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.title} <ExternalLink size={12} style={{ opacity: 0.4, verticalAlign: 'middle' }} />
                    </a>
                    <span style={{
                      fontFamily: 'var(--font-condensed)',
                      fontSize: '0.8rem',
                      color: 'var(--ash)',
                      marginLeft: 'var(--space-md)',
                      letterSpacing: '0.1em',
                    }}>{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeSection>
        </div>
      </section>
    </>
  )
}
