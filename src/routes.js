import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'

import App from './components/App/App'
import EditPreferencesContainer from './components/EditPreferences/EditPreferencesPageContainer'
import MatchesPageContainer from './components/Matches/MatchesPageContainer'
import ProfileContainer from './components/Profile/PersonalProfileContainer'
import ProfileSetup from './components/Profile/ProfileSetup'
import SignupContainer from './components/Signup/SignupContainer'

import SwipeContainer from './components/Swipe/SwipeContainer'

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path={'/'} component={App} />
        <Route exact path={'/matches'} component={MatchesPageContainer} />
        <Route exact path={'/profile/:id'} component={ProfileContainer} />
        <Route exact path={'/swipe'} component={SwipeContainer} />
        <Route exact path={'/profile/edit/:id'} component={ProfileSetup} />
        <Route exact path={'/preferences'} component={EditPreferencesContainer} />
        <Route exact path={'/signup'} component={SignupContainer} />
        {/* <Route exact path={'/loading/new-user'} component={SignupToProfile} /> */}
      </div>
    </BrowserRouter>
  )
}
