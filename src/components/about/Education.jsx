import React from "react";
import "./education.css";
const Education = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Course</td>
          {/* <td>Department</td> */}
          <td>University</td>
          <td>Year</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>B.tech ( Computer Sc. & Engineering )</td>
          {/* <td>CSE</td> */}
          <td>Dr. A.P.J. Abdul Kalam Technical University</td>
          <td>2019</td>
        </tr>
        <tr>
          <td>12th</td>
          {/* <td></td> */}
          <td>U.P. Board</td>
          <td>2015</td>
        </tr>
        <tr>
          <td>10th</td>
          {/* <td></td> */}
          <td>U.P. Board</td>
          <td>2013</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Education;
