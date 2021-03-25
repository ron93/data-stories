import { Switch,Route } from "react-router-dom";

import {Stories} from "../Stories/Stories";
import {StoryItems} from "../Stories/StoryItems"
import './card.css'
export const Home = () => {
  
  // KEY used as mapped values unique identifier.

  return (
    <main>
      <div className="row container">
        {StoryItems.map((item, index) => {
          return (
            <div className="column card" key={index}>
            <div className="preview"></div>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </div>
          );
        })}
      </div>
      <Switch>
        <Route exact path="#" component={Stories}  />
        <Route exact path="#" component={Stories} />
      </Switch>

      
    </main>
  );
};
