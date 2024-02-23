import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [correo, setCorreo] = useState("");
  const [correoVerificar, setCorreoVerificar] = useState("");
  
  return (
    <div className="App">
      <header className="App-header">
        <form >
        <img src="https://fastly.picsum.photos/id/171/200/300.jpg?hmac=NHia9vzbBwrKnBFwp7cDZPSxFcVF_VGbnFO5LAjWnuE" />
        
         <h1>FORMULARIO DE REGISTRO</h1>

         <label>Nombre</label><label>Apellido</label>
         <br></br>
         <input type="text"></input><input type="text"></input>
         <br></br>

         <label>Correo Electronico</label>
         <br></br>
         <input 
          type= "text"
          onChange={(e) => {
          setCorreo(e.target.value)
          }}
          ></input>
         <br></br>

         <label>Confirma Correo</label>
         <br></br>
         <input 
          onChange={(e) => {
          setCorreoVerificar(e.target.value)
          }}
          type= "text"
          ></input>
         <br></br>

         {correo === correoVerificar ?(
          <h2></h2>
          ):(
          <h2>verifique el correo electronico</h2>
          )
          }

         <button type="sumit">Registrar Ahora</button>
        </form>
      </header>
    </div>
  );
}

export default App;
