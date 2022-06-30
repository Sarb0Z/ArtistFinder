import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import axios from "axios"




function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [artistData, setArtistData]= useState([]);
  useEffect(() => {
    
    axios.get(`https://rest.bandsintown.com/artists/${searchTerm}/?app_id=abc`
    , {
      headers: {"Access-Control-Allow-Origin": "*"}
    })
    .then((response) => console.log(response.data));
  }, []);
  return (
    <div className="App">
      <SearchBar
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}/>
      <span>{artistData}</span>

      
    </div>
  );
}

export default App;
