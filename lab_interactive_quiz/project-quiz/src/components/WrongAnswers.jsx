function WrongAnswers({wrongList}){

    return (
        <>
        <ul className="end-answers-list">
            {wrongList.map((question, index)=> <li className="end-answers" key={index}>{question.question} <br />
            <p>The correct answer is:</p> <div className="end-answers-answer wrong">{question.answer}</div></li>)}
        </ul>
        </>
        
    )
}

export default WrongAnswers