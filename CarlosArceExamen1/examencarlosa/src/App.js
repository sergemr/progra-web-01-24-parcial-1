import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [correo, setCorreo] = useState("");
  const [correoVerificar, setCorreoVerificar] = useState("");
  const [nombreU, setNombre] = useState("");
  const enviar = () => {
    console.log("Correo enviado:", correo);
    alert("Correo enviado");
  };

  return (
    <div className="outer-container">
      <div className="background-image"></div>
      <div className="login-container">
        <header className="App-header">
          <div>
            <br />
            <h1>¡Bienvenido {nombreU}! </h1>
            <h3><label htmlFor="nameInput">Nombre y Apellido:</label></h3>
            <input
              id="nameInput"
              onChange={(event) => {
                console.log(event.target.value);
                setNombre(event.target.value);
              }}
              type="text"
            />
          </div>
          <div className="moving-text">
            <p>Formulario</p>
          </div>
          <form>
            <label htmlFor="emailInput">Correo:</label>
            <input
              id="emailInput"
              onChange={(event) => {
                console.log(event.target.value);
                setCorreo(event.target.value);
              }}
              type="text"
            />
            
            <label htmlFor="correoVerificar">Ingrese su correo de nuevo:</label>
            <input
              id="correoVerificar"
              onChange={(e) => {
                setCorreoVerificar(e.target.value);
              }}
              type="text"
            />

            {correo === correoVerificar ? (
              <h1></h1>
            ) : (
              <h1>Verifique el correo electrónico por favor</h1>
            )}
            <h1>
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" name="user_password" />
            </h1>
            <br></br>
            <button onClick={enviar}>Enviar correo </button>
          </form>
        </header>
      </div>
    </div>
  );
}

export default App;
