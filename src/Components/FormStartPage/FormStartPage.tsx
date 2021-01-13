import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './FormStartPage.css';

type updateUserId = (id:number) => void
type FormStartPageProps = {
  userId: number;
  userName: string;
  updateUserId :updateUserId
};
let FormStartPage = (props: FormStartPageProps) => {
  useEffect(() => {
    sessionStorage.setItem("userId",JSON.stringify(props.userId))
    props.updateUserId(props.userId)
  }, [props.userId])
  return (
    <section>
      <p className='life-choice-statement'>
        As you know life is filled with choices. We've decided to give you
        another. You can either start off able to edit a blank
        calendar or you can complete a form with generic life questions and will be given a prefilled calendar to edit.
        Every question on the form is skippable if you feel the question does not apply to you.
      </p>
      <Link to="/calendar" style={{ textDecoration: 'none'}}>
        <button>Start Calendar</button>
      </Link>
      <Link to="/form" style={{ textDecoration: 'none'}}>
        <button>Start Form</button>
      </Link>
    </section>
  );
};
export default React.memo(FormStartPage);
