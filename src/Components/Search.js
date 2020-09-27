import React from "react";
import { Form } from "react-bootstrap";

const Search = (props) => {
  return (
    <Form className="d-flex">
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Description"
          name="description"
          onChange={props.change}
        />
      </Form.Group>
      <Form.Group className="ml-2">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Location"
          name="location"
          onChange={props.change}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox" className="mt-5 ml-3">
        <Form.Check
          type="checkbox"
          label="Full Time"
          value="true"
          name="full_time"
          onClick={props.change}
        />
      </Form.Group>
    </Form>
  );
};

export default Search;
