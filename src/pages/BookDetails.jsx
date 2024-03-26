import React, { useState, useEffect } from 'react'
import Client from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'

const BookDetails = () => {
  let navigate = useNavigate()
  const [book, setBook] = useState(null)
  const [showEditForm, setShowEditForm] = useState(false)
  const [formData, setFormData] = useState({})
  let bookId = useParams()
  bookId = bookId.id
  useEffect(() => {
    Client.get(`/books/${bookId}`).then((response) => {
      setBook(response.data)
      setFormData(response.data)
    })
  }, [bookId])

  const handleDelete = () => {
    Client.delete(`/books/${bookId}`).then(() => {
      alert('Book deleted successfully')
      navigate('/')
    })
  }
  const handleUpdate = (event) => {
    event.preventDefault()
    Client.put(`/books/${bookId}`, formData).then((response) => {
      setBook(response.data)
      navigate(`/book/${bookId}`)
      setShowEditForm(false)
    })
  }

  if (!book) return <div>Loading...</div>

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <img src={book.image} alt={book.title} />
      <p>{book.description}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => setShowEditForm(true)}>Update</button>

      {showEditForm && (
        <div className="edit-form">
          <form onSubmit={handleUpdate}>
            <label>
              Title:{' '}
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </label>
            <label>
              Description:{' '}
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </label>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default BookDetails
