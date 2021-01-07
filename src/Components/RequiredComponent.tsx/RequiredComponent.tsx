import React, { useState } from 'react';
let RequiredForm = () =>{
let questions = ['What is your name', 'What is your birthday', 'What is your email address']
let [currentQuestionIndex,updateIndex ]= useState(0)
return(
  <form>
    <TextQuestion let currentQuestion = {questions[currentQuestionIndex]}/>
    </form>
)
}