import React, { useState } from 'react';
import TextQuestion from '../TextQuestion/TextQuestion'
import FormStartPage from '../FormStartPage/FormStartPage'
import { gql, useMutation } from '@apollo/client';
import './RequiredForm.css';



let RequiredForm = () =>{
  let create_user = gql `
   mutation createUser($name: String!, $email: String!, $birthdate: String!)
  {
    createUser(input:
    {
      name: $name
      email: $email
      birthdate: $birthdate
    })
    {
      id
      name
    }
  }
  `
let [createUser, { data,loading,error,called }] = useMutation(create_user);

let sendUser = async () =>{

  let Bday = answers[1]

  let finalBday = Bday.split('-').reverse().join('-')
  if(!loading  && !called ){
    createUser({ variables: { name: answers[0], birthdate: finalBday, email: answers[2]} })

  }else if(loading){
    return <p>Loading</p>
  }
}

let questions = ['What is your name', 'What is your birthday', 'What is your email address']
let [answers,addAnswer ]= useState<string[]>([])
let [currentQuestionIndex,updateIndex ]= useState(0)
if(answers.length === questions.length ){
  sendUser()
}
if(data){
  return <FormStartPage userId = {data.createUser.id} userName = {data.createUser.name}/>
}
if(error){
  return <p>There has been an error sending your response</p>
}
return  (
  <form>
    <p className='landing-page-instructions'>Welcome to Eras, the life calendar.  Eras allows you to holistically visualize your life in order to live more intentionally. We're going to ask you a few questions in order to get to know you, and generate your life calendar!  Let's start!</p>
    <div className='required-form'>
      <TextQuestion currentQuestion = {questions[currentQuestionIndex]} changeQuestion = {updateIndex} addAnswer = {addAnswer} answers = {answers} currentQuestionIndex = {currentQuestionIndex} />
    </div>
  </form>
)
}
export default RequiredForm
