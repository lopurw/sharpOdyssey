import React, { useRef, useEffect } from "react";
import Section1_Page1 from "../Section1_Page1/Section1_Page1";
import Section2_Page1 from "../Section2_Page1/Section2_Page1";
import "./Page1.css";

export default function Page1() {
  const aboutRef = useRef(null);

  useEffect(() => {
    // aboutRef.current.scrollIntoView({ behavior: "smooth" }); // Уберите эту строку
  }, []);

  const scrollToSection2 = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" }); // Прокрутка к Section2_Page1
  };

  return (
    <>
      <Section1_Page1 />
      <div ref={aboutRef} id="about" className="section2">
        <Section2_Page1 />
      </div>
    </>
  );
}
