import React, { useState } from 'react';
import './ActionBar.scss';
import { AddCharacter } from './AddCharacter';
import { FavoritePanel } from './FavoritePanel';

type Props = {
    onSave: () => void
}

export function ActionBar({ onSave }: Props) {
    const [showAddCharacter, setShowAddCharacter] = useState<boolean>(false);
    const [showFavorites, setShowFavorites] = useState(false)

    function toggleFavorites() {
        setShowFavorites(!showFavorites)
    }

    function toggleAddCharacter() {
        setShowAddCharacter(!showAddCharacter)
    }

    return (
        <>
            <div className="actionBar">
                <div className='fixedBox'>
                    <button className='extra' onClick={toggleFavorites}>FAVORITOS<img className='image' src='./images/RectangleW.png' alt="favorite" /></button>
                    <button className='extra' onClick={toggleAddCharacter}>AGREGAR<img className='image' src='./images/addUserW.png' alt="addUser" /></button>
                </div>
                {showFavorites ? <FavoritePanel /> : ''}
            </div>
            {showAddCharacter ? <AddCharacter onClose={toggleAddCharacter} onSave={onSave} /> : ''}
        </>

    )
}