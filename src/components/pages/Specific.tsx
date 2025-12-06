import { Briefcase, FileSearch, Send, ShieldCheck } from "lucide-react";
import ItemSpecificService from "../shared/ItemSpecificService";
import NormalBackground from "../shared/NormalBackground";

const Specific = () => {
  return (
    <NormalBackground
      background=""
      alt="Specific Services Direx"
      className="lg:h-full! h-full! bg-gray-200"
      bgColor="TRANSPARENT"
      bgColorPhone="TRANSPARENT"
      id="specific"
    >
      <div className="w-full h-full flex flex-col justify-center items-center gap-y-10">
        <div className="w-full px-20">
          <h2 className="text-center font-extrabold text-3xl lg:text-5xl font-cabin 2xl:text-7xl">
            <span className="text-black-app">SERVICIOS</span>{" "}
            <span className="text-red-app">ESPECÍFICOS</span>
          </h2>
        </div>
        <div className="w-full h-full lg:px-20">
          <div className="w-full h-full grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-1 grid-rows-4 gap-y-5 gap-x-5">
            <ItemSpecificService
              Icon={Send}
              title="1"
              subTitle="ENVÍOS MASIVOS"
              content="Servicio para envíos de campañas y/o promociones, acciones publicitarias, marketing directo, etc"
            />
            <ItemSpecificService
              Icon={Briefcase}
              title="2"
              subTitle="VALIJAS"
              content="Servicio de conexión diaria entre dos destinos fijos con horarios concertados"
            />
            <ItemSpecificService
              Icon={FileSearch}
              title="3"
              subTitle="BUROFAX"
              content="Envío urgente de documentación con un plus de seguridad y garantía jurídica frente a terceros"
            />
            <ItemSpecificService
              Icon={ShieldCheck}
              title="4"
              subTitle="CARTA CERTIFICADA"
              content=" Envío de cartas certificadas con validez jurídica"
            />
          </div>
        </div>
      </div>
    </NormalBackground>
  );
};

export default Specific;
