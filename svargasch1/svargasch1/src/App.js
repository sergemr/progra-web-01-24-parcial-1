import React from 'react';
import './App.css'; 

function App() {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nombre = formData.get('nombre');
    const apellido = formData.get('apellido');
    const correo = formData.get('correo');
    const confirmacionCorreo = formData.get('confirmacionCorreo');
    if (correo !== confirmacionCorreo) {
      alert('Verifique el correo electrónico');
    } else {
      console.log('Nombre:', nombre);
      console.log('Apellido:', apellido);
      console.log('Correo electrónico:', correo);
    }
  };

  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input type="text" name="nombre" required />
          </div>
          <div>
            <label>Apellido:</label>
            <input type="text" name="apellido" required />
          </div>
          <div>
            <label>Correo Electrónico:</label>
            <input type="email" name="correo" required />
          </div>
          <div>
            <label>Confirmar Correo Electrónico:</label>
            <input type="email" name="confirmacionCorreo" required />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
