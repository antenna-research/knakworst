import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MatchesPageContainer from './components/Matches/MatchesPageContainer'
import ProfileContainer from './components/Profile/PersonalProfileContainer'
import SwipeContainer from './components/Swipe/SwipeContainer'
<<<<<<< HEAD
// import ProfileSetup from './components/Profile/ProfileSetup'
=======
import ProfileSetup from './components/Profile/ProfileSetup'
>>>>>>> bc043277622fd6c219ee75f5d81c5c7de9041c3d
import EditPreferencesContainer from './components/EditPreferences/EditPreferencesPageContainer'
import App from './components/App/App'

export default () => {
<<<<<<< HEAD
 return (
   <BrowserRouter>
     <div>
       <Route exact path={'/'} component={App} />
       <Route exact path={'/matches'} component={MatchesPageContainer} />
       <Route exact path={'/profile/:id'} component={ProfileContainer} />
       <Route exact path={'/swipe'} component={SwipeContainer} />
       {/* <Route exact path={'/profile/edit/'} component={ProfileSetup}/> */}
       <Route exact path={'/preferences'} component={EditPreferencesContainer} />
     </div>
   </BrowserRouter>
 )
=======
  return (
    <BrowserRouter>
      <div>
        <Route exact path={'/'} component={App} />
        <Route exact path={'/matches'} component={MatchesPageContainer} />
        <Route exact path={'/profile/:id'} component={ProfileContainer} />
        <Route exact path={'/swipe'} component={SwipeContainer} />
        <Route exact path={'/profile/edit/1'} component={ProfileSetup}/>
        <Route exact path={'/edit-profile'} component={EditPreferencesContainer} />
      </div>
    </BrowserRouter>
  )
>>>>>>> bc043277622fd6c219ee75f5d81c5c7de9041c3d
}