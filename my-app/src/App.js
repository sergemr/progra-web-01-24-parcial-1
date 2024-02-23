import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    confirmEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email !== formData.confirmEmail) {
      alert('Verifique el correo electrónico');
      return;
    }
    console.log('Correo electrónico:', formData.email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <img src="https://picsum.photos/200/300" alt="Imagen" />
      <label>
        Nombre:
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
      </label>
      <label>
        Apellido:
        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
      </label>
      <label>
        Correo electrónico:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Confirmar correo electrónico:
        <input type="email" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;

