import React, { useEffect, useState, setError } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


import SearchBar from "./Components/SearchBar";
import ArtistCard from "./Components/artistCard";
import EventCard from "./Components/eventCard";

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
      {flag && searchTerm ? <EventCard eventData={eventData} /> : null}
    </div>
  );
}

export default App;
