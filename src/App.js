import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TextForm from "./Components/TextForm";

function App() {
  const [Mode, setMode] = useState("light");

  const toggler = () => {
    if (Mode === "light" || Mode === "green") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const greenToggler = () => {
    if (Mode === "light" || Mode === "dark") {
      setMode("green");
      document.body.style.backgroundColor = "green";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        title="Navbar"
        Features="features"
        Pricing="pricing"
        mode={Mode}
        toggler={toggler}
        greentoggler={greenToggler}
      />
      <TextForm title="ENTER YOUR TEXT" heading="enter" mode={Mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
