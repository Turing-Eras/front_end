import React, { useState } from 'react';
import TextQuestion from '../TextQuestion/TextQuestion'
import FormStartPage from '../FormStartPage/FormStartPage'
import { gql, useMutation } from '@apollo/client';

let RequiredForm = () =>{
  let create_user = gql `
   mutation {
    createUser(input:{
      name:"John",
      email:"John@gmail.co",
      birthdate:"1987/7/17"
    }){
      name,
      email,
      birthdate
    }
  }
  `
let questions = ['What is your name', 'What is your birthday', 'What is your email address']
let [answers,addAnswer ]= useState<string[]>([])
let [currentQuestionIndex,updateIndex ]= useState(0)
if(answers.length ===questions.length  ){
  return <FormStartPage/>
}
console.log(answers)
return(
<form>
  User message instructions will go here
    <TextQuestion currentQuestion = {questions[currentQuestionIndex]} changeQuestion = {updateIndex} addAnswer = {addAnswer} answers = {answers} currentQuestionIndex = {currentQuestionIndex} />
    </form>
)
}
export default RequiredForm