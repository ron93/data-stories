import { Switch,Route } from "react-router-dom";
import "./index.css";

import {Home} from "./Components/Main/Home";
import {NavBar} from "./Components/Navigation/NavBar";
import {Stories} from "./Components/Stories/PopulationBarGraph";


export const App = () => {
  
  // KEY used as mapped values unique identifier.

  return (
    <main>
      <NavBar />
      <Switch>
        <Route exact path="/" 
        component={Home}  />
        <Route exact path="/stories" 
        component={Stories} />
      </Switch>

      
    </main>
  );
};
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
