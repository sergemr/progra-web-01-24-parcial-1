
import './App.css';
import { useState } from "react";

function App() {
  let [correo, setCorreo] = useState("correo");
  let [verificacionCorreo, setVerificacionCorreo] = useState("correo");

  return (

    <div className="App">
      <form style={{backgroundColor:'pink'}}></form>
    <h1>REGISTRATION FORM</h1>

    <p>Ingrese su nombre:</p>
     <input type="text"></input>

     <p>ingrese su apellido:</p>
     <input type="text"></input>

     <p>Ingrese su correo:</p>
      <input
        type="text"
        onChange={(e) => {
          setCorreo(e.target.value);
        }}
      ></input>
      <p>Verifique su correo:</p>
      <input
        onChange={(e) => {
          setVerificacionCorreo(e.target.value);
        }}
        type="text"
      ></input>
      <h3></h3>

      <button >submit</button>

  {correo === verificacionCorreo ? (
    <h2></h2>
  ) : (
    <h2 style={{color: 'red'}}>verifique el correo electronico</h2>
  )}

        
         
     
    </div>
  );
}

export default App;
