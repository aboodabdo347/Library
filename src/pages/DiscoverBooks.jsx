import { useEffect, useState, useRef } from "react"
import { useNavigate, Link } from "react-router-dom"
import Client from "../services/api"
const DiscoverBooks = (props) => {
  const [search, setSearch] = useState([])
  const [books, setBooks] = useState([])
  const searchTerm = useRef(null)
  const navigate = useNavigate()

  const getBooks = async () => {
    let allBooks = await Client.get("/books")
    // console.log(allBooks.data)
    setBooks(allBooks.data)
  }

  // const viewBook = (isbn) => {
  //     // console.log(isbn)
  //     navigate(`/book/${isbn}`);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()

    //search google api for the term
    let term = searchTerm.current.value
    if (term) {
      let searchResults = await Client.post(`/books/search`, { term: term })
      setBooks(searchResults.data)
    } else {
      //show error message empty search
      console.log("no value buddy")
    }
    // console.log(searchResults.data);
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div className="container text-center">
      <h3>Search Books</h3>
      <div className="row">
        <form
          onSubmit={handleSubmit}
          className="d-flex my-5 justify-content-center"
        >
          <div className="col-4">
            <input type="text" ref={searchTerm} className="form-control" />
          </div>
          <div className="col-2">
            <button className="btn btn-outline-success ms-3">Search</button>
          </div>
        </form>
      </div>
      <div className="d-flex flex-wrap align-items-stretch">
        {books.length > 0
          ? books.map((book) => {
              let bookIsbn
              if (props?.user?.id) {
                bookIsbn = "/book/" + props?.user?.id + "/" + book.isbn
              } else {
                bookIsbn = "/book/user/" + book.isbn
              }
              return (
                <div key={book.isbn}>
                  <Link
                    className="link-of-book"
                    to={bookIsbn}
                    state={{ book: book }}
                  >
                    <div className="card book-search-default d-flex align-items-center m-2">
                      <img
                        src={book.image}
                        className="card-img-top discover-book-img"
                        alt={book.title}
                      />
                      <div className="card-body overflow-y-auto">
                        <p className="card-text ">{book.title}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default DiscoverBooks
