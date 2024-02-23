import logo from './logo.svg';
import './App.css';
import {useState} from "react"


function App() {

  function enviar (){

  }


const [correo, setCorreo] = useState ("Steven")
const [correverificar, setCorreoerificar] = useState ("")

const confirmar = () => {
  if (correo !== correverificar) {
    alert("Verifique su correo");
  } else {
    alert("El correo coicide");
  }
}

  return (

    
    <div className="App">
    <img src="https://fastly.picsum.photos/id/1011/200/300.jpg?hmac=3OASTCcuMs99-ZFi2rl7Rh9DuaNJXZytGmDyOsRm7Hw" />
      <h1>formulario de registro</h1>
      <h2> Nombre Apellido</h2>
      <div>
          <input className="inputs" type="text" placeholder="Nombre" />
          <input className="inputs" type="text" placeholder="Apellido" />
        </div>

     <h2> Correo electronico </h2>
     <input type="text" onChange={(e) =>{
      setCorreo (e.target.value)}}
      ></input>
      <input type="text" onChange={(e) =>{
      setCorreoerificar(e.target.value)}}
      ></input>
     
     
     <button onClick={enviar}>Enviar</button>

      
    </div>
  );
}

export default App;


