import { useState } from "react";
import moment from "moment";
import "./styles.css";

import { Calendar } from "../pages/calendar/index";

const ChangeCalendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  
  return <Calendar currentDate={currentDate} onChange={setCurrentDate} />;
}

export default ChangeCalendar