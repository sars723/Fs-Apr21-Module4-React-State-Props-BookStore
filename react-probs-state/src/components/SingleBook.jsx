import { useState } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "../components/CommentArea";

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <Card
        onClick={() => {
          setSelected(!selected);
        }}
        style={{ border: selected ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
      {console.log(props.book.asin)}
      <CommentArea
        id={props.book.asin}
        image={props.book.img}
        selected={selected}
      />
    </>
  );
};
export default SingleBook;
/* import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from "../components/CommentArea";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          onClick={() => {
            this.setState({ selected: !this.state.selected });
          }}
          style={{ border: this.state.selected ? "3px solid red" : "none" }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
        {console.log(this.props.book.asin)}
        <CommentArea
          id={this.props.book.asin}
          image={this.props.book.img}
          selected={this.state.selected}
        />
      </>
    );
  }
}

export default SingleBook; */
