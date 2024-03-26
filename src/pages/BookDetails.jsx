
import { useLocation } from "react-router-dom"

const BookDetails=()=>{
    const location = useLocation();
    const {book} = location.state

    let date = new Date(book.pubYear);
    let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    let published = new Intl.DateTimeFormat("en-GB", options).format(date)

  return(
    <div className="container m-5">
        <div className="row">
            <div className="col d-flex justify-content-center book-details-img-div">
                <img className="book-details-img" src={book.image.replace("zoom=1", "zoom=0")}/>
            </div>
            <div className="col">
                <h2>{book.title}</h2><br />
                {
                    book.authors.map(author => <h5 key={author}>{author}</h5>)
                }
                <h6>Published {published}</h6><br />
                <p>{book.description}</p>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-secondary">Add to Collection</button>
                </div>
            </div>
        </div>
>>>>>>> e0dd50e723140ce67421d9861d300bf5c0fd0d82
    </div>
  )
}

export default BookDetails
