import "./App.css";
import Header from "./Componentes/Header";
import Pesquisa from "./Componentes/Pesquisa";
import Produtos from "./Componentes/Produtos";
import Footer from "./Componentes/Footer";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Pesquisa></Pesquisa>
        <Produtos></Produtos>
        <Footer></Footer>
      </div>
  );
}

export default App;
