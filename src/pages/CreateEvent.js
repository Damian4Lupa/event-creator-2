import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'

class CreateEvent extends Component {

  state = {
    img: "img1",
    font: "",
    text: "",
    date: "",
    time: "",
  }

  fontList = [{
    font: "sans-serif"
  },
  {
    font: "monospace"
  },
  {
    font: "fantasy"
  },
  {
    font: "cursive"
  },
  {
    font: "system-ui"
  }
  ]

  componentDidMount = () => {
    this.loadSessionStorage()
  }

  componentDidUpdate = () => {
    this.saveSessionStorage()
    this.loadSessionStorage()
  }

  changeValue = event => {

    const name = event.target.type
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  changeImg = event => {
    event.preventDefault()
    let id = event.target.id
    $('#background').attr('class', `${id}`)
    this.setState({
      img: id
    })
  }

  changeFont = event => {

    event.preventDefault()
    let id = event.target.id - 1
    let font = this.fontList[id].font

    $('.event-font').css('font-family', font)

    this.setState({
      font
    })
  }

  saveSessionStorage = () => {
    sessionStorage.setItem('img', this.state.img);
    sessionStorage.setItem('font', this.state.font);
    sessionStorage.setItem('text', this.state.text);
    sessionStorage.setItem('date', this.state.date);
    sessionStorage.setItem('time', this.state.time);
  }

  loadSessionStorage = () => {
    let img = sessionStorage.getItem('img')
    let font = sessionStorage.getItem('font') ? sessionStorage.getItem('font') : "";
    let text = sessionStorage.getItem('text') ? sessionStorage.getItem('text') : "";
    let date = sessionStorage.getItem('date') ? sessionStorage.getItem('dte') : "";
    let time = sessionStorage.getItem('time') ? sessionStorage.getItem('time') : "";

    if (text !== this.state.text) {
      this.setState({
        img,
        font,
        text,
        date,
        time
      })
    }
  }

  reset = () => {
    this.setState({
      img: "img1",
      font: "",
      text: "",
      date: "",
      time: "",
    })
  }

  render() {

    const { date, time, text, img } = this.state
    const btnStyle = "btn btn-outline-primary"
    let dataComplete = false

    const show_activeButton =
      <Link to={{
        pathname: '/clock',
        state: {
          img: this.state.img,
          font: this.state.font,
          text: this.state.text,
          date: this.state.date,
          time: this.state.time,
        }
      }}><button
        className={btnStyle}
      >Get ready!</button></Link>

    const show_inactiveButton = <button
      className="btn btn-outline-primary disabled"
    >Get ready!
  </button>

    if ((text.length > 5) && (date !== "") && (time !== "")) {
      dataComplete = true
    } else {
      dataComplete = false
    }

    return (

      <div id="background" className={img}>
        <div className="container">

          <div className="row">
            <div className="col-lg-6 mx-auto mt-card">
              <div className="card card-signin my-5">

                <div className="card-body">
                  <h5 className="card-title text-center">event creator</h5>
                  <form className="form-signin">

                    <div className="form-label-group">
                      <input
                        type="text" id="inputText"
                        className="form-control event-font"
                        placeholder="Enter the name of the event"
                        value={text}
                        onChange={this.changeValue}
                        required autoFocus
                      />
                      <label htmlFor="inputText">Enter the name of the event</label>
                    </div>

                    <div className="row mt-4">
                      <div className="col-7">
                        <div className="form-label-group ml-4 mr-3">
                          <input
                            type="date" id="inputDate" className="form-control" value={date}
                            onChange={this.changeValue}
                            required
                          />
                          <label htmlFor="inputDate">Date</label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-label-group">
                          <input
                            type="time" id="inputTime" className="form-control"
                            value={time}
                            onChange={this.changeValue}
                            required
                          />
                          <label htmlFor="inputTime">Time</label>
                        </div>
                      </div>
                    </div>

                    <div className="bordered">
                      <span className="bordered__text mt-2 mb-3">Font</span>
                    </div>

                    <div className="btn-group" role="group" aria-label="Basic example">

                      <button id="1" className={btnStyle} onClick={this.changeFont}><span className="btn-font">1</span></button>
                      <button id="2" className={btnStyle} onClick={this.changeFont}><span className="btn-font">2</span></button>
                      <button id="3" className={btnStyle} onClick={this.changeFont}><span className="btn-font">3</span></button>
                      <button id="4" className={btnStyle} onClick={this.changeFont}><span className="btn-font">4</span></button>
                      <button id="5" className={btnStyle} onClick={this.changeFont}><span className="btn-font">5</span></button>

                    </div>

                    <div className="bordered">
                      <span className="bordered__text my-3">Image</span>
                    </div>

                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button id="img1" className={btnStyle} onClick={this.changeImg}><span className="btn-img">1</span></button>
                      <button id="img2" className={btnStyle} onClick={this.changeImg}><span className="btn-img">1</span></button>
                      <button id="img3" className={btnStyle} onClick={this.changeImg}><span className="btn-img">1</span></button>
                      <button id="img4" className={btnStyle} onClick={this.changeImg}><span className="btn-img">1</span></button>
                      <button id="img5" className={btnStyle} onClick={this.changeImg}><span className="btn-img">1</span></button>
                      <button id="img6" className={btnStyle} onClick={this.changeImg}><span className="btn-img">1</span></button>
                      <button id="img7" className={btnStyle} onClick={this.changeImg}><span className="btn-img">1</span></button>
                      <button id="img8" className={btnStyle} onClick={this.changeImg}><span className="btn-img">1</span></button>
                      <button id="img9" className={btnStyle} onClick={this.changeImg}><span className="btn-img">1</span></button>
                      <button id="img10" className={btnStyle} onClick={this.changeImg}><span className="btn-img">1</span></button>
                    </div>

                    <div className="row mt-4">

                      <div className="col-auto mr-auto ml-2">
                        <button className={btnStyle} onClick={this.reset}>Reset</button>
                      </div>

                      <div className="col-auto mr-2">
                        {dataComplete ? show_activeButton : show_inactiveButton}
                      </div>
                    </div>

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

export default CreateEvent;