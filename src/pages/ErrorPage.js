import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div id="background" className="img1-1000">
      <button className="btn btn-outline-primary mx-4 my-4 float-right">
        <Link to="/">Back</Link>
      </button>

      <div className="container">
        <div className="row">
          <div className="col-7 mt-card-clock">
            <div className="card card-signin">
              <div className="card-body">
                <h5 className="event-text event-font mt-4">
                  Ups sorry, no such page
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
