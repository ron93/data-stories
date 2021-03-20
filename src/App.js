import { Switch,Route } from "react-router-dom";
import "./index.css";

import {Home} from "./Components/Home";
import {NavBar} from "./Components/Navigation/NavBar";
import {Stories} from "./Components/Stories/Stories";


export const App = () => {
  
  // KEY used as mapped values unique identifier.

  return (
    <main>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home}  />
        <Route exact path="/stories" component={Stories} />
      </Switch>

      
    </main>
  );
};
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
