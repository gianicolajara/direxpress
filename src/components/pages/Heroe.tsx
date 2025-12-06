import { CircleX, MapPin, Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";
import { cn } from "../../lib/utils";
import Button from "../shared/Button";
import IconLink from "../shared/IconLink";
import NormalBackground from "../shared/NormalBackground";

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

const Heroe = () => {
  const [open, setOpen] = useState(false);

  const classesNames = cn(
    "w-full h-screen bg-black-app p-5 fixed top-0 left-0 z-99999 transition-transform",
    {
      "translate-x-full": !open,
      "translate-x-0": open,
    }
  );

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <aside className={classesNames}>
        <div className="w-full h-full relative">
          <CircleX
            size={40}
            color="white"
            className="absolute right-0 top-0"
            onClick={() => setOpen(!open)}
          />
          <address className="flex flex-col gap-y-2 text-white not-italic font-roboto-condensed text-center items-center justify-center text-lg h-full">
            <p>
              <strong>Email:</strong> info@direxiberica.com
            </p>
            <p>
              <strong>Telefono:</strong> 915719797
            </p>
            <p>
              <strong>Whatsapp:</strong> 679482245
            </p>
            <p>
              <strong>Direccion: </strong>Calle Reina Mercedes, 1, Madrid
            </p>
          </address>
        </div>
      </aside>
      <NormalBackground
        background=""
        bgConfig="!bg-left"
        alt="heroe direx"
        className="bg-blue-app! 2xl:pt-10!"
        classNameChildren="pt-5!"
      >
        <div className="w-full h-full bg-[url('/images/logo-only-letter-black.png')] bg-no-repeat bg-center bg-cover absolute top-0 left-0 z-20 opacity-35"></div>
        <div className="relative flex flex-col items-center w-full h-full max-w-5xl 2xl:max-w-[1300px] z-20">
          <nav className="w-full h-16 flex justify-between items-center z-30 p-2 self-start">
            <div className="h-7 lg:h-8 xl:h-10 2xl:h-15">
              <img src="./images/logo.png" className="w-full h-full" />
            </div>
            <Button
              className="w-12 h-12 flex justify-center items-center lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <Menu size={25} />
            </Button>
            <div className="hidden gap-x-2 justify-center lg:flex items-center">
              <div className="w-full flex gap-x-2 pr-2">
                <div className="flex gap-x-1">
                  <MapPin color="red" />
                  <p className="text-white font-roboto-condensed text-sm lg:text-base 2xl:text-xl">
                    Calle Reina Mercedes, 1, Madrid
                  </p>
                </div>
                <p className="h-full w-0.5 border-l-2 border-white"></p>
                <div className="flex gap-x-1">
                  <Phone color="red" />
                  <p className="text-white font-roboto-condensed text-sm lg:text-base 2xl:text-xl">
                    915719797 | 679482245
                  </p>
                </div>
              </div>
              <Button color="ERROR" href="https://wa.link/cdb5pn">
                Contactanos
              </Button>
              <Button href="https://maps.app.goo.gl/dr9ZTriD8FAThABZ8">
                Ubicacion
              </Button>
            </div>
          </nav>
          <div className="h-full flex justify-center items-center">
            <div className="flex flex-col gap-y-10">
              <div className="flex flex-col gap-y-5 lg:gap-0">
                <img src="./images/big-logo.png" />
                <p className="font-cabin font-bold text-white text-center text-lg lg:text-xl xl:text-4xl">
                  AVANZAMOS JUNTOS
                </p>
              </div>
              <div className="lg:hidden gap-x-2 justify-center flex">
                <Button color="ERROR" href="https://wa.link/cdb5pn">
                  Contactanos
                </Button>
                <Button href="https://maps.app.goo.gl/dr9ZTriD8FAThABZ8">
                  Ubicacion
                </Button>
              </div>
            </div>
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
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </NormalBackground>
    </>
  );
};

export default Heroe;
