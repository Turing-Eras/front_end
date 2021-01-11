import React from "react";
import { Link } from "react-router-dom";
import './FormStartPage.css';

type FormStartPageProps = {
  userId: number;
  userName: string;
};
let FormStartPage = (props: FormStartPageProps) => {
  return (
    <section>
      <p className='life-choice-statement'>
        As you know life is filled with choices. We've decided to give you
        another. You can either start off editend your calendar from a blank
        calendar or you can start off editing on a calendar with some events. If
        you choose the prefilled calender
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
