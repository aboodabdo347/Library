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
        if(term) {

        } else {
            let searchRes = await axios.get("https://www.googleapis.com/books/v1/volumes?q=power&langRestrict=en");
            console.log(searchRes.data.items)
        }
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
            
        </div>
    )
}

export default DiscoverBooks