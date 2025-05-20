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
    <div className={styles.container}>
          <svg className={styles.leftCloud} width="161" height="91" viewBox="0 0 161 91" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.9888 27.0516C8.69225 31.9229 0 43.8778 0 57.8552C0 76.1585 14.9109 91 33.3005 91H128.444C146.834 90.9997 161 80.0708 161 61.7674C159.51 51.7805 155.973 42.6792 143.312 36.9342C143.312 36.9342 140.944 29.0862 136.05 23.591C128.789 15.4368 118.548 14.3613 115.625 14.2088C112.703 14.0564 106.196 14.5558 99.8523 15.9153C92.6515 -1.66135 64.3626 0.0451177 64.3626 0.0451177C46.875 1.75159 30.2994 4.73153 20.9865 27.0073C20.9865 27.792 20.9888 26.3248 20.9888 27.0516Z" fill="#B6E1E1"/>
          </svg>
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
          className={styles.inputBig}
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
            className={styles.inputSmall}
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
            className={styles.inputSmall}
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
          className={styles.selectForm}
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
          className={styles.inputBig}
          required
        ></textarea>
      </div>

      <button type="submit" className={styles.submitButton}>Enviar</button>
    </form>
          <svg className={styles.rightCloud} width="161" height="91" viewBox="0 0 161 91" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.9888 27.0516C8.69225 31.9229 0 43.8778 0 57.8552C0 76.1585 14.9109 91 33.3005 91H128.444C146.834 90.9997 161 80.0708 161 61.7674C159.51 51.7805 155.973 42.6792 143.312 36.9342C143.312 36.9342 140.944 29.0862 136.05 23.591C128.789 15.4368 118.548 14.3613 115.625 14.2088C112.703 14.0564 106.196 14.5558 99.8523 15.9153C92.6515 -1.66135 64.3626 0.0451177 64.3626 0.0451177C46.875 1.75159 30.2994 4.73153 20.9865 27.0073C20.9865 27.792 20.9888 26.3248 20.9888 27.0516Z" fill="#B6E1E1"/>
          </svg>
    </div>
  );
};

export default Form;
