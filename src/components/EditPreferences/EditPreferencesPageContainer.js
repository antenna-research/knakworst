import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import EditPreferencesPage from './EditPreferencesPage'
import NavComponent from "../Nav/NavComponent";
import {updatePreferences} from '../../actions/updatePreferences'

class EditPreferencesPageContainer extends  PureComponent {

  sendNewPreferences = (newPreferences) => {
    this.props.updatePreferences(this.props.currentUser, newPreferences)
  }

  render() {
    return (
      <div>
        <NavComponent />
        <EditPreferencesPage currentUser={this.props.currentUser} preferences={this.props.preferences} updatePreferences={updatePreferences} sendNewPreferences={this.sendNewPreferences}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    preferences: state.preferences
  }
}

export default connect(mapStateToProps, {updatePreferences})(EditPreferencesPageContainer)