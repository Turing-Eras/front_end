<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> main
import { FormContainer } from "../FormContainer/FormContainer";
import { Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import CalendarComponent from "../CalendarComponent/CalendarComponent";
import RequiredForm from "../RequiredForm/RequiredForm";
export const App = () => {
  let [userId, updateUserId] = useState(0);
  return (
    <>
      <Route
        exact
        path="/"
        render={() => {
          return <RequiredForm updateUserId={updateUserId} />;
        }}
      ></Route>

      <Route
        path="/login"
        render={() => {
          return <LoginPage />;
        }}
      ></Route>
      <Route
        path="/form"
        render={() => {
<<<<<<< HEAD
          return <FormContainer userId={userId} />;
        }}
      ></Route>
      <Route
        path="/calender"
        render={() => {
          return <CalendarComponent userId={userId} />;
=======
          return <FormContainer />;
        }}
      ></Route>
      <Route
        path="/calendar"
        render={() => {
          return <CalendarComponent />;
>>>>>>> main
        }}
      ></Route>
    </>
  );
};
