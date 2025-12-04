import { Mail, Phone } from "lucide-react";
import InstagramIcon from "../shared/Icons/Instagram";
import WhatsappIcon from "../shared/Icons/Whatasapp";

const Footer = () => {
  return (
    <footer className="w-full h-max p-5 bg-black-app relative">
      <div className="w-full h-full lg:px-25 px-5 py-10 lg:py-16 grid lg:grid-cols-4 lg:grid-rows-1 grid-rows-4 grid-cols-1 place-items-center relative z-20 gap-y-5">
        <div className="w-36 h-min flex justify-center items-center 2xl:w-48">
          <img
            src="./images/logo-only-letter.png"
            className="w-full h-full"
            alt="logo direxpress iberica"
          />
        </div>
        <div className="w-max">
          <ul className="w-full flex flex-col gap-y-2 text-center lg:text-left">
            <li>
              <a
                href="#"
                className="font-bold font-cabin hover:underline text-white hover:text-red-app 2xl:text-xl transition-all"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-cabin hover:underline text-white hover:text-red-app transition-all 2xl:text-xl font-bold"
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-cabin hover:underline text-white hover:text-red-app transition-all 2xl:text-xl font-bold"
              >
                Nuestros Valores
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-cabin hover:underline text-white hover:text-red-app transition-all 2xl:text-xl font-bold"
              >
                Nuestros Servicios
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-cabin hover:underline text-white hover:text-red-app transition-all 2xl:text-xl font-bold"
              >
                Envios Nacionales
              </a>
            </li>
          </ul>
        </div>
        <div className="w-max">
          <ul className="w-full flex flex-col gap-y-2 text-center lg:text-left">
            <li>
              <a
                href="#"
                className="font-cabin hover:underline text-white hover:text-red-app transition-all 2xl:text-xl font-bold"
              >
                Servicios Especificos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-cabin hover:underline text-white hover:text-red-app transition-all 2xl:text-xl font-bold"
              >
                Envios Internacionales
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-cabin hover:underline text-white hover:text-red-app transition-all 2xl:text-xl font-bold"
              >
                ¿Por que elegirnos?
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-cabin hover:underline text-white hover:text-red-app transition-all 2xl:text-xl font-bold"
              >
                Medio Ambiente
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-cabin hover:underline text-white hover:text-red-app transition-all 2xl:text-xl font-bold"
              >
                Clientes
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full h-min flex justify-center items-center">
          <div>
            <div className="w-full h-min flex gap-x-2 self-start items-center justify-center">
              <div className="w-12 h-12 hover:bg-red-app/30 p-2 rounded-lg cursor-pointer shrink-0">
                <a
                  href="https://www.instagram.com/direxpressiberica/"
                  target="_blank"
                >
                  <InstagramIcon color="white" />
                </a>
              </div>
              <div className="w-12 h-12 hover:bg-red-app/30 p-2 rounded-lg cursor-pointer shrink-0">
                <a href="https://wa.link/cdb5pn" target="_blank">
                  <WhatsappIcon color="white" />
                </a>
              </div>
              <div className="w-12 h-12 hover:bg-red-app/30 p-2 rounded-lg cursor-pointer shrink-0">
                <a href="mailto:info@direxiberica.com" target="_blank">
                  <Mail color="white" className="w-full h-full" />
                </a>
              </div>
              <div className="w-12 h-12 hover:bg-red-app/30 p-2 rounded-lg cursor-pointer shrink-0">
                <a href="tel:+36915719797">
                  <Phone color="white" className="w-full h-full" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-[url('./images/logo-only-letter-black.png')] bg-no-repeat bg-cover bg-center z-10 opacity-30"></div>
    </footer>
  );
};

export default Footer;
