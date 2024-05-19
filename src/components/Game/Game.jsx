import React, { useEffect, useState } from "react";
import classes from "../Game/Game.module.css";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import axios from "axios";
import Home from "./stars/Home";
import Tooltip from "@mui/material/Tooltip";
import Stars_Component from "./stars/Stars_Component";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";

export default function Game() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLevel2Open, setIsLevel2Open] = useState(false);
  const [isLevel3Open, setIsLevel3Open] = useState(false);
  const [isLevel4Open, setIsLevel4Open] = useState(false);
  const [isLevel5Open, setIsLevel5Open] = useState(false);
  const [isLevel6Open, setIsLevel6Open] = useState(false);

  const [filledStars, setFilledStars] = useState({}); // Объект для хранения количества звезд по id уровня
  const location = useLocation();
  const [allStars, setAllStars] = useState(0);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:5151/api/level/results", {
  //         withCredentials: true,
  //       })
  //       .then((response) => {
  //         const results = response.data.results;
  //         const starsByLevel = {};
  //         results.forEach((result) => {
  //           starsByLevel[result.levelId] = result.levelResult;
  //         });
  //         setFilledStars(starsByLevel);
  //         setAllStars(parseInt(response.data.totalSum));
  //         setIsLoaded(true);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   }, []);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:5151/api/level/results", {
          withCredentials: true,
        })
        .then((response) => {
          const results = response.data.results;
          const starsByLevel = {};
          results.forEach((result) => {
            starsByLevel[result.levelId] = result.levelResult;
          });
          setFilledStars(starsByLevel);
          setAllStars(parseInt(response.data.totalSum));
          setIsLoaded(true); // Устанавливаем isLoaded в true после получения данных
          if (parseInt(response.data.totalSum) >= 3) setIsLevel2Open(true);
          if (parseInt(response.data.totalSum) >= 6) setIsLevel3Open(true);
          if (parseInt(response.data.totalSum) >= 9) setIsLevel4Open(true);
          if (parseInt(response.data.totalSum) >= 11) setIsLevel5Open(true);
          if (parseInt(response.data.totalSum) >= 15) setIsLevel6Open(true);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 500); // Ожидание 5 секунд
  }, []);

  const params = new URLSearchParams(location.search);
  const passingPercentage = params.get("percentage") || 0;
  const level = params.get("name") || "";

  return (
    <>
      {/* Отобразить CircularProgress, пока данные загружаются */}
      {!isLoaded && (
        <div className={classes.loading}>
          <CircularProgress
            style={{
              color: "rgb(44, 50, 76)",
              width: "100px",
              height: "100px",
            }}
          />
        </div>
      )}

      {/* Отобразить содержимое компонента, когда данные загружены */}
      {isLoaded && (
        <div className={classes.str1}>
          <div className={classes.logo}>
            <p>SharpOdyssey</p>
          </div>

          {/* Остальной код компонента Game остается без изменений */}
          <div className={classes.img1}>
            {/* Проверяем, открыт ли уровень 1 */}
            {
              true /* Здесь нужно проверить состояние переменной, но поскольку уровень 1 всегда открыт, можно просто использовать true */
            }
            <Link to={`/questions/${"level1"}`}>
              <img src="src\home1.png" className={classes.home1} />
            </Link>
          </div>
          <div className={classes.img2}>
            {isLevel2Open ? (
              <Link to={`/questions/${"level2"}`}>
                <img src="src\home2.png" className={classes.home2} />
              </Link>
            ) : (
              <div onClick={() => alert(`Уровень закрыт. Для открытия уровня:${allStars}/${3}`)}>
                <img src="src\lock.png" alt="" className={classes.lock2} />
                <img src="src\home2.png" className={classes.home2} />
              </div>
            )}
          </div>

          <div className={classes.img3}>
            {isLevel3Open ? (
              <Link to={`/questions/${"level3"}`}>
                <img src="src\home3.png" className={classes.home3} />
              </Link>
            ) : (
              <div onClick={() => alert(`Уровень закрыт.Для открытия уровня: ${allStars}/${6}`)}>
                <img src="src\lock.png" alt="" className={classes.lock3} />
                <img src="src\home3.png" className={classes.home3} />
              </div>
            )}
          </div>
          {/* Уровень 4 */}
          <div className={classes.img4}>
            {isLevel4Open ? (
              <Link to={`/questions/${"level4"}`}>
                <img src="src\home4.png" className={classes.home4} />
              </Link>
            ) : (
              <div onClick={() => alert(`Уровень закрыт. Для открытия уровня:${allStars}/${9}`)}>
                <img src="src\lock.png" alt="" className={classes.lock4} />
                <img src="src\home4.png" className={classes.home4} />
              </div>
            )}
          </div>
          {/* Уровень 5 */}
          <div className={classes.img5}>
            {isLevel5Open ? (
              <Link to={`/questions/${"level5"}`}>
                <img src="src\home5.png" className={classes.home5} />
              </Link>
            ) : (
              <div onClick={() => alert(`Уровень закрыт. Для открытия уровня:${allStars}/${11}`)}>
                <img src="src\lock.png" alt="" className={classes.lock5} />
                <img src="src\home5.png" className={classes.home5} />
              </div>
            )}
          </div>
          {/* Уровень 6 */}
          <div className={classes.img6}>
            {isLevel6Open ? (
              <Link to={`/questions/${"level6"}`}>
                <img src="src\home6.png" className={classes.home6} />
              </Link>
            ) : (
              <div onClick={() => alert(`Уровень закрыт. Для открытия уровня:${allStars}/${15}`)}>
                <img src="src\lock.png" alt="" className={classes.lock6} />
                <img src="src\home6.png" className={classes.home6} />
              </div>
            )}
          </div>
          <div className={classes.stars}>
            {[1, 2, 3, 4, 5, 6].map((levelId) => (
              <div key={levelId} className={classes[`star_home${levelId}`]}>
                {<Stars_Component filledStars={filledStars[levelId] || 0} />}
              </div>
            ))}
          </div>
          <div className={classes.roles}>
            <Tooltip title="Правила игры" placement="top">
              <img
                onClick={handleOpen}
                src="src\roles.png"
                className={classes.img_roles}
              />
            </Tooltip>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
              BackdropProps={{
                sx: { backdropFilter: "blur(8px)" },
                invisible: true,
              }}
            >
              <Box className={classes.style1}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Правила игры
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2, overflowX: "hidden" }}
                  className={classes.style}
                >
                  "SharpOdyssey" - это образовательное веб-приложение,
                  разработанное для проверки знаний по языку программирования
                  C#. Оно представляет собой интерактивную карту, на которой
                  изображены 6 домиков, каждый из которых является уровнем
                  обучения по различным темам по данному языку программирования.
                  Каждый уровень включает в себя две основные составляющие:
                  теоретический материал и тесты. Теоретический материал
                  предоставляет обучающемуся подробную информацию о
                  соответствующей теме, объясняя основные концепции, синтаксис и
                  примеры использования. Тесты представляют собой набор вопросов
                  и упражнений, направленных на проверку усвоения материала.
                  После успешного прохождения тестов на каждом уровне
                  пользователь получает звезды, которые накапливаются и служат
                  валютой в приложении. Звезды используются для открытия
                  последующих уровней, поэтому пользователь мотивирован активно
                  учиться и успешно справляться с тестами. После завершения всех
                  уровней пользователь получает сертификат об окончании обучения
                  по языку программирования C#. Этот сертификат подтверждает его
                  знания и умения в данной области и может быть использован в
                  качестве документального подтверждения его компетенций перед
                  работодателями или образовательными учреждениями.
                </Typography>
              </Box>
            </Modal>
          </div>
          <div className={classes.allStars}>
            <span className={classes.starAll}>&#9733;</span>
            <p>{allStars}</p>
          </div>
        </div>
      )}
    </>
  );
}
