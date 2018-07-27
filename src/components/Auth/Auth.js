import { connect } from 'react-redux'
import React, { Component } from 'react'

import { fetchData, setUser } from '../../actions/authentication'
import firebase from '../../firebase/settings'

class Auth extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.setUser(user.uid)
      this.props.fetchData()
    })
  }
  render() {
    const Copmonent = this.props.component

    const isDataReady =
      this.props.matches && this.props.currentUser && this.props.users && this.props.preferences
    console.log('ready?', isDataReady)
    return <div>{isDataReady ? <Copmonent /> : null}</div>
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
