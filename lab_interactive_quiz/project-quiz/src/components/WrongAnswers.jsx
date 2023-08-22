function WrongAnswers({wrongList}){

    return (
        <>
        <ul>
            {wrongList.map((question, index)=> <li key={index}>For Question: {question.question} <br />
            The correct answer is: {question.answer}</li>)}
        </ul>
        <button onClick={() => window.location.reload(false)} >Do Quiz Again</button>
        </>
        
    )
}

export default WrongAnswers