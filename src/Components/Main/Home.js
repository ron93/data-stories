import { Switch,Route ,Link} from "react-router-dom";

import {Stories} from "../Stories/PopulationBarGraph";
import {StoryItems} from "./StoryItems"
import './card.css'
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';


export const Home = () => {
  
  // KEY used as mapped values unique identifier.

  return (
    <main>
      <div className="row container">
        {StoryItems.map((item, index) => {
          return (
            <div className="column card" key={index}>
            <div className="preview"></div>
            <div className="info">
            {/* changed a to link to fix issue in deployed site */}
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
              <p className="tech">Developed using {item.tech}</p>
              </div>
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
