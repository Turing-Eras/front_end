import React from 'react';
import { FormContainer } from '../FormContainer/FormContainer';
import {Route} from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage'
import CalendarComponent from '../CalendarComponent/CalendarComponent'
import './App.css';

export const App = () => {
  return(
  <section className='App'>
    <Route exact path='/'>
        <FormContainer/>
      </Route>

      <Route path = '/login'
        render = {() =>{
          return <LoginPage />
        }}>
      </Route>
      <Route path = '/calender'
        render = {() =>{
          return <CalendarComponent />
        }}>
      </Route>
  </section>
  )
}
