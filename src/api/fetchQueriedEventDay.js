import React, { setError } from 'react';
import axios from "axios";

export default function fetchQueriedEvent(name, setEventData, today, upcoming, date){

    (async () => {
        try {
          const event = await axios.request({
            method: "GET",
            url: `${process.env.REACT_APP_BASE_URL}/artists/${name}/events/?app_id=${process.env.REACT_APP_API_KEY}`,
          });
          if (today){
            const today=new Date();
        
            const list=event.data.filter((r)=>{
                const dateObj=new Date(r.datetime);
                return dateObj.getTime()===today.getTime();
            })
            setEventData(list);
          }
          else if (upcoming){
            const list=event.data.filter((r)=>{
                const dateObj=new Date(r.datetime);
                return dateObj.getDate()>today.getDate();
            })
            setEventData(list);
          }
          else {
            const list=event.data.filter((r)=>{
                const dateObj=new Date(r.datetime);
                const dateObjGiven= new Date(date);
                return dateObj.getTime()===dateObjGiven.getTime();
            })
            setEventData(list);
          }

        } catch (error) {
          // setError(error);
          console.log(error);
        }
      })();
}