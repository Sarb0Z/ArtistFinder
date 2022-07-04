import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";

// import { getArtistsCache, setArtistsToCache } from '../Cache/artistsCache';

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

