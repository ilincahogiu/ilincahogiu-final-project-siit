import {sports} from '../../data/data';
import {useParams} from 'react-router-dom';

export default function SportDetails() {
    const { id: idFromPath } = useParams();

    const selectedSport = sports.find(sport) => sport.id === id;

    return(
        <h1>I am a sport.</h1>
    )
}