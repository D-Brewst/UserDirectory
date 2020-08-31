import React from "react";
import Card from "./Card";
import {Table} from "react-bootstrap";
import Employees from "../Employees.json";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

// By importing the Section.css file, it is added to the DOM whenever this component loads
function EmployeeList(props) {
  const [search, setSearch] = useState("");
  // const [alphabetical, setAlphabetical] = useState([Employees]);

  const filteredEmployees = Employees.filter(employees => {
    return employees.name.toLowerCase().includes(search.toLowerCase());
  })

  function handleClick(event){
    return filteredEmployees.sort((a, b) => (a.name > b.name) ? 1 : -1);
  } 

  function handleChange(event){
    setSearch(event.target.value);
  }

  return (
    <div>
      <header className="header">
      <Form>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control type="text" placeholder="Enter employee name" onChange={handleChange} value={search}/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleClick}>
              Sort Employees Alphabetically
          </Button>
      </Form>
    </header>
    <Table striped bordered hover>
      <thead>
      <tr>
          <th>Employee</th>
          <th>Employee Name</th>
          <th>Employee Role</th>
          <th>Employee Department</th>
      </tr>
      </thead>
      <tbody>
        {filteredEmployees.map(employee => {
          return (<Card 
            key= {employee.id}
            name= {employee.name}
            image= {employee.image}
            role= {employee.role}
            department= {employee.department}
          />);
        }) }
      </tbody>
  </Table>
</div>
  );
}

export default EmployeeList;
