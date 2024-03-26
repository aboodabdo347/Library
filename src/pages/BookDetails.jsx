import { useLocation, useParams } from "react-router-dom"
import Client from "../services/api"
import { useEffect, useState } from "react"

const BookDetails = (props) => {
  const location = useLocation()
  const { book } = location.state
  const {id, user} = useParams(); // this is the book ISBN number
  const [collections, setCollections] = useState([]);
  let date = new Date(book.pubYear)
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  let published = new Intl.DateTimeFormat("en-GB", options).format(date)

  const addBookInCollection = async () => {
    let addRes = await Client.put("/collections/"+id); //bookISBN id
    console.log(addRes.data);
  }

  const getUserCollection = async () => {
    let collectionRes = await Client.get("/collections/"+ user)
    // console.log(collectionRes.data)
    setCollections(collectionRes.data)
    
  }

  useEffect(() => {
        getUserCollection()
  }, []);

  return (
    <div className="container m-5">
      <div className="row">
        <div className="col d-flex justify-content-center book-details-img-div">
          <img
            className="book-details-img"
            src={book.image.replace("zoom=1", "zoom=0")}
          />
        </div>
        <div className="col">
          <h2>{book.title}</h2>
          <br />
          {book.authors.map((author) => (
            <h5 key={author}>{author}</h5>
          ))}
          <h6>Published {published}</h6>
          <br />
          <p>{book.description}</p>
          <div className="d-flex justify-content-evenly mt-5">
            <select className="form-select" name="collectionSel" id="collectionSel">
            {
                collections.map((collection) => {
                    return (
                        <option key={collection._id} value={collection._id}>{collection.title}</option>
                    )
                })
            }
            </select>
            <button onClick={addBookInCollection} className="btn btn-outline-secondary">
              Add to Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BookDetails
