import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const Profile = () => {

    const newCollection = () => {
        
    }

    return (
        <div className="container">
                <div className="nav nav-underline" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-collection-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">My Collections</button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Info</button>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                    <div className="row mt-5">
                        <div className="col">
                            <h3>No Collections Yet.</h3>
                        </div>
                        <div className="col">
                            <button className="btn btn-outline-secondary"><AddIcon /> New Collection</button>
                        </div>
                    </div>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                        <form className="mt-5" action="">
                            <div className="row">
                                <div className="col-1">
                                    <label htmlFor="userEmail">Email</label>
                                </div>
                                <div className="col-3">
                                <input disabled value="User Email" id="userEmail" className="form-control ms-5" type="text" placeholder="Default input" aria-label="default input example" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-1">
                                <label htmlFor="userName">Name</label>
                                </div>
                                <div className="col-3">
                                    <input disabled value="User Name" id="userName" className="form-control ms-5" type="text" placeholder="Default input" aria-label="default input example" />
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default Profile