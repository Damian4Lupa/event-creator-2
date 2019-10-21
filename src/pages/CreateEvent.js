import React, { Component } from 'react';
import $ from 'jquery'

class CreateEvent extends Component {

  state = {
    img: "",
    font: "",
    text: "",
    date: "",
    time: ""
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
  }

  changeFont = event => {

    event.preventDefault()
    let id = event.target.id - 1

    $('.event-font').css('font-family', this.fontList[id].font)
  }

  render() {

    const { date, time, text } = this.state
    const btnStyle = "btn btn-outline-primary"

    return (

      <div id="background" className="img1">

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
                      <label for="inputText">Enter the name of the event</label>
                    </div>

                    <div className="row mt-4">
                      <div className="col-7">
                        <div className="form-label-group ml-4 mr-3">
                          <input
                            type="date" id="inputDate" className="form-control" value={date}
                            onChange={this.changeValue}
                            required
                          />
                          <label for="inputDate">Date</label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div class="form-label-group">
                          <input
                            type="time" id="inputTime" className="form-control"
                            value={time}
                            onChange={this.changeValue}
                            required
                          />
                          <label for="inputTime">Time</label>
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

                    <div class="row justify-content-end">
                      <div className="mt-4 mr-4">
                        <button type="button" className={btnStyle}>Get ready!</button>
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