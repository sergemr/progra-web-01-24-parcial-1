import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [correoConfirm,setCorreoconfirm] = useState("");
  const [correoVer, setCorreoVer] = useState("");
function enviar (){
  alert(correoVer);
}

  const{correo,setCorreo} = useState("");

 
  return (
    <div className="App">
      <img src ="https://fastly.picsum.photos/id/425/200/300.jpg?hmac=P1vjZ6T-wo-aULK7NbbLYxIaV92_0q56o0BFWcWOdmo"/>
    <h1>REGISTRATION FORM</h1>

  <h2>Nombre--------------Apellido</h2>
  <input type = "text"></input> <input type ="text"></input>


  <h2>Correo Electronico</h2>
  <input 
   type="text"
   onChange={(e) => {
    setCorreoconfirm(e.target.value);
   }}      

   ></input>
    

    <h2>Confirmacion de Correo Electronico</h2>
    <input onChange={(e) => {
      setCorreoVer(e.target.value);

    }}
    type="text"
    ></input>
    {correoConfirm === correoVer ? (
      <h3>Correo Electronico correcto</h3>
  ): (
    <h3>Verifique el Correo Electronico</h3>
  )}

  <button onClick={enviar}>Enviar</button>
  </div>
  );
}
export default App;
