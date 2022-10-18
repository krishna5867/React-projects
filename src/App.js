import React from "react";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/signin" element={<Signin />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/footer" element={<Footer />} />
      <Route element={<PageNotFound />} />
    </Routes>
    <Footer />
  </>
);
}

export default App;



