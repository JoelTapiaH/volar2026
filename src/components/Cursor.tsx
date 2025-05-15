import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/cursor.module.css';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const angle = useRef(0);
  const requestRef = useRef<number>();

  const updateCursor = () => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px) rotate(${angle.current}deg)`;
    }
    requestRef.current = requestAnimationFrame(updateCursor);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calcular ángulo basado en la velocidad
      const deltaX = e.clientX - position.current.x;
      const deltaY = e.clientY - position.current.y;
      
      // Actualizar posición inmediatamente
      position.current = { x: e.clientX, y: e.clientY };
      
      // Calcular ángulo solo si hay movimiento significativo
      if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
        angle.current = Math.atan2(deltaY, deltaX) * 180 / Math.PI + 90;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);



  return (
    <div 
      ref={cursorRef}
      className={styles.customCursor}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        zIndex: 9999
      }}
    >
      <svg width="60" height="64" viewBox="0 0 60 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.6876 56.0003L28.3299 58.8074L29.9854 55.9053C31.2961 53.5702 31.7142 50.9128 31.0331 48.3565L30.6924 47.1132C30.5565 46.5601 30.0077 46.1582 29.458 46.1742L27.2595 46.2374C26.6412 46.2551 26.1593 46.6866 26.0206 47.2477L25.6742 48.5109C25.0502 51.0349 25.3875 53.7404 26.6876 56.0003ZM24.0294 46.7482C24.4453 45.2046 25.7529 44.1227 27.2645 44.0792L29.463 44.0157C30.9744 43.9721 32.3461 44.9772 32.6862 46.4988L33.0268 47.7423C33.7753 50.8534 33.3557 54.0677 31.7692 56.8983L29.2861 61.2165C29.0793 61.5704 28.7352 61.7893 28.3231 61.801C27.9108 61.813 27.5677 61.6139 27.3625 61.2718L24.899 57.096C23.325 54.3567 22.8515 51.1679 23.683 48.0113L24.0294 46.7482Z" fill="#F69240"/>
<path d="M25.8088 18.8507C25.8048 20.5913 27.1757 21.9441 28.8935 21.8947C30.6109 21.8453 31.9882 20.4132 31.9922 18.6727C31.9963 16.9322 30.6254 15.5793 28.9076 15.6288C27.1902 15.6782 25.8127 17.1797 25.8088 18.8507ZM34.0533 18.6133C34.0469 21.4679 31.7056 23.9022 28.8887 23.9834C26.0716 24.0644 23.7411 21.7646 23.7478 18.9101C23.7542 16.0555 26.0955 13.6212 28.9124 13.5401C31.7293 13.4589 34.06 15.7588 34.0533 18.6133Z" fill="#F69240"/>
<path d="M18.4165 37.3727C17.9427 34.3232 17.8122 31.2636 17.9567 28.1965C15.4777 30.7043 13.7529 33.9564 13.1266 37.4554L12.6394 40.1149L18.4165 37.3727ZM21.1571 40.5656C21.1569 40.705 21.294 40.7706 21.4315 40.7666L25.5545 40.3696C27.6158 40.1709 29.6081 40.1136 31.6689 40.1936L35.9967 40.3473C36.1341 40.3434 36.2717 40.2699 36.272 40.1305L36.2722 40.061C39.048 27.9371 36.7412 15.2637 29.9632 5.1554L28.7993 3.37908L27.3515 5.64849C20.5951 16.0071 18.2987 28.7436 21.1571 40.5656ZM44.793 39.1193L44.3182 36.4876C43.6391 33.0264 41.9976 29.8714 39.461 27.5077C39.5914 30.567 39.4469 33.704 39.0276 36.7794L44.793 39.1193ZM11.1349 37.0951C12.0388 32.4047 14.5216 28.2258 18.2384 25.1948C19.0105 17.9324 21.5688 10.8273 25.6363 4.58398L27.153 2.31244C27.4977 1.74558 28.1856 1.37756 28.8039 1.35987C29.491 1.34005 30.1084 1.67042 30.4508 2.21745L31.6831 4.06157C35.8596 10.207 38.3855 17.2352 39.193 24.5913C42.965 27.3371 45.4975 31.4413 46.3801 36.0803L46.8547 38.7816C46.9905 39.5434 46.714 40.3172 46.0944 40.8223C45.7503 41.1108 45.3377 41.2618 44.9256 41.2738C44.6508 41.2817 44.3072 41.2219 44.0329 41.0906L38.6792 38.9474C38.5405 39.5085 38.4704 40.0673 38.3319 40.6282L38.2629 40.7695C37.9857 41.752 37.0911 42.4739 35.9916 42.5057L35.8543 42.5095L31.5268 42.3557C29.6034 42.2719 27.6107 42.3293 25.6869 42.524L21.5639 42.921C20.4645 43.0224 19.4357 42.2862 19.1635 41.1802C19.0273 40.6272 18.8914 40.0741 18.8237 39.5192L13.4597 41.9709C13.1846 42.1181 12.8408 42.1977 12.566 42.2055C12.1538 42.2173 11.742 42.09 11.3991 41.8214C10.7817 41.3518 10.5088 40.5939 10.6478 39.8242L11.1349 37.0951Z" fill="#F69240"/>
</svg>

    </div>
  );
};

export default CustomCursor;