import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import SearchPage from "./components/search/SearchPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element ={<SearchPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
