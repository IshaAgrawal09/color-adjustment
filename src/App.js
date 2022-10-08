import "./App.css";
import Home from "./Home";
import { useState } from "react";

function App() {
  const [textColor, setTextColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [titleColor, setTitleColor] = useState("");
  const [contrast, setContrast] = useState("");

  function handleTextColor(event, color) {
    console.log(color);
    setTextColor(color);
    setTitleColor("");
  }

  function handleBgColor(event, color) {
    console.log(color);
    setBgColor(color);
  }

  function handleTitleColor(event, color) {
    console.log(color);
    setTitleColor(color);
  }

  function handleContrast(event, contrast) {
    console.log("contrast");
    setContrast(contrast);
  }

  return (
    <Home
      textColor={textColor}
      setTextColor={setTextColor}
      handleTextColor={handleTextColor}
      handleBgColor={handleBgColor}
      bgColor={bgColor}
      setBgColor={setBgColor}
      titleColor={titleColor}
      setTitleColor={setTitleColor}
      handleTitleColor={handleTitleColor}
      contrast={contrast}
      setContrast={setContrast}
      handleContrast={handleContrast}
    />
  );
}

export default App;
