import logo from './logo.svg';
import './App.css';
import { useState } from "react";

/* 1 el formulario debe tener, nombre apellido correo electronico y confirmacion del correo electronico. 
2 si el correo y el campo de confirmacion de correo son diferentes, debe de desplegar un mensaje que diga "verifique el correo electronico" 
3 al hacer click en el boton de enviar. Imprimir el correo electronico en consola.
*/

function App() {
  const [correo, setCorreo] = useState("");
  const [CorreoVerificar, setCorreoVerificar] = useState("");
  
  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
    setMensaje(correo === e.target.value ? "Los correos son iguales" : "Los correos son diferentes");
  };
  const [mensaje, setMensaje] = useState("Introduce un correo");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Correo:", correo);
  };

  return (
    <div className="mejorado">
      <div className="App">
        <h1>Registrar</h1>
        <img src='https://fastly.picsum.photos/id/916/200/300.jpg?hmac=AlGE1xEsSBVvJKbHoDnjf9v5TRINh8LNMN6xwzQieO0' alt="Imagen de muestra" />
        <div className="form-mejorado">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre"><b>Nombre</b></label>
              <input 
                type="text" 
                placeholder="Escribe tu Nombre" 
                name='nombre' 
                id='nombre' 
                required
              />
            </div>
            <div>
              <label htmlFor="apellido"><b>Apellido</b></label>
              <input 
                type="text" 
                placeholder="Escribe tu Apellido" 
                name='apellido' 
                id='apellido' 
                required
              />
            </div>
            <div>
              <label htmlFor="correo"><b>Correo</b></label>
              <input
                onChange={handleCorreoChange}
                type="text" 
                placeholder="Escribe tu Correo" 
                name="correo" 
                id="correo" 
                value={correo}
                required
              />
            </div>
            <div>
              <label htmlFor="confirmarCorreo"><b>Confirmar Correo</b></label>
              <input
                onChange={(e) => {
                  setCorreoVerificar(e.target.value);
                }} 
                type="text" 
                placeholder="Confirma tu Correo" 
                name="confirmarCorreo" 
                id="confirmarCorreo" 
                required
              />
            </div>
            <div>
              <button type="submit" className="full">Enviar</button>
            </div>
          </form>
        </div>
        <div>
          {mensaje}
        </div>
      </div>
    </div>
  );
}

export default App;
