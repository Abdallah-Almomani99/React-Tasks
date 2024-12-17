import React from "react";
import PropTypes from "prop-types";

const Student = (props) => {
  return (
    <div>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Is Student : {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
};
export default Student;
