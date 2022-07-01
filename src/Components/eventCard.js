import "./styles.css";
import { Download } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

const EventCard = (props) => {
  const returnDate = (datetime) => {
    let date = new Date(Date.parse(datetime));
    return date;
  };
  return (
    <div className="card">
      <div className="card-body">
          {props.eventData.map((r) => 
          <ul>
            <li key={r.id}>
              <h5>
                Date: 
                {returnDate(r.datetime).getDate()}/
                {returnDate(r.datetime).getMonth()}/
                {returnDate(r.datetime).getFullYear()}
              </h5>
              <h5>
                Time: 
                {returnDate(r.datetime).getHours()}:
                {returnDate(r.datetime).getMinutes()}
              </h5>
              <h5>Venue: {r.venue.name}</h5>
              <h5>City: {r.venue.city}</h5>
              <h5>Country: {r.venue.country}</h5>
              {r.offers.status ? (
                <h5>Tickets Available: {r.offers.status}</h5>
              ) : null}
              {r.description ? <h5>Description: {r.description}</h5> : null}
              <Button className="download-container" variant='secondary' style ={{disabled:r.offers.status ? true : false}}>Buy Ticket <Download/></Button>
            </li>
            </ul>
            )
          }
           
      
      </div>
    </div>
  );
};

export default EventCard;
