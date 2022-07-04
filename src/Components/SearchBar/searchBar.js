
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Search } from "react-bootstrap-icons";
import Dropdown from "../Suggestions/dropDownList";


const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = () => {
    console.group('Input Changed');

    console.groupEnd();
  };
  const Users =[
    { 
      "id":"1",
      "name":"xyz",
      "artists":["Atif Aslam","Taylor Swift","Kanye"],
    }
  ]
  return (
    <div>
    <Form className="Form">
      <InputGroup className="mb-3 col-sm-3">
        <FormControl id="searchbar"
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
  {/* <Dropdown userId={Users.id} artists={Users.artists}/> */}
    </div>

  );
};

export default SearchBar;
