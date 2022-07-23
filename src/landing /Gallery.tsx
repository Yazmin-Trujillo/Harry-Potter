import React from 'react';
import CharacterCard from './CharacterCard';
import './Gallery.scss';

function Gallery() {
    return (
        <div className="gallery">
            <img src='./images/Harry_Potter.png' className="namePage" alt="HarryPotter" />
            <h4 className='instructions'>Selecciona tu filtro</h4>
            <div className='categoryButtonContainer'>
                <button className='category'>ESTUDIANTES</button>
                <button className='category'>STAFF</button>
            </div>
            <main className='contents'>
                <CharacterCard />
                <CharacterCard />
            </main>

        </div>
    );
}

export default Gallery;