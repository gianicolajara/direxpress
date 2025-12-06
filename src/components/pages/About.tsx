import Button from "../shared/Button";

const About = () => {
  return (
    <section
      className="grid-cols-1 grid-rows-[300px_1fr] grid lg:grid-cols-2 lg:grid-rows-1 lg:h-screen w-full 2xl:h-full lg:px-25 lg:py-20 gap-x-10"
      id="about"
    >
      <div className="w-full h-full flex justify-center items-center order-2 lg:order-1 py-20 px-5 lg:py-0 lg:px-0">
        <div className="w-full flex justify-center flex-col gap-y-15">
          <h2 className="text-center lg:text-left font-extrabold text-3xl lg:text-5xl 2xl:text-7xl font-cabin">
            <span className="lg:text-black-app">SOBRE</span>{" "}
            <span className="text-red-app">DIREXPRESS</span>
          </h2>
          <div className="font-roboto-condensed flex flex-col gap-y-3 text-gray-800 text-lg text-center lg:text-left 2xl:text-4xl">
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
          <div className="text-center lg:text-left mt-5">
            <Button
              href="https://wa.link/cdb5pn"
              color="ERROR"
              className="w-max"
            >
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center order-1 lg:order-2">
        <div className="w-full h-full 2xl:w-[750px] 2xl:h-[850px] lg:rounded-4xl overflow-hidden bg-[url('/images/hover.jpg')] bg-position-[42%_center] 2xl:bg-position-[36%_center] bg-cover bg-no-repeat shadow-lg"></div>
      </div>
    </section>
  );
};

export default About;
