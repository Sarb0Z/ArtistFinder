import "./styles.css";
import { Button } from "react-bootstrap";
const returnDate = (datetime)=>{
    let date = new Date( Date.parse(datetime) );
    return date;

}
const EventCard = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <ul>
          {props.eventData.map((r) => 
            (
            <li key={r.id}>
            
              <h5>Date:{" "}
                {returnDate(r.datetime).getDate()}/{returnDate(r.datetime).getMonth()}/{returnDate(r.datetime).getFullYear()}
              </h5>
              <h5>Time:{" "}
                {returnDate(r.datetime).getHours()}:{returnDate(r.datetime).getMinutes()}
              </h5>
              <h5>Venue: {r.venue.name}</h5>
              <h5>City: {r.venue.city}</h5>
              <h5>Country: {r.venue.country}</h5>
              {r.offers.status ? (
                <h5>Tickets Available: {r.offers.status}</h5>
              ) : null}
              {r.description ? <h5>Description: {r.description}</h5> : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventCard;
