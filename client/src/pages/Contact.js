import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import axios from "axios";

import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    }; // this.handlesubmit = this.handlesubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then(function (response) {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Book your tour today!</h2>
            <img
              src="https://st.depositphotos.com/1636803/2416/i/950/depositphotos_24169067-stock-photo-sign-a-green-cross.jpg"
              alt="Big Green Cross"
              style={{ height: "150px" }}
            />
            <img
              src="https://www.cardfool.com/cards/assets/Big%20Wine%20Glass%20Val_cover.jpg"
              alt="Big Wine Glass"
              style={{ height: "150px" }}
            />
             <p style={{ width: "100%", margin: "auto", paddingTop: "1em" }}>
              We specialize in winery, brewery and dispensary tours. <br></br>Book now or contact us today to reserve your tour!
            </p> 
            <p style={{ width: "100%", margin: "auto", paddingTop: "1em" }}>
              We will contact you with all the details once your booking is confirmed.
            </p> 
          </Cell>
          <Cell>
            <h2>Contact Us</h2>
            <hr />

            <form
              col={6}
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
              autoComplete="on"
            >
              <div className="form-group">
                <label
                  htmlFor="name"
                  style={{ fontSize: "20px", fontFamily: "Anton" }}
                >
                  Name  
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  autoComplete="name"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputEmail1"
                  style={{ fontSize: "20px", fontFamily: "Anton" }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="message"
                  style={{ fontSize: "20px", fontFamily: "Anton" }}
                >
                  Message
                </label>
                <div>
                  <textarea
                    className="form-control"
                    rows="5"
                    id="message"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                  />{" "}
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </Cell>
        </Grid>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default Contact;
