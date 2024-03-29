import Button from "@mui/material/Button";
import { TelegramIcon } from "@/components/Icons/TelegramIcon";
import Image from "next/image";
import Logo from "../src/img/logo.png";
import '../src/assets/global.scss'

export default function Contact() {
  return (
    <>
      <section id="contacto">
      
      <h2 className="contacto__title">CONTACTO</h2>

        <div className="contacto__container">
          <p style={{marginBottom: '5%'}} className = "contacto__container--paragraph"> Para consultas, licencias exclusivas, servicios personalizados o adquirir tu beat, contactanos </p>

          <a
            href="https://t.me/VentasMagicas777"
            target="_blank"
            rel="noopener noreferrer"
            className="contacto__container--a"
          >
            <Button
              variant="contained"
              className="contacto__container--button"
              startIcon={<TelegramIcon />}
              sx={{
                borderRadius: "20px",
                color: "#ffffff",
                borderColor: "#fac959",
                backgroundColor: "#0088cc",

              }}
            >
              ENVIA UN MENSAJE
            </Button>
          </a>

          <Image src={Logo} width={75} height={75} alt="logo" />
        
        </div>
      </section>
    </>
  );
}
