import CardValues from "../shared/CardValues";
import NormalBackground from "../shared/NormalBackground";

const Values = () => {
  return (
    <NormalBackground
      background="./images/values.webp"
      alt="values direx"
      className="lg:h-screen! h-full! xl:h-full!"
      id="values"
    >
      <div className="w-full h-full flex flex-col">
        <h2 className="font-extrabold text-3xl lg:text-5xl 2xl:text-7xl text-center font-cabin mb-10">
          <span className="text-white">NUESTROS</span>{" "}
          <span className="text-red-app">VALORES</span>
          <br />
          <span className="text-white">CON IDENTIDAD PROPIA</span>
        </h2>
        <div className="w-full grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-5 lg:px-20 m-auto justify-items-center h-full lg:h-[400px] xl:h-full">
          <CardValues
            imgUrl="./images/values-1.webp"
            phrase="Proactividad y Eficiencia En Cada Operacion"
          />
          <CardValues
            imgUrl="./images/values-2.webp"
            phrase="Nos Enfocamos En Dar el Mejor Servicio"
          />
          <CardValues
            imgUrl="./images/values-3.webp"
            phrase="Lealtad y Compromiso Hacia Nuestros Clientes"
          />
        </div>
      </div>
    </NormalBackground>
  );
};

export default Values;
