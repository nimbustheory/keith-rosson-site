import useFadeIn from '../hooks/useFadeIn'

function FadeSection({ children }) {
  const [ref, visible] = useFadeIn()
  return (
    <div ref={ref} className={`fade-in ${visible ? 'fade-in--visible' : ''}`}>
      {children}
    </div>
  )
}

export default function About() {
  return (
    <>
      <div className="page-header">
        <div className="page-header__bg" />
        <div className="page-header__content">
          <p className="page-header__label">Biography</p>
          <h1 className="page-header__title">About</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeSection>
            <div className="about-grid">
              <div className="about-grid__image">
                <img
                  src="https://images2.penguinrandomhouse.com/author/2278613"
                  alt="Keith Rosson"
                  loading="lazy"
                  width="400"
                  height="533"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div className="about-grid__text">
                <h2 style={{ marginBottom: 'var(--space-lg)' }}>Keith Rosson</h2>
                <div className="divider" />
                <p>
                  Keith Rosson is the author of the novels Coffin Moon, The Devil by Name, Fever House, Smoke City, Road Seven, and The Mercy of the Tide, as well as the Shirley Jackson Award-winning story collection Folk Songs for Trauma Surgeons.
                </p>
                <p>
                  His short fiction has appeared in Southwest Review, Nightmare, Cream City Review, PANK, Redivider, December, and more.
                </p>
                <p>
                  Rosson is also a legally blind illustrator and graphic designer whose clients have included Green Day, Against Me!, and Warner Bros. The intersection of his visual art and his literary work is one of the things that makes his creative identity singular and deeply Portland.
                </p>
                <p>
                  His novels have been praised by Stephen King, Richard Price, Joe Hill, Robert R. McCammon, Patton Oswalt, Kelly Link, Paul Tremblay, and many others. Fever House was named a Wall Street Journal Best Book of the Year, and The Devil by Name was selected as Esquire's Best Horror of 2024 and Paste Magazine's Best Horror of 2024.
                </p>
                <p>
                  The Fever House duology is currently in development for television by MRC, with acclaimed novelist and screenwriter Richard Price (The Wire, The Night Of, Clockers) attached.
                </p>
                <p>
                  He lives in Portland, Oregon.
                </p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ILLUSTRATION SECTION */}
      <section className="section--charcoal">
        <div className="container">
          <FadeSection>
            <div className="section-header">
              <p className="section-header__label">Visual Art</p>
              <h2 className="section-header__title">Illustration & Design</h2>
            </div>
            <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto var(--space-md)', fontSize: '1.15rem' }}>
              Beyond his fiction, Keith Rosson is a legally blind illustrator and graphic designer whose work spans punk rock poster art, album packaging, and commercial design for clients including Green Day, Against Me!, and Warner Bros.
            </p>
            <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', fontSize: '1.15rem' }}>
              The visual and literary duality of his work is uniquely Portland — rooted in the city's DIY and punk culture, the same gritty, rain-soaked energy that powers his fiction.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* PORTLAND SECTION */}
      <section className="section">
        <div className="container container--narrow">
          <FadeSection>
            <div className="section-header">
              <p className="section-header__label">Setting</p>
              <h2 className="section-header__title">Portland</h2>
            </div>
            <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto var(--space-md)', fontSize: '1.15rem' }}>
              Rosson's fiction doesn't just take place in Portland — it <em>is</em> Portland. The gritty, punk-adjacent, rain-soaked noir of his work is inseparable from the city. Fever House begins in a Portland apartment. The Devil by Name's apocalypse radiates outward from Portland. Coffin Moon is set in the sleet and neon of 1975 Portland.
            </p>
            <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', fontSize: '1.15rem' }}>
              He's writing the mythology of Portland the way Raymond Chandler wrote LA or Dennis Lehane wrote Boston.
            </p>
          </FadeSection>
        </div>
      </section>

    </>
  )
}
