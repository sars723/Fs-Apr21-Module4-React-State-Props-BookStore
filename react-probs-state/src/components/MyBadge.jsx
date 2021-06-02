import { Badge, Button } from "react-bootstrap";

const MyBadge = ({ text, color }) => {
  return (
    <div>
      <Button variant={color}>
        {text || "something"} <Badge bg={color}>9</Badge>
        <span className="visually-hidden">{text || "something"}</span>
      </Button>
      {/* <Badge bg={color}>{text || "something"}</Badge>{" "} */}
    </div>
  );
};

export default MyBadge;
