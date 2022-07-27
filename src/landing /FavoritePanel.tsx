import React from 'react';
import { useAppSelector } from '../store/hooks';
import { useAppDispatch } from '../../src/store/hooks'
import { deleteFavorites } from '../../src/store/favoritesSlice'
import './FavoritePanel.scss';


export function FavoritePanel() {
    const favorites = useAppSelector((state) => state.favorites.value)
    const dispatch = useAppDispatch()

    return (

        <div className='favoritePanel'>
            {(favorites.length !== 0) ?
                favorites.map((character) => {
                    return (
                        <div className='favorite' key={character.name}>
                            <div className='sectionOne'>
                                <img src={character.image ? character.image : './images/newUser.png'} className="image" alt="profileImage" />
                                <span className='name'>{character.name}</span>
                            </div>
                            <div className='sectionTwo'>
                                <img className='trashImage' src='./images/trash.png' alt="delete" onClick={() => dispatch(deleteFavorites(character))} />
                            </div>
                        </div>
                    )
                })
                :
                <div className='default'>
                    <p className='text'>Agrega un personaje</p>
                </div>}
        </div>
    )
}
