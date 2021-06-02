import Alert from "react-bootstrap/Alert";
import { Container, Row, Col } from "react-bootstrap";
const WarningSign = (props) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Alert variant={"danger"}>{props.message}</Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default WarningSign;
