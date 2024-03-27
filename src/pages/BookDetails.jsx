import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Client from '../services/api'

const BookDetails = ({ user }) => {
  const { book_isbn } = useParams()
  const [book, setBook] = useState(null)
  const [collections, setCollections] = useState([])

  useEffect(() => {
    const fetchBookDetails = async () => {
      const bookResponse = await Client.get(`/books/${book_isbn}`)
      setBook(bookResponse.data)
      fetchCollections()
    }

    fetchBookDetails()
  }, [book_isbn])

  const fetchCollections = async () => {
    const response = await Client.get('/collections')

      const filteredCollections = response.data.filter(
        (c) => !c.books.includes(book_isbn)
      )
      setCollections(filteredCollections)
  }

  const handleAddToCollection = async (collectionId) => {
    await Client.post(`/collections/${collectionId}/books/${book_isbn}`)
  }

  if (!book) {
    return <div>Loading...</div>
  }

  const date = new Date(book.pubYear)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const published = new Intl.DateTimeFormat('en-GB', options).format(date)

  return (
    book ?
    <div className="container m-5">
      <div className="row">
        <div className="col d-flex justify-content-center book-details-img-div">
          <img
            className="book-details-img"
            src={book.image.replace('zoom=1', 'zoom=0')}
            alt={book.title}
          />
        </div>
        <div className="col">
          <h2>{book.title}</h2>
          <br />
          {book.authors.map((author, index) => (
            <h5 key={index}>{author}</h5> // Assuming author is a string; adjust if it’s an object
          ))}
          <h6>Published {published}</h6>
          <br />
          <p>{book.description}</p>
          <div className="d-flex justify-content-end">
            <select onChange={(e) => handleAddToCollection(e.target.value)}>
              <option value="">Add to Collection</option>
              {collections.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
          {user &&
            user.books &&
            user.role === 'author' &&
            user.books.includes(book_isbn) && (
              <div>
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-primary">Update</button>
              </div>
            )}
        </div>
      </div>
    </div>
    : null
  )
}

export default BookDetails
