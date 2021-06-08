import { useState } from "react";
import { Col, Container, Row, Form, Button, ListGroup } from "react-bootstrap";
import CommentsList from "../components/CommentsList";

const CommentArea = (props) => {
  const [comments, setComments] = useState({
    comment: "",
    rate: 1,
    elementId: "",
  });
  const [updatedComments, setUpdatedComments] = useState([]);

  const inputChange = (e) => {
    setComments({
      ...comments,
      [e.target.id]: e.target.value,
    });
  };

  const submitComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjI3MjA1MzAsImV4cCI6MTYyMzkzMDEzMH0.OTc-m0erU3r4uTPFifXTrLY5-jzZVD5IRHs1arBxFCc",
          },
          body: JSON.stringify(comments),
        }
      );
      if (response.ok) {
        alert("comment saved!");

        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            comments.elementId,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjI3MjA1MzAsImV4cCI6MTYyMzkzMDEzMH0.OTc-m0erU3r4uTPFifXTrLY5-jzZVD5IRHs1arBxFCc",
              "Content-type": "application/json",
            },
          }
        );
        console.log(response);
        console.log(props.selected);
        setUpdatedComments(await response.json());

        setComments({
          comment: "",
          rate: 0,
          elementId: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <h3>Comment Area</h3>
      <Row>
        <Col xs={12}>
          {console.log(props.id)}
          <CommentsList
            id={props.id}
            image={props.image}
            selected={props.selected}
            updatedComments={updatedComments}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form className="mb-5" onSubmit={(e) => submitComment(e)}>
            <Form.Group>
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comments.comment}
                id="comment"
                onChange={(e) => inputChange(e)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Give you rate:</Form.Label>
              <Form.Control
                as="select"
                value={comments.rate}
                id="rate"
                onChange={(e) => inputChange(e)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter id"
                value={comments.elementId}
                id="elementId"
                onChange={(e) => inputChange(e)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default CommentArea;

/* import React, { Component } from "react";
import { Col, Container, Row, Form, Button, ListGroup } from "react-bootstrap";
import CommentsList from "../components/CommentsList";

class CommentArea extends Component {
  state = {
    comments: {
      comment: "",
      rate: 1,
      elementId: "",
    },
    updatedComments: [],
  };
  inputChange = (e) => {
    this.setState({
      comments: {
        ...this.state.comments,
        [e.target.id]: e.target.value,
      },
    });
  };

  submitComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjI3MjA1MzAsImV4cCI6MTYyMzkzMDEzMH0.OTc-m0erU3r4uTPFifXTrLY5-jzZVD5IRHs1arBxFCc",
          },
          body: JSON.stringify(this.state.comments),
        }
      );
      if (response.ok) {
        alert("comment saved!");

        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.state.comments.elementId,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjI3MjA1MzAsImV4cCI6MTYyMzkzMDEzMH0.OTc-m0erU3r4uTPFifXTrLY5-jzZVD5IRHs1arBxFCc",
              "Content-type": "application/json",
            },
          }
        );
        console.log(response);
        console.log(this.props.selected);
        this.setState({
          updatedComments: await response.json(),
          isLoading: false,
        });
        this.setState({
          comments: {
            comment: "",
            rate: 0,
            elementId: "",
          },
        });
       
      }
    } catch (err) {
      console.log(err);
    }
  };
 
  render() {
    return (
      <Container>
        <h3>Comment Area</h3>
        <Row>
          <Col xs={12}>
            {console.log(this.props.selected)}
            <CommentsList
              id={this.props.id}
              image={this.props.image}
              selected={this.props.selected}
              updatedComments={this.state.updatedComments}
              
            />
     
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form className="mb-5" onSubmit={(e) => this.submitComment(e)}>
              <Form.Group>
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={this.state.comments.comment}
                  id="comment"
                  onChange={(e) => this.inputChange(e)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Give you rate:</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.comments.rate}
                  id="rate"
                  onChange={(e) => this.inputChange(e)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Id</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter id"
                  value={this.state.comments.elementId}
                  id="elementId"
                  onChange={(e) => this.inputChange(e)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default CommentArea;





 */
