import React, { useEffect, useState } from 'react';
import { Character, dataService } from '../services/DataService';
import CharacterCard from './CharacterCard';
import './Gallery.scss';

function Gallery() {
    const [allCharacters, setAllCharacters] = useState<Character[]>([]);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [studentsToggle, setStudentsToggle] = useState(true);
    const [staffToggle, setStaffToggle] = useState(true)

    useEffect(() => {
        readCharacters()
    }, []);

    async function readCharacters() {
        const res = await dataService.getCharacters();
        setAllCharacters(res)
        setCharacters(res)
    }

    async function studentsFilter() {
        setStaffToggle(true)
        setStudentsToggle(!studentsToggle)
        if (studentsToggle === true) {
            const students = allCharacters.filter(character => character.hogwartsStudent === true)
            setCharacters(students)
        } else {
            setCharacters(allCharacters)
        }
    }

    async function staffFilter() {
        setStudentsToggle(true)
        setStaffToggle(!staffToggle)
        if (staffToggle === true) {
            const staff = allCharacters.filter(character => character.hogwartsStaff === true)
            setCharacters(staff)
        } else {
            setCharacters(allCharacters)
        }
    }

    return (
        <div className="gallery">
            <img src='./images/Harry_Potter.png' className="namePage" alt="HarryPotter" />
            <h4 className='instructions'>Selecciona tu filtro</h4>
            <div className='categoryButtonContainer'>
                <button className={'category ' + studentsToggle} onClick={studentsFilter} >ESTUDIANTES</button>
                <button className={'category ' + staffToggle} onClick={staffFilter}>STAFF</button>
            </div>
            <main className='contents'>
                {characters.map((character) => {
                    return <CharacterCard key={character.name} character={character} />
                })}
            </main>
        </div>
    );
}

export default Gallery;