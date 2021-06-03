import React, { Component } from "react";
import { Col, Container, Row, Form, Button, ListGroup } from "react-bootstrap";
import CommentsList from "../components/CommentsList";

class CommentArea extends Component {
  state = {
    comments: {
      comment: "",
      rate: 0,
      elementId: "",
    },
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
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjI3MjA1MzAsImV4cCI6MTYyMzkzMDEzMH0.OTc-m0erU3r4uTPFifXTrLY5-jzZVD5IRHs1arBxFCc",
            "Content-type": "application/json",
          },
          body: JSON.stringify(this.state.comments),
        }
      );
      if (response.ok) {
        alert("comment saved!");
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
            <CommentsList id={this.props.id} image={this.props.image} />
            {/* <ListGroup>
              {this.state.comments.map((comment) => (
                <>
                  <ListGroup.Item key={comment._id}>
                    {comment.name}
                  </ListGroup.Item>
                  <ListGroup.Item key={comment._id}>
                    {comment.rate}
                  </ListGroup.Item>
                  <ListGroup.Item key={comment._id}>
                    {comment.comment}
                  </ListGroup.Item>
                </>
              ))}
            </ListGroup> */}
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
                  // with value I'm reflecting into the input what I have into the state
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
