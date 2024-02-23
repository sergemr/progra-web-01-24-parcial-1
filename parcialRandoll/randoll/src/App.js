import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {useEffect} from "react";
function App() {
const[correo, setCorreo]=useState(" ");
const[correoConfirm,setCorreoConfirm]=useState(" ");



  







  return (
    <div className="App">
      <form>
      <h1> FORMULARIO DE REGISTRO</h1>
        <img src="imagen2" alt='image'/>
        <br></br>
       <label for="name">Nombre:</label><br></br>
       <input type="text" id="name" name="Nombre:"></input><br></br>
       <label for="apellido" >Apellido:</label><br></br>
       <input type="text" id="apellido" name="Apellido:"></input><br></br>
       <label for="email">correo:</label><br></br>
       <input 
      type= "email"
       onChange={(event) => {
        console.log(event.target.value);
        setCorreo(event.target.value)
       }}
      ></input><br></br>

       <label for="email">confirme su correo:</label><br></br>
       <input 
      type= "email"
       onChange={(event) => {
        console.log(event.target.value);
        setCorreoConfirm(event.target.value)
       }}
      ></input><br></br>
      <button>submit</button>


     

     
      </form>
      {correo === correoConfirm ?(
       <h1> exitoso </h1>
       ):(
        <h1> verifique correo</h1>
       )
       }
     
    

    </div>
  );
 
}

export default App;
