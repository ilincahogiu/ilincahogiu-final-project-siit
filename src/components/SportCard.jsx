import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SportCard({ sport }) {

    return (
        <li className ="sport" key={sport.id}>
            <Link to={`/sport/${sport.id}`}><img className="sport__image" src={sport.imageUrl} /></Link>
            <id className="sport__id" key={sport.id}></id>
            <div className="">
                <h3 className="sport__name">{sport.name}</h3>
                <span className="sport__availability">Available: {sport.availability}</span>
            </div>
        </li>
    )
}

export default SportCard;

SportCard.propTypes = {
    sport: {
        id: PropTypes.string,
        imageUrl: PropTypes.string,
        name: PropTypes.string,
        availability: PropTypes.string,
    }
}
