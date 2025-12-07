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

const navListData = [
  {
    id: 1,
    href: "#about",
    label: "Sobre Nosotros",
  },
  {
    id: 2,
    href: "#values",
    label: "Nuestros Valores",
  },
  {
    id: 3,
    href: "#services",
    label: "Nuestros Servicios",
  },
  {
    id: 4,
    href: "#national",
    label: "Envíos Nacionales",
  },
  {
    id: 5,
    href: "#specific",
    label: "Servicios Específicos",
  },
  {
    id: 6,
    href: "#international",
    label: "Envíos Internacionales",
  },
  {
    id: 7,
    href: "#choose",
    label: "¿Por qué elegirnos?",
  },
  {
    id: 8,
    href: "#enviroment",
    label: "Medio Ambiente",
  },
  {
    id: 9,
    href: "#clients",
    label: "Clientes",
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
            {navListData.slice(0, 4).map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="font-cabin text-white hover:text-red-app 2xl:text-xl "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-max">
          <ul className="w-full flex flex-col gap-y-2 text-center lg:text-left">
            {navListData.slice(4, 9).map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="font-cabin text-white hover:text-red-app 2xl:text-xl "
                >
                  {item.label}
                </a>
              </li>
            ))}
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
