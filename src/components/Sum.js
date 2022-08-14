import React from "react";

const Sum = ({parts}) => {
  const total = parts.reduce((sum, part) => {
    console.log(sum, part)
    return sum + part.exercises
  }, 0)
  return(
    <p>total of {total} exercises</p>
  )
}

export default Sum