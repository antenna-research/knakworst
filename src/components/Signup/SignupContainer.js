import { connect } from 'react-redux'
import React, { Component } from 'react'

import { createUser, loginUser } from '../../actions/authentication'
import Signup from './Signup'

class SignupContainer extends Component {
  state = {
    email: '',
    password: ''
    // loading: false
  }

  onInputChange = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  componentDidUpdate(prevState) {
    if (this.props.currentUser !== prevState.currentUser) {
      // this.props.history.replace(`/profile/${this.props.currentUser}`)
      this.props.history.replace('/')
    }
  }
  onCreateUser = e => {
    this.props.createUser({ ...this.state })
  }
  onLogin = e => {
    this.props.loginUser()
    this.props.history.push('/swipe')
  }

  render() {
    return (
      <Signup
        onInputChange={this.onInputChange}
        onCreateUser={this.onCreateUser}
        onLogin={this.onLogin}
      />
    )
  }
}
const mapStateToProps = state => ({
  currentUser: state.currentUser
})
export default connect(
  mapStateToProps,
  { createUser, loginUser }
)(SignupContainer)
