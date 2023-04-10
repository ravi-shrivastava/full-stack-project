import React, { useState , useEffect } from "react";
import Course from "./Course";
import { Button } from "reactstrap";
import base_url from "./Api/bootapi";
import axios from "axios";


const Allcourse = () => {
 
  //function call

  const getAllCoursesFromServer=()=>{
    axios.get(`${base_url}\courses`).then(
      (Response)=>{

      },
      console.error(error);
    )
  }


  
   

  const [courses, setCourses] = useState([
    { title: "Java Course", description: "this just testing" },
    { title: "C++ Course", description: "this just C++" },
    { title: "React Course", description: "this just React" }
  ]);

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of courses are as follows</p>

      {courses.length > 0 ? (
        courses.map(item => <Course title={item.title} description={item.description} />)
      ) : (
        "No Courses present"
      )}
    </div>
  );
};

export default Allcourse;
