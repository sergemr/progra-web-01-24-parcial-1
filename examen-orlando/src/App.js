import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function acceder(){
  alert("Bienvenido!")
}
function acceder1(){
  alert("Verifique su correo")
}
function App() {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [correoVerif, setCorreoVerif] = useState("");
  return (
    <div className="App">
      <h1> <font color="green"> Bienvenido</font></h1>
      <br></br>
        <img src="https://fastly.picsum.photos/id/1077/200/300.jpg?hmac=BqQneQETTwZkHqmZmg4VxHsD-Lia-Qxp6nXv0c2eaac"alt="logo" />
        <br></br>
        <br></br>
        <h2><font color="green"> Ingrese sus datos</font></h2>
        <form action="procesar-registro.php" method="POST">
        <font> Nombre</font><input type="text" onChange={(e) =>{
        setName(e.target.value);
      }}></input><font> Apellido</font><input type="text" onChange={(e) =>{
        setApellido(e.target.value);
      }}></input>
      <br></br>
      <font> Correo</font><br></br><input onChange={(e) =>{
        setCorreo(e.target.value);
      }} type="text"></input><br></br>
      <font>Verifique Correo</font><br></br><input onChange={(e) =>{
        setCorreoVerif(e.target.value);
      }} type="text"></input>
      <br></br>
      {correo === correoVerif ? (
        <button onClick={acceder}>Acceder</button>
      ) : (<button onClick={acceder1}>Acceder</button>
      )}
      <br></br>
      </form>
      
    </div>
    
  )
  
}

export default App;
