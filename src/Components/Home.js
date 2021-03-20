import { Switch,Route } from "react-router-dom";

import {Stories} from "./Stories/Stories";
import {StoryItems} from "./Stories/StoryItems"

export const Home = () => {
  
  // KEY used as mapped values unique identifier.

  return (
    <main>
      <ul>
        {StoryItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Switch>
        <Route exact path="#" component={Stories}  />
        <Route exact path="#" component={Stories} />
      </Switch>

      
    </main>
  );
};
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
