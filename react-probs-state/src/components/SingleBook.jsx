import { Card, Container, Row, Col } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";

const SingleBook = ({ props, search }) => {
  return (
    <Container>
      <Row>
        {props.map((book) => (
          <Col xs={12} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SingleBook;
