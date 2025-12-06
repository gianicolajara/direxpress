import { Cog, Earth, MapIcon } from "lucide-react";
import Button from "../shared/Button";
import NormalBackground from "../shared/NormalBackground";

const Services = () => {
  return (
    <NormalBackground
      background=""
      alt="values direx"
      className="lg:h-screen! h-full! 2xl:h-full! bg-gray-200"
      bgColor="TRANSPARENT"
      bgColorPhone="TRANSPARENT"
      id="services"
    >
      <div className="w-full h-full flex flex-col gap-y-4 justify-center">
        <h2 className="font-extrabold text-3xl lg:text-5xl lg:px-20 2xl:text-7xl text-center font-cabin">
          <span className="text-black-app">NUESTROS</span>{" "}
          <span className="text-blue-app">SERVICIOS</span>
        </h2>
        <p className="font-roboto-condensed text-lg text-center text-gray-800 lg:px-20 mb-5 2xl:text-2xl">
          Ofrecemos una amplia gama de servicios de mensajería y paquetería,
          asegurando que nuestros clientes tengan acceso a una gran variedad de
          opciones de entrega para satisfacer sus necesidades.
        </p>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 place-items-center justify-items-center gap-5 lg:px-20">
          <div className="w-full h-full flex justify-center items-center flex-col gap-y-5 border-2 border-gray-300 rounded-lg min-h-[300px] bg-white shadow-lg p-4">
            <MapIcon size={85} className="text-blue-app" />
            <div className="w-full flex flex-col gap-y-1">
              <h3 className="text-black-app font-bold font-roboto-condensed text-xl text-center 2xl:text-4xl">
                ENVÍOS NACIONALES
              </h3>
              <p className="text-center font-roboto-condensed text-gray-600 2xl:text-2xl">
                Covertura nacional completa
              </p>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center flex-col gap-y-5 border-2 border-gray-300 rounded-lg min-h-[300px] bg-white shadow-lg p-4">
            <Earth size={85} className="text-blue-app" />
            <div className="w-full flex flex-col gap-y-1">
              <h3 className="text-black-app font-bold font-roboto-condensed text-xl text-center 2xl:text-4xl">
                ENVÍOS INTERNACIONALES
              </h3>
              <p className="text-center font-roboto-condensed text-gray-600 2xl:text-2xl">
                Covertura internacional asegurada
              </p>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center flex-col gap-y-5 border-2 border-gray-300 rounded-lg min-h-[300px] bg-white shadow-lg p-4">
            <Cog size={85} className="text-blue-app" />
            <div className="w-full flex flex-col gap-y-1">
              <h3 className="text-black-app font-bold font-roboto-condensed text-xl text-center 2xl:text-4xl">
                ASESORAMIENTO Y SOLUCIONES PERSONALIZADAS
              </h3>
              <p className="text-center font-roboto-condensed text-gray-600 2xl:text-2xl">
                Con los mejores profesionales
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:px-20 flex justify-center items-center mt-5 h-max">
          <Button color="BLUE" href="https://wa.link/cdb5pn">
            Contáctanos
          </Button>
        </div>
      </div>
    </NormalBackground>
  );
};

export default Services;
