import { useEffect, useState, useRef } from "react";
import Client from "../services/api"
const DiscoverBooks = () => {

    const [search, setSearch] = useState([]);
    const [books, setBooks] = useState([]);
    const searchTerm = useRef(null);

    const getBooks = async () => {
        let allBooks = await Client.get("/books")
        // console.log(allBooks.data)
        setBooks(allBooks.data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        //search google api for the term
        let term = searchTerm.current.value

        let searchResults = await Client.post(`/books/search`, {term: term});
        // console.log(searchResults.data);
        setBooks(searchResults.data)
    }

    useEffect(() => {
        getBooks()
    }, []);

    return (
        <div className="container text-center">
            <h3>Search Books</h3>
            <div className="row">
                <form onSubmit={handleSubmit} className="d-flex my-5 justify-content-center">
                    <div className="col-4"><input type="text" ref={searchTerm} className="form-control" /></div>
                    <div className="col-2"><button className="btn btn-outline-success ms-3">Search</button></div>
                </form>
            </div>
            <div className="d-flex flex-wrap align-items-stretch">
                {
                    books.length > 0 ? 
                    books.map((book) => {
                        return (
                            <div key={book.isbn}>
                                <div className="card book-search-default d-flex align-items-center m-2">
                                    <img src={book.image} className="card-img-top discover-book-img" alt={book.title} />
                                    <div className="card-body overflow-y-auto">
                                        <p className="card-text ">{book.title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :null
                }
            </div>

        </div>
    )
}

export default DiscoverBooks