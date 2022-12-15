import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Board from "./components/Board";

function App({ firebase }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="about" element={<About />} />
      <Route path="team" element={<Team />} />
      <Route path="board" element={<Board />} />
    </Routes>
  );
}

export default App;
