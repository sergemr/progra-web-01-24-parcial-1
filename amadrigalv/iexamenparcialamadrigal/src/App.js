import './Styles.css';
import { useState } from "react";


function App() {
const [nombre, setNombre] = useState (""); 
const [apellidos, setApellidos] = useState (""); 
const [email, setEmail] = useState (""); 
const [emailConfirmar, setEmailConfirmar] = useState ("");

function enviar(){
 console.log(`Correo electronico ingresado: ${email} `);
}
  return (
    <div>
    <img src="https://picsum.photos/200/300"alt="Imagen random para formulario del examen"/>
    <form>
     <h1>1er Examen Parcial</h1>

      <label>Nombre </label>
      <input 
          onChange={(e) => {
          setNombre(e.target.value);
          }}
          type="text"></input> 
<br></br>

      <label>Apellidos </label>
      <input 
          onChange={(e) => {
          setApellidos(e.target.value);
          }}
          type="text"></input> 
<br></br>

      <label>Correo Electronico </label>
<br></br>
      <input 
          onChange={(e) => {
          setEmail(e.target.value);
          }}
          type="text"></input>
<br></br>

      <label>Confirmacion del Correo Electronico </label>
<br></br>
        <input 
          onChange={(e) => {
          setEmailConfirmar(e.target.value);
          }}
          type="text"></input> 

      {email === emailConfirmar ?(
        <h1></h1>
       ) : (
        <h1 class = "error">Verifique el correo electronico!</h1>
      )}

    <button onClick={enviar}>Enviar</button>
    </form>
    </div>
  );
}

export default App;
