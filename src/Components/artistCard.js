import "./artistCard.css";
import { Button } from "react-bootstrap";
const ArtistCard = (props) => {

  return (
    <div className="card">
      <img src={props.artist.image_url} alt="" />
      <div className="card-body">
        <h2>{props.artist.name}</h2>
        <p>{props.artist.facebook_page_url}</p>
        <Button variant="secondary" size="lg" >
        Find Events
      </Button>
      </div>
    </div>
  );
};
export default ArtistCard;
