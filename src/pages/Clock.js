import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'

class Clock extends Component {
    state = {}

    componentDidMount() {
        const { img, font, text, date, time } = this.props.location.state

        $('.event-font').css('font-family', font)

        this.setState({
            img, font, text, date, time
        })
    }


    render() {

        const { img, font, text, date, time } = this.state

        return (

            <div id="background" className={img}>

                <button className="btn btn-outline-primary mx-4 my-4 float-right">
                    <Link to="/">Back</Link>
                </button>

                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 mx-auto mt-card">
                            <div className="card card-signin my-5">

                                <div className="card-body">
                                    <h5 className="card-title text-center">event creator</h5>
                                    <form className="form-signin">





                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        );
    }
}

export default Clock;