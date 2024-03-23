import defaultBook from "../images/defaultBook.jpg"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Discover = () => {
    return (
        <div>
            <div className="container text-center p-5 justify-content-center mt-5">
                <div className="grid row column-gap-5">
                    <div className="col text-start display-5">
                        Get Insights from People of All Expertise
                    </div>
                    <div className="col text-start">
                        The key to your next adventure awaits. Unlock a universe of stories, knowledge, and inspiration with our vast collection. Start exploring today!
                    </div>
                </div>
                <div className="overflow-x-scroll d-flex my-5">
                    <div className="d-flex">
                        <div className="card me-3 discover-book-card">
                            <img src={defaultBook} alt="" />
                            <div className="discover-card-title">
                                <h6 className="text-start">Collection Owner</h6>
                                <p className="text-start collection-discover-p">Collection Title</p>
                            </div>
                            <button className="m-1 btn btn-secondary btn-sm">View <ArrowOutwardIcon fontSize="small"/></button>
                        </div>
                        <div className="card me-3 discover-book-card">
                            <img src={defaultBook} alt="" />
                            <div className="discover-card-title">
                                <h6 className="text-start">Collection Owner</h6>
                                <p className="text-start collection-discover-p">Collection Title</p>
                            </div>
                            <button className="m-1 btn btn-secondary btn-sm">View <ArrowOutwardIcon fontSize="small"/></button>
                        </div>
                        <div className="card me-3 discover-book-card">
                            <img src={defaultBook} alt="" />
                            <div className="discover-card-title">
                                <h6 className="text-start">Collection Owner</h6>
                                <p className="text-start collection-discover-p">Collection Title</p>
                            </div>
                            <button className="m-1 btn btn-secondary btn-sm">View <ArrowOutwardIcon fontSize="small"/></button>
                        </div>
                        <div className="card me-3 discover-book-card">
                            <img src={defaultBook} alt="" />
                            <div className="discover-card-title">
                                <h6 className="text-start">Collection Owner</h6>
                                <p className="text-start collection-discover-p">Collection Title</p>
                            </div>
                            <button className="m-1 btn btn-secondary btn-sm">View <ArrowOutwardIcon fontSize="small"/></button>
                        </div>
                        <div className="card me-3 discover-book-card">
                            <img src={defaultBook} alt="" />
                            <div className="discover-card-title">
                                <h6 className="text-start">Collection Owner</h6>
                                <p className="text-start collection-discover-p">Collection Title</p>
                            </div>
                            <button className="m-1 btn btn-secondary btn-sm">View <ArrowOutwardIcon fontSize="small"/></button>
                        </div>
                        <div className="card me-3 discover-book-card">
                            <img src={defaultBook} alt="" />
                            <div className="discover-card-title">
                                <h6 className="text-start">Collection Owner</h6>
                                <p className="text-start collection-discover-p">Collection Title</p>
                            </div>
                            <button className="m-1 btn btn-secondary btn-sm">View <ArrowOutwardIcon fontSize="small"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover