import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home.tsx";
import About from "@/pages/About/About.tsx";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
