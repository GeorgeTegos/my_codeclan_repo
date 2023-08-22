import { useState } from "react";
import Question from "../components/Question";
import WrongAnswers from "../components/wrongAnswers";

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
          ? (setScore(score+1),  [...correctList, correctList.push(questions[currentQuestionIndex])])
          : [...wrongList, wrongList.push(questions[currentQuestionIndex])]

          setCurrentQuestionIndex(currentQuestionIndex+1)
          
        }
        

    return(
        <>
          <h4>score: {score}</h4>

          {questions.length != currentQuestionIndex ? <>
            <h4>{currentQuestionIndex+1}/{questions.length}</h4>
            <Question 
              questions={questions} 
              handleAnswerSelect={handleAnswerSelect} 
              currentQuestionIndex={currentQuestionIndex}
              />
        </>: 
            <>
          <p>You got this questions right</p>
          <ul>
            {correctList.map((question, index)=> <li key={index}>For Question: {question.question} <br />
            The correct answer is: {question.answer}</li>)}
         </ul>
            <br /> <br />
          <p>For your wrong questions the correct answers are:</p>
            
              <WrongAnswers wrongList={wrongList}/>
            

            </>
        }
        </>
    )
}

export default Quiz