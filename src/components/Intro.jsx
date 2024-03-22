import defaultBook from "../images/defaultBook.jpg"
import Rating from '@mui/material/Rating';

const Intro = () => {

    return (
        <div>
            <div className="container text-center p-5 justify-content-center">
                <div className="row">
                    <div className="col">
                    <h1 className="display-1 text-start">
                        SHARE TO OTHERS, LEARN FROM OTHERS
                    </h1>
                    </div>
                    <div className="col d-flex flex-column">
                        <img className="intro-book border" src={defaultBook} alt="book image" />
                        <div className="d-flex">
                            <div className="text-start mt-3 intro-rating-bg">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <span className="intro-rate-num mx-2">4.0</span>
                                        <Rating className="stars-intro" name="read-only" value="4" readOnly size="small" />
                                    </div>
                                </div>
                                <p className="intro-rate-solgan">The life-changing million-copy #1 bestseller</p>
                                {/* <div>
                                    <button className="btn btn-outline-success btn-sm ">View</button>
                                </div> */}
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro