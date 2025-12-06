import { Medal, MessageCircleMore, Phone, Truck } from "lucide-react";
import ItemSpecificService from "../shared/ItemSpecificService";

const itemsChoose = [
  {
    title: "ENTREGA GARANTIZADA",
    content:
      "Contamos con una amplia red de distribución a través de socios estratégicos en diferentes regiones para asegurar la calidad del servicio y la rapidez en la entregas",
    icon: Medal,
  },
  {
    title: "ASESORES EXPERTOS",
    content:
      "Creemos en la importancia de la honestidad, la responsabilidad y el compromiso con nuestros clientes, manteniendo una comunicación clara y transparente.",
    icon: MessageCircleMore,
  },
  {
    title: "FACILIDAD DE CONTACTO",
    content:
      "Ofrecemos múltiples canales de comunicación como correo electrónico y chat en linea  para atender tus consultas y necesidades",
    icon: Phone,
  },
  {
    title: "EFICIENCIA Y PRECISION",
    content:
      "Estamos en constante expansión y buscamos establecer alianzas con nuestras empresas para mejorar aun mas nuestra cobertura en territorio nacional e internacional",
    icon: Truck,
  },
];

const Choose = () => {
  return (
    <section className="w-full h-full bg-gray-200">
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col gap-y-5 lg:px-25 py-20 justify-center px-5 lg:order-1 order-1">
          <h2 className="text-center font-extrabold text-3xl lg:text-5xl mb-5 font-cabin 2xl:text-7xl">
            <span className="text-black-app">¿POR QUE ELEGIR </span>
            <span className="text-blue-app">DIREXPRESS</span>
            <span className="text-black-app">?</span>
          </h2>
          <div className="grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-1 grid-rows-4 gap-5">
            {itemsChoose.map((item) => (
              <ItemSpecificService
                Icon={item.icon}
                title={item.title}
                subTitle={item.title}
                content={item.content}
                color="BLUE"
              />
            ))}
          </div>
          <div className="w-full h-max"></div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
