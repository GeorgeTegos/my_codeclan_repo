function WrongAnswers({wrongList}){

    return (
        <>
        <h3>For your wrong questions the correct answers are:</h3>
        <ul className="end-answers-list">
            {wrongList.map((question, index)=> <li className="end-answers" key={index}>{question.question} <br />
            <p>The correct answer is:</p> <div className="end-answers-answer wrong">{question.answer}</div></li>)}
        </ul>
        </>
        
    )
}

export default WrongAnswers