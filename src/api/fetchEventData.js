import React, { setError } from 'react';
import axios from "axios";

export default function fetchEvent(name, setEventData){
    (async () => {
        try {
          const event = await axios.request({
            method: "GET",
            url: `${process.env.REACT_APP_BASE_URL}/artists/${name}/events/?app_id=${process.env.REACT_APP_API_KEY}`,
          });
          setEventData(event.data);
        } catch (error) {
          setError(error);
        }
      })();
}