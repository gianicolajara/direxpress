import ItemNational from "../shared/ItemNational";

const National = () => {
  return (
    <section className="w-full lg:h-screen lg:max-h-screen" id="national">
      <div className="w-full h-full grid lg:grid-cols-1 lg:grid-rows-2 grid-cols-1 grid-rows-[auto,auto]">
        <div className="bg-blue-app w-full h-full px-5 lg:px-24 gap-y-5 py-20 flex gap-x-2 flex-col lg:flex-row relative">
          <div className="w-full h-full flex justify-center items-center">
            <h2 className="text-center lg:text-left font-extrabold text-3xl lg:text-5xl font-cabin 2xl:text-7xl">
              <span className="text-white">ENVÍOS</span> <br />
              <span className="text-red-app">NACIONALES</span>
            </h2>
          </div>
          <div className="w-full h-full flex flex-col gap-y-2 items-center justify-center text-lg text-white font-roboto-condensed 2xl:text-2xl">
            <p className="text-center lg:text-left">
              En Direxpress, nos encargamos de todas tus necesidades de
              logística, al mismo tiempo que ofrecemos la mejor experiencia de
              entrega a tus clientes. Ofrecemos diferentes métodos de envío para
              satisfacer por completo las necesidades de tus clientes
            </p>
          </div>
        </div>
        <div className="bg-gray-200 w-full h-full py-20 p-5 lg:px-24 lg:p-20 bg-cover bg-center bg-no-repeat [background-image:linear-gradient(#00309080,#00309080),url('/images/national-background.webp')]">
          <div className="w-full h-full grid grid-rows-3 grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-10 gap-y-5">
            <ItemNational title="01" content="DIREX 10 HORAS" />
            <ItemNational title="02" content="DIREX 14 HORAS" />
            <ItemNational title="03" content="DIREX 24 HORAS" />
            <ItemNational title="04" content="DIREX ECONOMY" />
            <ItemNational title="05" content="DIREX BALEARES" />
            <ItemNational title="06" content="DIREX CANARIAS" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default National;
