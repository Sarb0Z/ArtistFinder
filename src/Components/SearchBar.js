
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Search } from "react-bootstrap-icons";


const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Form className="Form">
      <InputGroup className="mb-3 col-sm-3">
        <FormControl
          placeholder="Search for Artists"
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2">
          <Search/>
        </Button>
      </InputGroup>
    </Form>

  );
};

export default SearchBar;
