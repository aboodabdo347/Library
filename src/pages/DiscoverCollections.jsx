import { useState, useEffect } from "react"
import Client from "../services/api"

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
              return (
                <div key={collection._id}>
                  <h4>{collection.title}</h4>
                  <div className="overflow-x-scroll d-flex my-5">
                    <div className="d-flex">
                      {collection.books.map((book) => book.title)}
                    </div>
                  </div>
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default DiscoverCollections
