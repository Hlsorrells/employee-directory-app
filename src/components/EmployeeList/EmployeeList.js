import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import EmployeeListItem from '../EmployeeListItem/EmployeeListItem';
import Search from '../Search/Search';
import employees from '../../lib/employees.json';


const EmployeeList = () => {
    const [employeeList, setEmployeeList] = useState(employees);

    const handleClick = () => {
        const sorted = () => [...employeeList].sort((a, b) => (a.id.value) > (b.id.value) ? 1 : -1);
        setEmployeeList(sorted);
    };

    return (
        <div>
            <Search
                employees={employees}
                filterList={setEmployeeList}
            />
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col">
                            <Button variant="link" id="id" onClick={(e) => { handleClick(e.target.id) }}>ID#</Button>
                        </th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {(employeeList.length > 0) ? employeeList.map((employee, index) => (
                        <EmployeeListItem
                            key={index}
                            id={employee.id}
                            name={employee.name}
                            image={employee.picture.thumbnail}
                            email={employee.email}
                            phone={employee.phone}
                        />
                    )) : <p>No employees</p>}
                </tbody>
            </Table>
        </div>
    );
}
export default EmployeeList;