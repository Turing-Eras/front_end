import React, { useState } from 'react';
import TextQuestion from '../TextQuestion/TextQuestion'

let RequiredForm = () =>{
let questions = ['What is your name', 'What is your birthday', 'What is your email address']
let [answers,addAnswer ]= useState<string[]>([])
let [currentQuestionIndex,updateIndex ]= useState(0)
let [button, changeButton] = useState(false)
if(answers.length ===questions.length  ){
  return <FormStartPage/>
}
return(
<form>
  hello
    <TextQuestion currentQuestion = {questions[currentQuestionIndex]} changeQuestion = {updateIndex} addAnswer = {addAnswer} answers = {answers} currentQuestionIndex = {currentQuestionIndex} showButton = {button} changeButton = {changeButton}/>
    </form>
)
}
export default RequiredForm