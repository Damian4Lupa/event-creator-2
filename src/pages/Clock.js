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
            <div className="col-lg-6 mx-auto mt-card-clock">
              <div className="card card-signin my-5">

                <div className="card-body">

                  <p className="event-text event-font">{text}</p>
                  <p className="event-text event-font mt-5">
                    <span id="d">.</span> d:
                    <span id="h">.</span> h:
                    <span id="m">.</span> m:
                    <span id="s">.</span> s
                  </p>

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