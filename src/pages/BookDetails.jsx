import { useLocation, useParams } from "react-router-dom"
import Client from "../services/api"
import { useEffect, useState, useRef } from "react"

const BookDetails = (props) => {
  const location = useLocation()
  const { book } = location.state
  const { id, user } = useParams() // this is the book ISBN number and not Id
  const [collections, setCollections] = useState([])
  const selectCollection = useRef()
  let date = new Date(book.pubYear)
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  let published = new Intl.DateTimeFormat("en-GB", options).format(date)

  const addBookInCollection = async () => {
    let addRes = await Client.put("/collections/" + id, {
      collectionId: selectCollection.current.value,
    }) //bookISBN id
    console.log(addRes.data)
    // console.log(selectCollection.current.value)
  }

  const getUserCollection = async () => {
    let collectionRes = await Client.get("/collections/" + user)
    setCollections(collectionRes.data)
  }

  useEffect(() => {
    getUserCollection()
  }, [])

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
          <div className="d-flex justify-content-evenly mt-5 row">
            <div className="col">
              {collections.length > 0 ? (
                <select
                  ref={selectCollection}
                  className="form-select"
                  name="collectionSel"
                  id="collectionSel"
                >
                  {collections.length > 0
                    ? collections.map((collection) => {
                        return (
                          <option key={collection._id} value={collection._id}>
                            {collection.title}
                          </option>
                        )
                      })
                    : null}
                </select>
              ) : null}
            </div>
            <div className="col">
              {collections.length > 0 ? (
                <button
                  onClick={addBookInCollection}
                  className="btn btn-outline-secondary"
                >
                  Add to Collection
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BookDetails
