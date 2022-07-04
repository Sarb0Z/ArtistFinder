import "../Styles/styles.css";
import { Download, Envelope } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const EventCard = (props) => {
  const returnDate = (datetime) => {
    let date = new Date(Date.parse(datetime));
    return date.toLocaleDateString();
  };
  const returnTime = (datetime) => {
    let date = new Date(Date.parse(datetime));
    return date.toLocaleTimeString();
  };

  const CardDate = () => {
    let dateQuery=new Date(Date.parse(props.eventData.datetime));
    let list=props.eventData;

    // useEffect(()=>{
    //   if (props.date){
    //     setList(props.eventData.filter((data)=>Date.parse(data.datetime)===Date.parse(props.date)));
    //   }
    //   else if (props.upcoming){
    //     setList(props.eventData.filter((data)=>Date.parse(data.datetime)>dateQuery));
    //   }
    //   else if (props.today){
    //     setList(props.eventData.filter((data)=>Date.parse(data.datetime)===dateQuery));
    //   }
    // },[props.today, props.upcoming, props.date]);

    return (
      <>
          {list.map((r) => (
            <div className="card-body">
              <ul>
                <li className="event-container" key={r.id} id={"id" + r.id}>
                  <h6 className="card-text">{r.lineup}</h6>
                  <h5>Date: {returnDate(r.datetime)}</h5>
                  <h5>Time: {returnTime(r.datetime)}</h5>
                  <h5>Venue: {r.venue.name}</h5>
                  <h5>City: {r.venue.city}</h5>
                  <h5>Country: {r.venue.country}</h5>
                  {r.offers.status ? (
                    <h5>Tickets Available: {r.offers.status}</h5>
                  ) : null}
                  {r.description ? <h5>Description: {r.description}</h5> : null}
                  
                  <Button
                    className="download-container"
                    variant="secondary"
                    disabled={!r.offers.status}
                    href={r.offers.url}
                  >
                    Buy Ticket <Download id="d-b" />
                  </Button>
                  <Button
                    className="download-container"
                    variant="secondary"
                  >
                    Leave Review <Envelope id="r-b" href={r.url} />
                  </Button>
                </li>
              </ul>
            </div>
          ))}
        </>
    )


  }
  return (
    <div className="card">
      {props.eventData[0] ? (
        CardDate()
      ) : (
        <div className="card-body">
          <p>No events registered!</p>
        </div>
      )}
    </div>
  );
};

export default EventCard;
