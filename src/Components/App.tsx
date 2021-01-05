import React from 'react';
import { FormContainer } from './FormContainer';
import {Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import CalenderComponent from './CalenderComponent'
export const App = () => {
  return(
  <>
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
          return <CalenderComponent />
        }}>
      </Route>
  </>
  )
}

