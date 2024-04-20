import { sports } from '../data/data.js';
import SportCard from './SportCard.jsx';
import './Sports.css';

function Sports() {

    return (
        <section>
            <header>
                <h1>Sports</h1>
            </header>

            <ul className="sports-list">
                { sports.map((sport) => (
                    <SportCard key={sport.id} />
                )
            )}
            </ul>
        </section>
    );
}

export default Sports;