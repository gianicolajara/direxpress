import { Leaf } from "lucide-react";
import NormalBackground from "../shared/NormalBackground";

const Enviroment = () => {
  return (
    <NormalBackground
      background=""
      alt="Specific Services Direx"
      className="lg:h-full! h-full! bg-green-700"
      bgColor="TRANSPARENT"
      bgColorPhone="TRANSPARENT"
    >
      <div className="w-full h-full lg:px-20 flex flex-col justify-center items-center gap-y-5">
        <div className="w-full h-full grid gid-cols-1 grid-rows-[repeat(3_auto)] lg:grid-cols-[1fr_3fr] lg:grid-rows-1">
          <div className="w-full h-full flex justify-center items-center">
            <Leaf size={150} className="text-green-950" />
          </div>
          <div className="w-full h-full flex flex-col gap-y-5">
            <h2 className="lg:text-left text-center font-extrabold text-3xl lg:text-5xl mb-5 font-cabin 2xl:text-7xl">
              <span className="text-green-950">
                COMPROMISO CON EL <br /> MEDIO AMBIENTE
              </span>
            </h2>
            <div className="flex flex-col gap-y-2">
              <p className="text-lg font-roboto-condensed text-green-200 text-center lg:text-left 2xl:text-2xl">
                En nuestra empresa, estamos comprometidos con el medio
                medioambiente y nos esforzamos por minimizar nuestro impacto
                ambiental en todas nuestras operaciones.
              </p>
              <p className="text-lg font-roboto-condensed text-green-200 text-center lg:text-left 2xl:text-2xl">
                Creemos que es importe hacer nuestra parte para proteger el
                planeta y estamos comprometidos en seguir mejorando nuestras
                prácticas sostenibles en el futuro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </NormalBackground>
  );
};

export default Enviroment;
