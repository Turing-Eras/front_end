import React, { useState } from 'react';
import TextQuestion from '../TextQuestion/TextQuestion'
import FormStartPage from '../FormStartPage/FormStartPage'
import { gql, useMutation } from '@apollo/client';

let RequiredForm = () =>{
  let create_user = gql `
   mutation createUser($name: String!, $email: String!, $birthdate: String! ){
    createUser(input :{
      name: $name,
      email: $email,
      birthdate: $birthdate
    }){
      id,
      name,
      email,
      birthdate
    }
  }
  `
const [createUser, { data }] = useMutation(create_user);
let sendUser = () =>{
  createUser({ variables: { $name: answers[0], birthdate:answers[1],email: answers[2]} })
}

let questions = ['What is your name', 'What is your birthday', 'What is your email address']
let [answers,addAnswer ]= useState<string[]>([])
let [currentQuestionIndex,updateIndex ]= useState(0)
if(answers.length === questions.length  ){
  sendUser()
  return <FormStartPage userId = {data.id} userName = {data.name}/>
}
return(
<form>
  User message instructions will go here
    <TextQuestion currentQuestion = {questions[currentQuestionIndex]} changeQuestion = {updateIndex} addAnswer = {addAnswer} answers = {answers} currentQuestionIndex = {currentQuestionIndex} />
    </form>
)
}
export default RequiredForm