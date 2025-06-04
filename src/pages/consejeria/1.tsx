import { useState } from 'react';
import styles from "../../styles/Advices/Advice.module.css";
import useContentful from "../../../utils/useContentful";
import PageTransition from '@/components/Advices/PageTransition';
import { title } from 'process';
import { TextBreak } from '@/components/global/Text_break';


const C1ID = "2KVKzOe2eteoaCDQbVnnfq";

export default function Consejo1() {
  const { data } = useContentful({ id: C1ID });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Número de artículos por página
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ type: 'image' | 'video'; url: string } | null>(null);

  if (!data || !(data as any).fields) {
    return null;
  }

  const { CTitle, CResources, CLink } = (data as any).fields;

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
                  <div className={styles.container} style={{borderColor: color}} onClick={() => handleContainerClick(card)}>
                      <div className={styles.top} >
                          <img src={imgUrl} className={styles.image}/>
                          <div className={styles.content} style={{backgroundColor: color}}>
                              <div className={styles.age}>
                                {age}
                              </div>
                              <div className={styles.tag}>
                                {tag}
                              </div>
                              <div className={styles.title} >
                                <TextBreak>{title}</TextBreak> 
                              </div>
                          </div>
                      </div>
                      <div className={styles.text} style={{color: color}}>
                          {text}
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

          <a className={styles.styledButton} href= {CLink} target='_blank'><span>Cuestionario Final</span></a>

    </div>
  );
}