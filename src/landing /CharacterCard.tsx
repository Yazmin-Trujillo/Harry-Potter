import React from 'react';
import './CharacterCard.scss';

function CharacterCard() {
    return (
        <article className='characterCard'>
            <div className='profile'>
                <img src='image' className="profileImage" alt="profileImage" />
            </div>
            <section className='cardInformation'>
                <h1 className='charactersName'>Harry Potter</h1>
                <div className='cardContent'>
                    <div className='statuses'>
                        <h4>VIVO</h4>
                        <h4>ESTUDIANTE</h4>
                    </div>
                    <div>
                        <img src='./images/Rectangle.png' className="iconoRectangulo" alt="iconoRectangulo" />
                    </div>
                </div>

                {/* <h1 className='nombrePersonaje'>name del personaje</h1>
                <h4>alive si es true retornar vivo sino finado</h4>
                <h4>hogwartsStudent:true retornar estudiante, hogwartsStaff:true retornar staff</h4> */}
            </section>
        </article>

    );
}

export default CharacterCard;
