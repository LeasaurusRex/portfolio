import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home.tsx";
import Header from "@/shared/Header";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
