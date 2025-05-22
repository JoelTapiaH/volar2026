import styles from "@/styles/Footer.module.css";
import mail from "@/assets/images/mail.png";
import phone from "@/assets/images/phone.png";
import ig from "@/assets/images/ig.png";
import yt from "@/assets/images/yt.png";
import fb from "@/assets/images/fb.png";
import lin from "@/assets/images/in.png";
import logo from "@/assets/images/LOGO_VOLAR.png";

/*import useContentful from "../../utils/useContentful";

const FooterID= "4tyoQEj5Nc9rfkYxwb53dz";

interface FooterData {
    fields: {
      footerImg: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      footerWhatsapp: string;
      footerEmail: string;
      footerPhone: string;
      footerIg: string;
      footerYt: string;
      footerFb: string;
      footerLn: string;
      footerAddress: string;
      footerCopyright: string;
    };
  }
*/

export default function Footer() {
    /*const { data } = useContentful<FooterData>({ id: FooterID });
    if (!data || !data.fields) {
    return null;
    }
    const { footerWhatsapp, footerEmail, footerPhone, footerIg, footerYt, footerFb, footerLn, footerAddress, footerCopyright,footerImg} = data.fields;
    const imgUrl = footerImg[0]?.fields?.file?.url;
    */

    const footerData = {
        footerWhatsapp: "loremIpsum",
        footerEmail: "volar@aporta.org.pe",
        footerPhone: "914 054 626",
        footerIg: "loremIpsum",
        footerYt: "loremIpsum",
        footerFb: "loremIpsum",
        footerLn: "loremIpsum",
        footerAddress: "Calle Dionisio Derteano 144, Piso N°9 -San Isidro (PERÚ)",
        footerCopyright: "loremIpsum",
        footerImg: "loremIpsum"
    };
    return (
    <footer className={styles.footer}>

        <div className={styles.contactInfo}>
            <div className={styles.CCC}>CONTÁCTANOS</div>
            
                <div className={styles.info}>
                    <div className={styles.socialMedia}>
                        <a href={footerData.footerIg} target="_blank"><div><img src={ig.src}/></div></a>
                        <a href={footerData.footerYt} target="_blank"><div><img src={yt.src}/></div></a>
                        <a href={footerData.footerFb} target="_blank"><div><img src={fb.src}/></div></a>
                        <a href={footerData.footerLn} target="_blank"><div><img src={lin.src}/></div></a>
                    </div>
                    <a href={`mailto:${footerData.footerEmail}`} target="_blank" className={styles.contactInput}>
                        <img src={mail.src}/>
                        <div className={styles.contactdata}>{footerData.footerEmail}</div>
                    </a>
                    <a href={`tel:+51${footerData.footerPhone}`} target="_blank" className={styles.contactInput}>
                        <img src={phone.src}/>
                        <div className={styles.contactdata}>+51 {footerData.footerPhone}</div>
                    </a>
                    
                </div>
                <div>
                <img src={logo.src} className={styles.logo}/>
                </div>
                    <h4>{footerData.footerAddress}</h4>
                    <a href={footerData.footerCopyright} target="_blank"><div className={styles.terms}>Términos y condiciones</div></a>
        </div>
        <div className={styles.form}>FORM</div>
    </footer>
    );
  }