import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const [correo, setCorreo] = useState("")
  const [correoIsValid, setCorreoIsValid] = useState("")

  return (
    <div className="App">
      

      <img src="https://fastly.picsum.photos/id/757/200/300.jpg?hmac=su32mJgKVc94YgSiaPE3SzaIM11AtqJgoGffpSTQUOE" 
      width="300" height="300" />
  
      <p></p>

      <h1> FORMULARIO </h1>

  

    <h5>Nombre: <input
      type = "text"
      >
      </input></h5>
    
      <h5>Apellido: <input
      type = "text"
      >
      </input></h5>

    <h5>Correo Electronico: <input 
    type= "text"
    onChange={(e) => {

    setCorreo(e.target.value)

    }}
    ></input></h5>
   
    <h5>Confirmacion de Correo: <input 
    type= "text"
    onChange={(e) => {

      setCorreoIsValid(e.target.value)
      
          }}
    ></input></h5>;

     <button >Verificar {correo === correoIsValid ? (
        
        console.log(`Su correo es ${correo}`)

      ) : (
  
        alert("Verifique su correo")
  
      )}</button>

      
     

    </div>
  );
}

export default App;
