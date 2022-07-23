import React from 'react';
import './CharacterCard.scss';

function CharacterCard() {
    return (
        <article className='characterCard'>

            <div className='profileImage'>
                <img src='image' className="profileImage" alt="profileImage" />
            </div>

            <section className='cardInformation'>

                <div className='statusInformation'>
                    <div className='statuses'>
                        <h4>VIVO / ESTUDIANTE</h4>
                    </div>
                    <div className="iconoRectangulo" >
                        <img src='./images/Rectangle.png' alt="iconoRectangulo" />
                    </div>
                </div>

                <div className='characterInformation'>
                    <div className='charactersName'>
                        <h1 className='name'>Harry Potter</h1>
                    </div>
                    <div className='profile'>
                        <h5>Cumpleaños:</h5>
                        <h5>Género:</h5>
                        <h5>Color de ojos:</h5>
                        <h5>Color de pelo:</h5>
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

{/* <h1 className='charactersName'>Harry Potter</h1>
                <div className='cardContent'>
                    <div className='statuses'>
                        <h4>VIVO</h4>
                        <h4>ESTUDIANTE</h4>
                    </div>
                    <div>
                        <img src='./images/Rectangle.png' className="iconoRectangulo" alt="iconoRectangulo" />
                    </div>
                </div> */}

