import { connect } from 'react-redux'
import React, { Component } from 'react'

import { fetchData, setUser } from '../../actions/authentication'
import firebase from '../../firebase/settings'

class Auth extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.replace('/signup')
        return
      }
      const isDataReady =
        this.props.matches && this.props.currentUser && this.props.users && this.props.preferences

      if (!isDataReady) {
        this.props.setUser(user.uid)
        this.props.fetchData()
      }
    })
  }
  render() {
    const Copmonent = this.props.component

    const isDataReady =
      this.props.matches && this.props.currentUser && this.props.users && this.props.preferences
    return (
      <div>
        {isDataReady ? (
          <Copmonent
            {...this.props}
            currentUserId={this.props.currentUser}
            users={this.props.users}
            matches={this.props.matches}
            preferences={this.props.preferences}
          />
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    matches: state.matches,
    currentUser: state.currentUser,
    users: state.users,
    preferences: state.preferences
  }
}

export default connect(
  mapStateToProps,
  { setUser, fetchData }
)(Auth)
