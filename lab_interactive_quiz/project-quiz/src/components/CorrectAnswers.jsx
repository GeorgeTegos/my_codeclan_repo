function CorrectAnswers({correctList}){

    return(
        <>
            <h3>You got those questions right</h3>
            <ul className="end-answers-list">
            {correctList.map((question, index)=> 
            <li className="end-answers" key={index}>{question.question}
            <p>The correct answer is:</p> <div className="end-answers-answer correct">{question.answer}</div></li>)}
         </ul>    
        </>

    )
} 

export default CorrectAnswers