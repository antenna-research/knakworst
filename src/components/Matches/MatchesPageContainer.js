import React, { PureComponent } from 'react'
import './styles/MatchesPageContainer.scss'
import { connect } from 'react-redux'
import MatchesPage from './MatchesPage'
import NavComponent from '../Nav/NavComponent'

class MatchesPageContainer extends PureComponent {
  render() {
    return (
      <div id={'MatchesPageContainer'}>
        <NavComponent />
        {this.props.ids.length ? (
          <MatchesPage matchedUsers={this.props.matchedUsers} />
        ) : (
          <div id="MatchesPageContainer-NoMatches">
            <h1>You've not matched with any musicians 😭</h1>
            <p>Click on the 🎵 to keep swiping</p>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const currentUserId = state.currentUser
  const ids = state.matches[currentUserId].matches
  const matchedUsers = state.matches[currentUserId].matches
    ? state.matches[currentUserId].matches.map((id, i) => {
        return {
          ...state.users[id],
          id: ids[i]
        }
      })
    : []
  return {
    matchedUsers,
    ids: ids
  }
}

export default connect(mapStateToProps)(MatchesPageContainer)
