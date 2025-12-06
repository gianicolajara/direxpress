import { CircleCheckBig } from "lucide-react";
import Button from "../shared/Button";

const itemsClients = [
  "Instituciones publicas",
  "Diputaciones",
  "Ayuntamientos",
  "Mancomunidades",
  "Partidos Politicos",
  "Universidades",
  "Gestorias",
  "Empresas Farmaceuticas",
  "Empresas Privadas",
];

const Clients = () => {
  return (
    <section className="grid-cols-1 grid-rows-[300px_1fr] grid lg:grid-cols-2 lg:grid-rows-1 h-full lg:px-25 lg:py-20 gap-x-10">
      <div className="w-full h-full flex justify-center items-center order-2 lg:order-1 py-20 px-5 lg:py-0 lg:px-0">
        <div className="w-full h-full flex flex-col gap-y-5 lg:pr-25 lg:py-20 justify-center px-5 lg:order-1 order-2 lg:pl-10">
          <h2 className="text-center lg:text-left font-extrabold text-3xl lg:text-5xl 2xl:text-7xl font-cabin">
            <span className="text-black-app">CLIENTES QUE CONFIAN EN</span>{" "}
            <br />
            <span className="text-blue-app">DIREXPRESS</span>
          </h2>
          <p className="text-lg font-roboto-condensed text-black-app text-center lg:text-left 2xl:text-2xl">
            Somos una de las empresas mas confiable en todo Madrid, desde
            Instituciones Publicas hasta Empresas Privadas confian en nosotros
            para enviar su correspondencia desde hace mas de 25 años
          </p>
          <div className="w-full h-max">
            <ul
              role="list"
              className="space-y-4 p-6 lg:inline flex justify-center flex-col items-center"
            >
              {itemsClients.map((item) => (
                <li className="flex items-center gap-x-3 " key={item}>
                  <CircleCheckBig className="text-blue-app shrink-0" />
                  <span className="font-roboto-condensed text-lg font-bold text-black-app text-center 2xl:text-2xl w-max">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:text-left text-center">
            <Button color="BLUE" href="https://wa.link/cdb5pn" className="">
              Contactanos
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center order-1 lg:order-2">
        <div className="w-full h-full 2xl:w-[750px] 2xl:h-[850px] lg:rounded-4xl overflow-hidden bg-[url('/images/clients.jpg')] bg-position-[42%_center] 2xl:bg-position-[36%_center] bg-cover bg-no-repeat shadow-lg"></div>
      </div>
    </section>
  );
};

export default Clients;
