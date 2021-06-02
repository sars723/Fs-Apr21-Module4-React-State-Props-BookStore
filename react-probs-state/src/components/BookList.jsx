import React from "react";
import SingleBook from "./SingleBook";
import { FormControl } from "react-bootstrap";
const BookList = ({ props }) => {
  return (
    <>
      <h3>Book Lists</h3>
      <FormControl className="my-3" placeholder="Search" />
      <SingleBook props={props} />
    </>
  );
};

export default BookList;
