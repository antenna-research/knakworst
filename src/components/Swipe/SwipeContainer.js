import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { likeUser, dislikeUser } from '../../actions/swipe'
import './styles/SwipeContainer.scss'
import Swipe from './Swipe'
import getSwipeQueue from '../../lib/getSwipeQueue'
import NavComponent from '../Nav/NavComponent'
import NotificationSystem from 'react-notification-system'

class SwipeContainer extends PureComponent {
  state = {
    viableCandidates: getSwipeQueue(
      this.props.currentUserId,
      this.props.users,
      this.props.preferences,
      this.props.matches
    ),
    currentCandidateId: null
  }

  _matches = []
  _notificationSystem = null

  _addNotification = message => {
    this._notificationSystem.addNotification({
      message,
      level: 'success'
    })
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem

    this._matches = this.props.matches[this.props.currentUserId].matches
      ? this.props.matches[this.props.currentUserId].matches
      : []

    this.setState({
      currentCandidateId: this.state.viableCandidates[0]
    })
  }

  componentDidUpdate = () => {
    const updatedMatch = this.props.matches[this.props.currentUserId].matches || []
    const lastUserId = updatedMatch[updatedMatch.length - 1]

    const isMatch = !this._matches.includes(lastUserId)

    if (isMatch && lastUserId) {
      this._addNotification(`New Match!: ${this.props.users[lastUserId].username} `)
    }
    this._matches = updatedMatch
  }

  // Increment the index after each button action
  getNextCandidate = () => {
    const viableCandidates = this.state.viableCandidates
    viableCandidates.shift()
    this.setState({
      currentCandidateId: viableCandidates[0]
    })
    if (viableCandidates.length === 0) {
      return <h1>No more Musicians in your area! 😭</h1>
    }
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
        <NavComponent />
        <NotificationSystem ref="notificationSystem" />
        {this.props.viableCandidates && 'Loading'}
        {this.state.viableCandidates.length ? (
          <Swipe
            currentUserId={this.props.currentUserId}
            profile={this.props.users}
            currentCandidateId={this.state.currentCandidateId}
            setLikeUser={this.setLikeUser}
            setDislikeUser={this.setDislikeUser}
            swiping={this.swiping}
            swipedLeft={this.swipedLeft}
            swipedRight={this.swipedRight}
          />
        ) : (
          <h1>No more Musicians match your filter! 😭</h1>
        )}
      </div>
    )
  }
}

export default connect(
  null,
  { likeUser, dislikeUser }
)(SwipeContainer)
