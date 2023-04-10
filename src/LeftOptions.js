import React from "react";
import Allcourse from "./Allcourse";
import Course from "./Course";

import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
const LeftOptions = () =>{
    return(

        <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/Jumbo" action>
            Home
        </Link> 

        <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>
            Add Course
        </Link>

        <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>
            View Courses
        </Link>  

        <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>
            About
        </Link>

        <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>
            Contact
        </Link>
          
        </ListGroup>
    )
}

export default LeftOptions;