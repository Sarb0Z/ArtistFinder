import React, { useEffect, useState, setError } from "react";
import axios from "axios";

import SearchBar from "./Components/SearchBar";
import ArtistCard from "./Components/artistCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [artistData, setArtistData] = useState([]);
  const [eventData, setEventData] = useState([]);
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

  useEffect(() => {
    (async () => {
      try {
        const event = await axios.request({
          method: "GET",
          url: `https://rest.bandsintown.com/artists/${artistData.name}/events/?app_id=abc`,
        });
        setEventData(event.data);
      } catch (error) {
        setError(error);
      }
    })();
  }, [flag]);

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {searchTerm ? <ArtistCard artist={artistData} setFlag={setFlag} /> : null}
      {flag && searchTerm ? (
        <ul>
          {eventData.map((r) => (
            <li key={r.id}>
              {r.venue.name} - {r.description}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default App;
