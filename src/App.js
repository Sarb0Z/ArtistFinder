import React, { useEffect, useState, setError } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

//Higher Order Components
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
          url: `${process.env.REACT_APP_BASE_URL}/artists/${searchTerm}/?app_id=${process.env.REACT_APP_API_KEY}`,
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
          url: `${process.env.REACT_APP_BASE_URL}/${artistData.name}/events/?app_id=${process.env.REACT_APP_API_KEY}`,
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
