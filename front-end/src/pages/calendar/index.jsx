import { useState, useEffect } from "react";

import "./styles.css";
import calendarImg from "../../assets/images/calendar.svg"
import logoFCamaraImg from '../../assets/images/logo-fcamara.svg'

import { buildCalendar } from "./calendar";
import { dayStyles, beforeToday } from "./styles"
import { CalendarHeader } from "./header"
import { Button } from "../../components/Button";

export function Calendar({ currentDate, onChange }) {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(currentDate));
  }, [currentDate]);

  return (
    <main className="main">
      <section className="white-box">
        <img
          className="logo"
          src={logoFCamaraImg}
          alt="Logotipo FCamara"
        />
        <p className="texto-selected">Selecione a estação de trabalho:</p>
        <div className="button-unit">
          <Button className="button button-saopaulo" type='submit'>São Paulo</Button>
          <Button type='submit' className="button button-santos">Santos</Button>
        </div>
        <div className="calendar">
          <CalendarHeader key={Calendar} currentDate={currentDate} setCurrentDate={onChange} />
          <div className="body-calendar">
            <div className="day-names">
              
                {
                  ["d", "s", "t", "q", "q", "s", "s"].map((d) => (
                    <div className="week">{d}</div>
                  ))
                }
              </div>
              {calendar.map(week => (
                <div>
                  {week.map((day) => (
                    <div className="day" onClick={() => !beforeToday(day) && onChange(day)}>
                      <div className={dayStyles(day, currentDate)}>
                        {day.format("D").toString()}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
       
          </div>
        </div>
        <div className="workspace">
          <p>Selecione a estação de trabalho:</p>
          <select name="selected-workspace" className="selected-workspace">
            <option value="m1sp">MESA 1 - SÃO PAULO</option>
            <option value="m1sp">MESA 2 - SÃO PAULO</option>
            <option value="m1sp">MESA 1 - SANTOS</option>
            <option value="m1sp">MESA 2 - SANTOS</option>
          </select>
        </div>
        <Button type="submit" className="button button-schedule">Agendar</Button>
      </section>
      <section className="orange-box">
        <img
          className="calendar-ilustration"
          src={calendarImg}
          alt="Ilustração de calendário"
        />
      </section>
    </main>
  )
}