import React, { useState } from 'react';
import './ActionBar.scss';
import { AddCharacter } from './AddCharacter';

type Props = {
    onSave: () => void
}

export function ActionBar({ onSave }: Props) {
    const [favorites, setFavorites] = useState([1])
    const [showAddCharacter, setShowAddCharacter] = useState<boolean>(false);
    const [showFavorites, setShowFavorites] = useState('')

    function displayFavorites() {
       setShowFavorites('')
    }

    function closeFavorites(){
        console.log('click dado fuera de favoritos cambia el estado')
    }

    function onAddCharacterClose() {
        setShowAddCharacter(false)
    }

    function onAddCharacterOpen() {
        setShowAddCharacter(true)
    }
    return (
        <>
            <div className='fixedBox'>
                <button className='extra' onClick={displayFavorites}>FAVORITOS<img className='image' src='./images/RectangleW.png' alt="favorite" /></button>
                <button className='extra' onClick={onAddCharacterOpen}>AGREGAR<img className='image' src='./images/addUserW.png' alt="addUser" /></button>
            </div>
            <div className='favoritesContainer'>
                {(favorites.length !== 0) ?
                    <div className='favorite'>
                        <div className='sectionOne'>
                            {/* <img src={'character.image'} className="image" alt="profileImage" /> */}
                            <img className="image" src='./images/newUser.png' alt="profileImage" />
                            <span className='name'>{'character.name'}</span>
                        </div>
                        <div className='sectionTwo'>
                            <img className='trashImage' src='./images/trash.png' alt="delete" />
                            {/* <button className='delete'><img className='trashImage' src='./images/trash.png' alt="delete" /></button> */}
                        </div>
                    </div>
                    :
                    <div className='default'>
                        <p className='xxx'>Agrega un personaje</p>
                    </div>}
            </div>
            {showAddCharacter ? <AddCharacter onClose={onAddCharacterClose} onSave={onSave} /> : ''}
        </>

    )
}