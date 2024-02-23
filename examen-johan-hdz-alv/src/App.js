import './App.css';
import { useState } from "react";

function App() {
  const [correoElectronico, setCorreoElectronico] = useState("correo@correo.com")
  const [verificadorCorreoElectronico, setVerificadorCorreoElectronico] = useState("")

  const confirmar = () => {
    if (correoElectronico === verificadorCorreoElectronico) {
      console.log({correoElectronico})
    } else {
      alert("Los correos no coinciden!!!");
    }
  }

  return (
    <div className="App">
      <img src="https://picsum.photos/200/300" alt="Random"></img>
      <form className="forms">
        <h1>Formulario de registro</h1>
        <div>
          <p className="ingresoInfo">Nombre</p>
          <p className="ingresoInfo">Apellido</p>
          <br></br>
          <input className="ingresoInfoText" type="text"></input>
          <input className="ingresoInfoText" type="text"></input>
          <br></br>
        </div>
        <div>
          <p className="ingresoInfo">Ingrese su correo electrónico</p>
          <br></br>
          <input className="ingresoInfoText" type="text" onChange={(e) => {
            setCorreoElectronico(e.target.value)
          }}></input>
        </div>
        <div>
          <p className="ingresoInfo">Verifique su correo electrónico</p>
          <br></br>
          <input className="ingresoInfoText" type="text" onChange={(e) => {
            setVerificadorCorreoElectronico(e.target.value)
          }}></input>
        </div>
        <br></br>
        <br></br>
        <button type="button" onClick={confirmar}>Confirmar</button>
      </form>
    </div>
  );
}

export default App;
