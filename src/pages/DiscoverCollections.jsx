import { useState, useEffect } from "react"
import Client from "../services/api"

const DiscoverCollections = () => {
  const [collections, setCollections] = useState(null)

  const getAllCollections = async () => {
    let getCollRes = await Client.get("/collections")
    console.log(getCollRes.data)
  }

  useEffect(() => {
    getAllCollections()
  })
}

export default DiscoverCollections
