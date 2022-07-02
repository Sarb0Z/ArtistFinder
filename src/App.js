import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

//Higher Order Components
import SearchBar from "./Components/SearchBar";
import ArtistCard from "./Components/artistCard";
import EventCard from "./Components/eventCard";

//api request functions
import fetchArtist from "./api/fetchArtistData";
import fetchEvent from "./api/fetchEventData";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [artistData, setArtistData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [flag, setFlag] = useState(false);

  //will re-render artist card once search query is changed
  useEffect(() => fetchArtist(searchTerm, setFlag, setArtistData), [searchTerm]);

  //will render events list when event info button is clicked
  useEffect(() => fetchEvent(artistData.name, setEventData), [flag]);

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {searchTerm ? <ArtistCard artist={artistData} setFlag={setFlag} /> : null}
      {flag && searchTerm ? <EventCard eventData={eventData} /> : null}
    </div>
  );
}

export default App;
