import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import SearchPage from "./components/search/SearchPage";
import UploadPage from "./components/upload/UploadPage";
import AboutPage from "./components/about/AboutPage";
import ContactPage from "./components/contact/ContactPage";
import DashboardPage from "./components/stats/DashboardPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/stats" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
