'use client';

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Contact/Contact.module.css';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    celular: '',
    soy: '',
    empresa: '',
    mensaje: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Inicializa EmailJS
  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
      // Opcional: Desactiva el bloqueo de seguridad local
      blockHeadless: false,
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // Asegúrate de que estos IDs coincidan con tu configuración en EmailJS
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        e.currentTarget as HTMLFormElement
      );

      console.log('Email enviado con éxito:', result);
      setSubmitStatus('success');
      setFormData({
        nombre: '',
        email: '',
        celular: '',
        soy: '',
        empresa: '',
        mensaje: '',
      });

      // Opcional: Resetear el estado después de 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error al enviar el email:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
            <svg className={styles.leftCloud} width="128" height="91" viewBox="0 0 128 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1097_126)">
            <path d="M20.9888 27.0516C8.69225 31.9229 5.13798e-06 43.8778 5.13798e-06 57.8552C5.13798e-06 76.1585 14.9109 91 33.3005 91H128.444C146.834 90.9997 161 80.0708 161 61.7674C159.51 51.7805 155.973 42.6792 143.312 36.9342C143.312 36.9342 140.944 29.0862 136.05 23.591C128.789 15.4368 118.548 14.3613 115.625 14.2088C112.703 14.0564 106.196 14.5558 99.8523 15.9153C92.6515 -1.66135 64.3626 0.0451177 64.3626 0.0451177C46.875 1.75159 30.2994 4.73153 20.9865 27.0073C20.9865 27.792 20.9888 26.3248 20.9888 27.0516Z" fill="#B6E1E1"/>
            </g>
            <defs>
            <clipPath id="clip0_1097_126">
            <rect width="128" height="91" fill="white"/>
            </clipPath>
            </defs>
            </svg>
      </div>

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
          <div className={styles.formGroup2}>
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

          <div className={styles.formGroup2}>
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
            <option value="empresa">Institución</option>
          </select>
        </div>
        {formData.soy === 'empresa' && (
<div className={`${styles.empresaField} ${formData.soy === 'empresa' ? styles.visible : ''}`}>
  <div className={styles.formGroup}>
    <label htmlFor="empresa">Nombre de Institución</label>
    <input
      type="text"
      id="empresa"
      name="empresa"
      value={formData.empresa}
      onChange={handleChange}
      className={styles.inputBig}
      required={formData.soy === 'empresa'}
    />
  </div>
</div>
        )}
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

        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>

        {submitStatus === 'success' && (
          <div className={styles.successMessage}>
            ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className={styles.errorMessage}>
            Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.
          </div>
        )}
      </form>
      
      <div className={styles.right}>
            <svg className={styles.rightCloud} width="128" height="91" viewBox="0 0 128 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1097_127)">
            <path d="M-12.0112 27.0516C-24.3078 31.9229 -33 43.8778 -33 57.8552C-33 76.1585 -18.0891 91 0.300545 91H95.4442C113.834 90.9997 128 80.0708 128 61.7674C126.51 51.7805 122.973 42.6792 110.312 36.9342C110.312 36.9342 107.944 29.0862 103.05 23.591C95.7888 15.4368 85.5482 14.3613 82.6254 14.2088C79.7026 14.0564 73.1958 14.5558 66.8523 15.9153C59.6515 -1.66135 31.3626 0.0451177 31.3626 0.0451177C13.875 1.75159 -2.70058 4.73153 -12.0135 27.0073C-12.0135 27.792 -12.0112 26.3248 -12.0112 27.0516Z" fill="#B6E1E1"/>
            </g>
            <defs>
            <clipPath id="clip0_1097_127">
            <rect width="128" height="91" fill="white"/>
            </clipPath>
            </defs>
            </svg>
      </div>

    </div>
  );
};

export default Form;