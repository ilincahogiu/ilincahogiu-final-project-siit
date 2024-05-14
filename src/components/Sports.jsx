import { sports } from '../data/data.js';
import SportCard from './SportCard.jsx';
import './Sports.css';
import {Link} from 'react-router-dom';

function Sports() {

    return (
        <section>
            <header>
                <h1>Sports</h1>
            </header>

            <ul className="sports-list">
                { sports.map((sport) => (
                    <Link key={sport.id} to={`/sport/${sport.id}`}>
                        <SportCard sport={sport}/>
                    </Link>
                    
                )
            )}
            </ul>
        </section>
    );
}

export default Sports;