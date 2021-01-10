import React, { useState } from "react";
import TextQuestion from "../TextQuestion/TextQuestion";
import FormStartPage from "../FormStartPage/FormStartPage";
import { gql, useMutation } from "@apollo/client";
type updateUserId = () => void;
type RequiredFormProps = {
  updateUserId: updateUserId;
};

let RequiredForm = (props: RequiredFormProps) => {
  let create_user = gql`
    mutation createUser($name: String!, $email: String!, $birthdate: String!) {
      createUser(input: { name: $name, email: $email, birthdate: $birthdate }) {
        id
        name
      }
    }
  `;
  let [createUser, { data, loading, error, called }] = useMutation(create_user);

  let sendUser = async () => {
    let Bday = answers[1];

    let finalBday = Bday.split("-").reverse().join("-");
    if (!loading && !called) {
      createUser({
        variables: {
          name: answers[0],
          birthdate: finalBday,
          email: answers[2],
        },
      });
    } else if (loading) {
      return <p>Loading</p>;
    }
  };

  let questions = [
    "What is your name",
    "What is your birthday",
    "What is your email address",
  ];
  let [answers, addAnswer] = useState<string[]>([]);
  let [currentQuestionIndex, updateIndex] = useState(0);
  if (answers.length === questions.length) {
    sendUser();
  }
  if (data) {
    return (
      <FormStartPage
        userId={data.createUser.id}
        userName={data.createUser.name}
      />
    );
  }
  if (error) {
    return <p>There has been an error sending your response</p>;
  }
  return (
    <form>
      User message instructions will go here
      <TextQuestion
        currentQuestion={questions[currentQuestionIndex]}
        changeQuestion={updateIndex}
        addAnswer={addAnswer}
        answers={answers}
        currentQuestionIndex={currentQuestionIndex}
      />
    </form>
  );
};
export default RequiredForm;
