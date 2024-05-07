import React, { useRef, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import classes from "./Sertificate.module.css"; // Импорт внешнего CSS файла
import Img from "./c.png";
import axios from "axios"; // добавляем импорт axios
export default function Sertificate() {
  const containerRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5151/auth/user", {
        withCredentials: true,
      })
      .then((response) => {
        setUserName(response.data.userName);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0"); // Форматируем день
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Форматируем месяц
    const year = today.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    setCurrentDate(formattedDate);
  }, []);

  const handleDownload = () => {
    const container = containerRef.current;

    if (container) {
      html2canvas(container, { scrollX: 0, scrollY: -window.scrollY }).then(
        (canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("l", "mm", "a4");
          const imgWidth = 297;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
          pdf.save("styles.pdf");
        }
      );
    }
  };

  return (
    <div className={classes.str}>
      <div className={classes.centered}>
        <p className={classes.title}>
          Поздравляем с завершением обучения!
          <br />
          Держите Ваш сертификат
        </p>
        

        <div ref={containerRef} className={classes.container}>
          <img src={Img} alt="" />
          <p className={classes.user}>{userName}</p>
          <p className={classes.date}>{currentDate}</p>
        </div>
        <button className={classes.button} onClick={handleDownload}>
          Скачать как PDF
        </button>
      </div>
    </div>
  );
}
