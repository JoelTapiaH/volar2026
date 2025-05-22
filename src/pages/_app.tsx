import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export default function App({ Component, pageProps }: AppProps) {
  /*const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Bind the modal to the app element
    Modal.setAppElement("#__next");

    return () => clearTimeout(delay);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <PuffLoader color="var(--green)" size={60} />
      </div>
    );
  }
*/
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
