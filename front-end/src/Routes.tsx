import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/home';
import Dashboard from './pages/dashboard';
import { AuthProvider } from './contexts/AuthContext';
import Scheduled from './pages/scheduled';
import Cancelled from './pages/cancelled';
import ChangeCalendar from './components/ChangeCalendar';
import ScheduleList from './pages/scheduleList';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/scheduled">
        <Scheduled />
      </Route>
      <Route path="/components">
        <ChangeCalendar />
      </Route>
      <Route path="/cancelled">
        <Cancelled />
      </Route>
      <Route path="/scheduleList">
        <ScheduleList />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
