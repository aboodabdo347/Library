import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Client from '../services/api'

const CollectionDetails = () => {
  const [books, setBooks] = useState([])
  const [allBooks, setAllBooks] = useState([])
  const collectionId = '66017feb876bec5eb0125b91'
  useEffect(() => {
    fetchCollectionBooks()
    fetchAllBooks()
  }, [collectionId])

  const fetchCollectionBooks = () => {
    Client.get(`/collections/${collectionId}`)
      .then((collectionResponse) => {
        console.log(collectionResponse.data)
        const bookIds = collectionResponse.data[0].books
        return Promise.all(
          bookIds.map((bookId) => Client.get(`/books/${bookId}`))
        )
      })
      .then((bookResponses) => {
        const bookDetails = bookResponses.map((response) => response.data)
        setBooks(bookDetails)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const fetchAllBooks = () => {
    Client.get('/books')
      .then((response) => {
        setAllBooks(response.data)
      })
      .catch((error) => {
        console.log(error)
        setAllBooks([])
      })
  }

  const removeBookFromCollection = (bookId) => {
    Client.delete(`/collections/${collectionId}/books/${bookId}`)
      .then(() => {
        fetchCollectionBooks()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const addBookToCollection = (bookId) => {
    Client.post(`/collections/${collectionId}/books/${bookId}`)
      .then(() => {
        fetchCollectionBooks()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px'
      }}
    >
      {books.map((book) => (
        <div
          key={book._id}
          style={{
            width: '200px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            padding: '10px',
            position: 'relative'
          }}
        >
          <button
            onClick={() => removeBookFromCollection(book._id)}
            style={{ position: 'absolute', right: '10px', top: '10px' }}
          >
            Remove
          </button>
          <Link
            to={`/book/${book._id}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <img
              src={book.image || '/default-book-image.png'}
              alt={book.title || 'No title available'}
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <h3>{book.title || 'No title available'}</h3>
          </Link>
        </div>
      ))}
      <div>
        <select onChange={(e) => addBookToCollection(e.target.value)}>
          <option value="">Add a book to the collection</option>
          {allBooks
            .filter((book) => !books.some((b) => b._id === book._id))
            .map((book) => (
              <option key={book._id} value={book._id}>
                {book.title}
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default CollectionDetails
