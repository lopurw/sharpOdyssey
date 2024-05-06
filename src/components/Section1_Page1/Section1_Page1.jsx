import classes from "./Section1_Page1.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Section1_Page1() {
  return (
    <>
      <div className={classes.str1}>
        <div className={classes.container}>
          <img src="src\image 2.png" alt="" className={classes.logo_img} />
          <h1>SHARPODUSSEY</h1>
          <p>Погрузись в мир программирования с нашей игрой.</p>
          <Link to="/SignUp">
            <button className={classes.but_start}>Начать</button>
          </Link>
        </div>
      </div>
      <div className={classes.on_str1}>
        <img src="src\on_str1_1.png" alt="" className={classes.onpage1} />
      </div>
      <div className={classes.on_str2}>
        <img src="src\on_str1_2.png" alt="" className={classes.onpage2} />
      </div>
    </>
  );
}
