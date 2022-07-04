import Select from "react-select";
import { setArtistsToCache, getArtistsCache } from "../../Cache/artistsCache";
import React, { useState, useRef, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

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
    if (prevUser !== userId) {
      setArtist("");
    }
    const cache = getArtistsCache("ARTISTS_CACHE");
    if (userId in cache.data) {
      setArtist(cache.data[userId].artist);
    }
  }, [userId, artists]);

  const handleChange = (e) => {
    setArtistsToCache(userId, e.target.value);
    setArtist(e.target.value);
  };

  return (
    // <Select options={artists}/>
    <div>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        {artists.map((artist, index) => {

            <Dropdown.Item key={index} value={artist}>
              {artist}
            </Dropdown.Item>

        })}
      </DropdownButton>
    </div>
  );
};

export default Suggestions;
