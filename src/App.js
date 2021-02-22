import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/Sub";

function App() {
  return (
    <>
      <div>
        <h2>
          <Link to="/">메인</Link>
          <Link to="/sub">서브</Link>
        </h2>
      </div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/sub" component={Sub} />
      </Switch>
    </>
  );
}

export default App;
