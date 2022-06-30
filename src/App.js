import React, { useEffect, useState, useRef, setError } from "react";
import SearchBar from "./Components/SearchBar";
import axios from "axios"

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [artistData, setArtistData]= useState([]);
  const controllerRef = useRef(new AbortController());

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request({
          signal: controllerRef.current.signal,
          method: "GET",
          url: `https://rest.bandsintown.com/artists/${searchTerm}/?app_id=abc`,
        });
        setArtistData(response.data.name);
      } catch (error) {
        setError(error);
      } 
    })();
  }, [searchTerm]);
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
