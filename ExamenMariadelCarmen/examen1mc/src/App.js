import React, { useState } from "react";
import './App.css';

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [correoConfirmar, setCorreoConfirmar] = useState("");

  const handleEnviarClick = () => {
    if (correo === correoConfirmar) {
      console.log("Correo electrónico:", correo);
    } else {
      console.log("Verifique el correo electrónico");
    }
  };
 
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://picsum.photos/200/300" alt="Random Image" />
      
    <body className="body">
      <h1>Formulario de registro</h1>
      <div className="input-group">
        <h1>Ingrese su nombre:</h1>
        <input
          type="text"
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <h1>Ingrese su Apellido:</h1>
        <input
          type="text"
          onChange={(e) => {
            setApellido(e.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <h1>Ingrese su correo:</h1>
        <input
          type="text"
          onChange={(e) => {
            setCorreo(e.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <h1>Verifique su correo:</h1>
        <input
          type="text"
          onChange={(e) => {
            setCorreoConfirmar(e.target.value);
          }}
        />
      </div>
      
      </body>
      </header>
      {correo === correoConfirmar ? (
        <h1></h1>
      ) : (
        <h1 className="error">Verifique el correo electrónico</h1>
      )}
      <button type="button" onClick={handleEnviarClick}>
        Registre los datos
      </button>
    </div> 
    
  );
}

export default App;
