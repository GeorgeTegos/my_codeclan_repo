import { useState } from "react";
import Question from "../components/Question";
import WrongAnswers from "../components/wrongAnswers";
import CorrectAnswers from "../components/CorrectAnswers";

function Quiz(){
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
        const [wrongList,setWrongList] = useState([])
        const [correctList,setCorrectList] = useState([])

        const handleAnswerSelect = (selectedAnswer) =>{
          questions[currentQuestionIndex].answer == selectedAnswer 
          ? (setScore(score+1),  setCorrectList([...correctList, questions[currentQuestionIndex]]))
          : setWrongList( [...wrongList, questions[currentQuestionIndex]])

          setCurrentQuestionIndex(currentQuestionIndex+1)
          
        }
        

    return(
        <>
          <h4>score: {score}</h4>

          {questions.length != currentQuestionIndex 
          ? 
          <>
            <Question 
              questions={questions} 
              handleAnswerSelect={handleAnswerSelect} 
              currentQuestionIndex={currentQuestionIndex}
            />
          </>
          : 
          <>
              <h3>You got this questions right</h3>
              <CorrectAnswers correctList={correctList}/>
              <br />
              <h3>For your wrong questions the correct answers are:</h3>
              
              <WrongAnswers wrongList={wrongList}/>
              <button className="reset-quiz-button" onClick={() => window.location.reload(false)} >Do Quiz Again</button>


          </>
          }
        </>
    )
}

export default Quiz