import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyBadge from "./components/MyBadge";
import WarningSign from "./components/WarningSign";
import fantasyBooks from "../src/data/fantasy.json";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import { Col } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import MyNav from "./components/MyNav";
import Welcome from './components/Welcome'
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App ">
      <MyNav/>
      <Welcome/>
      <WarningSign message="alert message to be displayed" />
      <MyBadge text="Warning" color="danger" />
      <h3>Single Book</h3>
      {/* <CommentArea /> */}
      <Col xs={3} className="mx-auto">
        <SingleBook book={fantasyBooks[0]} />
      </Col>

      <BookList category={fantasyBooks.filter((book, i) => i < 12)} />
      <MyFooter/>
    </div>
  );
}

export default App;
