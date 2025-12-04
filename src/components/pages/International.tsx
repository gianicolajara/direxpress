import { CircleCheckBig } from "lucide-react";
import Button from "../shared/Button";

const itemsEnviosInternacionales = [
  "Tiempos de Entregas Garantizados",
  "Costes Reducidos",
  "Calidad en el Proceso",
  "Mercancia Controlada",
];

const International = () => {
  return (
    <section className="w-full lg:h-screen h-full">
      <div className="w-full h-full grid grid-cols-1 grid-rows-[300px_1fr] lg:grid-cols-2 lg:grid-rows-1">
        <div className="w-full h-full [background-image:url('/images/cargo-ship.jpg')] bg-no-repeat bg-center bg-cover order-1"></div>
        <div className="w-full h-full flex flex-col gap-y-5 lg:pr-25 py-20 justify-center px-5 lg:order-1 order-2 bg-blue-app lg:pl-10">
          <h2 className="text-center lg:text-left font-extrabold text-3xl lg:text-5xl 2xl:text-7xl font-cabin">
            <span className="text-white">ENVIOS</span> <br />
            <span className="text-red-app">INTERNACIONALES</span>
          </h2>
          <p className="text-lg font-roboto-condensed text-white text-center lg:text-left 2xl:text-2xl">
            Nuestra gama de servicios de transporte para que tus envíos lleguen
            a cualquier parte del mundo.
          </p>
          <div className="w-full h-max">
            <ul
              role="list"
              className="space-y-4 p-6 lg:inline flex justify-center flex-col items-center"
            >
              {itemsEnviosInternacionales.map((item) => (
                <li className="flex items-center gap-x-3 " key={item}>
                  <CircleCheckBig className="text-red-app shrink-0" />
                  <span className="break-all font-roboto-condensed text-lg font-bold text-white text-center 2xl:text-2xl">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:text-left text-center">
            <Button color="ERROR" href="https://wa.link/cdb5pn" className="">
              Contactanos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default International;
