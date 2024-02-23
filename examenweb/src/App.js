import React, { useState, useEffect } from 'react';
import './App.css'; // En el archivo CSS Uso de estilos 10 pts

function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  useEffect(() => {
    // Valida si los emails son diferentes
    if (email !== confirmarEmail && confirmarEmail !== '') {
      setMensajeError('Verifique el correo electrónico confirmado para que coincida con el campo anterior');
    } else {
      setMensajeError('');
    }
  }, [email, confirmarEmail]);

  const manejarEnvio = () => {
    // Envío ficticio del formulario
    console.log('Correo electrónico:', email);
  };

  return (
    <div className="app">
      <img src="https://picsum.photos/200/300" alt="Imagen de Formulario" />
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmarEmail">Confirmar Correo Electrónico:</label>
          <input
            type="email"
            id="confirmarEmail"
            value={confirmarEmail}
            onChange={(e) => setConfirmarEmail(e.target.value)}
          />
        </div>
        {mensajeError && <p className="error">{mensajeError}</p>}
        <button type="button" onClick={manejarEnvio}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;