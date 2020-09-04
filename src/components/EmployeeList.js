import React from "react";
import Card from "./Card";
import {Table} from "react-bootstrap";
import Employees from "../Employees.json";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

// By importing the Section.css file, it is added to the DOM whenever this component loads

function EmployeeList(props) {
  const [search, setSearch] = useState("");
  const [listData, setListData] = useState(Employees);

  const filteredEmployees = Employees.filter(employees => {
    return employees.name.toLowerCase().includes(search.toLowerCase());
  })

  function handleClick(event){
    event.preventDefault();
    console.log(filteredEmployees);
    setListData(filteredEmployees.sort((a, b) => (a.name > b.name) ? 1 : -1));
  } 

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log(listData);
    console.log(filteredEmployees);
  });

  function handleChange(event){
    setSearch(event.target.value);
    setListData(filteredEmployees);
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
        {listData.map(employee => {
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
