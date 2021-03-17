import { Switch,Route } from "react-router-dom";

import {StoryList} from "./StoryList";
import {Stories} from "./Stories";


export const Home = () => {
  
  // KEY used as mapped values unique identifier.

  return (
    <main>
      <StoryList />
      <Switch>
        <Route exact path="#" component={Stories}  />
        <Route exact path="#" component={Stories} />
      </Switch>

      
    </main>
  );
};
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
