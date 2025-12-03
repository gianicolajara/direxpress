import Button from "../shared/Button";
import NormalBackground from "../shared/NormalBackground";

const About = () => {
  return (
    <NormalBackground
      background="./images/about.png"
      backgroundPhone="./images/about-phone.png"
      bgColor="TRANSPARENT"
      bgColorPhone="BLACK"
      alt="fondo bolso direxpress"
      className="lg:h-screen! h-full!"
    >
      <div className="w-full h-full grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-row-1">
        <div className="w-full flex justify-center flex-col gap-y-5 lg:px-20">
          <h2 className="text-center lg:text-left font-extrabold text-3xl lg:text-5xl font-cabin">
            <span className="text-white lg:text-black-app">SOBRE</span>{" "}
            <span className="text-red-app">DIREXPRESS</span>
          </h2>
          <div className="font-roboto-condensed flex flex-col gap-y-3 text-white lg:text-gray-800 text-lg text-center lg:text-left">
            <p>
              Direxpress Ibérica S.L. desarrolla su actividad desde 1996 como
              empresa dedicada a servicios de mensajería y distribución a nivel
              local, nacional e internacional
            </p>
            <p>
              Nuestro objetivo es ofrecer un servicio rápido, seguro y confiable
              a nuestros clientes.
            </p>
            <p>
              Contamos con un equipo de profesionales altamente capacitados y
              comprometidos con la calidad del servicio que brindamos. Además,
              utilizamos tecnología de vanguardia para garantizar la eficiencia
              en nuestras operaciones
            </p>
          </div>
          <div className="text-center lg:text-left">
            <Button
              href="https://wa.link/cdb5pn"
              color="ERROR"
              className="w-max"
            >
              Contactanos
            </Button>
          </div>
        </div>
      </div>
    </NormalBackground>
  );
};

export default About;
