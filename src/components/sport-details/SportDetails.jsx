import {sports} from '../../data/data.js';
import {useParams} from 'react-router-dom';
import './SportDetails.css';

function SportDetails() {
    const { id } = useParams();
    const selectedSport = sports.find((sport) => sport.id === Number(id));

    return (
        <section>
            <header>
            <h3>{ selectedSport.name }</h3>
            </header>
            <img src={selectedSport.imageUrl} alt={selectedSport.name} />
            <p><strong>Durata rezervării: </strong> 60 minute</p>
            <p>Vă rugăm să distribuiți link-ul primit la confirmarea rezervării către toate persoanele care urmează să joace. Toți participanții la joc trebuie să confirme participarea accesând link-ul primit.</p>
            <p><strong>Înregistrare: </strong>Înainte de a intra la joc, vă rugăm să vă prezentați la recepție pentru scanarea cardului de membru. Acesta se emite odată cu prezentarea la prima rezervare (pe baza actului de identitate).</p>
            <p>Jucătorii vor folosi propriile mingi și echipamente necesare jocului.</p>
            <p><strong>Disponibile: </strong> {selectedSport.availability}</p>
        </section>
    );
}

export default SportDetails;