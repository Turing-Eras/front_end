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
        another. You can start off editing a blank calendar by selecting 
        'Start Calendar' or you can select 'Start Form' to answer a few 
        questions that will create events for you. You can add more events
        later if you choose!
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
