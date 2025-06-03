import { useState } from 'react';
import styles from "../../styles/Advices/Advice.module.css";
import useContentful from "../../../utils/useContentful";
import PageTransition from '@/components/Advices/PageTransition';


const C1ID = "2KVKzOe2eteoaCDQbVnnfq";

export default function Consejo1() {
  const { data } = useContentful({ id: C1ID });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Número de artículos por página

  if (!data || !(data as any).fields) {
    return null;
  }

  const { CTitle, CResources, CLink } = (data as any).fields;

  // Invertir el orden de los artículos (los más recientes primero)
  const reversedArticles = [...CResources].reverse();

  // Filtrar artículos basados en el término de búsqueda
  const filteredArticles = reversedArticles.filter((card: any) =>
    card.fields.articleTitle.toLowerCase().includes(searchTerm.toLowerCase())
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

  return (
    <>
    <PageTransition>
    <div className={styles.container}>

      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.searchBar}
      />

      <div className={styles.content}>
        {currentArticles.map((card: any, index: number) => {
          const imgUrl = `https:${card.fields.adviceImg.fields.file.url}`;
          const infoImg = `https:${card.fields.adviceInfoImg.fields.file.url}`;
          return (
                <div className={styles.advice}>
                  <div className={styles.container} onClick={onClick}>
                    <img src={imgUrl} className={styles.image}/>
                          <div className={styles.content} >
                              <div className={styles.age}>
                                {age}
                              </div>
                              <div className={styles.tag}>
                                {tag}
                              </div>
                              <div className={styles.title}>
                              {text}
                              </div>
                            
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
    </PageTransition>
    </>
  );
}