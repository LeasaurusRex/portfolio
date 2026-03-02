import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home.tsx";
import About from "@/pages/About/About.tsx";
import Projects from "@/pages/Projects/Projects.tsx";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/realisations" element={<Projects />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
