import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom"
import SignupModal from "./signupmodal";
import LogInModal from "./login";
import About from "./about";
import { Modal, Card, CardTitle } from "reactstrap";
import AuthProvider, { AuthContext } from "../contexts/authProvider";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      modalAbout: false,
      modalSignup: false,
      modalLogin: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(type) {
    if (type === "about") {
      this.setState({ modalAbout: !this.state.modalAbout });
    } else if (type === "sign up") {
      this.setState({ modalSignup: !this.state.modalSignup });
    } else {
      this.setState({ modalLogin: !this.state.modalLogin });
    }
  }

  render() {

    return (
    <AuthContext.Consumer>
      {data => {
        return (

          <Fragment>
        <Card id="wrapper">
          <CardTitle id="header">

                  {" "}
                  <i className="far fa-envelope-open" />
                  {data.header}


                <p>
                  Demo landing page made by <br />
                  Don't Email Team
                </p>

            <nav>
              <a onClick={() => this.toggle("about")}>About</a>
              <br />
              <Link to="/register">Sign Up</Link>
              <br />
              <Link to="/login">Log In</Link>
            </nav>
          </CardTitle>

          <Modal
            isOpen={this.state.modalAbout}
            toggle={() => this.toggle("about")}
            className={this.props.className}
            >
            <About />
          </Modal>



        </Card>

        <div id="bg" />
      </Fragment>
          )
      }}
  </AuthContext.Consumer>
    );
  }
}
export default Landing;
