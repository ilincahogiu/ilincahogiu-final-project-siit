import { sports } from '../../data/data.js';
import SportCard from './SportCard.jsx';
import './Sports.css';
import { Link } from 'react-router-dom';

function Sports() {
    return (
        <section>
            <header>
            </header>
            <ul className="sports-list">
                {sports.map((sport) => (
                    <li key={sport.id}>
                        <Link to={`/sport/${sport.id}`}>
                            <SportCard sport={sport} />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Sports;