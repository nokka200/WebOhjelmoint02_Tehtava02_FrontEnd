import SearchWord from "./components/SearchWord";
import AddWord from "./components/AddWord";
import FrontPage from "./components/FrontPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  /**
   * Otin Route käyttöön, jotta navigointi olisi helpompaa
   */
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/add" element={<AddWord />} />
        <Route path="/search" element={<SearchWord />} />
      </Routes>
    </Router>
  )
}

export default App
