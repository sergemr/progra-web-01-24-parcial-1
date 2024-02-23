import './App.css';
import React, { useState } from 'react';

function App() {
  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');

  const confirmarEmail = (event) => {
    event.preventDefault();
    if (email1 === email2) {
      console.log(email1);
    } else {
      alert("El correo no es el mismo, favor ingresar el mismo correo.");
    }
  };

  return (
    <html>
      <body>
        <div>
          <div className="form-container">
            <h2>REGISTRATION FORM</h2>
            <form onSubmit={confirmarEmail}>
              <div className="names">
                <input type="text" id="first-name" name="first-name" placeholder="First Name" required
                />
                <input type="text" id="last-name" name="last-name" placeholder="Last Name" required
                />
              </div>
              <input type="email" id="email" name="email" placeholder="Email Address" value={email1} onChange={event => setEmail1(event.target.value)} required
              />
              <input type="email" id="email2" name="email2" placeholder="Confirm Email Address" value={email2} onChange={event => setEmail2(event.target.value)} required
              />
              <button type="submit">REGISTER NOW</button>
            </form>
          </div>
        </div>
      </body>
    </html>

  );
}

export default App;
