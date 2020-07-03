import React, { useState } from "react";
import EmployeeListItem from '../EmployeeListItem/EmployeeListItem';
import Search from '../Search/Search';
import employees from '../../lib/employees.json';


const EmployeeList = () => {
    const [employeeList, setEmployeeList] = useState(employees)

    return (
        <div>
            <Search
                employees={employees}
                filterList={setEmployeeList}
            />
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Photo</th>
                            <th scope="col">ID#</th>
                            <th scope="col">Name</th>
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
                </table>
            </div>
        </div>

    );
}
export default EmployeeList;