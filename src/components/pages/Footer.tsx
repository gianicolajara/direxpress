import { FaWhatsapp } from "react-icons/fa";
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";
import IconLink from "../shared/IconLink";

const networkLinks = [
  {
    href: "https://www.instagram.com/direxpressiberica/",
    icon: FiInstagram,
    id: 1,
  },
  {
    href: "https://wa.link/cdb5pn",
    icon: FaWhatsapp,
    id: 2,
  },
  {
    href: "mailto:info@direxiberica.com",
    icon: FiMail,
    id: 3,
  },
  {
    href: "tel:+36915719797",
    icon: FiPhone,
    id: 4,
  },
];

const Footer = () => {
  return (
    <footer className="w-full h-max p-5 bg-black-app relative">
      <div className="w-full h-full lg:px-25 px-5 py-10 lg:py-16 grid lg:grid-cols-4 lg:grid-rows-1 grid-rows-4 grid-cols-1 place-items-center relative z-20 gap-y-5">
        <div className="w-36 h-min flex justify-center items-center 2xl:w-48">
          <img
            src="./images/logo-only-letter.webp"
            className="w-full h-full"
            alt="logo direxpress iberica"
          />
        </div>
        <div className="w-max">
          <ul className="w-full flex flex-col gap-y-2 text-center lg:text-left">
            <li>
              <a
                href="#about"
                className="font-cabin text-white hover:text-red-app 2xl:text-xl "
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href="#values"
                className="font-cabin text-white hover:text-red-app 2xl:text-xl "
              >
                Nuestros Valores
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="font-cabin text-white hover:text-red-app 2xl:text-xl "
              >
                Nuestros Servicios
              </a>
            </li>
            <li>
              <a
                href="#national"
                className="font-cabin text-white hover:text-red-app 2xl:text-xl "
              >
                Envíos Nacionales
              </a>
            </li>
            <li>
              <a
                href="#specific"
                className="font-cabin text-white hover:text-red-app 2xl:text-xl "
              >
                Servicios Específicos
              </a>
            </li>
          </ul>
        </div>
        <div className="w-max">
          <ul className="w-full flex flex-col gap-y-2 text-center lg:text-left">
            <li>
              <a
                href="#international"
                className="font-cabin text-white hover:text-red-app 2xl:text-xl "
              >
                Envíos Internacionales
              </a>
            </li>
            <li>
              <a
                href="#choose"
                className="font-cabin text-white hover:text-red-app 2xl:text-xl "
              >
                ¿Por qué elegirnos?
              </a>
            </li>
            <li>
              <a
                href="#enviroment"
                className="font-cabin text-white hover:text-red-app 2xl:text-xl "
              >
                Medio Ambiente
              </a>
            </li>
            <li>
              <a
                href="#clients"
                className="font-cabin text-white hover:text-red-app 2xl:text-xl "
              >
                Clientes
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full h-min flex justify-center items-center">
          <div>
            <div className="w-full h-min flex gap-x-2 self-start items-center justify-center">
              {networkLinks.map((item) => (
                <IconLink
                  key={item.id}
                  Icon={item.icon}
                  color="white"
                  href={item.href}
                  hoverColor="red"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-[url('/images/logo-only-letter-black.webp')] bg-no-repeat bg-cover bg-center z-10 opacity-30"></div>
    </footer>
  );
};

export default Footer;
