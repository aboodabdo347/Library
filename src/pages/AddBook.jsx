import React, { useState, useEffect } from 'react'
import Client from '../services/api'
import {
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  Snackbar,
  Alert,
  Card,
  CardContent,
  Grid,
  Typography,
  Box
} from '@mui/material'
import BookIcon from '@mui/icons-material/Book'

const AddBook = ({ user }) => {
  const [book, setBook] = useState({
    title: '',
    image: '',
    isbn: '',
    authors: [],
    description: '',
    pubYear: ''
  })
  const [allAuthors, setAllAuthors] = useState([])
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await Client.get('/users/authors')
        setAllAuthors(response.data)
      } catch (error) {
        console.error('Error fetching authors:', error)
      }
    }

    fetchAuthors()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setBook({ ...book, [name]: value })
  }

  const handleAuthorChange = (event) => {
    const { value } = event.target
    setBook({
      ...book,
      authors: typeof value === 'string' ? value.split(',') : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const authorsToUpdate =
      user && user.role === 'author'
        ? [...book.authors, user._id]
        : book.authors

    const bookData = { ...book, authors: authorsToUpdate }

    try {
      const response = await Client.post('/books/add', bookData)
      setSnackbarMessage('Book added successfully!')
      setSnackbarOpen(true)
    } catch (error) {
      console.error('Error adding book:', error)
      setSnackbarMessage('Error adding book.')
      setSnackbarOpen(true)
    }
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8} lg={6}>
        <Card raised sx={{ my: 4 }}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              <BookIcon /> Add New Book
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Title"
                name="title"
                value={book.title}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                InputProps={{
                  startAdornment: <BookIcon />
                }}
              />
              <TextField
                label="Image URL"
                name="image"
                value={book.image}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="ISBN"
                name="isbn"
                value={book.isbn}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Authors</InputLabel>
                <Select
                  multiple
                  name="authors"
                  value={book.authors}
                  onChange={handleAuthorChange}
                  renderValue={(selected) =>
                    selected
                      .map(
                        (id) => allAuthors.find((a) => a._id === id)?.name || ''
                      )
                      .join(', ')
                  }
                >
                  {allAuthors
                    .filter(
                      (author) =>
                        !user ||
                        user.role !== 'author' ||
                        author._id !== user._id
                    )
                    .map((author) => (
                      <MenuItem key={author._id} value={author._id}>
                        {author.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <TextField
                label="Description"
                name="description"
                value={book.description}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Publication Year"
                name="pubYear"
                value={book.pubYear}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <Box textAlign="right" mt={2}>
                <Button type="submit" variant="contained" color="primary">
                  Add Book
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Grid>
  )
}

export default AddBook
