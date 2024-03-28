import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Client from '../services/api'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Container,
  Snackbar,
  Alert
} from '@mui/material'
import { motion } from 'framer-motion'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    transition: 'transform 0.15s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  },
  media: {
    height: 300
  },
  deleteButton: {
    marginTop: '20px',

  },
  cardContent: {
    backgroundColor: '#f5f5f5',
    height: '100%'
  }
}))

const CollectionDetails = ({ user }) => {
  const classes = useStyles()
  const [books, setBooks] = useState([])
  const [check, setCheck] = useState(null)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const { collectionId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchCollectionBooks()
  }, [collectionId, user])

  const fetchCollectionBooks = async () => {
    const response = await Client.get(`/collections/${collectionId}`)
    setCheck(response.data[0]?.user)
    if (response.data.length > 0 && response.data[0].books) {
      setBooks(response.data[0].books)
    } else {
      console.log('No books found in this collection.')
      setBooks([])
    }
  }

  const removeBookFromCollection = async (bookId, event) => {
    event.preventDefault()
    event.stopPropagation()
    await Client.delete(`/collections/${collectionId}/books/${bookId}`)
    setSnackbarMessage('Book removed from collection')
    setSnackbarOpen(true)
    fetchCollectionBooks()
  }

  const deleteCollection = async () => {
    await Client.delete(`/collections/${collectionId}`)
    setSnackbarMessage('Collection deleted successfully')
    setSnackbarOpen(true)
    navigate('/profile/'+user.id)
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbarOpen(false)
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {books.map((book) => {
          const bookIsbn =
            user && user.id
              ? `/book/${user.id}/${book.isbn}`
              : `/book/user/${book.isbn}`

          return (
            <Grid item key={book._id} xs={12} sm={6} md={4}>
              <Link
                to={bookIsbn}
                state={{ book }}
                style={{ textDecoration: 'none' }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={book.image || '/default-book-image.png'}
                      title={book.title || 'No title available'}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                        {book.title || 'No title available'}
                      </Typography>
                      {check === user?.id && (
                        <Button
                          variant="contained"
                          color="error"
                          onClick={(e) => removeBookFromCollection(book._id, e)}
                        >
                          Remove
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </Grid>
          )
        })}
      </Grid>
      {check === user?.id && (
        <Button
          variant="contained"
          color="primary"
          className={classes.deleteButton}
          onClick={deleteCollection}
        >
          Delete Collection
        </Button>
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          maxWidth: 'none',
          width: '30%',
          '& .MuiSnackbarContent-root': {
            fontSize: '1.2rem'
          }
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default CollectionDetails
