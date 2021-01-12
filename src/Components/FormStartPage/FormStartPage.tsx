import React, { useEffect } from "react";
import { Link } from "react-router-dom";
type updateUserId = (id:number) => void
type FormStartPageProps = {
  userId: number;
  userName: string;
  updateUserId :updateUserId
};
let FormStartPage = (props: FormStartPageProps) => {
  useEffect(() => {
    props.updateUserId(props.userId)
  }, [props.userId])
  return (
    <section>
      <p>
        As you know life is filled with choices. We've decided to give you
        another. You can start off editing a blank calendar by selecting 
        'Start Calendar' or you can select 'Start Form' to answer a few 
        questions that will create events for you. You can add more events
        later if you choose!
      </p>
      <Link to="/calender">
        <button>Start Calendar</button>
      </Link>
      <Link to="/form">
        <button>Start Form</button>
      </Link>
    </section>
  );
};
export default React.memo(FormStartPage);
