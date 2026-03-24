import Accordion from './Accordion'
import useFadeIn from '../hooks/useFadeIn'

export default function BookCard({ book }) {
  const [ref, visible] = useFadeIn()

  return (
    <div
      ref={ref}
      className={`book-card fade-in ${visible ? 'fade-in--visible' : ''}`}
      id={book.slug}
    >
      <div className="book-card__cover-wrap">
        <div className="book-card__cover">
          {book.coverUrl ? (
            <img src={book.coverUrl} alt={`${book.title} cover`} loading="lazy" width="500" height="750" />
          ) : (
            <span>{book.title}</span>
          )}
        </div>
      </div>

      <div className="book-card__info">
        <div className="book-card__publisher">{book.publisher}</div>
        <h2 className="book-card__title">{book.title}</h2>

        {book.upcoming && (
          <div className="book-card__upcoming">Coming September 2026</div>
        )}

        {book.awards && book.awards.map((award, i) => (
          <div className="book-card__award" key={i}>
            {award}
          </div>
        ))}

        <div className="book-card__sections">
          <Accordion title="Synopsis" defaultOpen={false}>
            <div className="book-card__synopsis">
              {book.synopsis.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Accordion>

          {book.reviews.length > 0 && (
            <Accordion title="Reviews">
              {book.reviews.map((review, i) => (
                <div className="review" key={i}>
                  <p className="review__text">{review.text}</p>
                  <p className="review__author">{review.author}</p>
                </div>
              ))}
            </Accordion>
          )}

          <Accordion title={book.upcoming ? 'Pre-Order' : 'Order'}>
            <div className="order-links">
              {book.orderLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="order-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
