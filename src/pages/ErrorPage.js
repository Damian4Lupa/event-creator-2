import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div id="background" className="img1">
            <button className="btn btn-outline-primary mx-4 my-4 float-right">
                <Link to="/">Back</Link>
            </button>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto mt-card">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center mt-4">Ups sorry, no such page</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ErrorPage;