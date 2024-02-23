import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [correo, setCorreo] = useState("Stefano");
  const [correoVerificado, setCorreoVerificado] = useState("")
  const confirmar = () => {
    if (correo !== correoVerificado) {
      alert("Verifique su correo");
    } else {
      console.log(correo)
    }
  }
  
  return (
   
    <div className="App">
      <img src='https://fastly.picsum.photos/id/1026/200/300.jpg?hmac=Thvj4aJ_VnAGT6DKAcy1yTs100zlstJTyImDWphGDFI'></img>
      <form class='formulario'></form>
      <h1>Formulario</h1>
      <p>Nombre</p>
      <input type="text"></input>
      <p>Apellido</p>
      <input type="text"></input>
      <p>Correo</p>
      <input
        type="text"
        onChange={(e) => {
          setCorreo(e.target.value)
        }}
      ></input>
      <p>Correo Verificado</p>
      <input
        type="text"
        onChange={(e) => {
          setCorreoVerificado(e.target.value)
        }}
      ></input>
      

<br></br>
<br></br>
<button id="boton" onClick={confirmar}>Enviar</button>



    </div>
  );
}

export default App;
