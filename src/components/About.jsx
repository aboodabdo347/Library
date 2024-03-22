import PeopleIcon from '@mui/icons-material/People';
import CreateIcon from '@mui/icons-material/Create';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const About = () => {
    return (
        <div className="about-bg mt-5 p-5">
            <div className="container text-center p-5 justify-content-center">
                <div className="row">
                    <div className="col d-flex flex-column justify-content-center">
                        <h1 className="display-6 text-start dt">
                            A Platform for Everyone
                        </h1>
                        <p className="text-start">Readers and authors alike can connect with others who share similar interests, passions, and expertise.</p>
                        <div className="mt-5 d-flex">
                        <button className="btn btn-outline-secondary">Discover Collections <ArrowOutwardIcon /></button>
                    </div>
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <div className="about-item">
                            <p className="mt-3 px-3 d-flex"><PeopleIcon /><span className='mx-4'>Readers choose their kind of content.</span></p>
                        </div>
                        <div className="about-item mt-3">
                            <p className="mt-3 px-3 d-flex"><CreateIcon /><span className='mx-3'>Authors secure their intellectual property.</span></p>
                        </div>
                        <div className="about-item mt-3">
                            <p className="mt-3 px-3 d-flex"><ConnectWithoutContactIcon /><span className='mx-2'>Connecting communities around the globe.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About