import { getArtistsCache, setArtistsToCache } from "../../Cache/artistsCache";
import Select from 'react-select';
import React, { useState, useEffect, useRef } from "react";


const Suggestions = (props) => {
  const [artist, setArtist] = useState("");
  const { userId, artists } = props;

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevUser = usePrevious(userId);

  useEffect(() => {
    if (prevUser !== props.userId) {
      setArtist("");
    }
    const cache = getArtistsCache("ARTISTS_CACHE");
    if (props.userId in cache.data) {
      setArtist(cache.data[props.userId].artist);
    }
  }, [userId, artists]);

  const handleChange = (e) => {
    setArtistsToCache(props.userId, e.target.value);
    setArtist(e.target.value);
  };

//   const searchList = projectList.map(
//     ({ project_name }) => {
//       return{ 
//        value: project_name, 
//        label: project_name 
//       }
//      }
//     );

return (
    <div>
     <Select
       value={artist}
       options={props.artists}
       onChange={handleChange}
       placeholder= "Search..."
       openMenuOnClick={false}
     />
    </div>
   )
};

export default Suggestions;