import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'

class Clock extends Component {
  state = {
    img: "",
    font: "",
    text: "",
    time: "",

    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  componentDidMount() {
    const { img, font, text, date, time } = this.props.location.state

    $('.event-font').css('font-family', font)

    this.setState({
      img, font, text, date, time
    })
  }

  hoursToMilliseconds = string => {

    if (string.length === 0 || string === "") {
      return 0
    } else {
      let hours = (string.slice(0, 2) * 1) * 60 * 60 * 1000
      let minutes = (string.slice(3) * 1) * 60 * 1000
      let ms = hours + minutes
      return ms
    }
  }

  clock = () => {

    let days = 0
    let hours = 0
    let minutes = 0
    let seconds = 0

    const date = this.state.date
    const time = this.hoursToMilliseconds(this.state.time)

    const endTime = new Date(date).getTime() + time
    const nowTime = new Date().getTime()

    days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)))
    if (days < 0) days = days - (days * 2)
    if (days >= 0 && days < 10) days = "0" + days

    hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24)
    if (hours < 0) hours = hours - (hours * 2)
    if (hours >= 0 && hours < 10) hours = "0" + hours

    minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60)
    if (minutes < 0) minutes = minutes - (minutes * 2)
    if (minutes >= 0 && minutes < 10) minutes = "0" + minutes

    seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60)
    if (seconds < 0) seconds = seconds - (seconds * 2)
    if (seconds >= 0 && seconds < 10) seconds = "0" + seconds

    this.setState({
      days,
      hours,
      minutes,
      seconds
    })
  }



  render() {

    const { img, text, days, hours, minutes, seconds } = this.state

    setInterval(() => {
      this.clock()
    }, 1000);

    return (

      <div id="background" className={img}>

        <button className="btn btn-outline-primary mx-4 my-4 float-right">
          <Link to="/">Back</Link>
        </button>

        <div className="container">

          <div className="row">
            <div className="col-7 mt-card-clock">
              <div className="card card-signin my-5">

                <div className="card-body">

                  <p className="event-text event-font">{text}</p>
                  <p className="event-text event-font mt-5">
                    
                    <span>{days}</span> d:
                    <span> {hours}</span> h:
                    <span> {minutes}</span> m:
                    <span> {seconds}</span> s
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