import React, { useState } from 'react';
import './ActionBar.scss';
import { AddCharacter } from './AddCharacter';
import { useAppSelector } from '../../src/store/hooks'

type Props = {
    onSave: () => void
}

export function ActionBar({ onSave }: Props) {
    const [showAddCharacter, setShowAddCharacter] = useState<boolean>(false);
    const [showFavorites, setShowFavorites] = useState('')
    const favorites = useAppSelector((state) => state.favorites.value)


    function displayFavorites() {
        setShowFavorites('')
    }

    function closeFavorites() {
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
                    favorites.map((favorite) => {
                        return (
                            <div className='favorite' key={favorite.name}>
                                <div className='sectionOne'>
                                    <img src={favorite.image} className="image" alt="profileImage" />
                                    <span className='name'>{favorite.name}</span>
                                </div>
                                <div className='sectionTwo'>
                                    <img className='trashImage' src='./images/trash.png' alt="delete" />
                                </div>
                            </div>
                        )
                    })
                    :
                    <div className='default'>
                        <p className='xxx'>Agrega un personaje</p>
                    </div>}
            </div>
            {showAddCharacter ? <AddCharacter onClose={onAddCharacterClose} onSave={onSave} /> : ''}
        </>

    )
}