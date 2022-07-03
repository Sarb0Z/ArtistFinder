import React, { setError } from 'react';
import axios from "axios";

export default function fetchArtist(searchTerm, setFlag, setArtistData){
    
    (async () => {
        try {
          const artist = await axios.request({
            method: "GET",
            url: `${process.env.REACT_APP_BASE_URL}/artists/${searchTerm}/?app_id=${process.env.REACT_APP_API_KEY}`,
          });
          setArtistData(artist.data);
          setFlag(false);
        } catch (error) {
          // setError(error);
          console.log(error);
        }
      })();
}

