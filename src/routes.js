import React from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import MatchesPageContainer from "./components/Matches/MatchesPageContainer";
import LandingPageContainer from "./components/Landing/LandingPageContainer";

export default () => {
    return(
        <BrowserRouter>
          <div>
            <Route exact path={'/'} component={LandingPageContainer} />
            <Route exact path={'/matches'} component={MatchesPageContainer}/>
          </div>
        </BrowserRouter>
    )
}
