import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Agenda from "./pages/Home/Agenda";
import Footer from "./components/Footer/Footer";
import TeamsPage from "./pages/Home/Teams";
import Faq from "./pages/Home/Faq";
import ScrollToTop from "./components/Utility/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;