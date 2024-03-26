import { useLocation, useParams } from "react-router-dom"
import Client from "../services/api"
import { useEffect } from "react"

const BookDetails = (props) => {
  const location = useLocation()
  const { book } = location.state
  const {id} = useParams(); // this is the book ISBN number
//   console.log(props.user)

  let date = new Date(book.pubYear)
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  let published = new Intl.DateTimeFormat("en-GB", options).format(date)

  const addBookInCollection = async () => {
    // let userId;
    // if(props.user) {
    //     userId = props.user.id;
    // }
    let addRes = await Client.put("/collections/"+id);
    console.log(addRes.data);
  }

  const getUserCollection = async () => {
    let userId;
    if(props.user) {
        userId = props.user.id;
    }
    let collectionRes = await Client.get("/collections/"+userId)
    console.log(collectionRes.data)
  }

  useEffect(() => {
        getUserCollection()
  });

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
          <div className="d-flex justify-content-end">
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
