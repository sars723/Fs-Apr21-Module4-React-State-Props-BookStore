import { Component } from "react";
import React from "react";
import { FormControl } from "react-bootstrap";

class SearchForm extends Component {
  render() {
    return (
      <FormControl
        className="my-3"
        placeholder="Search"
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default SearchForm;
