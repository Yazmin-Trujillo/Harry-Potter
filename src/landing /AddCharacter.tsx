import React, { useState } from 'react';
import { dataService } from '../services/DataService';
import './AddCharacter.scss';

type Props = {
    onClose: () => void,
    onSave: () => void
}

export function AddCharacter({ onClose, onSave }: Props) {
    const [values, setValues] = useState({
        name: '',
        dateOfBirth: '',
        eyeColour: '',
        hairColour: '',
        gender: '',
        hogwartsStudent: false,
        hogwartsStaff: false,
    })
    const { name, dateOfBirth, eyeColour, hairColour, gender, hogwartsStudent, hogwartsStaff } = values
   const [errorMessage, setErrorMessage] =useState(false)

    async function save() {
        if (name === '' || dateOfBirth === '' || eyeColour === '' || hairColour === '' || gender === '' || (hogwartsStudent === false && hogwartsStaff === false)) {
            setErrorMessage(true)
            return console.log('llene todos los campos')
        }
        if (await dataService.createCharacter(name, dateOfBirth, eyeColour, hairColour, gender, hogwartsStudent, hogwartsStaff)) {
            console.log('save')
            onSave()
        }
        onClose()
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleChangeBoolean = (e: any) => {
        const { value } = e.target

        if (value === 'hogwartsStudent') {
            setValues({ ...values, hogwartsStudent: true, hogwartsStaff: false })
        } else {
            setValues({ ...values, hogwartsStudent: false, hogwartsStaff: true })
        }
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        save()
    }

    return (
        <div className='backdrop'>
            <div className='container'>
                <div className='header'>
                    <button className='close' onClick={onClose}>X</button>
                    <h2 className='title'>Agrega un personaje</h2>
                </div>
                <div className='main'>
                    <form onSubmit={handleSubmit}>
                        <div className='contents'>
                            <div className='inputInformation'>
                                <label className='title' htmlFor="name">NOMBRE</label>
                                <input className='rectangle' name="name" type="text" value={name} onChange={handleChange} />
                            </div>
                            <div className='inputInformation'>
                                <label className='title' htmlFor="dateOfBirth">CUMPLEAÑOS</label>
                                <input className='rectangle' name="dateOfBirth" type="text" value={dateOfBirth} onChange={handleChange} />
                            </div>
                            <div className='inputInformation'>
                                <label className='title' htmlFor="eyeColour">COLOR DE OJOS</label>
                                <input className='rectangle' name="eyeColour" type="text" value={eyeColour} onChange={handleChange} />
                            </div>
                            <div className='inputInformation'>
                                <label className='title' htmlFor="hairColour">COLOR DE PELO</label>
                                <input className='rectangle' name="hairColour" type="text" value={hairColour} onChange={handleChange} />
                            </div>
                            {/* </div> */}
                            <div className='inputInformation'>
                                <p className='title'>GÉNERO</p>
                                <div className='selectOption'>
                                    <div className='option'>
                                        <input type='radio' name='gender' value='female' onChange={handleChange} checked={gender === 'female'}></input>
                                        <label htmlFor='gender'>Mujer</label>
                                    </div>
                                    <div className='option'>
                                        <input type='radio' name='gender' value='male' onChange={handleChange} checked={gender === 'male'}></input>
                                        <label htmlFor='gender'>Hombre</label>
                                    </div>
                                </div>
                            </div>
                            <div className='inputInformation'>
                                <p className='title'>POSICIÓN</p>
                                <div className='selectOption'>
                                    <div className='option'>
                                        <input type='radio' name='hogwartsStudent' value='hogwartsStudent' onChange={handleChangeBoolean} checked={hogwartsStudent}></input>
                                        <label htmlFor='hogwartsStudent'>Estudiante</label>
                                    </div>
                                    <div className='option'>
                                        <input type='radio' name='hogwartsStudent' value='hogwartsStaff' onChange={handleChangeBoolean} checked={hogwartsStaff}></input>
                                        <label htmlFor='hogwartsStudent'>Staff</label>
                                    </div>
                                </div>
                            </div>
                            <div className='inputInformation'>
                                {/* <input type='file' name='image'></input> */}
                                <a className='link' href='#'>FOTOGRAFÍA</a>
                            </div>
                        </div>
                        <div className='error'>
                            <p>{errorMessage?'Llene todos los campos': ''}</p>
                        </div>
                        <div className='final'>
                            <button className='save' type="submit">GUARDAR</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}