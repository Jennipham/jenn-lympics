import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Agenda from "./pages/Home/Agenda";
import Footer from "./components/Footer/Footer";
import TeamsPage from "./pages/Home/Teams";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/faq" element={<h1>FAQ</h1>} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;