import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import GarbageList from "./components/GarbageList";
import Signup from "./components/SignUpForm";
import Signin from "./components/SignInForm";
import NavBar from "./components/NavBar";
import TreasureList from "./components/TreasureList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/treasures">
          <TreasureList />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/garbage">
          <GarbageList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
