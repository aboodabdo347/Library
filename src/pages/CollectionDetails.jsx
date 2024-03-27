import React, { useState, useEffect } from 'react';
import axios from "axios"
import Client from "../services/api"
import { useParams,Link } from "react-router-dom"
// import { useHistory } from 'react-router-dom';

const CollectionDetails = ({user }) => {
  const [collections, setCollections] = useState([])
  const { id } = useParams()
  // console.log(id);
  useEffect(() => {
    // Fetch collection details from backend when component mounts
    getUserCollection()
    // const fetchCollectionDetails = async () => {
    //   try {
    //     // Make a GET request to fetch collection details (replace 'YOUR_BACKEND_URL' with the actual URL)
    //     const response = await Client.get(`/collections/${id}`)
    //     setCollections(response.data)
    //     console.log(collections);
      
    //   } catch (error) {
    //     console.error("Error fetching collection details:", error)
    //   }
    // }

    // fetchCollectionDetails()
  }, [])

  const getUserCollection = async () => {
    let collectionRes = await Client.get(`/collections/${user.id}`)
    // console.log(collectionRes.data)
    setCollections(collectionRes.data)
    console.log("id id:",collectionRes.data);
    // for(var a in collectionRes.data){
    //   if(a._id == id){console.log("aaa",a);}
    //   else console.log("jj",a);

    // }
    collectionRes.data.forEach((e)=>{
      if(e._id == id){
      // setCollections(e.books)
    console.log(collections);
    }
        // else {console.log("jj",e);}
    })
  }

  const removeCollection = async()=>{
     await Client.delete(`/collections/${id}`)
    // const history = useHistory();
// console.log(`/collections/${id}`);
// history.push('http://localhost:3000/');
  }
  const handleDelete = () => {
    // Update UI to reflect that the collection has been deleted
    setCollections(null)
  }

  return (
    <div>
    <button onClick={removeCollection}>remove collection</button>


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
                     
                        <h3 >
                          {collection.title}
                        </h3>
                     
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
                <h3>There are no books in this collection.</h3>
              )}
            </div>

  
  )

}

export default CollectionDetails
