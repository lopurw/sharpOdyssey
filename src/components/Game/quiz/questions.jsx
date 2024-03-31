import React, { useState} from 'react';
import classes from '../quiz/questions.module.css';
import { level1Questions, level2Questions, level3Questions, level4Questions, level5Questions, level6Questions } from '../questions_levels'; // Путь к вашему файлу questions_levels.js
import { useParams } from 'react-router-dom';
export default function Questions() {
    const {name} = useParams();
    const questionLevels = { 
        level1Questions: level1Questions,
        level2Questions: level2Questions, 
        level3Questions: level3Questions, 
        level4Questions: level4Questions, 
        level5Questions: level5Questions, 
        level6Questions: level6Questions 
    }; 
 
    // Выбираем массив вопросов на основе значения name 
    const questions = questionLevels[name];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [answerSelected, setAnswerSelected] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [answeredQuestions, setAnsweredQuestions] = useState(Array(questions.length).fill(false));

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
                setQuizCompleted(true);
            }
        }
    };

    const progressWidth = Math.round(((currentQuestionIndex) / questions.length) * 100) + "%";

    if (quizCompleted) {
        return (
            <div className={classes.main}>
                <div className={classes.result}>
                    <p>Тест завершен!</p>
                    <p>Баллы: {score}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={classes.main}>
            <div className={classes.quiz}>
                <div className={classes.progress} style={{ width: progressWidth }}></div>
                <div className={classes.content}>
                    <h3 className={classes.title}>
                        {questions[currentQuestionIndex].question}
                    </h3>
                    <ul className={classes.list}>
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <li key={index} onClick={() => handleAnswerClick(option, index)} className={`${classes.options} ${selectedOption === index ? classes.active : ""} ${answeredQuestions[currentQuestionIndex] ? classes.disabled : ""}`}>
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={classes.footer}>
                    <button className={classes.but} onClick={handleNextButtonClick} disabled={!answerSelected}>
                        {currentQuestionIndex < questions.length - 1 ? "Следующий" : "Завершить"}
                    </button>
                </div>
            </div>
        </div>
    );
}