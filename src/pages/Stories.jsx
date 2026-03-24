import { ExternalLink } from 'lucide-react'
import { stories, audioStories } from '../data/siteData'
import useFadeIn from '../hooks/useFadeIn'

function FadeSection({ children }) {
  const [ref, visible] = useFadeIn()
  return (
    <div ref={ref} className={`fade-in ${visible ? 'fade-in--visible' : ''}`}>
      {children}
    </div>
  )
}

export default function Stories() {
  return (
    <>
      <div className="page-header">
        <div className="page-header__bg" />
        <div className="page-header__content">
          <p className="page-header__label">Short Fiction</p>
          <h1 className="page-header__title">Stories</h1>
          <p className="page-header__subtitle">
            Published in Southwest Review, Nightmare, Cream City Review, PANK, Redivider, December, and more.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FadeSection>
            <div className="stories-list">
              {stories.map((story, i) => (
                <div className="story-item" key={i}>
                  <span className="story-item__title">
                    {story.url ? (
                      <a href={story.url} target="_blank" rel="noopener noreferrer">
                        {story.title} <ExternalLink size={12} style={{ opacity: 0.5, verticalAlign: 'middle' }} />
                      </a>
                    ) : (
                      story.title
                    )}
                  </span>
                  <span className="story-item__venue">{story.venue}</span>
                  {story.note && <span className="story-item__note">{story.note}</span>}
                  <span className="story-item__date">{story.date}</span>
                </div>
              ))}
            </div>
          </FadeSection>

          <FadeSection>
            <div style={{ marginTop: 'var(--space-2xl)' }}>
              <h3 style={{ marginBottom: 'var(--space-lg)' }}>Audio</h3>
              <div className="stories-list">
                {audioStories.map((story, i) => (
                  <div className="story-item" key={i}>
                    <span className="story-item__title">
                      {story.url ? (
                        <a href={story.url} target="_blank" rel="noopener noreferrer">
                          {story.title} <ExternalLink size={12} style={{ opacity: 0.5, verticalAlign: 'middle' }} />
                        </a>
                      ) : (
                        story.title
                      )}
                    </span>
                    <span className="story-item__venue">{story.venue}</span>
                    <span className="story-item__date">{story.date}</span>
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
