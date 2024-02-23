import './App.css';
import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      alert('Verifique el correo electrónico');
    } else {
      console.log('Correo Electrónico:', email);
    }
  };

  return (
    <div className="form-background">
      <div className="form-container">
        <h2>Regístrate</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nombre: </label>
            <input type="text"  />
          </div>
          <div className="input-group">
            <label>Apellido: </label>
            <input type="text"  />
          </div>
          <div className="input-group">
            <label>Correo: </label>
            <input type="email" />
          </div>
          <div className="input-group">
            <label>Confirmar Correo: </label>
            <input type="email"  />
          </div>
          <button type="submit">Regístrate: </button>
        </form>
      </div>
    </div>
  );
}

export default App;
