import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />} />
          <Route exact path="About" element={<About />} />
          <Route path="Home/About" element={<About />} />
          <Route exact path="Contact" element={<Contact />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
