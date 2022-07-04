import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./Styles/App.css"

//Higher Order Components
import Header from "./Components/NavBar/header";
import SearchBar from "./Components/SearchBar/searchBar";
import ArtistCard from "./Components/Artist/artistCard";
import EventCard from "./Components/Events/eventCard";
//import Suggestions from "./Components/Suggestions/mapSuggestions";

//api request functions
import fetchArtist from "./api/fetchArtistData";
import fetchEvent from "./api/fetchEventData";
import Suggestions from "./Components/Suggestions/dropDownList";
//import users from "./Cache/data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [artistData, setArtistData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [flag, setFlag] = useState(false);

  // const [today, setToday] = useState(false);
  // const [upcoming, setUpcoming] = useState(false);
  // const [date, setDate] = useState(new Date());

  //will re-render artist card once search query is changed
  useEffect(
    () => fetchArtist(searchTerm, setFlag, setArtistData),
    [searchTerm]
  );

  //will render events list when event info button is clicked
  useEffect(() => fetchEvent(artistData.name, setEventData), [flag]);

  return (
    <div className="App">
      <Header
        className="Header"
        // setToday={setToday}
        // setUpcoming={setUpcoming}
        // setDate={setDate}
      />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {searchTerm ? <ArtistCard artist={artistData} setFlag={setFlag} /> : null}
      {flag && searchTerm ? (
        <EventCard
          eventData={eventData}
          // today={today}
          // upcoming={upcoming}
          // date={date}
        />
      ) : null}
    </div>
  );
}

export default App;
