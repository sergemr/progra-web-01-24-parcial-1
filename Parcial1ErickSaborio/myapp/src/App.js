import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
const[email,setEmail] = useState("");
const[emailVer, setEmailVer] = useState("");
const [errorCorreo, setErrorCorreo] = useState(false);

const confirmacion = () => {
  if (email !== emailVer) {
    alert("Verifique el correo electronico");
  } else {
    alert("Correos coinciden");
  }
}


  return (
    <div className="App">

  <img src="https://fastly.picsum.photos/id/323/200/300.jpg?hmac=A2QFYssQ9fNCK_5aWqeo370SEmDX33jJZRSSpkdjFLg" />

      <h1>Cuestionario</h1>
      
      <h2>Nombre-----------Apellido</h2>
      <input type ="text"></input> <input type ="text"></input>
      
      
      
      <h2>Correo electronico</h2>
      <input 
      type="text" 
      onChange={(e) => {
        setEmail(e.target.value);
      }}
      
      ></input>

      <h2>Confirmacion de correo electronico</h2>
      <input onChange={(e) => {
        setEmailVer(e.target.value);
      }}
      type='text'
      ></input>

      <div>
      <button button id="boton" onClick={confirmacion}>Enviar</button>
      </div>
    </div>
  );
}

export default App;
