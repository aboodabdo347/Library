import defaultBook from "../images/defaultBook.jpg"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import Client from "../services/api"
import { useEffect, useState } from "react"

const Discover = () => {
  const [latest, setLatest] = useState(null)

  const getLatestBooks = async () => {
    let latestRes = await Client.get("/books/latest")
    setLatest(latestRes.data)
    // console.log(latestRes.data)
  }

  useEffect(() => {
    getLatestBooks()
  }, [])

  return (
    <div>
      <div className="container text-center p-5 justify-content-center mt-5">
        <div className="grid row column-gap-5">
          <div className="col text-start display-5">
            Get Insights from People of All Expertise
          </div>
          <div className="col text-start">
            The key to your next adventure awaits. Unlock a universe of stories,
            knowledge, and inspiration with our vast collection. Start exploring
            today!
          </div>
        </div>
        <div className="overflow-x-scroll d-flex my-5">
          <div className="d-flex">
            {latest
              ? latest.map((book) => {
                  return (
                    <div
                      key={book._id}
                      className="card me-3 discover-book-card"
                    >
                      <img
                        className="image-on-discover-home"
                        src={book.image}
                        alt=""
                      />
                      <div className="discover-card-title"></div>
                      <button className="m-1 btn btn-secondary btn-sm">
                        View <ArrowOutwardIcon fontSize="small" />
                      </button>
                    </div>
                  )
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover
