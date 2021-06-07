import Jumbotron from "react-bootstrap/Jumbotron";
import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
/* import BreadCrumbs from "./BreadCrumbs"; */
class HeaderJumbotron extends Component {
  render() {
    return (
      <>
        <Jumbotron fluid>
          <Container>
            <h2 style={{ color: "#28ae61" }}>CHOOSE YOUR BRAIN FOOD</h2>
            <h2>SALES UP TO 70% OFF</h2>
            <div className="d-flex justify-content-center">
              {/* <BreadCrumbs /> */}
            </div>

            <div className="d-flex justify-content-around mt-5">
              <p>
                <Button
                  variant="primary"
                  className="btn btn-outline-light bg-success border-none"
                >
                  LEARN MORE
                </Button>
              </p>
              <p>
                <Button
                  variant="primary"
                  className="btn btn-outline-light bg-success border-none"
                >
                  SHOP NOW
                </Button>
              </p>
            </div>
          </Container>
        </Jumbotron>
      </>
    );
  }
}

export default HeaderJumbotron;
