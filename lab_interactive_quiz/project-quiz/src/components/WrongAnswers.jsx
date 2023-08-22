function WrongAnswers({wrongList}){

    return (
        <>
        <ul>
            {wrongList.map((question, index)=> <li key={index}>For Question: {question.question} <br />
            The correct answer is: {question.answer}</li>)}
        </ul>
        </>
        
    )
}

export default WrongAnswers