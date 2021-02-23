import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/treasures">
          <TreasureList />
        </Route>
        <Route path="/garbage">
          <GarbageList />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
