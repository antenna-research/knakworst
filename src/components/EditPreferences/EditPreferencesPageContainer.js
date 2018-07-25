import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import EditPreferencesPage from './EditPreferencesPage'
import NavComponent from "../Nav/NavComponent";

class EditPreferencesPageContainer extends  PureComponent {

  render() {
    return (
      <div>
        <NavComponent />
        Edit Preferences Page Container!
        <EditPreferencesPage currentUser={this.props.currentUser} preferences={this.props.preferences}/> 
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

export default connect(mapStateToProps)(EditPreferencesPageContainer)