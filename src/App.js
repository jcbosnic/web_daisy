import Home from "./componentes/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./componentes/About";
import Service from "./componentes/Service";
import Blog from "./componentes/Blog";
import Contact from "./componentes/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
