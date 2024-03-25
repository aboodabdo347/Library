import axios from "axios"
import { useEffect, useState } from "react";
import Client from "../services/api"
const DiscoverBooks = () => {

    const [search, setSearch] = useState([]);
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        let allBooks = await Client.get("/books")
        setBooks(allBooks.data)
    }

    const searchBooks = async (term) => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        getBooks()
    }, []);

    return (
        <div className="container text-center">
            <h3>Search Books</h3>
            <div className="row">
                <form action="" className="d-flex my-5 justify-content-center">
                    <div className="col-4"><input type="text" className="form-control" /></div>
                    <div className="col-2"><button className="btn btn-outline-success ms-3">Search</button></div>
                </form>
            </div>
            <div className="d-flex flex-wrap align-items-stretch">
                {
                    books.length > 0 ? 
                    books.map((book) => {
                        return (
                            <div key={book._id}>
                                <div className="card book-search-default">
                                    <img src={book.image} className="card-img-top discover-book-img" alt={book.title} />
                                    {/* <div className="card-body">
                                        <p className="card-text">{book.title}</p>
                                    </div> */}
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