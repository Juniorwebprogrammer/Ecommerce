import "./app.scss";
import Topbar from "./components/Topbar/Topbar";
import Menu from "./components/Menu/menu";
import Intro from "./components/Intro/intro";
import Product from "./components/product/product";
import Footer from "./components/footer/footer";

function App(){
  return(
    <div className="app">
      <Topbar/>
      <Menu/>
      <div className="sections">
        <Intro/>
        <Product/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;