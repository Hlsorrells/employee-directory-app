import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Search = ({ employees, filterList }) => {
    const handleChange = (query) => {
        const filtered = employees.filter(person => {
            const name = `${person.name.title} ${person.name.first} ${person.name.last}`;
            return name.toLowerCase().includes(query.toLowerCase());
        });

        filterList(filtered)
    }

    return (
        <InputGroup className="mb-3" onChange={(e) => handleChange(e.target.value)}>
            <FormControl
                placeholder="Employee Name"
                aria-label="Employee Name"
                aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
                <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default Search;