import "./styles.css";
import { Button } from "react-bootstrap";
import { Facebook } from "react-bootstrap-icons";
const ArtistCard = (props) => {
  return (
    <div className="card">
      <img src={props.artist.image_url} alt="" />
      <div className="card-body">
        <h3>{props.artist.name}</h3>
        <h2>Upcoming events: {props.artist.upcoming_event_count}</h2>
        <p><Facebook size={24} color="blue"/><a href={props.artist.facebook_page_url}> {props.artist.name}</a></p>
        <Button className='button' variant="secondary" size="lg" onClick={props.setFlag}>
          Find Events
        </Button>
        <Button className='button' variant="success" size="lg" onClick={() => window.open(props.artist.url, '_blank')}>
          Go To Page
        </Button>
      </div>
    </div>
  );
};
export default ArtistCard;
