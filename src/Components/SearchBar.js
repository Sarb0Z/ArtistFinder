
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router-dom';


const SearchBar = ({searchterm, setSearchTerm}) => {
    const history=useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchTerm}`);
        e.preventDefault();
    };
    return (
    <Form onSubmit={onSubmit}>
    <InputGroup className="col-6">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            value={searchTerm}
            onInput={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-secondary" id="button-addon2" type='submit'>
            Search
          </Button>
    </InputGroup>
    </Form>
    )
}

export default SearchBar;