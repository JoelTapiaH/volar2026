import { useState, useRef, useEffect } from 'react';
import styles from "../../styles/Advices/Advice.module.css";
import useContentful from "../../../utils/useContentful";
import PageTransition from '@/components/Advices/PageTransition';
import { TextBreak } from '@/components/global/Text_break';


const CID = "ec7IWUdzKwNZ3z5TW0cSn";

export default function Consejo1() {
  const { data } = useContentful({ id: CID });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Número de artículos por página
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ type: 'image' | 'video'; url: string } | null>(null);
  const typeformRef = useRef(null);
  const [typeformLoaded, setTypeformLoaded] = useState(false);

  // Cargar Typeform con IntersectionObserver
  useEffect(() => {
    if (!typeformRef.current || typeformLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !typeformLoaded) {
            loadTypeform();
          }
        });
      },
      { threshold: 0.1 } // Dispara cuando el 10% del elemento es visible
    );

    observer.observe(typeformRef.current);

    return () => {
      if (typeformRef.current) {
        observer.unobserve(typeformRef.current);
      }
    };
  }, [typeformLoaded]);

  const loadTypeform = () => {
    // Limpiar cualquier Typeform existente
    if (typeformRef.current) {
      typeformRef.current.innerHTML = '';
    }

    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    script.onload = () => setTypeformLoaded(true);
    document.body.appendChild(script);
  };

  // Cargar Typeform al montar el componente (fallback si IntersectionObserver no funciona)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!typeformLoaded) {
        loadTypeform();
      }
    }, 1000); // Intento de carga después de 1 segundo

    return () => clearTimeout(timer);
  }, []);

  if (!data || !(data as any).fields) {
    return null;
  }

  const { CTitle, CResources, CLink, CTitleForm } = (data as any).fields;

  // Invertir el orden de los artículos (los más recientes primero)
  const reversedArticles = [...CResources].reverse();

  // Filtrar artículos basados en el término de búsqueda
  const filteredArticles = reversedArticles.filter((card: any) =>
    card.fields.adviceTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  // Obtener los artículos para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstItem, indexOfLastItem);



  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Resetear a la primera página al buscar
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleContainerClick = (card: any) => {
  if (card.fields.adviceInfoImg?.fields?.file?.url) {
    setModalContent({
      type: 'image',
      url: `https:${card.fields.adviceInfoImg.fields.file.url}`,
    });
  } else if (card.fields.adviceInfoLink) {
    setModalContent({
      type: 'video',
      url: card.fields.adviceInfoLink,
    });
  }
  setIsModalOpen(true);
};

const extractYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};



  return (
    <div style={{margin: '1em 0 3em 0', display:'flex', flexDirection:'column', alignItems:'center'}}>
    <PageTransition>
    <div className={styles.containerAll}>
      <h1>{CTitle}</h1>
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.searchBar}
      />

      {/* Paginación */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? styles.activePage : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className={styles.contentContainer}>
        {currentArticles.map((card: any, index: number) => {
          const imgUrl = `https:${card.fields.adviceImg.fields.file.url}`;
          const age = card.fields.adviceAge;
          const tag = card.fields.adviceTag;
          const text = card.fields.adviceText;
          const title = card.fields.adviceTitle;
          const color = card.fields.adviceColor;
          const popImage = card.fields.adviceInfoImg?.fields?.file?.url 
    ? `https:${card.fields.adviceInfoImg.fields.file.url}` 
    : null;
          const popLinkYT = card.fields.adviceInfoLink;
          return (
                  <div key={`card-${index}`}
                  className={styles.container} style={{borderColor: color}} onClick={() => handleContainerClick(card)}>
                      <img src={imgUrl} className={styles.image}/>
                      <div className={styles.content} style={{backgroundColor: color}}>
                        <div className={styles.age}>
                          {age}
                        </div>
                        <div className={styles.tag}>
                          {tag}
                        </div>
                        <div className={styles.title}>
                        <TextBreak>{title}</TextBreak>
                        </div>
        </div>

                  </div>
          );
        })}
      </div>

      {/* Paginación */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? styles.activePage : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>

        {isModalOpen && modalContent && (
  <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      {modalContent.type === 'image' ? (
        <img src={modalContent.url} alt="Modal content" className={styles.modalImage} />
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${extractYouTubeId(modalContent.url)}`}
          className={styles.modalVideo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
        ×
      </button>
    </div>
  </div>
)}

    </PageTransition>
    <h1 style={{color: '#242365', marginTop:'3.5em'}}>{CTitleForm}</h1>

    <div className={styles.form}>
      <div data-tf-live={CLink} ref={typeformRef} style={{display:'flex', justifyContent:'center'}}></div>
    </div>

    </div>
  );
}