import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, Container, Button } from 'reactstrap';

const Course = ({ title, description }) => {
  return (
    <Card className="text-center ml-2">
      <CardBody>
        <CardSubtitle className="font-weight-bold">{title}</CardSubtitle>
        <CardText>{description}</CardText>
      </CardBody>
      <Container>
        <Button color="danger">Delete</Button>
        <Button color="warning ml-3">Update</Button>
      </Container>
    </Card>
  );
};

export default Course;
