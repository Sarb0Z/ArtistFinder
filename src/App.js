import React, { useEffect, useState, setError } from "react";
import axios from "axios";

import SearchBar from "./Components/SearchBar";
import ArtistCard from "./Components/artistCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [artistData, setArtistData] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const artist = await axios.request({
          method: "GET",
          url: `https://rest.bandsintown.com/artists/${searchTerm}/?app_id=abc`,
        });
        setArtistData(artist.data);
        setFlag(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, [searchTerm]);
  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {searchTerm ? <ArtistCard artist={artistData} setFlag={setFlag} /> : null}
    </div>
  );
}

export default App;
