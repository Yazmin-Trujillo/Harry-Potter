import React, { useEffect, useState } from 'react';
import { Character, dataService } from '../services/DataService';
import { ActionBar } from './ActionBar';
import { AddCharacter } from './AddCharacter';
import CharacterCard from './CharacterCard';
import './Gallery.scss';

function Gallery() {
    const [allCharacters, setAllCharacters] = useState<Character[]>([]);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [studentsToggle, setStudentsToggle] = useState(false);
    const [staffToggle, setStaffToggle] = useState(false)

    useEffect(() => {
        readCharacters()
    }, []);

    async function readCharacters() {
        const res = await dataService.getCharacters();
        setAllCharacters(res)
        setCharacters(res)
    }

    async function studentsFilter() {
        if (studentsToggle) {
            setCharacters(allCharacters)
        } else {
            const students = allCharacters.filter(character => character.hogwartsStudent === true)
            setCharacters(students)
        }

        setStaffToggle(false)
        setStudentsToggle(!studentsToggle)
    }

    async function staffFilter() {

        if (staffToggle) {
            setCharacters(allCharacters)
        } else {
            const staff = allCharacters.filter(character => character.hogwartsStaff === true)
            setCharacters(staff)
        }

        setStudentsToggle(false)
        setStaffToggle(!staffToggle)
    }

    return (
        <>
            <div className='gallery'>
                {/* <div className='gallery'> */}
                <img className="namePage" src='./images/Harry_Potter.png' alt="HarryPotter" />
                <h4 className='instructions'>Selecciona tu filtro</h4>
                <div className='categoryButtonContainer'>
                    <button className={`category ${studentsToggle ? 'selected' : ''}`} onClick={studentsFilter} >ESTUDIANTES</button>
                    <button className={`category ${staffToggle ? 'selected' : ''}`} onClick={staffFilter}>STAFF</button>
                </div>
                <main className='contents'>
                    {characters.map((character) => {
                        return <CharacterCard key={character.name} character={character} />
                    })}
                </main>
            </div>
            <ActionBar onSave={readCharacters} />
        </>
    );
}

export default Gallery;