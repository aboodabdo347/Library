import defaultBook from "../images/defaultBook.jpg"
import Rating from '@mui/material/Rating';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Intro = () => {

    return (
        <div>
            <div className="container text-center p-5 justify-content-center">
                <div className="row">
                    <div className="col">
                    <h1 className="display-1 text-start">
                        SHARE TO OTHERS, DISCOVER WITH OTHERS
                    </h1>
                    <div className="mt-5 d-flex">
                        <a href="/discoverbooks"><button className="btn btn-outline-secondary">Start Discovering <ArrowOutwardIcon /></button></a>
                        <a href="/login"><button className="btn btn-outline-secondary mx-3">Become an Author</button></a>
                    </div>
                    </div>
                    <div className="col d-flex flex-column">
                        <div className="intro-img">
                            <img className="intro-book border" src={defaultBook} alt="book image" />
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="text-start mt-3 intro-rating-bg">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <span className="intro-rate-num mx-2">4.0</span>
                                        <Rating className="stars-intro" name="read-only" value={4} readOnly size="small" />
                                    </div>
                                    <div>
                                        <button className="btn btn-outline-success btn-sm ">View</button>
                                    </div>
                                </div>
                                <p className="intro-rate-solgan">He calls them atomic habits. In this ground-breaking book, Clears reveals exactly how these minuscule changes can grow into such life-altering outcomes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro