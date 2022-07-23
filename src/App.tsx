import React from 'react';
import './App.css';
import Cards from './Cards ';
import HarryPotter from './Harry_Potter.png';
function App() {
  return (
    <div className="App">
      <img src={HarryPotter} className="titulo" alt="HarryPotter" />
      <h4 className='subtitulo'>Selecciona tu filtro</h4>
      <div className='contenedorBotonesCategoria'>
        <button className='categoria'>ESTUDIANTES</button>
        <button className='categoria'>STAFF</button>
      </div>
      <Cards></Cards>
    </div>
  );
}

export default App;
