import AddIcon from "@mui/icons-material/Add"
import { useState, useRef, useEffect } from "react"
import { Route, Routes, useParams } from "react-router-dom"
import Client from "../services/api"
import { grey } from "@mui/material/colors"
import CollectionDetails from "./CollectionDetails"
import { Link } from "react-router-dom"
const Profile = ({ user }) => {
  const [collections, setCollections] = useState([])
  const collectionNameRef = useRef(null)
  const { id } = useParams()

  const newCollection = async () => {
    let title = collectionNameRef.current.value
    let createRes = await Client.post("/collections", {
      title: title,
      user: user.id,
    })
    console.log(createRes.data)
    let newArray = [createRes.data, ...collections]
    setCollections(newArray)
    // console.log(newArray)
    collectionNameRef.current.value = ""
  }

  const getUserCollection = async () => {
    let collectionRes = await Client.get(`/collections/${id}`)
    // console.log(collectionRes.data)
    setCollections(collectionRes.data)
    console.log(collections);
  }

  useEffect(() => {
    getUserCollection()
  }, [])

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
              <button
                className="btn btn-outline-secondary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <AddIcon /> New Collection
              </button>
            </div>
            <div className="col">
              {collections.length > 0 ? (
                collections.map((collection) => {
                  return (
                    //     <div className="overflow-x-scroll d-flex my-5">
                    //       <div className="d-flex">
                    //         <div className="card me-3 discover-book-card">
                    //         <img src={book.image} alt="img" />
                    //         </div>
                    //       </div>
                    //     </div>

                    <div
                      key={collection._id}
                      style={{ overflowX: "auto", whiteSpace: "nowrap" }}
                    >
                      <Link
                        to={`/collections/${collection._id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <h3 style={{ cursor: "pointer" }}>
                          {collection.title}
                        </h3>
                      </Link>
                      <div style={{ display: "flex" }}>
                        <div className="overflow-x-scroll d-flex my-5">
                          {collection.books.map((book) => (
                            // <div
                            //   key={book._id}
                            //   style={{
                            //     marginRight: "10px",
                            //     backgroundColor: grey,
                            //   }}
                            // >
                            //   <h6>{book.title}</h6>
                            //   <img
                            //     src={book.image}
                            //     alt="img"
                            //     style={{ width: "100px", height: "150px" }}
                            //   />
                            // </div>
                            <div className="d-flex">
                              <div className="card me-3 discover-book-card">
                                <img src={book.image} alt="img" />
                                <div className="discover-card-title">
                                  <h6 className="text-start">{book.authors}</h6>
                                  <p className="text-start collection-discover-p">
                                    {book.title}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <h3>No Collections Yet.</h3>
              )}
            </div>
            {/* <div className="col">
              <button
                className="btn btn-outline-secondary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <AddIcon /> New Collection
              </button>
            </div> */}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabIndex="0"
        >
          <form className="mt-5 profile-form" action="">
            <div className="row mt-3">
              <div className="col-1">
                <label htmlFor="userName">Name</label>
              </div>
              <div className="col-3">
                <input
                  disabled
                  value={user?.name}
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
