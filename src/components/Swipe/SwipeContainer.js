import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Swipe from './Swipe'
import {likeUser, dislikeUser} from '../../actions/swipe'
import NavComponent from "../Nav/NavComponent";

class SwipeContainer extends PureComponent {
  state = {
    currentCandidate: 0,
    viableCandidates: null
  }
  componentDidMount() {
    this.setState({
      currentCandidate: this.getUserCandidates()[0],
      viableCandidates: this.getUserCandidates(),
    })
  }

  //iterate over the length of the viableCandidates array and increment the index after each button action

  getUserCandidates = () => {
    return Object.keys(this.props.users)
      .map(user => user)
      .filter(userId => userId !== this.props.currentUser)
  }

  render() {
    return (
      <div id={'SwipeContainer'}>
        {console.log(this.props.currentUser)}
      <NavComponent/>
       {!this.props && 'Loading'}
        <Swipe profile={this.props.users} likeUser={this.props.likeUser} dislikeUser={this.props.dislikeUser} currentCandidate={this.state.currentCandidate}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps,{likeUser, dislikeUser})(SwipeContainer)

