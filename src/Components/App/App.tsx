import React, { useEffect, useState } from 'react';
import { FormContainer } from "../FormContainer/FormContainer";
import { Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import CalendarComponent from "../CalendarComponent/CalendarComponent";
import RequiredForm from "../RequiredForm/RequiredForm";
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import './App.css';


export const App = () => {
  let [userId, updateUserId] = useState(0);
  return (
    <section className='bg'>
      <Route exact path="/">
        <HeaderComponent />
        <RequiredForm updateUserId={updateUserId}/>
      </Route>
      <Route
        path="/login"
        render={() => {
          return <LoginPage />;
        }}
      ></Route>
      <Route
        path="/form"
        render={() => {
          return <FormContainer userId={userId}/>;
        }}
      ></Route>
      <Route
        path="/calendar"
        render={() => {
          <HeaderComponent />
          return <CalendarComponent userId={userId}/>;
        }}
      ></Route>
    </section>
  );
};
