import React, { useState } from 'react';
import './App.css';

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    confirmarEmail: ''
  });
  const [errorCorreo, setErrorCorreo] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email !== formData.confirmarEmail) {
      setErrorCorreo('Verifique el correo electrónico');
    } else {
      setErrorCorreo('');
      console.log('Correo electrónico:', formData);
    }
  };

  return (
    <div className="container">
      <img className="fondo" src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Estadio_Heredia_Heredia_CR.jpg" alt="Estadio Heredia" />
      <div className="formulario">
        <h2>RESGISTRATION FORM</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmarEmail">Confirmar Correo Electrónico:</label>
            <input
              type="email"
              id="confirmarEmail"
              name="confirmarEmail"
              value={formData.confirmarEmail}
              onChange={handleChange}
              required
            />
            {errorCorreo && <span className="error">{errorCorreo}</span>}
          </div>
          <button type="submit">REGISTER NOW </button>
        </form>
      </div>
    </div>
  );
}

export default Formulario