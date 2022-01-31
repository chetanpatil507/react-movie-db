import Homepage from "./components/Homepage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/info/:imdbID" element={<Card />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
