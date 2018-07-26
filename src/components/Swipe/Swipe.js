import React from 'react'
import './styles/Swipe.scss'
import ProfileCard from '../Profile/ProfileCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swipeable from 'react-swipeable'

export default function swipe(props) {
  const currentCandidate = props.profile[props.currentCandidateId]
  if (!currentCandidate) return 'Loading'
  return (
    <Swipeable
      onSwiping={props.swiping}
      onSwipedLeft={() => props.setDislikeUser(props.currentUserId, props.currentCandidateId)}
      onSwipedRight={() => props.setLikeUser(props.currentUserId, props.currentCandidateId)}
    >
      <div id={'swipe'}>
        {!props.currentUserId && !props.currentCandidateId && 'Loading'}
        <ProfileCard profile={currentCandidate} />
        <div id={'swipe-button-div'}>
          <button
            className={'swipe-button'}
            onClick={() => props.setDislikeUser(props.currentUserId, props.currentCandidateId)}
          >
            <FontAwesomeIcon icon={'times-circle'} size="2x" />
          </button>
          <button
            className={'swipe-button'}
            onClick={() => props.setLikeUser(props.currentUserId, props.currentCandidateId)}
          >
            <FontAwesomeIcon icon={'heart'} size="2x" />
          </button>
        </div>
      </div>
    </Swipeable>
  )
}
