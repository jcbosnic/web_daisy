import Home from "./componentes/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./componentes/About";
import Service from "./componentes/Service";
import Blog from "./componentes/Blog";
import Contact from "./componentes/Contact";
import Menu from "./componentes/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
