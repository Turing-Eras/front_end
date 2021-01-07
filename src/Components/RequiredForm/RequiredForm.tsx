import React, { useState } from 'react';
import TextQuestion from '../TextQuestion/TextQuestion'
import FormStartPage from '../FormStartPage/FormStartPage'
let RequiredForm = () =>{
let questions = ['What is your name', 'What is your birthday', 'What is your email address']
let [answers,addAnswer ]= useState<string[]>([])
let [currentQuestionIndex,updateIndex ]= useState(0)
if(answers.length ===questions.length  ){
  return <FormStartPage/>
}
return(
<form>
  User message instructions will go here
    <TextQuestion currentQuestion = {questions[currentQuestionIndex]} changeQuestion = {updateIndex} addAnswer = {addAnswer} answers = {answers} currentQuestionIndex = {currentQuestionIndex} />
    </form>
)
}
export default RequiredForm