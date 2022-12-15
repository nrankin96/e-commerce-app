import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { useEffect } from "react";
import Women from "./components/Products";
import Mens from "./components/Mens";
import Footer from "./components/Footer";



function App() {
useEffect(() => {
  document.title = 'Sewn Apparel'
}, [])

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Hero />
      <Women />
      <Mens/>
      <Footer />
     
    </div>
  );
}

export default App;
