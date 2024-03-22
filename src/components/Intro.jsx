import defaultBook from "../images/defaultBook.jpg"
const Intro = () => {
    return (
        <div>
            <div className="container text-center p-5">
                <div className="row">
                    <div className="col">
                    <h1 className="display-1 text-start">
                        SHARE TO OTHERS, LEARN FROM OTHERS
                    </h1>
                    </div>
                    <div className="col">
                        <img src={defaultBook} alt="book image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro