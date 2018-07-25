import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Swipe from './Swipe'
import {likeUser, dislikeUser} from '../../actions/swipe'
import NavComponent from "../Nav/NavComponent";
import getSwipeQueue from "../../lib/getSwipeQueue";

class SwipeContainer extends PureComponent {
  state = {
    viableCandidates: getSwipeQueue(this.props.currentUserId, this.props.users, this.props.preferences, this.props.matches),
  }
  componentDidMount() {
    this.setState({
      currentCandidateId: this.state.viableCandidates[0],
    })
  }

  // Increment the index after each button action
  getNextCandidate = () => {
    const viableCandidates = this.state.viableCandidates
    viableCandidates.shift()
    this.setState({
      currentCandidateId: viableCandidates[0]
    })
    if (viableCandidates.length === 0){
      return (<h1>No more Musicians in your area! 😭</h1>)}
  }

  // Handles onClick for like and dislike

  setLikeUser = (currentUser, currentCandidate) => {
    this.props.likeUser(currentUser, currentCandidate)
    this.getNextCandidate()
  }

  setDislikeUser = (currentUser, currentCandidate) => {
    this.props.dislikeUser(currentUser, currentCandidate)
    this.getNextCandidate()
  }

  getUserCandidates = () => {
    return Object.keys(this.props.users)
      .map(user => user)
      .filter(userId => userId !== this.props.currentUserId)
  }

  render() {
    return (
      <div id={'SwipeContainer'}>
      <NavComponent/>
        {this.props.viableCandidates && 'Loading'}
        {this.state.viableCandidates.length ? (
          <Swipe currentUserId={this.props.currentUserId} profile={this.props.users} currentCandidateId={this.state.currentCandidateId} setLikeUser={this.setLikeUser} setDislikeUser={this.setDislikeUser}/>
        ): (
          <h1>No more Musicians match your filter! 😭</h1>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    currentUserId: state.currentUser,
    matches: state.matches,
    preferences: state.preferences
  }
}

export default connect(mapStateToProps,{likeUser, dislikeUser})(SwipeContainer)

