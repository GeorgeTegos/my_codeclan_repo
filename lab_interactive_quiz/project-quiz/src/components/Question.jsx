import { useState } from "react"
import Options from "./Options"

function Question({questions, handleAnswerSelect, currentQuestionIndex}){


    return(
        <>
        <h4>{currentQuestionIndex+1}/{questions.length}</h4>
        <h4>{questions[currentQuestionIndex].question}</h4>
        <h3>Options:</h3><br />
            <Options 
                questions={questions} 
                handleAnswerSelect={handleAnswerSelect} 
                currentQuestionIndex={currentQuestionIndex}
                />
        </>
    )
}

export default Question