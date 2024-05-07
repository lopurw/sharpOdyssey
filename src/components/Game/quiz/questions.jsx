import React, { useState, useEffect } from "react";
import classes from "../quiz/questions.module.css";
import Tooltip from "@mui/material/Tooltip";
import Game from "../Game";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import cSharpImage from "./c-sharp-c.png";
import Home from "./home.png";
import Retry from "./retry.png";
import Stars_Component from "../stars/Stars_Component";
import Sertificate from "../../Sertificate/Sertificate";
import {
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
} from "../questions_levels"; // Путь к вашему файлу questions_levels.js
import { info1, info2, info3, info4, info5, info6 } from "../info";
import { useParams } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { common } from "@mui/material/colors";
import axios from "axios";
export default function Questions({ userName }) {
  console.log(userName)
  const [levelId, setLevelId] = useState("");
  const [levelData, setLevelData] = useState({});
  const [levelResult, setLevelResult] = useState("");
  const [openModal, setOpenModal] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { name } = useParams();
  
  const questionLevels = {
    level1: level1,
    level2: level2,
    level3: level3,
    level4: level4,
    level5: level5,
    level6: level6,
  };
  const [theory, setTheory] = useState("");

  // Создаем асинхронную функцию для получения данных с сервера
  useEffect(() => {
    // Создаем асинхронную функцию для получения данных с сервера
    async function fetchLevelTheory(id) {
      try {
        const response = await axios.get(
            `http://localhost:5151/api/level/${id}`,
            {
              withCredentials: true, // Включаем передачу кук
            }
        );
        // Получаем данные из ответа в формате JSON
        const data = response.data;
        setLevelData(data);
        // Обновляем состояние переменной theory полученными данными
        setTheory(data.theory);
        setLevelId(id);
      } catch (error) {
        // Обрабатываем возможные ошибки
        console.error("Ошибка при получении теории уровня:", error);
      }
    }

    // Устанавливаем id в зависимости от значения name
    let id;
    if (name === "level1") {
      id = 1;
    } else if (name === "level2") {
      id = 2;
    } else if (name === "level3") {
      id = 3;
    } else if (name === "level4") {
      id = 4;
    } else if (name === "level5") {
      id = 5;
    } else if (name === "level6") {
      id = 6;
    }

    // Вызываем функцию fetchLevelTheory, передавая в неё значение id
    fetchLevelTheory(id);
  }, [name]); // Добавляем name в список зависимостей useEffect

  async function fetchResult(resultData) {
    try {
      // Отправляем GET-запрос к API по адресу http://localhost:5151/api/level/1
      const response = await axios.post(
        `http://localhost:5151/api/level`,
        resultData,
        {
          withCredentials: true, // Включаем передачу кук
        }
      );
      // Получаем данные из ответа в формате JSON
    } catch (error) {
      // Обрабатываем возможные ошибки
      console.error("Ошибка при отправке", error);
    }
  }

  // Выбираем массив вопросов на основе значения name
  const questions = questionLevels[name];

  let title;
  let name_inf;
  let lenght;

  // Присваиваем значения в зависимости от значения name
  if (name === "level1") {
    title = `Уровень ` + levelData.levelId;
    name_inf = levelData.name;
    lenght = levelData.length;
  } else if (name === "level2") {
    title = `Уровень ` + levelData.levelId;
    name_inf = levelData.name;
    lenght = levelData.length;
  } else if (name === "level3") {
    title = `Уровень ` + levelData.levelId;
    name_inf = levelData.name;
    lenght = levelData.length;
  } else if (name === "level4") {
    title = `Уровень ` + levelData.levelId;
    name_inf = levelData.name;
    lenght = levelData.length;
  } else if (name === "level5") {
    title = `Уровень ` + levelData.levelId;
    name_inf = levelData.name;
    lenght = levelData.length;
  } else if (name === "level6") {
    title = `Уровень ` + levelData.levelId;
    name_inf = levelData.name;
    lenght = levelData.length;
  } else {
    // В случае, если значение name не соответствует ни одному уровню
    console.log("Invalid level name");
  }

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [certificateReceived, setCertificateReceived] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(
    Array(questions.length).fill(false)
  );

  const [passingPercentage, setPassingPercentage] = useState(0); // Внутри компонента Game

  useEffect(() => {
    const newPassingPercentage = Math.round((score / questions.length) * 100);
    setPassingPercentage(newPassingPercentage);
    console.log("Passing Percentage:", passingPercentage);
    if (name === "level6" && !certificateReceived) {
      setCertificateReceived(true);
    }
    
  }, [score, questions.length,name, certificateReceived]);

  const handleStartQuiz = () => {
    setOpenModal(false); // Закрываем модальное окно при нажатии кнопки "Начать"
  };
  const handleAnswerClick = (option, index) => {
    if (!answerSelected) {
      const currentQuestion = questions[currentQuestionIndex];
      const updatedAnsweredQuestions = [...answeredQuestions];
      updatedAnsweredQuestions[currentQuestionIndex] = true;
      setAnsweredQuestions(updatedAnsweredQuestions);

      if (option === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
      setAnswerSelected(true);
      setSelectedOption(index);
    }
  };

  const handleNextButtonClick = () => {
    if (answerSelected) {
      setAnswerSelected(false);
      setSelectedOption(null);
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        const levelResult = Math.floor(
          (score / questions.length / 3) * 10
        ).toString();
        const data = {
          levelId: parseInt(levelId),
          levelResult: levelResult,
        };
        fetchResult(data);
        setQuizCompleted(true);
        setLevelResult(levelResult);
      }
    }
  };
  const [linkClicked, setLinkClicked] = useState(false); // Состояние для отслеживания нажатия ссылки

  const handleLinkClick = () => {
    if (!quizCompleted) {
      history.push(`/Game?score=${score}`);
    }
  };

  const progressWidth =
    Math.round((currentQuestionIndex / questions.length) * 100) + "%";

  const handleRetryClick = () => {
    window.location.reload(); // Перезагружаем текущую страницу
  };
    if (quizCompleted) {
      if (certificateReceived) {
        return <Sertificate userName={userName} />;
      } else {
        console.log(levelResult);
        return (
          <div className={classes.main}>
            <div className={classes.result}>
              <Stars_Component
                filledStars={parseInt(levelResult)}
                star1Class={classes.star1}
                star2Class={classes.star2}
                star3Class={classes.star3}
              />
              <Link
                to={`/Game?percentage=${passingPercentage}&name=${name}`}
                onClick={handleLinkClick} 
              >
                <img src={Home} alt="" className={classes.home}/>
              </Link>
              <Link to={`/questions/${name}`}>
                <img src={Retry} alt="" className={classes.retry} onClick={handleRetryClick}/>
              </Link>
            </div>
          </div>
        );
      }
    }

  if (openModal) {
    return (
      <div className={classes.main}>
        <Modal
          open={openModal}
          onClose={() => {}} // Запретить закрытие модального окна при нажатии вне его области
          aria-labelledby="start-quiz-modal-title"
          aria-describedby="start-quiz-modal-description"
          BackdropProps={{
            sx: { backdropFilter: "blur(8px)" },
            invisible: true,
          }}
        >
          <Box className={classes.startQuizModal}>
            <div className={classes.img_c_sharp}>
              <img src={cSharpImage} alt="" />
            </div>
            <p className={classes.level}>{`Уровень ` + levelData.levelId}</p>
            <p className={classes.title1}>{levelData.name}</p>
            <p className={classes.lenght}>Вопросов: {levelData.length}</p>

            <div>
              {" "}
              <button onClick={handleStartQuiz} className={classes.startButton}>
                Начать
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    );
  }
  return (
    <div className={classes.main}>
      <div className={classes.theory}>
        <Tooltip title="Нажми, чтобы ознакомиться" placement="top">
          <button onClick={handleOpen} className={classes.but1}>
            Теория
          </button>
        </Tooltip>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        BackdropProps={{
          sx: { backdropFilter: "blur(8px)" }, // Применяем размытие к заднему фону
          invisible: true, // Убираем затемнение
        }}
      >
        <Box className={classes.style1}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 5, ml: 5, mr: 5, overflowX: "hidden" }}
            className={classes.style}
          >
            <div className={classes.code}>
              <div
                dangerouslySetInnerHTML={{ __html: theory }}
                className={classes.text}
              />
            </div>
          </Typography>
        </Box>
      </Modal>
      <div className={classes.quiz}>
        <div
          className={classes.progress}
          style={{ width: progressWidth }}
        ></div>
        <div className={classes.content}>
          <h3 className={classes.title}>
            {questions[currentQuestionIndex].question}
          </h3>
          <ul className={classes.list}>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerClick(option, index)}
                className={`${classes.options} ${
                  selectedOption === index ? classes.active : ""
                } ${
                  answeredQuestions[currentQuestionIndex]
                    ? classes.disabled
                    : ""
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.footer}>
          <button
            className={classes.but}
            onClick={handleNextButtonClick}
            disabled={!answerSelected}
          >
            {currentQuestionIndex < questions.length - 1
              ? "Следующий"
              : "Завершить"}
          </button>
        </div>
      </div>
    </div>
  );
}
