
// import React from 'react';
// import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";



const SearchBar = ({searchTerm, setSearchTerm}) => {
    // const history=useHistory();
    // const onSubmit = (e) => {
    //     history.push(`?s=${searchTerm}`);
    //     e.preventDefault();
    // };
    return (
    <Form>
    <InputGroup className="col-6">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
    </InputGroup>
    </Form>
    )
}

export default SearchBar;