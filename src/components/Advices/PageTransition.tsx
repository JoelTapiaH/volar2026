// components/PageTransition.tsx
import { motion } from "framer-motion";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Estado inicial (invisible y ligeramente desplazado hacia abajo)
      animate={{ opacity: 1, y: 0 }} // Estado animado (visible y en su posición original)
      exit={{ opacity: 0, y: -20 }} // Estado al salir (invisible y ligeramente desplazado hacia arriba)
      transition={{ duration: 0.5 }} // Duración de la transición
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;