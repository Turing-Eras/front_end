import React, { useState } from 'react';
import TextQuestion from '../TextQuestion/TextQuestion'
let RequiredForm = () =>{
let questions = ['What is your name', 'What is your birthday', 'What is your email address']
let [answers,addAnswer ]= useState([])
let [currentQuestionIndex,updateIndex ]= useState(0)

if(answers.length === questions.length  ){
  return 
}
return(

  <form>
    <TextQuestion currentQuestion = {questions[currentQuestionIndex]} changeQuestion = {updateIndex} addAnswer = {addAnswer} answers = {answers}/>
    </form>
)
}