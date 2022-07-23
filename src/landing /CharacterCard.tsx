import React from 'react';
import './CharacterCard.css';

function CharacterCard() {
    return (
        <article className='tarjeta'>
            <div className='perfil'>
                <img src='image' className="imagenPerfil" alt="ImagenDePerfil" />
            </div>
            <section className='informaciónTarjeta'>
                <h1 className='nombrePersonaje'>Harry Potter</h1>
                <div className='contenidoTarjeta'>
                    <div className='estados'>
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
