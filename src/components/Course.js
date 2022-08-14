import React from "react";
import Part from "./Part";
import Sum from "./Sum"


const Course = ({course}) => {
  return(
    <div>
    <h1>{course.name}</h1>
    <ul>
      {course.parts.map(part => <Part key={part.id} part={part} />)}
    </ul>
    <Sum parts={course.parts} />
    </div>
  )
}

export default Course