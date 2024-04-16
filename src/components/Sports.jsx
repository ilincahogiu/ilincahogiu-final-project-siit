import { sports } from './data.js';
import './Sports.css';

function Sports() {

    return (
        <section>
            <header>
                <h1>Sports</h1>
            </header>

            <ul className="sports-list">
                { sports.map((sport) => (
                    <li className ="sport" key={sport.name}>
                        <id className="id" key={sport.id}></id>
                        <img className="sport__image" src={sport.imageUrl} />
                        <div>
                        <h3 className="sport__name">{sport.name}</h3>
                        <span className="sport__places">Available: {sport.numberOfPlacesAvailable}</span>
                        </div>
                       
                    </li>
                )
            )}
            </ul>
        </section>
    )
}

export default Sports;