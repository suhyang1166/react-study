import "./App.css";
import Homepage from "./components/Homepage";
import Reactquery from "./components/Reactquery";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav style={{ padding: "20px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>
          Hompage
        </Link>
        <Link to="/react-query">React query</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/react-query" element={<Reactquery />} />
      </Routes>
    </div>
  );
}

export default App;
