import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyBadge from "./components/MyBadge";
import WarningSign from "./components/WarningSign";
import fantasyBooks from "../src/data/fantasy.json";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import { Col } from "react-bootstrap";

function App() {
  return (
    <div className="App ">
      <WarningSign message="alert message to be displayed" />
      <MyBadge text="a text to display" color="danger" />
      <h3>Single Book</h3>
      <Col xs={2} className="mx-auto">
        <SingleBook book={fantasyBooks[0]} />
      </Col>

      <BookList category={fantasyBooks.filter((book, i) => i < 12)} />
    </div>
  );
}

export default App;
