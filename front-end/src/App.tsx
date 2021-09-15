import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from "./pages/home/index";
import Dashboard from "./pages/dashboard/index";

import ChangeCalendar from "./components/ChangeCalendar";
import Scheduled from "./pages/scheduled/index";
import ScheduleList from "./pages/scheduleList/index";
import Cancelled from "./pages/cancelled/index";
// import Home from "./pages/home";
// import Routes from "./Routes";


export function App(){
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Login} /> */}

        {/* <Route path="/options" component={Options} /> */}
        {/* <Route path="/options" component={Options} />
        <Route path="/options" component={Options} /> */}

        {/* <Dashboard /> */} 
        {/* <Login /> */}
        {/* <Cancelled /> */}
        {/* <Scheduled /> */}

        {/* <ChangeCalendar /> */}
        <ScheduleList />

      </Switch>
    </BrowserRouter>
  );
}