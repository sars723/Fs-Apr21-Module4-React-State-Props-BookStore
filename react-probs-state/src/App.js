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
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Registration from "./components/Registration";

function App() {
  return (
    <div className="App ">
     <Router> 
       <MyNav/>
       <Route path="/Home"  component={Welcome} />
      {/* <Welcome/> */}
    {/*   <Route path="/HOme" exact render={routerProps=><WarningSign {...routerProps} message="alert message to be displayed" />}/> */}
    {/*   <WarningSign message="alert message to be displayed" /> */}
      {/* <MyBadge text="Warning" color="danger" /> */}
   {/*    <h3>Single Book</h3>
      
      <Col xs={3} className="mx-auto">
        <SingleBook book={fantasyBooks[0]} />
      </Col> */}
     
     {/*  <BookList category={fantasyBooks.filter((book, i) => i < 12)} /> */}
      <Route path="/Home" exact render={routerProps=><BookList {...routerProps} category={fantasyBooks.filter((book, i) => i < 12)} />}/>
   {/*    <MyFooter/> */}

  <Route path="/register" exact render={routerProps=><Registration {...routerProps}/>}/>

  </Router>

    </div>
    
  );
}

export default App;
