function Options({questions, handleAnswerSelect, currentQuestionIndex}){

    return(
        <ul>{questions[currentQuestionIndex].options.map((option ,index)=> 
            <li onClick={() => handleAnswerSelect(option)} key={index}>{option}
            </li>)}
          </ul>
    )
}

export default Options