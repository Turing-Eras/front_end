import React, { useEffect, useState } from 'react';
 const LoginPage = () =>{
  let [userName,typeName] = useState('')

  let [password,typePass] = useState('')
let createUserName = (event: React.ChangeEvent<HTMLInputElement>) =>{
  typeName(event?.target.value)
}
let createPass = (event: React.ChangeEvent<HTMLInputElement>) =>{
  typePass(event?.target.value)
}
  return (
    <section>
    <form>

      <input value = {userName} type = 'text' name = 'userName' placeholder="User Name" onChange = {createUserName}
      ></input>
      <input value = {password} type = 'password' name = 'password' placeholder="Password" onChange = {createPass}
      ></input>
    </form>
    <button> Submit Me</button>
    </section>
  )
}
export default LoginPage