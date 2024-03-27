import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Client from '../services/api'
import { useParams } from 'react-router-dom'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Select,
  MenuItem,
  Grid,
  Container
} from '@mui/material'

const CollectionDetails = ({user}) => {
  const [books, setBooks] = useState([])
  const  collectionId  = '6603d9337ecc6995130188d6' // id for collection

  useEffect(() => {
    fetchCollectionBooks()
  }, [collectionId])

  const fetchCollectionBooks = async () => {
    try {
      const collectionResponse = await Client.get(
        `/collections/${collectionId}`
      )
      console.log(collectionResponse.data)
      const bookIds = collectionResponse.data[0].books
      const bookResponses = await Promise.all(
        bookIds.map((bookId) => Client.get(`/books/${bookId}`))
      )
      const bookDetails = bookResponses.map((response) => response.data)
      setBooks(bookDetails)
    } catch (error) {
      console.log(error)
    }
  }

  const removeBookFromCollection = async (bookId) => {
    try {
      await Client.delete(`/collections/${collectionId}/books/${bookId}`)
      fetchCollectionBooks()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item key={book._id} xs={12} sm={6} md={4}>
            <Link
              to={`/book/${book.isbn}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={book.image || '/default-book-image.png'}
                  alt={book.title || 'No title available'}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.title || 'No title available'}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => removeBookFromCollection(book._id)}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CollectionDetails
