import logo from './logo.svg';
import './App.css';
import { useState} from "react";



function App() {

  const [nombreUsuario, setNombre] = useState("");
  const [apellidoUsuario, setApellido] = useState("");
  const [correoUsuario, setCorreo] = useState("");
  const [correoConfirCorrUsuario, setConfirCorreo] = useState(" ");

  return (
    <div>
      <header className="App-header">
      <img src="https://fastly.picsum.photos/id/188/200/300.jpg?hmac=zXtOB5OFoSyQezQ-b1qLr4dwQ3z1vpR-O6XAY7Dw79w"  alt="logo" width={100} />
      </header>

      <body className="contenedor">
        <h2>Nombre</h2> 
        <input type="text" onChange={(e)=>{setNombre(e.target.value)}}></input>
        <h2>Apellido</h2>
        <input type="text" onChange={(e)=>{setApellido(e.target.value)}}></input>
        <br></br>
        <h2>Correo</h2>
        <input type="text" onChange={(e)=>{setCorreo(e.target.value)}}></input>
        <br></br>
        <h2>Confirmacion Correo</h2>
        <input type="text" onChange={(e)=>{setConfirCorreo(e.target.value)}}></input>
        <br></br>
      


      <button variant="registrar" onClick={()=>{
        {correoUsuario===correoConfirCorrUsuario? (
        <h1>  </h1>
        ):(
        alert("Porfavor verifique que los correos sean identicos!")
        )}
        console.log("Correo electrónico: " + correoUsuario);
      }}> Registrar 
      </button>
      
    
      </body>




    </div>
  );
}



export default App;
