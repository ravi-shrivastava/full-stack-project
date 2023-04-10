import React, { Fragment } from "react";
import { FormGroup, Form, Label, Input, Button, Container } from "reactstrap";

const AddCourse = () => {
  return (
    <Fragment>
      <Form>
        <FormGroup>
          <h1 className="text-center my-3 bg-warning">Fill course details</h1>
          <Label for="userId">Course Id</Label>
          <Input type="text" placeholder="Enter here" name="user" id="userId" />
        </FormGroup>
      </Form>


      <FormGroup>
        <label for="title">Course Title </label>
        <Input type="text" placeholder="Enter the title here" id="title"/>
      </FormGroup>

      <FormGroup>
        <label for="description" type="textarea"  id="description">Course description</label>
        <Input type="textarea" name="text" id="exampleText"  placeholder="Enter the description here" />
      </FormGroup>
    <Container className="text-center">
      <Button color="success">
        Add Course
      </Button>

      <Button color="warning ml-2">
        Clear
      </Button>
      </Container>
    </Fragment>
  );
};

export default AddCourse;
