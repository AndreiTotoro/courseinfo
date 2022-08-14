import React from "react";

const Sum = ({parts}) => {
  const total = parts.reduce((sum, part) => {
    console.log(sum, part)
    return sum + part.exercises
  }, 0)
  return(
    <h3>total of {total} exercises</h3>
  )
}

export default Sum