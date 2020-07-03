import React from "react";

const EmployeeListItem = employee => {
    return (
        <tr>
            <td><img src={employee.image} alt="employee"/></td>
            <td>{employee.id.value}</td>
            <td>{employee.name.title} {employee.name.first} {employee.name.last}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
        </tr>
    )
}

export default EmployeeListItem;