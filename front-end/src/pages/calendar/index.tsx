import { useState, useEffect, Dispatch, SetStateAction } from "react";

import "./styles.css";
import calendarImg from "../../assets/images/calendar.svg"
import logoFCamaraImg from '../../assets/images/logo-fcamara.svg'

import { buildCalendar } from "./calendar";
import { dayStyles, beforeToday } from "./styles"
import { CalendarHeader } from "./header"
import { Button } from "../../components/Button";
import axios from "axios";
import { Moment } from "moment";
import { MomentProps } from "../../utils/types";
import { api } from "../../services/api";

type Workspace = {
  id: string;
  name: string;
  unit: string;
}

type CalendarProps = {
  currentDate: MomentProps;
  onChange: Dispatch<SetStateAction<Moment>>;
}

type ResponseProps = {
  data: Workspace[];
}

export const Calendar: React.FC<CalendarProps> = ({ currentDate, onChange }) => {
  const [calendar, setCalendar] = useState<MomentProps[][]>([]);
  const [unit, setUnit] = useState("São Paulo");
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [selectedWorkspace, setSelectedWorkspace] = useState("");

  useEffect(() => {
    const newDate = buildCalendar(currentDate)
    setCalendar(newDate);
  }, [currentDate]);

  const requestWorkspaceData = async () => {
    try {
      const response: ResponseProps = await api.get(`/api/workspace?unit=${unit}`)
      setSelectedWorkspace("");
      setWorkspaces(response.data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    if (unit) requestWorkspaceData()
  }, [unit])

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
          <Button className="button button-saopaulo" type="button" onClick={() => setUnit("São Paulo")}>São Paulo</Button>
          <Button type="button" className="button button-santos" onClick={() => setUnit("Santos")}>Santos</Button>
        </div>
        <div className="calendar">
          <CalendarHeader key="index" currentDate={currentDate} setCurrentDate={onChange} />
          <div className="body-calendar">
            <div className="day-names">
              
                {
                  ["d", "s", "t", "q", "q", "s", "s"].map((d) => (
                    <div key={`d-${d}`} className="week">{d}</div>
                  ))
                }
              </div>
              {calendar.map((week: MomentProps[], index: number) => (                
                <div key={`week-${index}`}>
                  {week.map((day: MomentProps, index: number ) => (
                    <div key={`day-${index}`} className="day" onClick={() => !beforeToday(day) && onChange(day)}>
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
          <select 
            name="selected-workspace" 
            className="selected-workspace"
            value={selectedWorkspace}
            onChange={({ target: { value } }) => {
              setSelectedWorkspace(value);
            }}
          >
            <option value="">Selecione a estação de trabalho:</option>

            {workspaces.map((workspace: Workspace) => (
              <option key={workspace.id} value={workspace.name}>
                {workspace.name}
                </option>
            ))}
          </select>
        </div>
        <Button className="button button-schedule">Agendar</Button>
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