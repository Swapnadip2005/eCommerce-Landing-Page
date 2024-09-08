import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Frame1 from "./Components/Frame1/Frame1";
import Frame2 from "./Components/Frame2/Frame2";
import Frame3 from "./Components/Frame3/Frame3";
import "./App.css";
import Frame4 from "./Components/Frame4/Frame4";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Frame1></Frame1>
      <Frame2></Frame2>
      <Frame3></Frame3>
      <Frame4></Frame4>
      <Footer></Footer>
    </>
  );
};

export default App;
