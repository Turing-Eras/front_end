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
        another. You can either start off editend your calendar from a blank
        calendar or you can start off editing on a calendar with some events. If
        you choose the prefilled calender
      </p>
      <Link to="/calender">
        <button>Start Calender</button>
      </Link>
      <Link to="/form">
        <button>Start Form</button>
      </Link>
    </section>
  );
};
export default React.memo(FormStartPage);
