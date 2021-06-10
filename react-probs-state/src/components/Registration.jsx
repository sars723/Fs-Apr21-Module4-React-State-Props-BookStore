import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

class Registration extends Component {
  state = {
    registration: {
      name: "",
      surName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },

    nameErr: "",
    surNameErr: "",
    emailErr: "",
    passwordErr: "",
    passwordConfirmErr: "",
    formValid: true,
  };
  inputChange = (e) => {
    this.setState(
      {
        registration: {
          ...this.state.registration,
          [e.target.id]: e.target.value,
        },
      },
      () => {
        console.log(this.state.registration);
      }
    );
  };
  handleValidation = () => {
    if (this.state.registration.name.length < 2) {
      this.setState({
        nameErr: "Name must be at least 2 characters long",
      });
      this.setState({ formValid: false });
    }
    if (this.state.registration.surName.length < 3) {
      this.setState({
        surNameErr: "Surname must be at least 3 characters long",
      });
      this.setState({ formValid: false });
    }
    /*   if (
      this.state.registration.email.length < 2 ||
      this.state.registration.email.indexOf("@") === -1 ||
      this.state.registration.email.indexOf(".") === -1
    ) {
      this.setState({ emailErr: true });
    } */
    if (this.state.registration.password.length < 8) {
      this.setState({
        passwordErr: "password must be at least 8 charachters long",
      });
      this.setState({ formValid: false });
    }
    if (
      this.state.registration.passwordConfirm !==
      this.state.registration.password
    ) {
      this.setState({
        passwordConfirmErr: "password not the same",
      });
      this.setState({ formValid: false });
    }
  };
  submitRegistration = (e) => {
    e.preventDefault();
    this.handleValidation();
    if (this.state.formValid) {
      alert("form  valid");
    }
  };
  render() {
    return (
      <Container>
        <h3 className="mb-5">Registration Form</h3>
        <Row>
          <Col xs={12}></Col>
        </Row>
        <Row>
          <Col xs={6} className="mx-auto ">
            <Form className="mb-5" onSubmit={(e) => this.submitRegistration(e)}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={this.state.registration.name}
                  id="name"
                  onChange={(e) => this.inputChange(e)}
                  required
                />
              </Form.Group>
              <div style={{ color: "red" }}>{this.state.nameErr}</div>
              <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Surname"
                  value={this.state.registration.surName}
                  id="surName"
                  onChange={(e) => this.inputChange(e)}
                  required
                />
              </Form.Group>
              <div style={{ color: "red" }}>{this.state.surNameErr}</div>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  id="email"
                  value={this.state.registration.email}
                  onChange={(e) => this.inputChange(e)}
                  required
                />
              </Form.Group>
              <div style={{ color: "red" }}>{this.state.emailErr}</div>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  label="Enter Password"
                  value={this.state.registration.password}
                  id="password"
                  onChange={(e) => this.inputChange(e)}
                  required
                />
              </Form.Group>
              <div style={{ color: "red" }}>{this.state.passwordErr}</div>
              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  label="Confirm Password"
                  value={this.state.registration.passwordConfirm}
                  id="passwordConfirm"
                  onChange={(e) => this.inputChange(e)}
                  required
                />
              </Form.Group>
              <div style={{ color: "red" }}>
                {this.state.passwordConfirmErr}
              </div>
              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Registration;
