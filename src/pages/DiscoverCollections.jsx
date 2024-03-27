import { useState, useEffect } from "react"
import Client from "../services/api"
import { ConstructionOutlined } from "@mui/icons-material"

const DiscoverCollections = () => {
  const [collections, setCollections] = useState(null)

  const getAllCollections = async () => {
    let getCollRes = await Client.get("/collections")
    setCollections(getCollRes.data)
    // console.log(getCollRes.data)
  }

  useEffect(() => {
    getAllCollections()
  }, [])

  return (
    <div className="container">
      <div className="row mt-5">
        {collections
          ? collections.map((collection) => {
              if (collection.books.length > 0) {
                return (
                  <div key={collection._id}>
                    <div className="d-flex justify-content-between">
                      <h4>{collection.title}</h4>
                      <button className="btn btn-outline-secondary">
                        View Collection
                      </button>
                    </div>
                    <div className="overflow-x-scroll d-flex my-5 collection-all-background">
                      <div className="d-flex">
                        {collection.books.map((book) => {
                          let keyId =
                            book._id + Math.floor(Math.random() * 99999999)
                          return (
                            <div
                              key={keyId}
                              className="card book-search-default d-flex align-items-center m-2"
                            >
                              <img
                                src={book.image}
                                className="card-img-top discover-book-img"
                                alt={book.title}
                              />
                              <div className="card-body overflow-y-auto">
                                <p className="card-text ">{book.title}</p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <hr />
                  </div>
                )
              }
            })
          : null}
      </div>
    </div>
  )
}

export default DiscoverCollections
