import React from "react";
import {Image} from "react-bootstrap";

function Worker(props) {
  return (
    <tr>
        <td><Image src={props.image} rounded /></td>
        <td>{props.name}</td>
        <td>{props.role}</td>
        <td>{props.department}</td>
    </tr>
  );
}

export default Worker;