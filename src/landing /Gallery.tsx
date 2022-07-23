import React from 'react';
import CharacterCard from './CharacterCard';
import './Gallery.css';

function Gallery() {
    return (
        <div className="gallery">
            <img src='./images/Harry_Potter.png' className="titulo" alt="HarryPotter" />
            <h4 className='subtitulo'>Selecciona tu filtro</h4>
            <div className='contenedorBotonesCategoria'>
                <button className='categoria'>ESTUDIANTES</button>
                <button className='categoria'>STAFF</button>
            </div>
            <main className='contenido'>
                <CharacterCard />
                <CharacterCard />
            </main>

        </div>
    );
}

export default Gallery;