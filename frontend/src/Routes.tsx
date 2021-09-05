import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );

export default Routes;