import BookCard from '../components/BookCard'
import { books } from '../data/siteData'

export default function Books() {
  return (
    <>
      <div className="page-header">
        <div className="page-header__bg" />
        <div className="page-header__content">
          <p className="page-header__label">Bibliography</p>
          <h1 className="page-header__title">Books</h1>
          <p className="page-header__subtitle">
            "Exciting, suspenseful, horrifying, and written at a flurry-of-punches pace." — Stephen King
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {books.map(book => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>
    </>
  )
}
