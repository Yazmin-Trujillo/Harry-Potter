import React, { useEffect, useState } from 'react';
import { Character, dataService } from '../services/DataService';
import CharacterCard from './CharacterCard';
import './Gallery.scss';

function Gallery() {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        readCharacters()
    }, []);

    async function readCharacters() {
        const characters = await dataService.getCharacters();

        // const orderedProducts = products.sort((a, b) => {
        //     if (a.name.toLowerCase() < b.name.toLowerCase()) {
        //         return -1;
        //     }
        //     if (a.name.toLowerCase() > b.name.toLowerCase()) {
        //         return 1;
        //     }
        //     return 0;
        // });
        setCharacters(characters)
        console.log(characters);
    }

    return (
        <div className="gallery">
            <img src='./images/Harry_Potter.png' className="namePage" alt="HarryPotter" />
            <h4 className='instructions'>Selecciona tu filtro</h4>
            <div className='categoryButtonContainer'>
                <button className='category'>ESTUDIANTES</button>
                <button className='category'>STAFF</button>
            </div>
            <main className='contents'>
            {characters.map((character) => {
                    return <CharacterCard key={character.name} character={character}/>
                })}
            </main>

        </div>
    );
}

export default Gallery;