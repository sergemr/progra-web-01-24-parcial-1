
import React, { useState } from 'react';
import './App.css';

function App() {
  const [correo, setCorreo] = useState('');
  const [confirmacion, setConfirmacion] = useState('');

  const confirmar = () => {
    if (correo !== confirmacion) {
      alert("Los correos no coinciden");
    } else {
      console.log(correo);
    }
  }

  return (
    <div className="App">
      <img src="https://fastly.picsum.photos/id/542/200/300.jpg?hmac=qD8M4ejDPlEc69pGT21BzB7CDiWOcElb_Ke7V8POjm8" />

      <form className="formulario">
        <h1>Formulario</h1>

        <div>
          <input className="inputs" type="text" placeholder="Nombre" />
          <input className="inputs" type="text" placeholder="Apellido" />
        </div>

        <div>
          <input
            id="correo"
            className="inputs"
            type="text"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div>
          <input
            id="confirmacion"
            className="inputs"
            type="text"
            placeholder="Confirmar Correo"
            value={confirmacion}
            onChange={(e) => setConfirmacion(e.target.value)}
          />
        </div>

        <button id="boton" onClick={confirmar}>Enviar</button>
      </form>
    </div>
  );
}

export default App;