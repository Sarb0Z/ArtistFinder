import "./artistCard.css";
import { Button } from "react-bootstrap";
const ArtistCard = (props) => {
  return (
    <div className="card">
      <img src={props.artist.image_url} alt="" />
      <div className="card-body">
        <h2>{props.artist.name}</h2>
        <p>Upcoming events: {props.artist.upcoming_event_count}</p>
        <Button variant="secondary" size="lg" onClick={props.setFlag}>
          Find Events
        </Button>
        <Button variant="success" size="lg" onClick={() => window.open(props.artist.url, '_blank')}>
          Go To Page
        </Button>
      </div>
    </div>
  );
};
export default ArtistCard;
