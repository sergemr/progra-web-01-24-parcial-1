import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [correo, setcorreo]= useState("");
  const [correover, setcorreover]= useState("");
  const fail = ()=> {
    alert ("Verifique el correo electronico");
  };
  
  
  return (
    <div className="App">
      <h1>Primer Parcial</h1>
      <br></br>
      <label>Nombre:</label>
      <input type="text"></input>
      <br></br>
      <label>Apellido:</label>
      <input type="text"></input>
      <br></br>
      <label>Correo:</label>
      <input type="text" onChange={(e)=>{setcorreo(e.target.value);}}></input>
      <br></br>
      <label>Confirmacion del Correo:</label>
      <input type="text" onChange={(e)=>{setcorreover(e.target.value);}}></input>
      <br></br>
      
    {correo === correover ? (
      <h1></h1>
    ) : (
      <element class="error">Verifique el correo electronico</element>
    )}
    <br></br>
    <button onclick={useEffect(() =>{
    console.log(`${correo}`)
  })}> Ingresar </button>
    
    </div>
  );
}

export default App;
