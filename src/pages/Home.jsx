import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { books } from '../data/siteData'
import useFadeIn from '../hooks/useFadeIn'

function FadeSection({ children, className = '' }) {
  const [ref, visible] = useFadeIn()
  return (
    <div ref={ref} className={`fade-in ${visible ? 'fade-in--visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

export default function Home() {
  const featuredBooks = books.slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__content">
          <p className="hero__tagline">Novelist / Illustrator / Portland, Oregon</p>
          <h1 className="hero__title">Keith Rosson</h1>
          <p className="hero__quote">
            "One of the most unnerving and commanding voices in modern horror fiction."
          </p>
          <p className="hero__attribution">Joe Hill</p>
        </div>
        <div className="hero__scroll">
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* STEPHEN KING QUOTE */}
      <section className="section--charcoal">
        <FadeSection>
          <div className="quote-block">
            <p className="quote-block__text">
              "Exciting, suspenseful, horrifying, and written at a flurry-of-punches pace. Read them now and you can thank me later."
            </p>
            <p className="quote-block__author">Stephen King</p>
          </div>
        </FadeSection>
      </section>

      {/* FEATURED BOOKS */}
      <section className="section">
        <div className="container">
          <FadeSection>
            <div className="section-header">
              <p className="section-header__label">Latest Works</p>
              <h2 className="section-header__title">Books</h2>
            </div>
          </FadeSection>

          <FadeSection>
            <div className="featured-books">
              {featuredBooks.map(book => (
                <Link to="/books" className="featured-book" key={book.slug}>
                  <div className="featured-book__cover">
                    {book.coverUrl ? (
                      <img src={book.coverUrl} alt={book.title} loading="lazy" width="500" height="750" />
                    ) : (
                      <span>{book.title}</span>
                    )}
                  </div>
                  <h3 className="featured-book__title">{book.title}</h3>
                  <p className="featured-book__year">{book.year}</p>
                </Link>
              ))}
            </div>
          </FadeSection>

          <FadeSection>
            <div style={{ textAlign: 'center' }}>
              <Link to="/books" className="cta-btn">
                All Books <ArrowRight size={14} />
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* TV DEVELOPMENT */}
      <section className="section--dark">
        <div className="container">
          <FadeSection>
            <div className="tv-banner">
              <p className="tv-banner__label">Television Development</p>
              <h3 className="tv-banner__title">
                Fever House in Development for TV by MRC
              </h3>
              <p className="tv-banner__text">
                With acclaimed novelist and screenwriter Richard Price (The Wire, The Night Of, Clockers) attached. The Fever House duology is being developed for television by MRC, the studio behind House of Cards and Ozark.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

{/* RICHARD PRICE QUOTE */}
      <section className="section">
        <FadeSection>
          <div className="quote-block">
            <p className="quote-block__text">
              "Fever House is an extraordinary novel, a wild but seamless hybrid of hoodlum noir, government agency skullduggery, punk nostalgia, and the apocalypse foretold. Keith Rosson is a master."
            </p>
            <p className="quote-block__author">Richard Price</p>
          </div>
        </FadeSection>
      </section>

      {/* ABOUT TEASER */}
      <section className="section--charcoal">
        <div className="container">
          <FadeSection>
            <div className="section-header">
              <p className="section-header__label">About the Author</p>
              <h2 className="section-header__title">Portland Noir</h2>
            </div>
            <div className="about-teaser">
              <div className="about-teaser__photo">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6352f0abcf50074a21755cca/608e995e-13d6-438b-817f-5c491466e9bf/AUTHORPHOTO3A.jpg?format=500w"
                  alt="Keith Rosson"
                  loading="lazy"
                  width="400"
                  height="533"
                />
              </div>
              <div className="about-teaser__text">
                <p>
                  Keith Rosson is the author of the novels Coffin Moon, The Devil by Name, Fever House, Smoke City, Road Seven, and The Mercy of the Tide, as well as the Shirley Jackson Award-winning story collection Folk Songs for Trauma Surgeons.
                </p>
                <p>
                  A legally blind illustrator and graphic designer whose clients include Green Day, Against Me!, and Warner Bros., Rosson lives in Portland, Oregon. His fiction has been covered by NPR, the Wall Street Journal, Esquire, the San Francisco Chronicle, and the LA Times.
                </p>
                <Link to="/about" className="cta-btn">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* AWARDS */}
      <section className="section">
        <div className="container">
          <FadeSection>
            <div className="section-header">
              <p className="section-header__label">Recognition</p>
              <h2 className="section-header__title">Awards & Acclaim</h2>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-lg)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {[
                { award: 'Shirley Jackson Award', detail: 'Best Collection', work: 'Folk Songs for Trauma Surgeons' },
                { award: 'Wall Street Journal', detail: 'Best Book of the Year', work: 'Fever House' },
                { award: 'Esquire', detail: 'Best Horror of 2024', work: 'The Devil by Name' },
                { award: "Powell's Books", detail: 'Best Fiction of 2018', work: 'Smoke City' },
                { award: 'IPPY Award', detail: 'Silver Medalist 2019', work: 'Smoke City' },
                { award: 'Benjamin Franklin Award', detail: 'Silver Winner 2019', work: 'Smoke City' },
              ].map((item) => (
                <div key={item.award} style={{
                  padding: 'var(--space-lg)',
                  borderLeft: '2px solid var(--blood)',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-condensed)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--amber)',
                    marginBottom: 'var(--space-xs)'
                  }}>{item.award}</p>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--cream)',
                    marginBottom: 'var(--space-xs)',
                    lineHeight: 1.3,
                  }}>{item.detail}</p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontStyle: 'italic',
                    color: 'var(--smoke)',
                    marginBottom: 0,
                  }}>{item.work}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>
    </>
  )
}
