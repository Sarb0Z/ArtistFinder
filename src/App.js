import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState(query || '');
  const [artistData, setArtistData]= useState([]);
  
  useEffect(() => {
    fetch("https://rest.bandsintown.com/artists/$`{artistname}`/?app_id=123")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setArtistData(data.message))
  },[])
  
  return (
    <div className="App">
      <SearchBar
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}/>
    </div>
  );
}

export default App;
