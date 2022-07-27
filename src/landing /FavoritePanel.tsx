import React from 'react';
import { useAppSelector } from '../store/hooks';

export function FavoritePanel() {
    const favorites = useAppSelector((state) => state.favorites.value)


    return (

        <div className='favoritePanel'>
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
    )
}
