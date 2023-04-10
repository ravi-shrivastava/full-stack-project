import "./App.css"
import React from "react";
import Jumbo from "./jumbotron";
import Header from "./Header";
// import Course from "./Course";
import AddCourse from "./Addcourse";
import { Container, Row , Col} from "reactstrap";
import LeftOptions from "./LeftOptions";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Allcourse from "./Allcourse";
import Contact from "./contact";
import Course from "./Course";

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}><LeftOptions /></Col>
            <Col md={8}>
              <Routes>
                <Route path="/Jumbo" element={<Jumbo />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<Allcourse />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
