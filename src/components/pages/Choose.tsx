import { Medal, MessageCircleMore, Phone, Truck } from "lucide-react";
import Button from "../shared/Button";

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
              <article
                className="w-full h-full shadow-lg p-5 flex flex-col gap-y-10 justify-center items-center bg-white rounded-lg"
                key={item.title}
              >
                <item.icon className="text-blue-app" size={75} />
                <h3 className="text-xl text-center font-roboto-condensed text-black-app font-bold 2xl:text-4xl">
                  {item.title}
                </h3>
                <p className="font-roboto-condensed text-lg text-black-app text-center 2xl:text-2xl">
                  {item.content}
                </p>
                <Button color="BLUE" href="https://wa.link/cdb5pn">
                  Contactar
                </Button>
              </article>
            ))}
          </div>
          <div className="w-full h-max"></div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
