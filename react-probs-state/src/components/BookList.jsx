import React from "react";
import SingleBook from "./SingleBook";
import { FormControl, Row, Col, Container } from "react-bootstrap";
/* import SearchForm from "./SearchForm"; */
class BookList extends React.Component {
  state = {
    search: "",
  };
  render() {
    return (
      <>
        <h3>Book Lists</h3>
        <Container>
          <Row>
            <Col>
              {/*  <SearchForm
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
              /> */}
              <FormControl
                className="my-3"
                placeholder="Search"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
              />
            </Col>
          </Row>

          <Row>
            {this.props.category
              .filter(
                (book) =>
                  book.title.toLowerCase().indexOf(this.state.search) !== -1
              )
              .map((book) => (
                <Col xs={3}>
                  <SingleBook book={book} />
                  {console.log(book)}
                </Col>
              ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
