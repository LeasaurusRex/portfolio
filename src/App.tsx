import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home.tsx";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
