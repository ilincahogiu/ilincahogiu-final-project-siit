import {sports} from '../../data/data.js';
import {useParams} from 'react-router-dom';

export default function SportDetails() {
    const { id } = useParams();
    const selectedSport = sports.find((sport) => sport.id === id);

    console.log({ selectedSport });

    return (
        <section>
            <header>
            <h3>
            { selectedSport.name }
            </h3>
            </header>
            <img src="selectedSport.imageUrl" alt="" />
        </section>
    )
}