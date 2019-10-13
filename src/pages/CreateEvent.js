import React, { Component } from 'react';

class CreateEvent extends Component {

  state = {
    img: "",
    font: "",
    text: "",
    date: "",
    time: ""
  }

  imgList = [
    {
      img: "../images/img1.jpg"
    },
    {
      img: "../images/img2.jpg"
    },
    {
      img: "../images/img3.jpg"
    },
    {
      img: "../images/img4.jpg"
    },
    {
      img: "../images/img5.jpg"
    },
    {
      img: "../images/img6.jpg"
    },
    {
      img: "../images/img7.jpg"
    },
    {
      img: "../images/img8.jpg"
    },
    {
      img: "../images/img9.jpg"
    },
    {
      img: "../images/img10.jpg"
    }
  ];

  fontList = [
    {
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


  render() {

    const { date, time, text } = this.state

    return (

      <div className="background img1">
        <div className="container">
          {/* <img src="../images/img1.jpg" alt="" /> */}
          <div className="row">
            <div className="col-lg-6 mx-auto aaa">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 class="card-title text-center">event creator</h5>
                  <form class="form-signin">

                    <div class="form-label-group">
                      <input type="text" id="inputText" class="form-control" value={text} onChange={this.changeValue} placeholder="Enter the name of the event" required autofocus />
                      <label for="inputText">Enter the name of the event</label>
                    </div>

                    <div className="row mt-4">
                      <div className="col-7">
                        <div class="form-label-group ml-4 mr-3">
                          <input type="date" id="inputPassword" class="form-control" value={date} onChange={this.changeValue} required />
                          <label for="inputPassword">Date</label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div class="form-label-group">
                          <input type="time" id="inputTime" class="form-control" value={time} onChange={this.changeValue} required />
                          <label for="inputTime">Time</label>
                        </div>
                      </div>
                    </div>

                    <div class="bordered">
                      <span class="bordered__text my-3">Font</span>
                    </div>

                    <div class="btn-group" role="group" aria-label="Basic example">

                      <button type="button" class="btn btn-outline-primary"><span className="btn-font">1</span></button>
                      <button type="button" class="btn btn-outline-primary"><span className="btn-font">2</span></button>
                      <button type="button" class="btn btn-outline-primary"><span className="btn-font">3</span></button>
                      <button type="button" class="btn btn-outline-primary"><span className="btn-font">4</span></button>
                      <button type="button" class="btn btn-outline-primary"><span className="btn-font">5</span></button>

                    </div>

                    <div class="bordered">
                      <span class="bordered__text my-3">Image</span>
                    </div>

                    <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-outline-primary"><span className="btn-img">1</span></button>
                      <button type="button" class="btn btn-outline-primary"><span className="btn-img">1</span></button>
                      <button type="button" class="btn btn-outline-primary"><span className="btn-img">1</span></button>
                      <button type="button" class="btn btn-outline-primary"><span className="btn-img">1</span></button>
                      <button type="button" class="btn btn-outline-primary"><span className="btn-img">1</span></button>
                      <button type="button" class="btn btn-outline-primary"><span className="btn-img">1</span></button>
                      <button type="button" class="btn btn-outline-primary"><span className="btn-img">1</span></button>
                      <button type="button" class="btn btn-outline-primary"><span className="btn-img">1</span></button>
                      <button type="button" class="btn btn-outline-primary"><span className="btn-img">1</span></button>
                      <button type="button" class="btn btn-outline-primary"><span className="btn-img">1</span></button>
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