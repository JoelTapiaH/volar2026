'use client';

import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    celular: '',
    soy: '',
    mensaje: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    // Aquí podrías enviar los datos a tu backend o API
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.textIntro}>¡Estamos atentos a tus consultas!</div>
      <div className={styles.formGroup}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="celular">Celular</label>
          <input
            type="tel"
            id="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />
        </div>
      </div>

        <div className={styles.formGroup}>
        <label htmlFor="soy">Soy</label>
        <select
          id="soy"
          name="soy"
          value={formData.soy}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>Escoge tu rol</option>
          <option value="cuidador">Cuidador</option>
          <option value="mamá o papá">Mamá o Papá</option>
        </select>
      </div>

        <div className={styles.formGroup}>
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit" className={styles.submitButton}>Enviar</button>
    </form>
  );
};

export default Form;
