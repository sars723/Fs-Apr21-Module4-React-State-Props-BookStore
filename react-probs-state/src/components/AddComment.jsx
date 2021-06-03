import React, { Component } from "react";

class AddComment extends Component {
  state = {
    comments: {
      email: "",
      rate: 0,
      comment: "",
    },
  };
  submitComment = (e) => {
    this.setState({
      comments: {
        [e.target.id]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div>
        <Form className="mb-5" onSubmit={(e) => this.submitComment(e)}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={this.state.comments.name}
              id="name"
              // with value I'm reflecting into the input what I have into the state
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
              <option>6</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.comments.comment}
              id="comment"
              onChange={this.inputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default AddComment;
