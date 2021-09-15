import ChangeCalendar from "./components/ChangeCalendar";
import Cancelled from "./pages/cancelled/index";
import Dashboard from "./pages/dashboard/index";
import Scheduled from "./pages/scheduled/index";
import ScheduleList from "./pages/scheduleList/index";
import Login from "./pages/home/index";

import { Component } from 'react';
import { AuthProvider } from "./contexts/AuthContext";


export function App() {
  return (
    <>
      <AuthProvider>
        <Login />
      </AuthProvider>
      {/* <ChangeCalendar /> */}
      {/* <Cancelled /> */}
      {/* <Dashboard /> */}
      {/* <Scheduled /> */}
      {/* <ScheduleList /> */}
    </>
  );
}