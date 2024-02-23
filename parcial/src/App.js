import './App.css';
import { useState } from "react";

function App() {

  const [email, setEmail] = useState("");
  const [ccemail, setCcemail] = useState("");

  return (

    <div className="app-container">
      
      <form className="form-container">
      
        <div className="form-header">
          <h1>Formulario</h1>
        </div>

        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input type="apellido" id="apellido" name="apellido" />
        </div>
       
        <div className="form-group">
          <label htmlFor="email">Correo Electronico:</label>
          <input 
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="ccemail">Confirmar Correo Electronico:</label>
          <input 
            type="text"
            onChange={(e) => {
              setCcemail(e.target.value);
            }}
          ></input>
        </div>

        {email === ccemail ? (
          <p>El correo ingresado es correcto.</p>
        ) : (
          <p>Verifique su correo.</p>
        )}
        
        <div className="form-image">
          <img src="https://picsum.photos/200/181" alt="Random Image"/>   
        </div>

        <br></br>

        <button type="submit">Enviar</button>
      
      </form>
    </div>
  );
}

export default App;