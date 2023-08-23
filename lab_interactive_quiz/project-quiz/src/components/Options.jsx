function Options({questions, handleAnswerSelect, currentQuestionIndex}){

    return(
        <ul className="option-list">
            {questions[currentQuestionIndex].options.map
            ((option ,index)=> 
            <li className="option-item" onClick={() => handleAnswerSelect(option)} key={index}>{option}
            </li>)}
        </ul>
    )
}

export default Options