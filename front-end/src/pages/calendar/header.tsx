import React from "react"
import { MomentProps } from "../../utils/types";
import Moment from "moment";

import "./styles.css";

type CalendarHeaderProps = {
  currentDate: MomentProps;
  setCurrentDate: React.Dispatch<React.SetStateAction<MomentProps>>;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({currentDate, setCurrentDate}) => {

  function currMonthName() {
    return currentDate.format("MMMM")
  }

  function currYear() {
    return currentDate.format("YYYY")
  }

  function prevMonth(){
    return currentDate.clone().subtract(1, "month")
  }

  function nextMonth(){
    return currentDate.clone().add(1, "month")
  }

  function thisMonth() {
    return currentDate.isSame(new Date(), "month")
  }

  return (
    <div className="header">
        <div className="previous" onClick={() => !thisMonth() && setCurrentDate(prevMonth())}>
          {!thisMonth() ? String.fromCharCode(171): null}
        </div>
        <div className="current">
          {currMonthName()} {currYear()}
        </div>
        <div className="next" onClick={() => setCurrentDate(nextMonth())}>
          {String.fromCharCode(187)}
        </div>
      </div>
  )
}