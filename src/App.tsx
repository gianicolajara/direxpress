import "./App.css";
import About from "./components/pages/About";
import Choose from "./components/pages/Choose";
import Clients from "./components/pages/Clients";
import Enviroment from "./components/pages/Enviroment";
import Footer from "./components/pages/Footer";
import Heroe from "./components/pages/Heroe";
import International from "./components/pages/International";
import National from "./components/pages/National";
import Services from "./components/pages/Services";
import Specific from "./components/pages/Specific";
import Values from "./components/pages/Values";

const App = () => {
  return (
    <>
      <Heroe />
      <About />
      <Values />
      <Services />
      <National />
      <Specific />
      <International />
      <Choose />
      <Enviroment />
      <Clients />
      <Footer />
    </>
  );
};

export default App;
