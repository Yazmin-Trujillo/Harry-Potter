import React, { useState } from 'react';
import './ActionBar.scss';

type Props = {
    onClick: () => void
}
export function ActionBar({ onClick }: Props) {
    const [favorites, setFavorites] = useState([1])

    return (
        <>
            <div className='fixedBox'>
                <button className='extra'>FAVORITOS<img className='image' src='./images/RectangleW.png' alt="favorite" /></button>
                <button className='extra' onClick={onClick}>AGREGAR<img className='image' src='./images/addUserW.png' alt="addUser" /></button>
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

        </>

    )
}