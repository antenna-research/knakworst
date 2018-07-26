import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MatchesPage from './MatchesPage'
import NavComponent from '../Nav/NavComponent'

class MatchesPageContainer extends PureComponent {
  render() {
    return (
      <div id={'MatchesPageContainer'}>
        <NavComponent />
        <MatchesPage matchedUsers={this.props.matchedUsers} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const currentUserId = state.currentUser
  const ids = state.matches[currentUserId].matches
  const matchedUsers = state.matches[currentUserId].matches.map((id, i) => {
    return {
      ...state.users[id],
      id: ids[i]
    }
  })
  return {
    matchedUsers
  }
}

export default connect(mapStateToProps)(MatchesPageContainer)
