import AddIcon from "@mui/icons-material/Add"
import { useState, useRef } from "react"
import Client from "../services/api"

const Profile = ({ user }) => {
  const [collections, setCollections] = useState([])
  const collectionNameRef = useRef(null)

  const newCollection = async () => {
    let title = collectionNameRef.current.value
    let createRes = await Client.post("/collections", { title: title })
    console.log(title)
    console.log(createRes)
    setCollections([title, ...collections])
    collectionNameRef.current.value = ""
  }

  const handleCollectionChange = () => {}

  return (
    <div className="container">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Create Collection
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label className="form-label" htmlFor="collectionName">
                Collection Name
              </label>
              <input
                ref={collectionNameRef}
                id="collectionName"
                type="text"
                className="form-control"
                placeholder="collection name"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={newCollection}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="nav nav-underline" id="nav-tab" role="tablist">
        <button
          className="nav-link active"
          id="nav-collection-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-home"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          My Collections
        </button>
        <button
          className="nav-link"
          id="nav-profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-profile"
          type="button"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
        >
          Info
        </button>
      </div>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabIndex="0"
        >
          <div className="row mt-5">
            <div className="col">
              {collections.length > 0 ? (
                collections.map((collection) => {
                  return <h3 key={collection}>{collection}</h3>
                })
              ) : (
                <h3>No Collections Yet.</h3>
              )}
            </div>
            <div className="col">
              <button
                className="btn btn-outline-secondary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <AddIcon /> New Collection
              </button>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabIndex="0"
        >
          <form className="mt-5" action="">
            <div className="row mt-3">
              <div className="col-1">
                <label htmlFor="userName">Name</label>
              </div>
              <div className="col-3">
                <input
                  disabled
                  value={user}
                  id="userName"
                  className="form-control ms-5"
                  type="text"
                  placeholder="Default input"
                  aria-label="default input example"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <label htmlFor="userEmail">Email</label>
              </div>
              <div className="col-3">
                <input
                  disabled
                  value={user?.email}
                  id="userEmail"
                  className="form-control ms-5"
                  type="text"
                  placeholder="Default input"
                  aria-label="default input example"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
