import './App.css';
import { useState } from "react";

function App() {
  
  
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [verificarCorreo, setVerificarCorreo] = useState("");
  const buttonOnClick = () => {}

  return (
<div className="App">
   <header className="App-header">
  


<img src="https://fastly.picsum.photos/id/851/200/300.jpg?hmac=AD_d7PsSrqI2zi-ubHY_-urUxCN77Gnev3k5o0P6nlE" alt="ocean" />
      <h1>FORMULARIO DE VERIFICACION</h1>
      <label for="nombre">Nombre:</label><br/>
      <input type="text" autoComplete='off' onChange={(e) => {
          setNombre(e.target.value);
        }}
      >
      </input><br/>
      <label for="apellido">Apellido:</label><br/>
      <input type="text" autoComplete='off' onChange={(e) => {
          setApellido(e.target.value);
        }}
      >
      </input><br/>
      <label for="email">Email:</label><br/>
      <input type="email" autoComplete='off' onChange={(e) => {
          setCorreo(e.target.value);
        }}
      >
      </input><br/>
      <label for="email">Confirmacion de Email:</label><br/>
      <input type="email" autoComplete='off' onChange={(e) => {
          setVerificarCorreo(e.target.value);
        }}
      >
      </input><br/>
      <br/>

      <button type= 'submit'>Imprimir Email</button>

      {correo === verificarCorreo ? (
        <h1></h1>
      ) : (
        <h4>Por Favor Verifique los Correos Electrónicos</h4>
      )}
    
  </header>
  </div>
  );
  }

export default App;
