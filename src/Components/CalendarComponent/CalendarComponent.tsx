import React, { useEffect, useState } from "react";
import Week from "../Week/Week";
import NavBar from "../NavBar/NavBar";
import { gql, useQuery } from "@apollo/client";

type CalenderComponentProps = {
  userId: number;
};
const CalendarComponent = (props: CalenderComponentProps) => {
  let Get_User = gql`
    {
      getUser($id:ID!) {
        id
        name
        events {
          id
          name
          date
          weekNumber
        }
        eras {
          id
          name
          startWeek
          endWeek
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(Get_User, {
    variables: { id: props.userId },
  });
  let calendar = new Array(76);
  calendar.fill({});
  let display = calendar.map((year, index) => {
    let weeks = new Array(52);
    weeks.fill("");
    let weeksDisplay = weeks.map((week, i) => {
      let currentWeek = i + 1;
      if (index > 0) {
        currentWeek = i + 1 + index * 52;
      }
      return <Week key={currentWeek} index={currentWeek} />;
    });

    return (
      <section key={index}>
        Age: {index}
        {weeksDisplay}
      </section>
    );
  });

  return (
    <section>
      <NavBar />
      Your calendar
      {display}
    </section>
  );
};

export default CalendarComponent;
