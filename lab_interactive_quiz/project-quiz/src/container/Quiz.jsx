import { useState } from "react";

function QuizContainer(){
    const [questions, setQuestions] = useState([
        {
          question: "What was the name of the first computer virus that spread in the wild?",
          options: ["Creeper", "ILOVEYOU", "Melissa", "Brain"],
          answer: "Brain"
        },
        {
          question: "Which programming language is often referred to as the 'mother of all languages'?",
          options: ["Java", "C", "Fortran", "Assembly"],
          answer: "C"
        },
        {
          question: "In what year was the company Google founded?",
          options: ["1996", "1998", "2000", "2004"],
          answer: "1998"
        }]);
        const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0)
        const [score,setScore]= useState(0)

        const handleAnswerSelect = (selectedAnswer) =>{
          questions[currentQuestionIndex].answer == selectedAnswer && setScore(score+1)
          setCurrentQuestionIndex(currentQuestionIndex+1)
          
        }
        

    return(
        <>
          <h4>score: {score}</h4>

          {questions.length != currentQuestionIndex ? <>

          <h4>{currentQuestionIndex+1}/{questions.length}</h4>
          <h4>{questions[currentQuestionIndex].question}</h4>
          <h3>Options:</h3><br />
          <ul>{questions[currentQuestionIndex].options.map((option)=> 
            <li onClick={() => handleAnswerSelect(option)}>{option}</li>)}
          </ul>
        </>: <p>Weldone</p>

        }
        </>
    )
}

export default QuizContainer