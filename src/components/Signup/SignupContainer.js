import { connect } from 'react-redux'
import React, { Component } from 'react'

import { createUser, loginUser } from '../../actions/authentication'
import Signup from './Signup'

class SignupContainer extends Component {
  state = {
    email: '',
    password: ''
  }

  onInputChange = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.createUser({ ...this.state })
  }
  render() {
    return <Signup onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
  }
}

export default connect(
  null,
  { createUser }
)(SignupContainer)
