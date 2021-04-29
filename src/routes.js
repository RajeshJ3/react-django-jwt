import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// Pages
import Login from "./pages/login";

function Routes(props) {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <h1>Signup</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
