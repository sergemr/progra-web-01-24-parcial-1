import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
const [mail, setmail]= useState("Email");
const[mailverificao, setmailverificado]= useState("");
const validado =() =>{
  alert("Los emails son iguales");
};
const novalidado =() =>{
  alert("Los emails son no coinciden");
};
  return (
    <div className="App">
      
      <div className='container'>
        
        <header className="App-header">
        <br></br>
        <img src="https://fastly.picsum.photos/id/293/200/200.jpg?hmac=6YL5khsW332VGbJLkqIfYLzyXyT1kj358PA64TJtKuw" alt="ocean" />
        
        <h1>Formulario de registro</h1>

        <label>
          Nombre:<br></br>
          <input type="text" />
        </label>
        <br></br>

        
        <label>
          Apellido: <br></br>
          <input type="text" />
        </label>
        <br></br>

        <label>
          Email:<br></br>
          <input onChange={(e)=>{
            setmail(e.target.value);
            }}
            type='text'
          ></input>
        </label>
        <br></br>
        
        
        <label>
          Email de verificación:<br></br>
          <input onChange={(e)=>{
            setmailverificado(e.target.value)
          }}
          type='text'
          ></input> 
        </label>
        <br></br>

        <button onClick={mail==mailverificao?(validado):(novalidado)}>Enviar</button>
        <br></br>

        </header>
      </div>
      
    </div>
  );
}

export default App;
