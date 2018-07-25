import React from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import MatchesPageContainer from "./components/Matches/MatchesPageContainer";
import ProfileContainer from "./components/Profile/PersonalProfileContainer";
import SwipeContainer from "./components/Swipe/SwipeContainer";
import EditPreferencesContainer from './components/EditPreferences/EditPreferencesPageContainer'
import App from "./components/App/App";

export default () => {
    return(
        <BrowserRouter>
          <div>
            <Route exact path={'/'} component={App} />
            <Route exact path={'/matches'} component={MatchesPageContainer}/>
            <Route exact path={'/profile'} component={ProfileContainer}/>
            <Route exact path={'/swipe'} component={SwipeContainer}/>
            <Route exact path={'/edit-profile'} component={EditPreferencesContainer}/>
          </div>
        </BrowserRouter>
    )
}
