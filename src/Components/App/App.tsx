import React from 'react';
import { FormContainer } from '../FormContainer/FormContainer';
import {Route} from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage'
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
  </>
  )
}

