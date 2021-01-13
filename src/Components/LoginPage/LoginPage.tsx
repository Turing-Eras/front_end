import React, {useState } from 'react';
 const LoginPage = () =>{
  let [userName,typeName] = useState('')

  let [password,typePass] = useState('')
let createUserName = (event: React.ChangeEvent<HTMLInputElement>) =>{
  typeName(event?.target.value)
}
let createPass = (event: React.ChangeEvent<HTMLInputElement>) =>{
  typePass(event?.target.value)
}
//are frontend validating this before we send it
  return (
    <section>
    <form>
      <label>
        <input value = {userName} type = 'text' name = 'userName' placeholder="Username" onChange = {createUserName} />
      </label>
      <label>
        <input value = {password} type = 'password' name = 'password' placeholder="Password" onChange = {createPass} />
      </label>
    </form>
    <button>Submit</button>
    </section>
  )
}
export default LoginPage
