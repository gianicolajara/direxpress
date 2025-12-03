import { CheckCircleIcon } from "lucide-react";
import NormalBackground from "../shared/NormalBackground";

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
    <NormalBackground
      background="./images/clients.jpg"
      alt="Specific Services Direx"
      className="lg:h-screen! h-full!"
      bgColor="BLUE"
      bgColorPhone="BLUE"
    >
      <div className="flex flex-col">
        <div className="w-full h-full flex flex-col justify-center items-center gap-y-5">
          <h2 className="text-center font-extrabold text-3xl lg:text-5xl mb-5 font-cabin">
            <span className="text-white">CLIENTES QUE CONFIAN EN </span>
            <br />
            <span className="text-red-app">DIREX</span>
          </h2>
          <div className="grid grid-cols-2 grid-rows-5 lg:grid-cols-3 lg:grid-rows-3 gap-3 lg:gap-5">
            {itemsClients.map((item) => (
              <div
                key={item}
                className="bg-white/50 lg:bg-transparent p-5 rounded-lg flex gap-x-4 justify-center items-center shadow-lg lg:shadow-none"
              >
                <div className="shrink-0 hidden lg:flex">
                  <CheckCircleIcon size={20} className="text-red-app" />
                </div>
                <h3 className="text-lg lg:text-3xl font-bold font-roboto-condensed text-black-app lg:text-white-app text-center lg:text-left">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </NormalBackground>
  );
};

export default Clients;
