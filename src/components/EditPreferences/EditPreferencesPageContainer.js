import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import EditPreferencesPage from './EditPreferencesPage'
import NavComponent from "../Nav/NavComponent";
import {updatePreferences} from '../../actions/updatePreferences'

class EditPreferencesPageContainer extends  PureComponent {

  sendNewPrefences = (newPreferences) => {
    console.log(this.props)
    console.log(this.props.currentUser, newPreferences)
    this.props.updatePreferences(this.props.currentUser, newPreferences)
  }

  render() {
    return (
      <div>
        <NavComponent />
        <EditPreferencesPage currentUser={this.props.currentUser} preferences={this.props.preferences} updatePreferences={updatePreferences} sendNewPrefences={this.sendNewPrefences}/> 
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updatePreferences: (newPreferences) => dispatch(updatePreferences(newPreferences))
//   }
// }

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    preferences: state.preferences
  }
}

export default connect(mapStateToProps, {updatePreferences})(EditPreferencesPageContainer)

//
