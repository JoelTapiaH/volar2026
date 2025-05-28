import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Navbar.module.css';
import logo from "@/assets/images/LOGO_VOLAR.png";



export default function Navbar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');
  const [showPublicacionesDropdown, setShowPublicacionesDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sincronizar con la ruta actual
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
    setIsMenuOpen(false);
    router.push(path);
  };

  // Función para verificar si un link está activo
  const isActive = (path: string) => {
    return activeLink === path || 
           (path === '/publicaciones' && activeLink.startsWith('/publicaciones'));
  };

  // Función para toggle del dropdown ( móvil y desktop)
  const toggleProyectosDropdown = () => {
    setShowPublicacionesDropdown(!showPublicacionesDropdown);
  };

  // Cerrar dropdown cuando se cierra el menú hamburguesa
  useEffect(() => {
    if (!isMenuOpen) {
      setShowPublicacionesDropdown(false);
    }
  }, [isMenuOpen]);

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
      <div className={styles.logo}>
        <img src={logo.src} alt="Logo" />
      </div>
    
      <nav className={styles.navbar}>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.links}>
            <a 
              href="/" 
              className={`${styles.mainLink} ${isActive('/') ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/');
              }}
            >
              INICIO
            </a>

            <a 
              href="/nosotros" 
              className={`${styles.mainLink} ${isActive('/nosotros') ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/nosotros');
              }}
            >
              NOSOTROS
            </a>
              

                
            <a 
              href="/aprendamos/aprendamos" 
              className={`${styles.mainLink} ${isActive('/aprendamos/aprendamos') ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/aprendamos/aprendamos');
              }}
            >
              APRENDAMOS
            </a>

            <a 
              href="/contactanos" 
              className={`${styles.mainLink} ${isActive('/contactanos') ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/contactanos');
              }}
            >
              CONTÁCTANOS
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}