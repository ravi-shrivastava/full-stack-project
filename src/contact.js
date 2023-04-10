import React, { Fragment } from "react";
import { FormGroup, Form, Label, Input, Button, Container } from "reactstrap";

const Contact = () => {
  return (
    <Fragment>
      <Form>
        <FormGroup>
          <h1 className="text-center my-3 bg-warning">Contact Us</h1>
          <Label for="userId">Course Id</Label>
          <Input type="text" placeholder="Enter here" name="user" id="userId" />
        </FormGroup>
      </Form>


      <FormGroup>
        <label for="title">Course Title </label>
        <Input type="text" placeholder="Enter the title here" id="title"/>
      </FormGroup>

      <FormGroup>
        <label for="description" type="textarea"  id="description">Course feedback description</label>
        <Input type="textarea" name="text" id="exampleText"  placeholder="Enter the feedback here" />
      </FormGroup>
    <Container className="text-center">
      <Button color="success">
        Submit
      </Button>

      <Button color="primary ml-2">
        Clear
      </Button>
      </Container>
    </Fragment>
  );
};

export default Contact;
