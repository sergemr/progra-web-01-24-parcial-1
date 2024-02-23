import './App.css';
import './index.css';

function App() {
  return (
      <div className="App" style={styles.container}>
          <header className="App-header">

              <img src="https://picsum.photos/200/300" alt="Imagen" style={styles.image} />
              
              <h2>Formulario de Registro</h2>

              <div class="container">

              <form id="registroForm" onSubmit={() => validacionDeCorreo()}>

                  <div style={styles.inputContainer}>
                      <label htmlFor="nombre" style={styles.label}></label>
                      <input type="text" id="nombre" name="nombre" Placeholder="Nombre" required style={styles.input} />
                  </div>

                  <div style={styles.inputContainer}>
                      <label htmlFor="apellido" style={styles.label}></label>
                      <input type="text" id="apellido" name="apellido" Placeholder="Apellido" required style={styles.input} />
                  </div>

                  <div style={styles.inputContainer}>
                      <label htmlFor="email1" style={styles.label}></label>
                      <input type="email" id="email1" name="email1" Placeholder="Correo Electrónico" required style={styles.input} />
                  </div>

                  <div style={styles.inputContainer}>
                      <label htmlFor="email2" style={styles.label}></label>
                      <input type="email" id="email2" name="email2" Placeholder="Confirmar Correo Electrónico," required style={styles.input} />
                  </div>

                  <div>
                      <br/><button type="submit" style={styles.button}>Enviar</button>
                  </div>

              </form>
              </div>                                                                                                                                                    
          </header>
      </div>
  );
}

function validacionDeCorreo() {
  var email1 = document.getElementById("email1").value;
  var email2 = document.getElementById("email2").value;

  if (email1 !== email2) {
      alert("Porfavor verifique que los correos sean identicos!");
      return false;
  }

  console.log("Correo electrónico: " + email1);
  return true;
}

const styles = {
  container: {
      textAlign: 'center',
  },

  image: {
      width: '200px',
      height: '300px',
      marginBottom: '20px',
  },

  inputContainer: {
      marginBottom: '10px',
  },

  label: {
      marginRight: '10px',
  },

  input: {
      padding: '5px',
      borderRadius: '5px',
      border: '1px solid #ccc',
  },

  button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      background: '#007bff',
      color: '#fff',
      cursor: 'pointer',
  },

};

export default App;