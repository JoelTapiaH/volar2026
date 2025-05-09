import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import logo from "@/assets/images/LOGO_VOLAR.png";
/*import useContentful from "../../utils/useContentful";

const PopUpID = "1CinImCNF28ceVD7VuYJvZ";
interface PopUpFields {
  popUpImg: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  popUpLink: string;
  popUpButton: string;
  popUpShow: boolean;
}

interface ContentfulData {
  fields: PopUpFields;
}
*/
export default function Navbar() {
 /* const { data, loading, error } = useContentful({ id: PopUpID }) as {
    data: ContentfulData | null;
    loading: boolean;
    error: Error | null;
  };*/
  const [showPublicacionesDropdown, setShowPublicacionesDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú hamburguesa

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alternar entre abrir y cerrar el menú
  };
  
  /*const { popUpShow, popUpLink } = data.fields;*/


  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <div className={styles.logo}>
            <img src={logo.src} alt="Logo" />
            </div>
    
    <nav className={styles.navbar}>

      {/* Botón del menú hamburguesa */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menú de navegación */}
      <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.links}>
          <a href="/">INICIO</a>
          <a href="/programas">NOSOTROS</a>

          {/* Dropdown para PUBLICACIONES */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => setShowPublicacionesDropdown(true)}
            onMouseLeave={() => setShowPublicacionesDropdown(false)}
          >
            <p style={{ width: "150px",}}>PROYECTOS</p>
            {showPublicacionesDropdown && (
              <div className={styles.dropdownContent}>
                <a href="/publicaciones/articulos" >Alianzas</a>
                <a href="/publicaciones/contenido" >Volar Colaboradores</a>
                <a href="/publicaciones/medios" >Volar en Comunidades</a>
                <a href="/publicaciones/medios" >Piloto Volar Cuna</a>
              </div>
            )}
          </div>

          <a href="/comunidad">APRENDAMOS</a>

        </div>


      </div>
    </nav>
    </div>
  );
}