import React, { useEffect, useState } from 'react';
import { Character, dataService } from '../services/DataService';
import CharacterCard from './CharacterCard';
import './Gallery.scss';

function Gallery() {
    const [characters, setCharacters] = useState<Character[]>([]);
    // const [students, setStudents] = useState<Character[]>([])
    const [studentsToggle, setStudentsToggle] = useState(true);
    const [staffToggle, setStaffToggle] = useState(true)

    useEffect(() => {
        readCharacters()
    }, []);

    async function readCharacters() {
        const characters = await dataService.getCharacters();

        // const orderedCharacters = characters.sort((a, b) => {
        //     if (a.name.toLowerCase() < b.name.toLowerCase()) {
        //         return -1;
        //     }
        //     if (a.name.toLowerCase() > b.name.toLowerCase()) {
        //         return 1;
        //     }
        //     return 0;
        // });
        // setCharacters(orderedCharacters)
        // console.log(characters);
        setCharacters(characters)
        console.log(characters);
    }

    async function studentsFilter() {
        setStaffToggle(true)
        setStudentsToggle(!studentsToggle)
        console.log('students', studentsToggle)
        if (studentsToggle === true) {
            const characters = await dataService.getCharacters();
            const students = characters.filter(character => character.hogwartsStudent === true)

            setCharacters(students)
            console.log(students)
        } else {
            readCharacters()
        }
    }

    async function staffFilter() {
        setStudentsToggle(true)
        setStaffToggle(!staffToggle)

        if (staffToggle === true) {
            const characters = await dataService.getCharacters();

            const staff = characters.filter(character => character.hogwartsStaff === true)

            setCharacters(staff)
            console.log(staff)
        } else {
            readCharacters()
        }

    }



    return (
        <div className="gallery">
            <img src='./images/Harry_Potter.png' className="namePage" alt="HarryPotter" />
            <h4 className='instructions'>Selecciona tu filtro</h4>
            <div className='categoryButtonContainer'>
                <button className='category' onClick={studentsFilter} >ESTUDIANTES</button>
                <button className='category' onClick={staffFilter}>STAFF</button>
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