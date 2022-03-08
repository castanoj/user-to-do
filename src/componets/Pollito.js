import { useState, useEffect } from "react";
import React from "react";

const Pollito = () => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePassword = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={togglePassword}>
        {isVisible ? "Ocultar " : "Mostrar"}
      </button>

      <img src="https://picsum.photos/200" alt="" />
    </div>
  );
};

export default Pollito;
